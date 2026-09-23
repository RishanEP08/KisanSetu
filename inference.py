
import json
import re
import os
from pathlib import Path

from dotenv import load_dotenv

from ultralytics import YOLO
from google import genai
from google.genai import types


# --------------------------------------------------
# Paths
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "models" / "best.pt"


# --------------------------------------------------
# Gemini
# --------------------------------------------------

load_dotenv()

GEMINI_MODEL = "gemini-3.5-flash-lite"

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise RuntimeError(
        "GEMINI_API_KEY is not set. "
        "Create a .env file or set the environment variable."
    )

client = genai.Client(api_key=api_key)


# --------------------------------------------------
# YOLO
# --------------------------------------------------

model = YOLO(str(MODEL_PATH))


# --------------------------------------------------
# JSON helper
# --------------------------------------------------

def clean_json(text):
    """
    Extract JSON from Gemini's response.
    Handles responses wrapped in ```json ... ```.
    """

    text = text.strip()

    text = re.sub(
        r"^```json\s*",
        "",
        text,
        flags=re.IGNORECASE
    )

    text = re.sub(
        r"^```\s*",
        "",
        text
    )

    text = re.sub(
        r"\s*```$",
        "",
        text
    )

    return json.loads(text.strip())


# --------------------------------------------------
# Freshness assessment
# --------------------------------------------------

def assess_freshness(crop, vegetable):
    """
    Send one detected vegetable crop to Gemini
    for visual freshness assessment.
    """

    prompt = f"""
You are a produce quality assessment assistant.

The detected vegetable is: {vegetable}

Visually inspect the provided image and determine whether
the vegetable appears fresh or not fresh.

Look for visible signs such as:
- discoloration
- mold
- severe bruising
- shriveling
- decay
- excessive dark spots
- obvious physical deterioration

Return ONLY valid JSON in this exact format:

{{
    "freshness": "fresh" or "not_fresh",
    "confidence": 0.0,
    "reason": "short visual explanation"
}}

Do not include markdown or code fences.
This is a visual quality assessment, not a microbiological
food-safety determination.
"""

    response = client.models.generate_content(
        model=GEMINI_MODEL,
        contents=[
            types.Part.from_bytes(
                data=crop,
                mime_type="image/jpeg"
            ),
            prompt
        ]
    )

    return clean_json(response.text)


# --------------------------------------------------
# Complete produce analysis
# --------------------------------------------------

def analyze_produce(image_path, yolo_conf=0.25):
    """
    Complete KisanSetu AI pipeline:

    Image
       ↓
    YOLO detection
       ↓
    Crop detected vegetables
       ↓
    Gemini freshness assessment
       ↓
    ACCEPT / REVIEW
    """

    image_path = str(image_path)

    results = model.predict(
        source=image_path,
        conf=yolo_conf,
        verbose=False
    )

    result = results[0]

    detections = []

    if result.boxes is None or len(result.boxes) == 0:
        return {
            "status": "NO_PRODUCE_DETECTED",
            "total_detected": 0,
            "fresh": 0,
            "not_fresh": 0,
            "detections": []
        }

    image = result.orig_img

    for i, box in enumerate(result.boxes):

        x1, y1, x2, y2 = map(
            int,
            box.xyxy[0].tolist()
        )

        crop = image[y1:y2, x1:x2]

        if crop.size == 0:
            continue

        # Convert OpenCV BGR → JPEG bytes
        import cv2

        success, encoded = cv2.imencode(
            ".jpg",
            crop
        )

        if not success:
            continue

        crop_bytes = encoded.tobytes()

        class_id = int(box.cls[0])
        vegetable = model.names[class_id]

        yolo_confidence = float(box.conf[0])

        freshness = assess_freshness(
            crop_bytes,
            vegetable
        )

        detections.append({
            "detection_id": i + 1,
            "vegetable": vegetable,
            "yolo_confidence": round(
                yolo_confidence,
                3
            ),
            "freshness": freshness
        })

    fresh_count = sum(
        d["freshness"]["freshness"] == "fresh"
        for d in detections
    )

    not_fresh_count = sum(
        d["freshness"]["freshness"] == "not_fresh"
        for d in detections
    )

    if len(detections) == 0:

        status = "NO_PRODUCE_DETECTED"

    elif not_fresh_count > 0:

        status = "REVIEW"

    else:

        status = "ACCEPT"

    return {
        "status": status,
        "total_detected": len(detections),
        "fresh": fresh_count,
        "not_fresh": not_fresh_count,
        "detections": detections
    }
