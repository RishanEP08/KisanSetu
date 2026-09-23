import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { marketDemand, priceTrends } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function FarmerMarket() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Market Demand</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketDemand.slice(0, 4).map(m => (
          <div key={m.crop} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">{m.crop}</h3>
              <StatusBadge status={m.demand} />
            </div>
            <p className="text-2xl font-bold text-green-700 mt-2">₹{m.price}/kg</p>
            <div className="flex items-center gap-1 mt-1 text-sm">
              {m.trend === 'up' ? <TrendingUp className="w-4 h-4 text-green-600" /> : m.trend === 'down' ? <TrendingDown className="w-4 h-4 text-red-500" /> : <Minus className="w-4 h-4 text-gray-400" />}
              <span className={m.change > 0 ? 'text-green-600' : m.change < 0 ? 'text-red-500' : 'text-gray-500'}>{m.change > 0 ? '+' : ''}{m.change}%</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Predicted: ₹{m.predicted}/kg</p>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5">
        <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Price Trends (6 months)</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="tomato" stroke="#16a34a" strokeWidth={2} name="Tomato" />
              <Line type="monotone" dataKey="potato" stroke="#ca8a04" strokeWidth={2} name="Potato" />
              <Line type="monotone" dataKey="rice" stroke="#2563eb" strokeWidth={2} name="Rice" />
              <Line type="monotone" dataKey="onion" stroke="#dc2626" strokeWidth={2} name="Onion" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 border border-green-100">
        <h3 className="font-semibold text-green-800 dark:text-green-300">Recommended Crops to Grow</h3>
        <p className="text-sm text-green-700 dark:text-green-200 mt-1">Based on current demand: Tomato, Onion, and Mustard show strong upward trends in West Bengal markets.</p>
      </div>
    </div>
  );
}
