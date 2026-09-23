import { MapPin, Calendar, TrendingUp } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { Link } from 'react-router-dom';

export default function CropCard({ crop, onAddToCart, showFarmer = true, linkTo }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all group">
      <div className="relative h-44 overflow-hidden">
        <img src={crop.image} alt={crop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 right-3">
          <StatusBadge status={crop.demand} />
        </div>
        <div className="absolute top-3 left-3">
          <StatusBadge status={crop.aiQuality} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{crop.name}</h3>
          <p className="text-lg font-bold text-green-700">₹{crop.price}<span className="text-xs font-normal text-gray-500">/kg</span></p>
        </div>
        {showFarmer && <p className="text-sm text-gray-500 mt-1">by {crop.farmerName}</p>}
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{crop.location}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{crop.harvestDate}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm text-gray-600 dark:text-gray-300">{crop.quantity} {crop.unit} available</span>
          <div className="flex gap-2">
            {linkTo && (
              <Link to={linkTo} className="px-3 py-1.5 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition">
                View
              </Link>
            )}
            {onAddToCart && (
              <button onClick={() => onAddToCart(crop)} className="px-3 py-1.5 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 transition">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
