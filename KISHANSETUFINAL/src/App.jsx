import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Farmer
import FarmerDashboard from './pages/farmer/Dashboard';
import FarmerCrops from './pages/farmer/Crops';
import FarmerAI from './pages/farmer/AIAnalysis';
import FarmerMarket from './pages/farmer/MarketDemand';
import FarmerWeather from './pages/farmer/Weather';
import FarmerShipments from './pages/farmer/Shipments';
import FarmerMicrohubs from './pages/farmer/Microhubs';
import FarmerOrders from './pages/farmer/Orders';
import FarmerProfile from './pages/farmer/Profile';
import FarmerSettings from './pages/farmer/Settings';

// Buyer
import BuyerDashboard from './pages/buyer/Dashboard';
import BuyerMarketplace from './pages/buyer/Marketplace';
import BuyerCropDetail from './pages/buyer/CropDetail';
import BuyerCart from './pages/buyer/Cart';
import BuyerCheckout from './pages/buyer/Checkout';
import BuyerOrders from './pages/buyer/Orders';
import BuyerTrack from './pages/buyer/Track';
import BuyerLocations from './pages/buyer/Locations';
import BuyerProfile from './pages/buyer/Profile';
import BuyerSettings from './pages/buyer/Settings';

// Driver
import DriverDashboard from './pages/driver/Dashboard';
import DriverPickups from './pages/driver/Pickups';
import DriverDeliveries from './pages/driver/Deliveries';
import DriverMap from './pages/driver/Map';
import DriverTracking from './pages/driver/Tracking';
import DriverHistory from './pages/driver/History';
import DriverEarnings from './pages/driver/Earnings';
import DriverRatings from './pages/driver/Ratings';
import DriverPass from './pages/driver/Pass';
import DriverProfile from './pages/driver/Profile';
import DriverSettings from './pages/driver/Settings';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Farmer Routes */}
      <Route path="/farmer" element={<DashboardLayout />}>
        <Route index element={<FarmerDashboard />} />
        <Route path="crops" element={<FarmerCrops />} />
        <Route path="ai-analysis" element={<FarmerAI />} />
        <Route path="market-demand" element={<FarmerMarket />} />
        <Route path="weather" element={<FarmerWeather />} />
        <Route path="shipments" element={<FarmerShipments />} />
        <Route path="microhubs" element={<FarmerMicrohubs />} />
        <Route path="orders" element={<FarmerOrders />} />
        <Route path="profile" element={<FarmerProfile />} />
        <Route path="settings" element={<FarmerSettings />} />
      </Route>

      {/* Buyer Routes */}
      <Route path="/buyer" element={<DashboardLayout />}>
        <Route index element={<BuyerDashboard />} />
        <Route path="marketplace" element={<BuyerMarketplace />} />
        <Route path="crop/:id" element={<BuyerCropDetail />} />
        <Route path="cart" element={<BuyerCart />} />
        <Route path="checkout" element={<BuyerCheckout />} />
        <Route path="orders" element={<BuyerOrders />} />
        <Route path="track/:id" element={<BuyerTrack />} />
        <Route path="locations" element={<BuyerLocations />} />
        <Route path="profile" element={<BuyerProfile />} />
        <Route path="settings" element={<BuyerSettings />} />
      </Route>

      {/* Driver Routes */}
      <Route path="/driver" element={<DashboardLayout />}>
        <Route index element={<DriverDashboard />} />
        <Route path="pickups" element={<DriverPickups />} />
        <Route path="deliveries" element={<DriverDeliveries />} />
        <Route path="map" element={<DriverMap />} />
        <Route path="tracking" element={<DriverTracking />} />
        <Route path="history" element={<DriverHistory />} />
        <Route path="earnings" element={<DriverEarnings />} />
        <Route path="ratings" element={<DriverRatings />} />
        <Route path="pass" element={<DriverPass />} />
        <Route path="profile" element={<DriverProfile />} />
        <Route path="settings" element={<DriverSettings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
