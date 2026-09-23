import { Link } from 'react-router-dom';
import { Store, ShoppingCart, Package, IndianRupee } from 'lucide-react';
import StatCard from '../../components/StatCard';
import CropCard from '../../components/CropCard';
import { useApp } from '../../context/AppContext';

export default function BuyerDashboard() {
  const { user, cropsList, cart, orders, addToCart } = useApp();
  const active = orders.filter(o => o.status !== 'Delivered').length;
  const spent = orders.reduce((s, o) => s + o.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome, {user?.name?.split(' ')[0]}!</h1>
        <p className="text-gray-500 text-sm mt-1">Discover fresh produce from local farmers</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Available Crops" value={cropsList.length} icon={Store} color="green" />
        <StatCard title="Cart Items" value={cart.length} icon={ShoppingCart} color="blue" />
        <StatCard title="Active Orders" value={active} icon={Package} color="amber" />
        <StatCard title="Total Spent" value={`₹${spent}`} icon={IndianRupee} color="purple" />
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900 dark:text-white">Recommended Crops</h2>
          <Link to="/buyer/marketplace" className="text-sm text-green-700 font-medium hover:underline">View all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cropsList.slice(0, 3).map(c => (
            <CropCard key={c.id} crop={c} onAddToCart={addToCart} linkTo={`/buyer/crop/${c.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
