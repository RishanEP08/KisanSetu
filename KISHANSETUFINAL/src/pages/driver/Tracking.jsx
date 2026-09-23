import { useState, useEffect } from 'react';
import { Navigation } from 'lucide-react';

export default function DriverTracking() {
  const [progress, setProgress] = useState(35);
  const [eta, setEta] = useState(28);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress(p => Math.min(100, p + 1));
      setEta(e => Math.max(0, e - 0.3));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Live Tracking</h1>
        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full animate-pulse">LIVE</span>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Destination</p>
            <p className="font-medium">12 Park Street, Kolkata</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">ETA</p>
            <p className="font-bold text-green-700">{Math.round(eta)} min</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span><span>{progress}%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-600 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Navigation className="w-8 h-8 mx-auto mb-1" />
            <p className="text-sm">Simulated truck movement</p>
            <p className="text-xs">Distance remaining: {(12 * (100 - progress) / 100).toFixed(1)} km</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">Status: Out for Delivery · Shipment SH001</p>
      </div>
    </div>
  );
}
