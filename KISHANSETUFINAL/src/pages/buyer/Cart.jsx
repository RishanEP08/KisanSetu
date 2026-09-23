import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import EmptyState from '../../components/EmptyState';
import { useApp } from '../../context/AppContext';

export default function BuyerCart() {
  const { cart, updateCartQty, removeFromCart } = useApp();
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const delivery = cart.length ? 40 : 0;
  const total = subtotal + delivery;

  if (!cart.length) return <EmptyState title="Your cart is empty" description="Browse the marketplace to add crops" actionLabel="Go to Marketplace" action={() => window.location.href = '/buyer/marketplace'} />;

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Cart</h1>
      <div className="space-y-3">
        {cart.map(item => (
          <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4 flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
              <p className="text-sm text-gray-500">₹{item.price}/kg</p>
            </div>
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button onClick={() => updateCartQty(item.id, item.quantity - 1)} className="p-1.5"><Minus className="w-3 h-3" /></button>
              <span className="px-3 text-sm font-medium">{item.quantity}</span>
              <button onClick={() => updateCartQty(item.id, item.quantity + 1)} className="p-1.5"><Plus className="w-3 h-3" /></button>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white w-20 text-right">₹{item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 space-y-2">
        <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span>₹{subtotal}</span></div>
        <div className="flex justify-between text-sm"><span className="text-gray-500">Delivery Fee</span><span>₹{delivery}</span></div>
        <div className="flex justify-between font-semibold text-lg border-t border-gray-100 dark:border-gray-700 pt-2"><span>Total</span><span className="text-green-700">₹{total}</span></div>
        <Link to="/buyer/checkout" className="block w-full text-center py-3 bg-green-700 text-white rounded-xl font-medium hover:bg-green-800 mt-3">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
