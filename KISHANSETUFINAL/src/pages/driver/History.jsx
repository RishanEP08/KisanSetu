import StatusBadge from '../../components/StatusBadge';

const history = [
  { id: 'DL001', date: '2026-09-20', party: 'Priya Sharma', crop: 'Tomato', distance: '12 km', status: 'Delivered', earnings: 180 },
  { id: 'DL002', date: '2026-09-19', party: 'Amit Kumar', crop: 'Potato', distance: '8 km', status: 'Delivered', earnings: 150 },
  { id: 'DL003', date: '2026-09-18', party: 'Ramesh Mondal', crop: 'Rice', distance: '15 km', status: 'Delivered', earnings: 220 },
];

export default function DriverHistory() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Delivery History</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 text-left">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Party</th>
              <th className="px-4 py-3">Crop</th>
              <th className="px-4 py-3">Distance</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Earnings</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {history.map(h => (
              <tr key={h.id}>
                <td className="px-4 py-3 font-medium">{h.id}</td>
                <td className="px-4 py-3">{h.date}</td>
                <td className="px-4 py-3">{h.party}</td>
                <td className="px-4 py-3">{h.crop}</td>
                <td className="px-4 py-3">{h.distance}</td>
                <td className="px-4 py-3"><StatusBadge status={h.status} /></td>
                <td className="px-4 py-3 text-green-700 font-medium">₹{h.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
