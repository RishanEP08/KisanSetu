import StatusBadge from '../../components/StatusBadge';
import { useApp } from '../../context/AppContext';

export default function DriverPickups() {
  const { pickups, acceptPickup, rejectPickup } = useApp();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pickup Requests</h1>
      <div className="space-y-3">
        {pickups.map(p => (
          <div key={p.id} className="bg-white dark:bg-gray-800 rounded-2xl border p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{p.id}</span>
                  <StatusBadge status={p.status} />
                </div>
                <p className="text-sm text-gray-600 mt-1">{p.crop} · {p.quantity}kg from {p.farmer}</p>
                <p className="text-xs text-gray-400">{p.pickupLocation} → {p.microhub} ({p.distance})</p>
              </div>
              {p.status === 'Pending' && (
                <div className="flex gap-2">
                  <button onClick={() => acceptPickup(p.id)} className="px-3 py-1.5 bg-green-700 text-white text-xs rounded-lg font-medium">Accept</button>
                  <button onClick={() => rejectPickup(p.id)} className="px-3 py-1.5 border text-xs rounded-lg">Reject</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
