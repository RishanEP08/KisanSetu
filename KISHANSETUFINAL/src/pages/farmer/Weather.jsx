import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';
import { weatherData } from '../../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function FarmerWeather() {
  const { current, forecast, alerts, cropImpact } = weatherData;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Weather Impact</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 flex items-center gap-3">
          <Thermometer className="w-8 h-8 text-red-500" />
          <div><p className="text-2xl font-bold">{current.temp}°C</p><p className="text-xs text-gray-500">Temperature</p></div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 flex items-center gap-3">
          <Droplets className="w-8 h-8 text-blue-500" />
          <div><p className="text-2xl font-bold">{current.humidity}%</p><p className="text-xs text-gray-500">Humidity</p></div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 flex items-center gap-3">
          <Cloud className="w-8 h-8 text-gray-500" />
          <div><p className="text-2xl font-bold">{current.rainProbability}%</p><p className="text-xs text-gray-500">Rain Chance</p></div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 flex items-center gap-3">
          <Wind className="w-8 h-8 text-cyan-500" />
          <div><p className="text-2xl font-bold">{current.wind} km/h</p><p className="text-xs text-gray-500">Wind</p></div>
        </div>
      </div>
      {alerts.map((a, i) => (
        <div key={i} className={`rounded-2xl p-4 border ${a.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-blue-50 border-blue-200 text-blue-800'}`}>
          {a.message}
        </div>
      ))}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5">
        <h2 className="font-semibold mb-4">5-Day Forecast</h2>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={forecast}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="temp" fill="#16a34a" name="Temp °C" radius={[6,6,0,0]} />
              <Bar dataKey="rain" fill="#3b82f6" name="Rain %" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {cropImpact.map(c => (
          <div key={c.crop} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4">
            <h3 className="font-semibold">{c.crop}</h3>
            <p className="text-sm text-gray-600 mt-1">{c.impact}</p>
            <p className="text-xs text-green-700 mt-2">{c.recommendation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
