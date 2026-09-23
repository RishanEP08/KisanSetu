import { Link } from 'react-router-dom';
import StatusBadge from '../../components/StatusBadge';
import { useApp } from '../../context/AppContext';

export default function BuyerOrders() {
  const { orders } = useApp();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Orders</h1>
      <div className="space-y-3">
        {orders.map(o => (
          <div key={o.id} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{o.id}</span>
                <StatusBadge status={o.status} />
              </div>
              <p className="text-sm text-gray-500 mt-1">{o.crop} · {o.quantity}kg · ₹{o.amount}</p>
              <p className="text-xs text-gray-400">{o.date} · Farmer: {o.farmer}</p>
            </div>
            {o.status !== 'Delivered' && (
              <Link to={`/buyer/track/${o.id}`} className="px-4 py-2 bg-green-50 text-green-700 rounded-xl text-sm font-medium hover:bg-green-100 text-center">
                Track Order
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
