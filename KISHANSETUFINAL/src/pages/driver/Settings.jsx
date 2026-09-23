import { useApp } from '../../context/AppContext';
export default function DriverSettings() {
  const { theme, toggleTheme, addToast } = useApp();
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border divide-y">
        {['Account', 'Notifications', 'Privacy', 'Language', 'Security'].map(s => (
          <div key={s} className="p-4 flex justify-between items-center">
            <p className="font-medium">{s}</p>
            <button onClick={() => addToast('Updated', 'info')} className="text-sm text-green-700">Edit</button>
          </div>
        ))}
        <div className="p-4 flex justify-between items-center">
          <p className="font-medium">Theme ({theme})</p>
          <button onClick={toggleTheme} className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm">Toggle</button>
        </div>
      </div>
    </div>
  );
}
