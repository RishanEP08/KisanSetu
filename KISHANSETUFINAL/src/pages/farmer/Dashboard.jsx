import { Link } from 'react-router-dom';
import { Wheat, Truck, TrendingUp, IndianRupee, Plus, AlertTriangle, Brain, Cloud } from 'lucide-react';
import StatCard from '../../components/StatCard';
import StatusBadge from '../../components/StatusBadge';
import { useApp } from '../../context/AppContext';

export default function FarmerDashboard() {
  const { user, cropsList, shipments, orders } = useApp();
  const myCrops = cropsList.filter(c => c.farmerId === user?.id || c.farmerName === user?.name);
  const pending = shipments.filter(s => s.status === 'Pending').length;
  const earnings = orders.filter(o => o.status === 'Delivered').reduce((s, o) => s + o.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome, {user?.name?.split(' ')[0]}! 👋</h1>
          <p className="text-gray-500 text-sm mt-1">Here&apos;s your farm overview for today</p>
        </div>
        <Link to="/farmer/crops" className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-700 text-white rounded-xl text-sm font-medium hover:bg-green-800 transition">
          <Plus className="w-4 h-4" /> Upload Crop
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Crops" value={myCrops.length || 4} icon={Wheat} color="green" />
        <StatCard title="Pending Shipments" value={pending} icon={Truck} color="amber" />
        <StatCard title="Market Demand" value="High" icon={TrendingUp} color="blue" subtitle="Tomato, Onion" />
        <StatCard title="Monthly Earnings" value={`₹${earnings || 12400}`} icon={IndianRupee} color="purple" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Crop Activity</h2>
          <div className="space-y-3">
            {(myCrops.length ? myCrops : cropsList).slice(0, 4).map(c => (
              <div key={c.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <img src={c.image} alt={c.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.quantity}kg · ₹{c.price}/kg</p>
                </div>
                <StatusBadge status={c.status} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">AI Insights</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Tomato quality scored Good. Suggested price ₹42–48/kg. Minor water stress detected.</p>
            <Link to="/farmer/ai-analysis" className="text-sm text-green-700 font-medium mt-2 inline-block hover:underline">Analyze more →</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Market Alerts</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Tomato demand up 12% in Nadia. Onion prices rising.</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="w-5 h-5 text-amber-600" />
              <h3 className="font-semibold text-amber-800 dark:text-amber-300">Weather Alert</h3>
            </div>
            <p className="text-sm text-amber-700 dark:text-amber-200">Heavy rainfall expected tomorrow. Delay outdoor harvesting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
