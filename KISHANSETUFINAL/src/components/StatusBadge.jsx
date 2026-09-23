export default function StatusBadge({ status }) {
  const styles = {
    Available: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Approved: 'bg-blue-100 text-blue-800',
    'Picked Up': 'bg-indigo-100 text-indigo-800',
    'At Microhub': 'bg-purple-100 text-purple-800',
    'In Transit': 'bg-cyan-100 text-cyan-800',
    Delivered: 'bg-green-100 text-green-800',
    Processing: 'bg-blue-100 text-blue-800',
    'Out for Delivery': 'bg-orange-100 text-orange-800',
    Accepted: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
    High: 'bg-red-100 text-red-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-gray-100 text-gray-800',
    Good: 'bg-green-100 text-green-800',
    Excellent: 'bg-emerald-100 text-emerald-800',
    Fair: 'bg-amber-100 text-amber-800'
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
}
