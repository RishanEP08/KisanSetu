import { PackageOpen } from 'lucide-react';

export default function EmptyState({ title = 'No items found', description = 'Try adjusting your filters or add new items.', action, actionLabel }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <PackageOpen className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 mt-1 max-w-sm">{description}</p>
      {action && actionLabel && (
        <button onClick={action} className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 transition">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
