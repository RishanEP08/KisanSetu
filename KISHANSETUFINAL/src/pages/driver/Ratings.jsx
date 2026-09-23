import { Star } from 'lucide-react';

const reviews = [
  { name: 'Priya Sharma', rating: 5, comment: 'Very punctual and careful with the produce!', date: '2 days ago' },
  { name: 'Amit Kumar', rating: 4, comment: 'Good service, arrived on time.', date: '5 days ago' },
  { name: 'Ramesh Mondal', rating: 5, comment: 'Excellent driver, highly recommend.', date: '1 week ago' },
];

export default function DriverRatings() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Ratings & Reviews</h1>
      <div className="bg-white dark:bg-gray-800 rounded-2xl border p-6 text-center">
        <p className="text-5xl font-extrabold text-green-700">4.6</p>
        <div className="flex justify-center gap-1 mt-2">
          {[1,2,3,4,5].map(i => <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />)}
        </div>
        <p className="text-sm text-gray-500 mt-1">Based on 145 reviews</p>
      </div>
      <div className="space-y-3">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl border p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">{r.name}</p>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(j => <Star key={j} className={`w-3.5 h-3.5 ${j <= r.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />)}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{r.comment}</p>
            <p className="text-xs text-gray-400 mt-1">{r.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
