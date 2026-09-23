import StatusBadge from '../../components/StatusBadge';
import { useApp } from '../../context/AppContext';

export default function FarmerOrders() {
  const { orders } = useApp();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order History</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700 text-left">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Crop</th>
                <th className="px-4 py-3">Buyer</th>
                <th className="px-4 py-3">Qty</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {orders.map(o => (
                <tr key={o.id}>
                  <td className="px-4 py-3 font-medium">{o.id}</td>
                  <td className="px-4 py-3">{o.crop}</td>
                  <td className="px-4 py-3">{o.buyer}</td>
                  <td className="px-4 py-3">{o.quantity}kg</td>
                  <td className="px-4 py-3">₹{o.amount}</td>
                  <td className="px-4 py-3">{o.date}</td>
                  <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
