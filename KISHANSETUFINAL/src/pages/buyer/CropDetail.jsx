import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Minus, Plus, ArrowLeft } from 'lucide-react';
import StatusBadge from '../../components/StatusBadge';
import { useApp } from '../../context/AppContext';

export default function BuyerCropDetail() {
  const { id } = useParams();
  const { cropsList, addToCart } = useApp();
  const crop = cropsList.find(c => c.id === id);
  const [qty, setQty] = useState(1);

  if (!crop) return <div className="text-center py-20 text-gray-500">Crop not found</div>;

  return (
    <div className="space-y-6 max-w-4xl">
      <Link to="/buyer/marketplace" className="inline-flex items-center gap-1 text-sm text-green-700 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Marketplace
      </Link>
      <div className="grid md:grid-cols-2 gap-6">
        <img src={crop.image} alt={crop.name} className="w-full h-72 object-cover rounded-2xl" />
        <div>
          <div className="flex items-center gap-2 mb-2">
            <StatusBadge status={crop.aiQuality} />
            <StatusBadge status={crop.demand} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{crop.name}</h1>
          <p className="text-gray-500 mt-1">by {crop.farmerName}</p>
          <p className="text-3xl font-bold text-green-700 mt-3">₹{crop.price}<span className="text-base font-normal text-gray-500">/kg</span></p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{crop.location}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{crop.harvestDate}</span>
          </div>
          <p className="text-sm text-gray-600 mt-3">{crop.description}</p>
          <p className="text-sm mt-2">{crop.quantity} kg available</p>
          <div className="flex items-center gap-3 mt-5">
            <div className="flex items-center border border-gray-200 rounded-xl">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="p-2"><Minus className="w-4 h-4" /></button>
              <span className="px-4 font-medium">{qty}</span>
              <button onClick={() => setQty(q => Math.min(crop.quantity, q + 1))} className="p-2"><Plus className="w-4 h-4" /></button>
            </div>
            <button onClick={() => addToCart(crop, qty)} className="flex-1 py-2.5 bg-green-700 text-white rounded-xl font-medium hover:bg-green-800">
              Add to Cart · ₹{crop.price * qty}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
