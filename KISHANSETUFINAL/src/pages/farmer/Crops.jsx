import { useState } from 'react';
import { Plus, Pencil, Trash2, Send } from 'lucide-react';
import StatusBadge from '../../components/StatusBadge';
import Modal from '../../components/Modal';
import EmptyState from '../../components/EmptyState';
import { useApp } from '../../context/AppContext';
import { microhubs } from '../../data/mockData';

export default function FarmerCrops() {
  const { user, cropsList, addCrop, deleteCrop, addShipment, addToast } = useApp();
  const [showAdd, setShowAdd] = useState(false);
  const [showHub, setShowHub] = useState(null);
  const [form, setForm] = useState({ name: '', quantity: '', price: '', harvestDate: '', location: '', description: '', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop' });

  const myCrops = cropsList.filter(c => c.farmerId === user?.id || true);

  const handleAdd = (e) => {
    e.preventDefault();
    addCrop({ ...form, quantity: Number(form.quantity), price: Number(form.price), unit: 'kg', location: form.location || user?.district + ', West Bengal' });
    setShowAdd(false);
    setForm({ name: '', quantity: '', price: '', harvestDate: '', location: '', description: '', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop' });
  };

  const sendToHub = (crop, hub) => {
    addShipment({ crop: crop.name, quantity: crop.quantity, buyer: '—', microhub: hub.name, driver: null, farmerId: user?.id });
    setShowHub(null);
    addToast(`Crop sent to ${hub.name}`, 'success');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Crops</h1>
        <button onClick={() => setShowAdd(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-700 text-white rounded-xl text-sm font-medium hover:bg-green-800">
          <Plus className="w-4 h-4" /> Add New Crop
        </button>
      </div>

      {myCrops.length === 0 ? (
        <EmptyState title="No crops yet" description="Add your first crop to get started" action={() => setShowAdd(true)} actionLabel="Add Crop" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {myCrops.map(c => (
            <div key={c.id} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <img src={c.image} alt={c.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{c.name}</h3>
                  <StatusBadge status={c.aiQuality} />
                </div>
                <p className="text-sm text-gray-500 mt-1">{c.quantity}kg · ₹{c.price}/kg</p>
                <p className="text-xs text-gray-400 mt-1">{c.location} · Harvest: {c.harvestDate}</p>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => setShowHub(c)} className="flex-1 flex items-center justify-center gap-1 py-1.5 text-xs font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100">
                    <Send className="w-3 h-3" /> Send to Hub
                  </button>
                  <button onClick={() => deleteCrop(c.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)} title="Add New Crop">
        <form onSubmit={handleAdd} className="space-y-3">
          {['name', 'quantity', 'price', 'harvestDate', 'location', 'description'].map(k => (
            <div key={k}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{k === 'harvestDate' ? 'Harvest Date' : k}</label>
              <input
                type={k === 'quantity' || k === 'price' ? 'number' : k === 'harvestDate' ? 'date' : 'text'}
                required={k !== 'description'}
                value={form[k]}
                onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
          <button type="submit" className="w-full py-2.5 bg-green-700 text-white rounded-xl font-medium hover:bg-green-800">Add Crop</button>
        </form>
      </Modal>

      <Modal isOpen={!!showHub} onClose={() => setShowHub(null)} title="Select Microhub">
        <div className="space-y-3">
          {microhubs.map(h => (
            <button key={h.id} onClick={() => sendToHub(showHub, h)} className="w-full text-left p-4 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition">
              <p className="font-medium text-gray-900">{h.name}</p>
              <p className="text-xs text-gray-500 mt-1">{h.distance} · {h.address}</p>
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}
