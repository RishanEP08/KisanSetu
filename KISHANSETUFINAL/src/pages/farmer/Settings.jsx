import { useApp } from '../../context/AppContext';

export default function FarmerSettings() {
  const { theme, toggleTheme, addToast } = useApp();
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
        {[
          { title: 'Account', desc: 'Manage your account details' },
          { title: 'Notifications', desc: 'Configure alert preferences' },
          { title: 'Privacy', desc: 'Control your data visibility' },
          { title: 'Language', desc: 'English / বাংলা / हिन्दी' },
          { title: 'Security', desc: 'Password and 2FA settings' },
        ].map(s => (
          <div key={s.title} className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{s.title}</p>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
            <button onClick={() => addToast('Settings updated (demo)', 'info')} className="text-sm text-green-700 font-medium">Edit</button>
          </div>
        ))}
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Theme</p>
            <p className="text-sm text-gray-500">Current: {theme}</p>
          </div>
          <button onClick={toggleTheme} className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
            Switch to {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </div>
  );
}
