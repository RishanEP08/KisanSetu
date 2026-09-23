import { useState, useMemo } from 'react';
import CropCard from '../../components/CropCard';
import SearchBar from '../../components/SearchBar';
import { useApp } from '../../context/AppContext';

export default function BuyerMarketplace() {
  const { cropsList, addToCart } = useApp();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [filterDistrict, setFilterDistrict] = useState('');

  const districts = [...new Set(cropsList.map(c => c.district))];

  const filtered = useMemo(() => {
    let list = [...cropsList];
    if (search) list = list.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.farmerName.toLowerCase().includes(search.toLowerCase()));
    if (filterDistrict) list = list.filter(c => c.district === filterDistrict);
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'qty') list.sort((a, b) => b.quantity - a.quantity);
    return list;
  }, [cropsList, search, sort, filterDistrict]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Marketplace</h1>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search crops or farmers..." /></div>
        <select value={filterDistrict} onChange={e => setFilterDistrict(e.target.value)} className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white dark:bg-gray-700 dark:border-gray-600">
          <option value="">All Districts</option>
          {districts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)} className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white dark:bg-gray-700 dark:border-gray-600">
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="qty">Most Available</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(c => (
          <CropCard key={c.id} crop={c} onAddToCart={addToCart} linkTo={`/buyer/crop/${c.id}`} />
        ))}
      </div>
    </div>
  );
}
