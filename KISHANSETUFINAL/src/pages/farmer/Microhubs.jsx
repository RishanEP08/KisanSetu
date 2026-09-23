import { MapPin, Clock, Star } from 'lucide-react';
import { microhubs } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

export default function FarmerMicrohubs() {
  const { addToast } = useApp();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Nearby Microhubs</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {microhubs.map(h => (
          <div key={h.id} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">{h.name}</h3>
              <span className="flex items-center gap-1 text-sm text-amber-600"><Star className="w-4 h-4 fill-amber-400" />{h.rating}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" />{h.address}</p>
            <p className="text-sm text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" />{h.operatingHours}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {h.acceptedCrops.map(c => (
                <span key={c} className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">{c}</span>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-gray-500">{h.distance} · Capacity: {h.capacity}</span>
              <button onClick={() => addToast(`Selected ${h.name}`, 'success')} className="px-3 py-1.5 bg-green-700 text-white text-xs font-medium rounded-lg hover:bg-green-800">
                Send Crop Here
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 h-64 flex items-center justify-center text-gray-400">
        <div className="text-center">
          <MapPin className="w-10 h-10 mx-auto mb-2" />
          <p className="text-sm">Map view of microhub locations</p>
          <p className="text-xs">(Leaflet integration ready)</p>
        </div>
      </div>
    </div>
  );
}
