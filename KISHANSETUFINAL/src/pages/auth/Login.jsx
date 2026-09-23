import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wheat, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [role, setRole] = useState('farmer');
  const { login, loginWithCredentials } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      // If no email, fall back to demo for that role
      login(role);
      navigate(`/${role}`);
      return;
    }
    const usedRole = loginWithCredentials(email.trim(), password, role);
    navigate(`/${usedRole}`);
  };

  const demoLogin = (r) => {
    login(r);
    navigate(`/${r}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
              <Wheat className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-green-800 dark:text-green-400">KishanSetu</span>
          </Link>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to your account</p>
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-green-700 dark:text-green-400 hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" className="w-full py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition">
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mb-3">Quick Demo Login</p>
            <div className="flex gap-2">
              {['farmer', 'buyer', 'driver'].map(r => (
                <button
                  key={r}
                  onClick={() => demoLogin(r)}
                  className="flex-1 py-2 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 rounded-xl text-xs font-semibold hover:bg-green-50 dark:hover:bg-green-900/30 transition capitalize"
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-green-700 dark:text-green-400 font-medium hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
