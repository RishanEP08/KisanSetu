import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BuyerCheckout() {
  const { cart, placeOrder, user } = useApp();
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState('upi');
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0) + 40;

  const handlePay = () => {
    const o = placeOrder({
      crop: cart.map(c => c.name).join(', '),
      quantity: cart.reduce((s, c) => s + c.quantity, 0),
      amount: total,
      buyer: user?.name,
      buyerId: user?.id,
      farmer: cart[0]?.farmerName,
      driver: null
    });
    setOrder(o);
    setStep(3);
  };

  if (!cart.length && step < 3) {
    return <div className="text-center py-20"><p className="text-gray-500">Cart is empty</p><Link to="/buyer/marketplace" className="text-green-700 hover:underline">Go shopping</Link></div>;
  }

  const steps = ['Cart', 'Delivery', 'Payment', 'Done'];

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Checkout</h1>
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i <= step ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-500'}`}>{i + 1}</div>
            <span className={`text-xs ${i <= step ? 'text-green-700 font-medium' : 'text-gray-400'}`}>{s}</span>
            {i < 3 && <div className="w-6 h-px bg-gray-200" />}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-5 space-y-3">
          {cart.map(i => (
            <div key={i.id} className="flex justify-between text-sm"><span>{i.name} × {i.quantity}</span><span>₹{i.price * i.quantity}</span></div>
          ))}
          <div className="border-t pt-2 flex justify-between font-semibold"><span>Total</span><span>₹{total}</span></div>
          <button onClick={() => setStep(1)} className="w-full py-2.5 bg-green-700 text-white rounded-xl font-medium">Continue</button>
        </div>
      )}

      {step === 1 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-5 space-y-3">
          {['Name', 'Phone', 'Address', 'District', 'State', 'Pincode'].map(f => (
            <div key={f}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{f}</label>
              <input defaultValue={f === 'Name' ? user?.name : f === 'Phone' ? user?.phone : f === 'District' ? user?.district : f === 'State' ? user?.state : ''} className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          ))}
          <button onClick={() => setStep(2)} className="w-full py-2.5 bg-green-700 text-white rounded-xl font-medium">Continue to Payment</button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-5 space-y-3">
          {['upi', 'card', 'netbanking', 'cod'].map(p => (
            <label key={p} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer ${payment === p ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
              <input type="radio" name="pay" checked={payment === p} onChange={() => setPayment(p)} className="accent-green-700" />
              <span className="text-sm font-medium capitalize">{p === 'cod' ? 'Cash on Delivery' : p === 'netbanking' ? 'Net Banking' : p.toUpperCase()}</span>
            </label>
          ))}
          <button onClick={handlePay} className="w-full py-2.5 bg-green-700 text-white rounded-xl font-medium">Pay ₹{total}</button>
        </div>
      )}

      {step === 3 && order && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Payment Successful ✓</h2>
          <p className="text-sm text-gray-500 mt-2">Order ID: {order.id}</p>
          <p className="text-sm text-gray-500">Estimated delivery: {order.eta}</p>
          <button onClick={() => navigate(`/buyer/track/${order.id}`)} className="mt-6 px-6 py-2.5 bg-green-700 text-white rounded-xl font-medium">Track Order</button>
        </div>
      )}
    </div>
  );
}
