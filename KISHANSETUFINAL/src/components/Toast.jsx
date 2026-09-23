import { useApp } from '../context/AppContext';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

export default function Toast() {
  const { toasts } = useApp();
  if (!toasts.length) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    error: <AlertTriangle className="w-5 h-5 text-red-500" />
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(t => (
        <div key={t.id} className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow-lg rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700 min-w-[280px] animate-slide-in">
          {icons[t.type] || icons.info}
          <span className="text-sm text-gray-800 dark:text-gray-200 flex-1">{t.message}</span>
        </div>
      ))}
    </div>
  );
}
