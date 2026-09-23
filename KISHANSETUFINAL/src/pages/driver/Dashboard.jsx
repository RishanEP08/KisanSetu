import { Package, Truck, CheckCircle, IndianRupee } from 'lucide-react';
import StatCard from '../../components/StatCard';
import { useApp } from '../../context/AppContext';

export default function DriverDashboard() {
  const { user, pickups, orders } = useApp();
  const pending = pickups.filter(p => p.status === 'Pending').length;
  const active = orders.filter(o => o.status === 'Out for Delivery' || o.status === 'In Transit').length;
  const completed = orders.filter(o => o.status === 'Delivered').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome, {user?.name?.split(' ')[0]}!</h1>
        <p className="text-gray-500 text-sm">Your delivery overview</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Today's Pickups" value={pending} icon={Package} color="amber" />
        <StatCard title="Active Deliveries" value={active || 1} icon={Truck} color="blue" />
        <StatCard title="Completed" value={completed || 12} icon={CheckCircle} color="green" />
        <StatCard title="Earnings" value="₹2,450" icon={IndianRupee} color="purple" />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border p-5">
        <h2 className="font-semibold mb-3">Quick Actions</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <a href="/driver/pickups" className="p-4 bg-green-50 rounded-xl text-center hover:bg-green-100 transition">
            <Package className="w-6 h-6 text-green-700 mx-auto mb-1" />
            <p className="text-sm font-medium text-green-800">View Pickups</p>
          </a>
          <a href="/driver/tracking" className="p-4 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition">
            <Truck className="w-6 h-6 text-blue-700 mx-auto mb-1" />
            <p className="text-sm font-medium text-blue-800">Live Tracking</p>
          </a>
          <a href="/driver/pass" className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition">
            <CheckCircle className="w-6 h-6 text-purple-700 mx-auto mb-1" />
            <p className="text-sm font-medium text-purple-800">Digital Pass</p>
          </a>
        </div>
      </div>
    </div>
  );
}
