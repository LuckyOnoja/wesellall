'use client';

import { useState } from 'react';
import Link from 'next/link';

const trendingItems = [
  {
    id: 1,
    rank: 1,
    title: 'iPhone 15 Pro Max - Titanium',
    category: 'Mobiles',
    price: '₦ 1,250,000',
    priceType: 'avg',
    views: '12.4k',
    change: '+45%',
    description: 'The most searched item in Lagos and Abuja today. High demand for 256GB models in Natural Titanium.',
    listings: 145,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg',
  },
  {
    id: 2,
    rank: 2,
    title: 'Toyota Camry 2018 LE',
    category: 'Vehicles',
    price: '₦ 6.8M - 8.5M',
    priceType: 'range',
    views: '8.2k',
    change: '+32%',
    listings: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ',
  },
  {
    id: 3,
    rank: 3,
    title: 'Gaming Laptops (RTX 3060)',
    category: 'Electronics',
    price: '₦ 750K+',
    priceType: 'starting',
    views: '5.1k',
    change: '+28%',
    listings: 203,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA',
  },
];

const popularSearches = [
  'Lexus RX350',
  'Generator 5KVA',
  'Self con Ikeja',
  'PS5 Console',
  'Toyota Corolla',
  'Starlink',
  'Office Chair',
];

const trendingCategories = [
  { name: 'Vehicles', icon: 'directions_car', change: '+18%', percentage: 85, color: 'primary' },
  { name: 'Real Estate', icon: 'real_estate_agent', change: '+12%', percentage: 65, color: 'secondary' },
  { name: 'Mobile Phones', icon: 'smartphone', change: '+24%', percentage: 92, color: 'purple' },
  { name: 'Fashion', icon: 'checkroom', change: '-5%', percentage: 45, color: 'teal' },
];

export default function TrendingPage() {
  const [timeFilter, setTimeFilter] = useState('24h');

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-hot-gradient opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold mb-2">
                <span className="material-symbols-outlined fill-1 animate-pulse">local_fire_department</span>
                <span className="uppercase tracking-wider text-xs">Market Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-2">Trending Now</h1>
              <p className="text-white/60 text-lg">See what's popular across Nigeria in real-time.</p>
            </div>
            <div className="bg-dark-surface p-1 rounded-xl border border-white/10 flex">
              {['24h', '7 Days', '30 Days'].map((time) => (
                <button
                  key={time}
                  onClick={() => setTimeFilter(time === '24h' ? '24h' : time)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    timeFilter === (time === '24h' ? '24h' : time)
                      ? 'bg-primary text-white font-bold shadow-lg'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {time === '24h' ? 'Last 24h' : time}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Trending Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                  Hot Right Now
                </h2>
                <Link href="/products" className="text-sm text-primary hover:text-white transition-colors">
                  View All
                </Link>
              </div>

              {/* #1 Trending Item */}
              <div className="bg-dark-surface rounded-2xl p-4 border border-white/10 hover:border-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-gradient-to-br from-primary to-orange-600 text-white font-black text-xl px-4 py-2 rounded-br-2xl z-20 shadow-lg">
                  #1
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-2/5 aspect-[4/3] rounded-xl overflow-hidden relative">
                    <img
                      alt={trendingItems[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={trendingItems[0].image}
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <span className="material-symbols-outlined text-green-400 text-sm">arrow_upward</span>
                      {trendingItems[0].change} Views
                    </div>
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {trendingItems[0].category}
                      </div>
                      <div className="text-white/40 text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        {trendingItems[0].views}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {trendingItems[0].title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {trendingItems[0].description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <div>
                        <p className="text-xs text-white/40 mb-1">Avg. Price</p>
                        <p className="text-xl font-bold text-white">{trendingItems[0].price}</p>
                      </div>
                      <Link
                        href="/products"
                        className="bg-white text-black hover:bg-white/90 font-bold py-2 px-6 rounded-lg transition-colors text-sm"
                      >
                        View {trendingItems[0].listings} Listings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* #2 Trending Item */}
              <div className="bg-dark-surface rounded-2xl p-4 border border-white/10 hover:border-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-dark-lighter border-r border-b border-white/10 text-white font-black text-lg px-4 py-2 rounded-br-2xl z-20">
                  #2
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-full sm:w-1/3 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden relative">
                    <img
                      alt={trendingItems[1].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={trendingItems[1].image}
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <span className="material-symbols-outlined text-green-400 text-sm">arrow_upward</span>
                      {trendingItems[1].change}
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {trendingItems[1].category}
                      </div>
                      <div className="text-white/40 text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        {trendingItems[1].views}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {trendingItems[1].title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-white">{trendingItems[1].price}</p>
                        <p className="text-xs text-white/40">Market Range</p>
                      </div>
                      <Link
                        href="/products"
                        className="text-primary hover:text-white font-medium text-sm border border-primary/30 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors"
                      >
                        View {trendingItems[1].listings} Listings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* #3 Trending Item */}
              <div className="bg-dark-surface rounded-2xl p-4 border border-white/10 hover:border-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-dark-lighter border-r border-b border-white/10 text-white font-black text-lg px-4 py-2 rounded-br-2xl z-20">
                  #3
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-full sm:w-1/3 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden relative">
                    <img
                      alt={trendingItems[2].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={trendingItems[2].image}
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <span className="material-symbols-outlined text-green-400 text-sm">arrow_upward</span>
                      {trendingItems[2].change}
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {trendingItems[2].category}
                      </div>
                      <div className="text-white/40 text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        {trendingItems[2].views}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {trendingItems[2].title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-white">{trendingItems[2].price}</p>
                        <p className="text-xs text-white/40">Starting Price</p>
                      </div>
                      <Link
                        href="/products"
                        className="text-primary hover:text-white font-medium text-sm border border-primary/30 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors"
                      >
                        View {trendingItems[2].listings} Listings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Popular Searches */}
              <div className="bg-dark-surface rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">search</span>
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, idx) => (
                    <Link
                      key={idx}
                      href={`/products?search=${encodeURIComponent(search)}`}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-primary/50 text-sm text-white/80 hover:text-white transition-all"
                    >
                      {search}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trending Categories */}
              <div className="bg-dark-surface rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">category</span>
                  Trending Categories
                </h3>
                <div className="space-y-4">
                  {trendingCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      href={`/products?category=${encodeURIComponent(cat.name)}`}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className={`size-10 rounded-lg ${
                        cat.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' :
                        cat.color === 'secondary' ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white' :
                        cat.color === 'purple' ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white' :
                        'bg-teal-500/10 text-teal-400 group-hover:bg-teal-600 group-hover:text-white'
                      } flex items-center justify-center transition-colors`}>
                        <span className="material-symbols-outlined">{cat.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className={`font-medium text-white group-hover:${
                            cat.color === 'primary' ? 'text-primary' :
                            cat.color === 'secondary' ? 'text-secondary' :
                            cat.color === 'purple' ? 'text-purple-400' :
                            'text-teal-400'
                          } transition-colors`}>
                            {cat.name}
                          </span>
                          <span className={`text-xs font-bold ${
                            cat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {cat.change}
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${
                              cat.color === 'primary' ? 'bg-primary' :
                              cat.color === 'secondary' ? 'bg-secondary' :
                              cat.color === 'purple' ? 'bg-purple-500' :
                              'bg-teal-500'
                            }`}
                            style={{ width: `${cat.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <button className="w-full mt-6 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors text-white/60 hover:text-white">
                  View Full Analytics
                </button>
              </div>

              {/* Boost Listing CTA */}
              <div className="rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-900 opacity-90"></div>
                <img
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX0l9AzYsaTuZ6X55sL03Gwv6NPZPWQzcc7Y32-93SVqo_bcQOMndF6alt9heicaUh5httFV7MchwUzy9hFPWAclv6WI5k3RbzEalbZKfX4OSjstJ3k47Hi82AYb31rdIXIvmxCIj7096WQSRYia48HKcJHTTehlKvC1-F_bD7ZyGnoSw5-yrhWcxoptBjJs0uUXIsx28nDKwN9Rq2a2UfuFkrSCcMqf-Dk3x49HQeWP03xfVS09dXUlv3Ww_u6n_68UhrWy6ncg"
                />
                <div className="relative z-10 text-center">
                  <div className="inline-flex bg-white/20 backdrop-blur rounded-full p-2 mb-3">
                    <span className="material-symbols-outlined text-white">diamond</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Want to appear here?</h3>
                  <p className="text-white/80 text-sm mb-4">Promote your items to reach thousands of buyers daily.</p>
                  <Link
                    href="/sell"
                    className="bg-white text-primary font-bold py-2 px-6 rounded-lg text-sm hover:bg-white/90 transition-colors w-full block"
                  >
                    Boost Listing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
