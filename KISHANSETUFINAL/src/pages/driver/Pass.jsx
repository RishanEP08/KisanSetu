import { useApp } from '../../context/AppContext';
import { Download, Eye } from 'lucide-react';

export default function DriverPass() {
  const { user } = useApp();
  return (
    <div className="space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Digital Pass</h1>
      <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium opacity-80">KishanSetu Digital Pass</span>
          <span className="px-2 py-0.5 bg-white/20 rounded text-xs font-bold">VERIFIED</span>
        </div>
        <p className="text-2xl font-bold">{user?.name}</p>
        <p className="text-sm opacity-80 mt-1">{user?.vehicleType} · {user?.vehicleNumber}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div><p className="opacity-60">Shipment</p><p className="font-medium">SH001</p></div>
          <div><p className="opacity-60">Crop</p><p className="font-medium">Tomato 50kg</p></div>
          <div><p className="opacity-60">Pickup</p><p className="font-medium">Krishnagar</p></div>
          <div><p className="opacity-60">Destination</p><p className="font-medium">Kolkata</p></div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/20 flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-1 py-2 bg-white/20 rounded-xl text-sm font-medium"><Eye className="w-4 h-4" /> View</button>
          <button className="flex-1 flex items-center justify-center gap-1 py-2 bg-white text-green-800 rounded-xl text-sm font-medium"><Download className="w-4 h-4" /> Download</button>
        </div>
      </div>
    </div>
  );
}
