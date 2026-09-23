import { useParams } from 'react-router-dom';
import { CheckCircle, Circle, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const timeline = [
  { label: 'Order Placed', done: true },
  { label: 'Farmer Confirmed', done: true },
  { label: 'Picked Up', done: true },
  { label: 'Arrived at Microhub', done: true },
  { label: 'Out for Delivery', done: true },
  { label: 'Delivered', done: false },
];

export default function BuyerTrack() {
  const { id } = useParams();
  const { orders } = useApp();
  const order = orders.find(o => o.id === id) || orders[0];

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Track Order {order?.id}</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border p-5">
        <div className="grid grid-cols-2 gap-3 text-sm mb-6">
          <div><p className="text-gray-500">Crop</p><p className="font-medium">{order?.crop}</p></div>
          <div><p className="text-gray-500">Quantity</p><p className="font-medium">{order?.quantity}kg</p></div>
          <div><p className="text-gray-500">Driver</p><p className="font-medium">{order?.driver || 'Rajesh Kumar'}</p></div>
          <div><p className="text-gray-500">ETA</p><p className="font-medium">{order?.eta || '2 hours'}</p></div>
        </div>
        <div className="space-y-4">
          {timeline.map((t, i) => (
            <div key={t.label} className="flex items-center gap-3">
              {t.done ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Circle className="w-5 h-5 text-gray-300" />}
              <span className={`text-sm ${t.done ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>{t.label}</span>
              {i === 4 && <span className="ml-auto text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full animate-pulse">LIVE</span>}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
          <p className="text-sm font-medium">Driver: Rajesh Kumar</p>
          <p className="text-xs text-gray-500">Pickup Truck · WB-26-AB-1234 · ★ 4.6</p>
          <div className="flex gap-2 mt-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-green-700 text-white text-xs rounded-lg"><Phone className="w-3 h-3" /> Call Driver</button>
            <button className="px-3 py-1.5 border text-xs rounded-lg">Contact Support</button>
          </div>
        </div>
        <div className="mt-4 h-40 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 text-sm">
          Map: Farmer → Microhub → Driver → Buyer
        </div>
      </div>
    </div>
  );
}
