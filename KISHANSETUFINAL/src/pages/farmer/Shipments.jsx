import StatusBadge from '../../components/StatusBadge';
import { useApp } from '../../context/AppContext';

const statuses = ['Pending', 'Approved', 'Picked Up', 'At Microhub', 'In Transit', 'Delivered'];

export default function FarmerShipments() {
  const { shipments, updateShipmentStatus } = useApp();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Shipments</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Crop</th>
                <th className="px-4 py-3 font-medium">Qty</th>
                <th className="px-4 py-3 font-medium">Microhub</th>
                <th className="px-4 py-3 font-medium">Driver</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {shipments.map(s => (
                <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-4 py-3 font-medium">{s.id}</td>
                  <td className="px-4 py-3">{s.crop}</td>
                  <td className="px-4 py-3">{s.quantity}kg</td>
                  <td className="px-4 py-3">{s.microhub}</td>
                  <td className="px-4 py-3">{s.driver || '—'}</td>
                  <td className="px-4 py-3"><StatusBadge status={s.status} /></td>
                  <td className="px-4 py-3">
                    <select
                      value={s.status}
                      onChange={e => updateShipmentStatus(s.id, e.target.value)}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                    >
                      {statuses.map(st => <option key={st} value={st}>{st}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
