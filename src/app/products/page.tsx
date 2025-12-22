'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'Toyota Camry 2021',
    price: '₦ 8,500,000',
    location: 'Ikeja, Lagos',
    condition: 'Foreign Used',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ',
    badge: { type: 'premium', label: 'Premium' },
    seller: { name: 'AutoMart Ltd', initial: 'A', color: 'bg-primary' },
  },
  {
    id: 2,
    title: 'iPhone 15 Pro Max',
    price: '₦ 1,200,000',
    location: 'Wuse 2, Abuja',
    condition: 'Brand New',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg',
    badge: { type: 'urgent', label: 'Urgent' },
    seller: { name: 'GadgetWorld', initial: 'G', color: 'bg-accent' },
  },
  {
    id: 3,
    title: '3 Bed Serviced Flat',
    price: '₦ 45,000,000',
    location: 'Lekki Phase 1',
    condition: 'New Build',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzlzcQJhWyo3p39-FtBiIoyqcBg3zewCxqZA465TJkwOw18DWhoKdZAsryRWFEB1n1X23z9sN09GzDk5tl7FOkvTfPwDWV4PsYLiDiApCrZqEMwDwrCYOuIGGIs_oK2Djj8jPsvcEVtxOIPVTWGclsx7nt4IfTYBKu97NzFSD7NoUC0bJmNl8EH1nlVBJbo7tuhfWja6SmnL4AWewjBREh1sfjWelVnxbfbQWOVUkwr5IfWByRCro59RMNs3RLs__mislQDO4-Uw',
    seller: { name: 'HomeRealty', initial: 'H', color: 'bg-purple-600' },
  },
  {
    id: 4,
    title: 'Pro Gaming Setup',
    price: '₦ 450,000',
    location: 'Port Harcourt',
    condition: 'Used',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA',
    seller: { name: 'DavidTech', initial: 'D', color: 'bg-blue-500' },
  },
  {
    id: 5,
    title: 'MacBook Pro M2',
    price: '₦ 1,850,000',
    location: 'Yaba, Lagos',
    condition: 'Brand New',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLleH8qsh6_MG5Mx0LDXTIG6VAcdQr00MZ1WhQuHtkga4YsMnYK2pq9N49myPc6AIVXly0od6-Habc3Rd1Y3XRFE55NOCW9VckETTtjJpDF9IhNe6jI_aZLaa-ZejhN0ES85bsFsn6i9lEN1CtCUiO0e38grVQeWh-B1oSTw473MnShxR6r9QMHU0SoOsgBybUC5Z72PdfNJvrXQ7ZI-XEKYrGJTWtPEvJQxSB6DAkHaqza0qyWW8eVtOWFs7kHsjMx2vDd2a0RQ',
    badge: { type: 'premium', label: 'Premium' },
    seller: { name: 'MacCenter', initial: 'M', color: 'bg-green-500' },
  },
  {
    id: 6,
    title: 'Lhasa Apso Puppies',
    price: '₦ 80,000',
    location: 'Ibadan, Oyo',
    condition: '8 Weeks Old',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArqSjRYnu0tIVLIf9qe_ROyrYcAE62U7z5-jxBrR65gwxaAcJiMZ9ilr2hPaD9hprbwvEfNr3NXtOBRsRi7E_16mpMmvVFTeidXfLyK4FjZvpZmKMu7CcUY7PLYf5PXC6k8nZOw5grsX9yilzV8FSXjIRuO6JLQ2DM6zMBm4r-0lHIzC-javW6FNVcB3_CcS67TFRcd0lPl_GMPgi8xbG7YPJK13qHMDOs3wpXeR4r1lhzFXRWMDJswI4vFBhxMuWv0-K1K3UBMQ',
    seller: { name: 'PetLover99', initial: 'P', color: 'bg-pink-500' },
  },
];

export default function ProductsPage() {
  const [priceFilter, setPriceFilter] = useState('any');
  const [conditionFilters, setConditionFilters] = useState(['Foreign Used']);
  const [verifiedSeller, setVerifiedSeller] = useState(false);
  const [sortBy, setSortBy] = useState('Recommended');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCondition = (condition: string) => {
    setConditionFilters(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  return (
    <div className="min-h-screen bg-background-light text-text-main">
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-r from-primary via-[#0066b3] to-[#ff6933] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <Link href="/categories" className="hover:text-white transition-colors">Browse</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-white font-bold">All Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm">Explore Marketplace</h1>
            <p className="text-white/90 mt-2 max-w-xl font-body">Discover thousands of new and used items from verified sellers across Nigeria.</p>
          </div>
          <div className="hidden md:block w-full max-w-md">
            <div className="relative group">
              <input
                className="w-full bg-white/95 backdrop-blur-md border border-white/40 rounded-xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-white focus:ring-2 focus:ring-accent/50 transition-all shadow-lg shadow-black/5 outline-none"
                placeholder="What are you looking for?"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div className="bg-[rgba(248,250,252,0.6)] backdrop-blur-[8px] border border-[rgba(0,78,137,0.08)] rounded-2xl p-6 sticky top-24 space-y-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-lg font-bold flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined">filter_list</span>
                Filters
              </h3>
              <button className="text-xs text-primary hover:text-accent transition-colors font-medium">
                Reset All
              </button>
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Price Range</h4>
              <div className="space-y-2">
                {[
                  { value: 'any', label: 'Any Price' },
                  { value: 'under-50k', label: 'Under ₦50,000' },
                  { value: '50k-200k', label: '₦50k - ₦200k' },
                  { value: '200k-1m', label: '₦200k - ₦1M' },
                  { value: 'above-1m', label: 'Above ₦1M' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="text-primary focus:ring-primary bg-white border-slate-300"
                      name="price"
                      type="radio"
                      checked={priceFilter === option.value}
                      onChange={() => setPriceFilter(option.value)}
                    />
                    <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Condition */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Condition</h4>
              <div className="space-y-2">
                {['Brand New', 'Foreign Used', 'Nigerian Used', 'Refurbished'].map((condition) => (
                  <label key={condition} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="rounded text-primary focus:ring-primary bg-white border-slate-300"
                      type="checkbox"
                      checked={conditionFilters.includes(condition)}
                      onChange={() => toggleCondition(condition)}
                    />
                    <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">
                      {condition}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Verified Seller Toggle */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800">Verified Seller</span>
                  <span className="text-xs text-slate-500">Only show trusted</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    className="sr-only peer"
                    type="checkbox"
                    checked={verifiedSeller}
                    onChange={(e) => setVerifiedSeller(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <button className="w-full lg:hidden py-3 bg-primary text-white rounded-lg font-bold mt-4 shadow-md shadow-primary/20">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <p className="text-slate-600 text-sm">
              Showing <span className="text-primary font-bold">1-12</span> of <span className="text-primary font-bold">452</span> results
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Sort by:</span>
              <select
                className="bg-white border border-slate-200 text-slate-800 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 shadow-sm outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 border border-slate-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={product.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {product.badge && (
                    <div className={`absolute top-3 left-3 ${
                      product.badge.type === 'premium' 
                        ? 'bg-accent text-white' 
                        : 'bg-red-500 text-white'
                    } text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1`}>
                      <span className="material-symbols-outlined text-[14px]">
                        {product.badge.type === 'premium' ? 'stars' : 'local_fire_department'}
                      </span>
                      {product.badge.label}
                    </div>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-500 hover:text-accent transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-2xl font-black text-primary mb-2">{product.price}</p>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mb-4">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    <span>{product.location}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full mx-1"></span>
                    <span>{product.condition}</span>
                  </div>
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`size-6 rounded-full ${product.seller.color} flex items-center justify-center text-xs text-white`}>
                        {product.seller.initial}
                      </div>
                      <span className="text-xs text-slate-500">{product.seller.name}</span>
                    </div>
                    <button className="text-primary text-sm font-bold hover:underline hover:text-accent transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md shadow-primary/20">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors">3</button>
              <span className="text-slate-400 px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors">12</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}
