import { useApp } from '../../context/AppContext';
export default function DriverProfile() {
  const { user } = useApp();
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">{user?.name?.[0]}</div>
          <div><h2 className="text-xl font-semibold">{user?.name}</h2><p className="text-sm text-gray-500">Driver · ★ {user?.rating}</p></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div><p className="text-gray-500">Email</p><p className="font-medium">{user?.email}</p></div>
          <div><p className="text-gray-500">Phone</p><p className="font-medium">{user?.phone}</p></div>
          <div><p className="text-gray-500">Vehicle</p><p className="font-medium">{user?.vehicleType}</p></div>
          <div><p className="text-gray-500">Number</p><p className="font-medium">{user?.vehicleNumber}</p></div>
          <div><p className="text-gray-500">District</p><p className="font-medium">{user?.district}</p></div>
        </div>
      </div>
    </div>
  );
}
