import { districts } from '../../data/mockData';
import { AlertTriangle, TrendingUp } from 'lucide-react';

export default function BuyerLocations() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Crop Locations</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {districts.map(d => (
          <div key={d.name} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5">
            <h3 className="font-semibold text-gray-900 dark:text-white">{d.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Crops: {d.crops.join(', ')}</p>
            <p className="text-lg font-bold text-green-700 mt-2">Avg ₹{d.avgPrice}/kg</p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">Demand: {d.demand}</span>
              <span className="text-xs px-2 py-0.5 bg-cyan-50 text-cyan-700 rounded-full">Rain: {d.rainfall}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl text-sm text-amber-800">
          <TrendingUp className="w-4 h-4" /> Tomato prices increased 8% in Nadia.
        </div>
        <div className="flex items-center gap-2 p-3 bg-red-50 rounded-xl text-sm text-red-800">
          <AlertTriangle className="w-4 h-4" /> Heavy rainfall may reduce potato supply.
        </div>
        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl text-sm text-green-800">
          <TrendingUp className="w-4 h-4" /> Rice availability expected to increase next week.
        </div>
      </div>
    </div>
  );
}
