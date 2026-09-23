import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wheat, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const { addToast } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    addToast('Password reset link sent (simulated)', 'success');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
              <Wheat className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-green-800">KishanSetu</span>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Forgot Password</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your email and we&apos;ll send a reset link.</p>
          {sent ? (
            <div className="text-center py-6">
              <p className="text-green-700 font-medium">Check your inbox!</p>
              <p className="text-sm text-gray-500 mt-1">Reset link sent to {email}</p>
              <Link to="/login" className="inline-flex items-center gap-1 mt-4 text-sm text-green-700 hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition">
                Send Reset Link
              </button>
              <Link to="/login" className="flex items-center justify-center gap-1 text-sm text-gray-600 hover:text-green-700">
                <ArrowLeft className="w-4 h-4" /> Back to Login
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
