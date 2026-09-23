import { useState } from 'react';
import StatusBadge from '../../components/StatusBadge';
import { useApp } from '../../context/AppContext';

export default function DriverDeliveries() {
  const { orders, updateOrderStatus, addToast } = useApp();
  const active = orders.filter(o => o.status !== 'Delivered');

  const advance = (id, current) => {
    const flow = ['Processing', 'Out for Delivery', 'Delivered'];
    const idx = flow.indexOf(current);
    if (idx < flow.length - 1) {
      updateOrderStatus(id, flow[idx + 1]);
      addToast(`Status updated to ${flow[idx + 1]}`, 'success');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Active Deliveries</h1>
      <div className="space-y-3">
        {active.map(o => (
          <div key={o.id} className="bg-white dark:bg-gray-800 rounded-2xl border p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{o.id}</span>
                  <StatusBadge status={o.status} />
                </div>
                <p className="text-sm mt-1">{o.crop} · {o.quantity}kg → {o.buyer}</p>
              </div>
              <button onClick={() => advance(o.id, o.status)} className="px-3 py-1.5 bg-green-700 text-white text-xs rounded-lg font-medium">
                {o.status === 'Processing' ? 'Start Delivery' : o.status === 'Out for Delivery' ? 'Mark Delivered' : 'Done'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
