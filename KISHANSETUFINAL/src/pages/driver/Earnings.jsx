import { IndianRupee } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', amount: 450 },
  { day: 'Tue', amount: 380 },
  { day: 'Wed', amount: 520 },
  { day: 'Thu', amount: 310 },
  { day: 'Fri', amount: 490 },
  { day: 'Sat', amount: 600 },
  { day: 'Sun', amount: 200 },
];

export default function DriverEarnings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Earnings</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-4 text-center">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-2xl font-bold text-green-700">₹450</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-4 text-center">
          <p className="text-sm text-gray-500">This Week</p>
          <p className="text-2xl font-bold text-green-700">₹2,950</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-4 text-center">
          <p className="text-sm text-gray-500">This Month</p>
          <p className="text-2xl font-bold text-green-700">₹11,200</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border p-5">
        <h2 className="font-semibold mb-4">Weekly Overview</h2>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#16a34a" radius={[6,6,0,0]} name="₹" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
