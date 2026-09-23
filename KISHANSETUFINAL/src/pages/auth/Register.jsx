import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wheat } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Register() {
  const [role, setRole] = useState('farmer');
  const [form, setForm] = useState({});
  const { register } = useApp();
  const navigate = useNavigate();

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name?.trim()) {
      alert('Please enter your name');
      return;
    }
    const usedRole = register(form, role);
    navigate(`/${usedRole}`);
  };

  const fields = {
    farmer: [
      { key: 'name', label: 'Full Name', type: 'text' },
      { key: 'phone', label: 'Phone', type: 'tel' },
      { key: 'email', label: 'Email', type: 'email' },
      { key: 'password', label: 'Password', type: 'password' },
      { key: 'village', label: 'Village', type: 'text' },
      { key: 'district', label: 'District', type: 'text' },
      { key: 'state', label: 'State', type: 'text' },
      { key: 'farmSize', label: 'Farm Size (acres)', type: 'text' },
    ],
    buyer: [
      { key: 'name', label: 'Full Name', type: 'text' },
      { key: 'email', label: 'Email', type: 'email' },
      { key: 'phone', label: 'Phone', type: 'tel' },
      { key: 'address', label: 'Address', type: 'text' },
      { key: 'district', label: 'District', type: 'text' },
      { key: 'state', label: 'State', type: 'text' },
      { key: 'password', label: 'Password', type: 'password' },
    ],
    driver: [
      { key: 'name', label: 'Full Name', type: 'text' },
      { key: 'phone', label: 'Phone', type: 'tel' },
      { key: 'email', label: 'Email', type: 'email' },
      { key: 'vehicleType', label: 'Vehicle Type', type: 'text' },
      { key: 'vehicleNumber', label: 'Vehicle Number', type: 'text' },
      { key: 'license', label: 'License Number', type: 'text' },
      { key: 'district', label: 'District', type: 'text' },
      { key: 'password', label: 'Password', type: 'password' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
              <Wheat className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-green-800 dark:text-green-400">KishanSetu</span>
          </Link>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Create your account</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          <div className="flex gap-2 mb-6">
            {['farmer', 'buyer', 'driver'].map(r => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 py-2 rounded-xl text-sm font-medium capitalize transition ${
                  role === r
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fields[role].map(f => (
                <div key={f.key} className={f.key === 'address' || f.key === 'email' ? 'sm:col-span-2' : ''}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{f.label}</label>
                  <input
                    type={f.type}
                    required={f.key === 'name' || f.key === 'email' || f.key === 'password'}
                    value={form[f.key] || ''}
                    onChange={e => update(f.key, e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              ))}
            </div>
            <button type="submit" className="w-full py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition mt-2">
              Create Account
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-green-700 dark:text-green-400 font-medium hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
