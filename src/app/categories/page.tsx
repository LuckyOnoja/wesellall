'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Vehicles',
    icon: '🚗',
    items: '12.5k',
    subcategories: ['Cars & Trucks', 'Auto Parts', 'Motorcycles'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7vXhsODNWfxqcBk1Jeyzx0IkGIzX_rhRIpbBId_VZ-Np1CNnW-v19pDazso56gy3ZldTbm3vX9pO5T2SyJeAK-1n8vtYPrBTLBJ9SoQ6XXQLkmplCIwSXMPvzROPNlENVq1EbY_k1T6W5Wc_l9YP8G2fFaekc-E9s2fsZF5DLt_kL0H8GM9QwJy6m-rsww_N81ZTCy13HRCdgWGOT2pPt_HLBVWls7hTnV1ZBfnKXRKY8_zWUyzGmheyW32_1ZWn9GuzalHjBA',
    hasImage: true,
  },
  {
    id: 2,
    name: 'Real Estate',
    icon: '🏠',
    items: '8.2k',
    subcategories: ['Houses for Sale', 'Apartments for Rent', 'Land & Plots'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcste-V6YLtuwOdcqtJTT6vovRojAolDPLQuFhzpMmI3BKRWTIZ_41LVuXl_V1Reo6UpyBFMOQUsGXXuGk14w-wBCfUklWltzwg1h_mMgXxXCy_xdVacE-HXI-IigG8vC_SwdRoEEdNp4LHkFQrvZtBIi9SMhMl4mhik8odlUdDcSehgBSP7ok9ZGTibAmaMWARts3hNKSo7t52pkSjfBG6XSeOna6Yhfy2IsTlqMunLcktElHSs_Qi_JKdpwDziQri1-ruAeD8g',
    hasImage: true,
  },
  {
    id: 3,
    name: 'Electronics',
    icon: '📱',
    items: '15k',
    subcategories: ['Mobile Phones', 'Laptops & Computers', 'Audio & Music'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMhBaJIbDPqfPHZXBHk3oZqQmTxwhDrd_MrCdUOoKUa1uRfGuCWqfrkn_ZxNUQdW-9ID0XDUFp4yIpCSsplylhmvQ9j9e_7rQ-Fyzk8VT1pljuXcLOYuOaedS4rDiz9WelWeSuntNi279UfHt3WsjZ0QkVODKvZvFc96GLWytnF5b3gUo6Y2E3y7ezw1xu9OFHEmZiSlIUN7ssaLifc7UXcXseGtrTFg_GIbBhZqCqScxmN4cwxnCYdUsyIBUWJXPFS1L4n-ImBw',
    hasImage: true,
  },
  {
    id: 4,
    name: 'Fashion',
    icon: '👗',
    items: '21k',
    subcategories: ['Clothing', 'Shoes & Sneakers', 'Accessories'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX0l9AzYsaTuZ6X55sL03Gwv6NPZPWQzcc7Y32-93SVqo_bcQOMndF6alt9heicaUh5httFV7MchwUzy9hFPWAclv6WI5k3RbzEalbZKfX4OSjstJ3k47Hi82AYb31rdIXIvmxCIj7096WQSRYia48HKcJHTTehlKvC1-F_bD7ZyGnoSw5-yrhWcxoptBjJs0uUXIsx28nDKwN9Rq2a2UfuFkrSCcMqf-Dk3x49HQeWP03xfVS09dXUlv3Ww_u6n_68UhrWy6ncg',
    hasImage: true,
  },
  {
    id: 5,
    name: 'Jobs',
    icon: '💼',
    items: '1.5k',
    subcategories: ['Full-time', 'Part-time', 'Remote Work'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLleH8qsh6_MG5Mx0LDXTIG6VAcdQr00MZ1WhQuHtkga4YsMnYK2pq9N49myPc6AIVXly0od6-Habc3Rd1Y3XRFE55NOCW9VckETTtjJpDF9IhNe6jI_aZLaa-ZejhN0ES85bsFsn6i9lEN1CtCUiO0e38grVQeWh-B1oSTw473MnShxR6r9QMHU0SoOsgBybUC5Z72PdfNJvrXQ7ZI-XEKYrGJTWtPEvJQxSB6DAkHaqza0qyWW8eVtOWFs7kHsjMx2vDd2a0RQ',
    hasImage: true,
  },
  {
    id: 6,
    name: 'Services',
    icon: '🛠️',
    items: '5k',
    subcategories: ['Automotive', 'Building & Trades', 'Cleaning'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7cxuFsvWQneDFDLzg3kyXvfJH6z1k-fF9YJKG44SY452xNo1feKWIr_XFgeu02kMbwYi34o_0dW5kEj6t7HSRordJFPAKpghYMR5OVWsNqoGrAZqruMGsnL16T7tLwqq5-uyGQ1xFsTfP_ezp0k6GJ7DvRBtpWfGdFTcA-fJdGnpD3aJveOG1rwa72Xz5gAhfYsXCaI6uhCVNNzNLsd-Oeq1PpgciFlTMkcP1R49PHksLvMH4A4C5mB3K8_Ol4ggf3ak8vzOo7w',
    hasImage: true,
  },
  {
    id: 7,
    name: 'Home & Garden',
    icon: '🛋️',
    items: '18k',
    subcategories: ['Furniture', 'Appliances', 'Decor'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Cy89j5Ub_eNPf-6k1m1Ly2HBvoSRAnZ1O45wRKWVCsjAlg2eYO2zceIPDRnUYpOArE0hL7Xw3JlYx6inLqm83FgSOUG3Hp_SJlz1P8nGvCyMXnq_BPfWL-xV93hZDoa0CbwOgKwZv-Qk2ohzQtYIJhBha7BZfwyJsHUUeVCrRf-CsSv1VBvC6qvvDkhWVhieVbwrAvTcNucI8A7glN2zKjdrOts4V4TVqHsix1YG1QuWbE_Nmu5DtcGXotpcX2vk_SBdWZyKEg',
    hasImage: true,
  },
  {
    id: 8,
    name: 'Pets',
    icon: '🐶',
    items: '3k',
    subcategories: ['Dogs', 'Cats', 'Supplies'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArqSjRYnu0tIVLIf9qe_ROyrYcAE62U7z5-jxBrR65gwxaAcJiMZ9ilr2hPaD9hprbwvEfNr3NXtOBRsRi7E_16mpMmvVFTeidXfLyK4FjZvpZmKMu7CcUY7PLYf5PXC6k8nZOw5grsX9yilzV8FSXjIRuO6JLQ2DM6zMBm4r-0lHIzC-javW6FNVcB3_CcS67TFRcd0lPl_GMPgi8xbG7YPJK13qHMDOs3wpXeR4r1lhzFXRWMDJswI4vFBhxMuWv0-K1K3UBMQ',
    hasImage: true,
  },
  {
    id: 9,
    name: 'Sports',
    icon: '⚽',
    items: '4.1k',
    subcategories: ['Gym Equipment', 'Team Sports', 'Bicycles'],
    hasImage: false,
    bgGradient: 'from-secondary/20 to-background-dark',
    iconSymbol: 'sports_soccer',
  },
  {
    id: 10,
    name: 'Health & Beauty',
    icon: '💄',
    items: '9k',
    subcategories: ['Skincare', 'Makeup', 'Fragrance'],
    hasImage: false,
    bgGradient: 'from-pink-900/20 to-background-dark',
    iconSymbol: 'spa',
  },
  {
    id: 11,
    name: 'Kids & Babies',
    icon: '👶',
    items: '6.5k',
    subcategories: ['Toys', 'Strollers', 'Clothes'],
    hasImage: false,
    bgGradient: 'from-blue-900/20 to-background-dark',
    iconSymbol: 'child_care',
  },
  {
    id: 12,
    name: 'Agriculture',
    icon: '🌾',
    items: '2k',
    subcategories: ['Farm Machinery', 'Feeds', 'Seeds'],
    hasImage: false,
    bgGradient: 'from-green-900/20 to-background-dark',
    iconSymbol: 'agriculture',
  },
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background-dark">
          <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-wide uppercase mb-6">
            Explore Everything
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Browse All <span className="text-gradient">Categories</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
            Find exactly what you need from our wide range of categories. From electronics to real estate, we have it all.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-dark-surface rounded-xl p-2 shadow-2xl">
                <span className="material-symbols-outlined text-white/40 ml-4 mr-2">search</span>
                <input
                  className="w-full bg-transparent border-none outline-none text-white placeholder-white/40 focus:ring-0 focus:outline-none h-12"
                  placeholder="Search for a specific category or item..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Total Categories</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">50k+</div>
              <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Active Listings</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">2M+</div>
              <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Happy Users</div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-background-dark relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-dark-surface border border-white/5 hover:border-primary/50 transition-all duration-300"
              >
                {category.hasImage ? (
                  <>
                    <img
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                      src={category.image}
                    />
                    <div className="absolute inset-0 card-gradient"></div>
                  </>
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} z-0`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`material-symbols-outlined text-9xl text-white/5`}>{category.iconSymbol}</span>
                    </div>
                    <div className="absolute inset-0 card-gradient z-10"></div>
                  </>
                )}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <div className="flex justify-between items-start mb-2">
                    <div className="size-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/10 group-hover:bg-primary group-hover:border-primary transition-colors">
                      {category.icon}
                    </div>
                    <span className="bg-black/40 backdrop-blur-sm text-white/80 text-xs font-medium px-2 py-1 rounded-md border border-white/10">
                      {category.items} items
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <div className="space-y-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    {category.subcategories.map((sub, idx) => (
                      <div key={idx} className="text-sm text-white/70 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary"></span>
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 to-background-dark border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready to Sell?</h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Got something from one of these categories? Turn your items into cash today. It takes less than 2 minutes to post an ad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/sell"
              className="bg-primary hover:bg-primary/90 text-white text-lg font-bold py-4 px-12 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,105,51,0.4)] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">add_circle</span>
              Post Free Ad
            </Link>
            <Link
              href="/sell"
              className="bg-white/10 hover:bg-white/20 text-white text-lg font-bold py-4 px-12 rounded-full transition-all hover:scale-105 active:scale-95 border border-white/10"
            >
              Learn How
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}