# KishanSetu

**Connecting Farmers, Markets and Consumers.**

KishanSetu is a modern Indian AgriTech platform frontend that connects the entire agricultural value chain:

🌾 Farmer → 🤖 AI Crop Analysis → 📈 Market Demand → 🏪 Microhub → 🚚 Driver → 🛒 Buyer → 🏠 Consumer

## Features

- **Landing Page** with hero, flow visualization, features, roles, and CTA
- **Role-based Auth** (Frontend-only demo login/register)
- **Farmer Dashboard**: Crops, AI Analysis, Market Demand, Weather, Shipments, Microhubs, Orders
- **Buyer Dashboard**: Marketplace, Cart, Checkout, Order Tracking, Crop Locations
- **Driver Dashboard**: Pickups, Deliveries, Map, Live Tracking, Earnings, Ratings, Digital Pass
- **Demo Role Switcher** for easy hackathon demonstration
- **Responsive** design (mobile-first with hamburger sidebar)
- **Light/Dark theme**
- **Mock data** with realistic West Bengal agriculture context
- **localStorage** persistence for cart, crops, orders, shipments

## User Roles

| Role | Capabilities |
|------|-------------|
| Farmer | Upload crops, AI analysis, market insights, weather, send to microhubs, track shipments |
| Buyer | Browse marketplace, cart, checkout, track orders, view district crop data |
| Driver | Accept pickups, manage deliveries, live tracking, earnings, digital pass |

## Tech Stack

- React 19 + Vite
- React Router DOM
- Tailwind CSS v4
- Lucide React (icons)
- Recharts (charts)
- Leaflet / React-Leaflet (map-ready)
- localStorage for state persistence

## Installation

```bash
cd kishansetu
npm install
npm run dev
```

Open http://localhost:5173

## Folder Structure

```
src/
  components/     # Reusable UI (StatCard, CropCard, Modal, Toast, etc.)
  pages/
    auth/         # Login, Register, ForgotPassword
    farmer/       # All farmer pages
    buyer/        # All buyer pages
    driver/       # All driver pages
    Landing.jsx
  layouts/        # DashboardLayout with sidebar
  context/        # AppContext (global state)
  data/           # mockData.js
  hooks/
  utils/
  assets/
```

## Mock Data

Realistic data for West Bengal districts (Nadia, Hooghly, Burdwan, Howrah, Kolkata, etc.):
- Crops: Tomato, Potato, Rice, Onion, Wheat, Maize, Mustard, Jute
- Farmers, Buyers, Drivers, Microhubs, Orders, Shipments, Weather, Market Demand

## Demo Credentials

Use the **Quick Demo Login** buttons on the Login page, or the **DEMO role switcher** in the topbar after login.

- Farmer: Ramesh Mondal
- Buyer: Priya Sharma
- Driver: Rajesh Kumar

## Future Backend Integration

All state is managed via React Context + localStorage. Replace with API calls:

- Auth → JWT / session endpoints
- Crops / Orders / Shipments → REST or GraphQL
- AI Analysis → ML inference API
- Weather → OpenWeatherMap or IMD API
- Maps → Live GPS via WebSocket
- Payments → Razorpay / UPI gateway

## License

Built for educational / hackathon demonstration purposes.
