import { useState } from 'react';
import { Upload, Brain, Loader2 } from 'lucide-react';

export default function FarmerAI() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (f) {
      setImage(f);
      setPreview(URL.createObjectURL(f));
      setResult(null);
    }
  };

  const analyze = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        crop: 'Tomato',
        quality: 'Good',
        condition: 'Healthy',
        demand: 'High',
        suggestedPrice: '₹42–₹48/kg',
        issues: 'Minor water stress',
        recommendation: 'Suitable for marketplace listing',
        microhub: 'Microhub 02'
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Crop Analysis</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6">
        <div
          className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center cursor-pointer hover:border-green-400 transition"
          onClick={() => document.getElementById('crop-img').click()}
        >
          {preview ? (
            <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
          ) : (
            <>
              <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600">Drag & drop or click to upload crop image</p>
            </>
          )}
          <input id="crop-img" type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </div>
        {preview && !result && (
          <button onClick={analyze} disabled={loading} className="mt-4 w-full py-3 bg-green-700 text-white rounded-xl font-medium hover:bg-green-800 disabled:opacity-60 flex items-center justify-center gap-2">
            {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing...</> : <><Brain className="w-5 h-5" /> Analyze with AI</>}
          </button>
        )}
        {result && (
          <div className="mt-6 space-y-3">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2"><Brain className="w-5 h-5 text-purple-600" /> AI Analysis Result</h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(result).map(([k, v]) => (
                <div key={k} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                  <p className="text-xs text-gray-500 capitalize">{k.replace(/([A-Z])/g, ' $1')}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{v}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
