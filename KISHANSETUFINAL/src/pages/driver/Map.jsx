import { MapPin } from 'lucide-react';

export default function DriverMap() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Map</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border h-96 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <MapPin className="w-12 h-12 mx-auto mb-2" />
          <p>Leaflet Map: Driver · Farmer · Microhub · Consumer</p>
          <p className="text-xs mt-1">Route visualization ready for integration</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {['Driver (You)', 'Farmer Pickup', 'Microhub', 'Consumer'].map((l, i) => (
          <div key={l} className="bg-white dark:bg-gray-800 rounded-xl border p-3 text-center text-sm">
            <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${['bg-blue-500','bg-green-500','bg-amber-500','bg-red-500'][i]}`} />
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
