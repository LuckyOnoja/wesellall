'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DealsPage() {
  const [categoryFilter, setCategoryFilter] = useState('All Deals');
  const [sortBy, setSortBy] = useState('Highest Discount');

  const dealsData = [
    {
      title: 'iPhone 15 Pro Max - Natural Titanium',
      currentPrice: '₦1,200,000',
      originalPrice: '₦1,600,000',
      discount: '25% OFF',
      sold: 45,
      stock: 12,
      timeLeft: 'Ends in 2 days',
      timeColor: 'text-red-400',
      progress: 78,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg',
    },
    {
      title: 'Toyota Supra 2022 - Sport Edition',
      currentPrice: '₦45M',
      originalPrice: '₦53M',
      discount: '15% OFF',
      sold: 2,
      stock: 1,
      timeLeft: 'Ends in 5h 30m',
      timeColor: 'text-red-400',
      progress: 66,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7vXhsODNWfxqcBk1Jeyzx0IkGIzX_rhRIpbBId_VZ-Np1CNnW-v19pDazso56gy3ZldTbm3vX9pO5T2SyJeAK-1n8vtYPrBTLBJ9SoQ6XXQLkmplCIwSXMPvzROPNlENVq1EbY_k1T6W5Wc_l9YP8G2fFaekc-E9s2fsZF5DLt_kL0H8GM9QwJy6m-rsww_N81ZTCy13HRCdgWGOT2pPt_HLBVWls7hTnV1ZBfnKXRKY8_zWUyzGmheyW32_1ZWn9GuzalHjBA',
    },
    {
      title: 'Complete Gaming Station Pro',
      currentPrice: '₦450K',
      originalPrice: '₦650K',
      discount: '30% OFF',
      sold: 18,
      stock: 5,
      timeLeft: 'Ends in 1 day',
      timeColor: 'text-orange-400',
      progress: 90,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA',
    },
    {
      title: 'Designer Summer Collection Bundle',
      currentPrice: '₦45K',
      originalPrice: '₦90K',
      discount: '50% OFF',
      sold: 120,
      stock: 80,
      timeLeft: 'Ends in 3 days',
      timeColor: 'text-white/50',
      progress: 40,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX0l9AzYsaTuZ6X55sL03Gwv6NPZPWQzcc7Y32-93SVqo_bcQOMndF6alt9heicaUh5httFV7MchwUzy9hFPWAclv6WI5k3RbzEalbZKfX4OSjstJ3k47Hi82AYb31rdIXIvmxCIj7096WQSRYia48HKcJHTTehlKvC1-F_bD7ZyGnoSw5-yrhWcxoptBjJs0uUXIsx28nDKwN9Rq2a2UfuFkrSCcMqf-Dk3x49HQeWP03xfVS09dXUlv3Ww_u6n_68UhrWy6ncg',
    },
    {
      title: 'Lekki Phase 1 Luxury Shortlet',
      currentPrice: '₦80K',
      originalPrice: '₦90K',
      discount: '10% OFF',
      priceNote: '/night',
      sold: 24,
      stock: 3,
      soldLabel: 'Booked',
      stockLabel: 'Avail',
      timeLeft: 'Ends Today',
      timeColor: 'text-red-400',
      progress: 85,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzlzcQJhWyo3p39-FtBiIoyqcBg3zewCxqZA465TJkwOw18DWhoKdZAsryRWFEB1n1X23z9sN09GzDk5tl7FOkvTfPwDWV4PsYLiDiApCrZqEMwDwrCYOuIGGIs_oK2Djj8jPsvcEVtxOIPVTWGclsx7nt4IfTYBKu97NzFSD7NoUC0bJmNl8EH1nlVBJbo7tuhfWja6SmnL4AWewjBREh1sfjWelVnxbfbQWOVUkwr5IfWByRCro59RMNs3RLs__mislQDO4-Uw',
    },
    {
      title: 'Tech Accessories Bundle',
      currentPrice: '₦15K',
      originalPrice: '₦25K',
      discount: '40% OFF',
      sold: 210,
      stock: 40,
      timeLeft: 'Ends in 2h',
      timeColor: 'text-red-400',
      progress: 95,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMhBaJIbDPqfPHZXBHk3oZqQmTxwhDrd_MrCdUOoKUa1uRfGuCWqfrkn_ZxNUQdW-9ID0XDUFp4yIpCSsplylhmvQ9j9e_7rQ-Fyzk8VT1pljuXcLOYuOaedS4rDiz9WelWeSuntNi279UfHt3WsjZ0QkVODKvZvFc96GLWytnF5b3gUo6Y2E3y7ezw1xu9OFHEmZiSlIUN7ssaLifc7UXcXseGtrTFg_GIbBhZqCqScxmN4cwxnCYdUsyIBUWJXPFS1L4n-ImBw',
    },
    {
      title: 'Modern Scandinavian Sofa Set',
      currentPrice: '₦350K',
      originalPrice: '₦440K',
      discount: '20% OFF',
      sold: 5,
      stock: 2,
      timeLeft: 'Ends in 4 days',
      timeColor: 'text-white/50',
      progress: 50,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Cy89j5Ub_eNPf-6k1m1Ly2HBvoSRAnZ1O45wRKWVCsjAlg2eYO2zceIPDRnUYpOArE0hL7Xw3JlYx6inLqm83FgSOUG3Hp_SJlz1P8nGvCyMXnq_BPfWL-xV93hZDoa0CbwOgKwZv-Qk2ohzQtYIJhBha7BZfwyJsHUUeVCrRf-CsSv1VBvC6qvvDkhWVhieVbwrAvTcNucI8A7glN2zKjdrOts4V4TVqHsix1YG1QuWbE_Nmu5DtcGXotpcX2vk_SBdWZyKEg',
    },
    {
      title: 'Toyota Camry 2021 XSE',
      currentPrice: '₦8.0M',
      originalPrice: '₦8.5M',
      discount: '5% OFF',
      sold: 1,
      stock: 1,
      timeLeft: 'Ends in 7 days',
      timeColor: 'text-white/50',
      progress: 50,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ',
    },
  ];

  const categories = ['All Deals', 'Tech', 'Fashion', 'Home', 'Beauty'];

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#d9441e] via-[#ff6933] to-[#ff9655]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-black/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg">
            <span className="material-symbols-outlined text-sm animate-pulse">bolt</span> Live Flash Sale
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-sm">
            Mega Flash Sales
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
            Grab these exclusive deals before they are gone forever. Discounts up to <span className="font-bold underline decoration-4 decoration-white/30">70% OFF</span> on electronics, fashion, and home goods.
          </p>
          {/* Countdown Timer */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-xl p-4 w-20 h-24 md:w-24 md:h-28 flex items-center justify-center mb-2 shadow-2xl">
                <span className="text-4xl md:text-5xl font-mono font-bold">02</span>
              </div>
              <span className="text-xs uppercase font-bold tracking-widest opacity-80">Hours</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold self-start mt-4 opacity-50">:</div>
            <div className="flex flex-col items-center">
              <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-xl p-4 w-20 h-24 md:w-24 md:h-28 flex items-center justify-center mb-2 shadow-2xl">
                <span className="text-4xl md:text-5xl font-mono font-bold">45</span>
              </div>
              <span className="text-xs uppercase font-bold tracking-widest opacity-80">Mins</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold self-start mt-4 opacity-50">:</div>
            <div className="flex flex-col items-center">
              <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-xl p-4 w-20 h-24 md:w-24 md:h-28 flex items-center justify-center mb-2 shadow-2xl">
                <span className="text-4xl md:text-5xl font-mono font-bold text-white">18</span>
              </div>
              <span className="text-xs uppercase font-bold tracking-widest opacity-80">Secs</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Shop All Deals
            </button>
            <button className="bg-black/20 hover:bg-black/30 backdrop-blur-md text-white border border-white/30 font-bold py-3 px-8 rounded-xl transition-all hover:-translate-y-1">
              Set Reminder
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-16 z-40 bg-background-dark/95 backdrop-blur border-b border-white/10 py-4 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  categoryFilter === cat
                    ? 'bg-primary text-white font-bold'
                    : 'bg-dark-surface hover:bg-white/5 border border-white/10 text-white/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-white/50 text-sm hidden md:inline">Sort by:</span>
            <select
              className="bg-dark-surface border border-white/10 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full md:w-auto p-2.5"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Highest Discount</option>
              <option>Ending Soonest</option>
              <option>Price: Low to High</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-16 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealsData.map((deal, index) => (
              <div
                key={index}
                className="group bg-dark-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(255,105,51,0.15)] flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <img
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={deal.img}
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded shadow-lg">
                    {deal.discount}
                  </div>
                  <button className="absolute top-3 right-3 size-8 rounded-full bg-black/40 backdrop-blur hover:bg-primary text-white flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-lg mb-1 leading-snug line-clamp-2">{deal.title}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-primary text-xl font-black">
                      {deal.currentPrice}
                      {deal.priceNote && <span className="text-xs font-normal text-white/60">{deal.priceNote}</span>}
                    </span>
                    <span className="text-white/40 text-sm line-through">{deal.originalPrice}</span>
                  </div>
                  <div className="mt-auto">
                    <div className="flex justify-between text-[10px] text-white/60 mb-1 font-medium uppercase tracking-wide">
                      <span>{deal.soldLabel || 'Sold'}: {deal.sold}</span>
                      <span>{deal.stockLabel || 'Stock'}: {deal.stock}</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                        style={{ width: `${deal.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className={`flex items-center gap-1.5 ${deal.timeColor} text-xs font-bold`}>
                        {deal.timeLeft.includes('2h') && (
                          <span className="material-symbols-outlined text-[16px] animate-pulse">timer</span>
                        )}
                        {!deal.timeLeft.includes('2h') && (
                          <span className="material-symbols-outlined text-[16px]">timer</span>
                        )}
                        {deal.timeLeft}
                      </div>
                      <button className="text-primary hover:text-white text-sm font-bold transition-colors">
                        {deal.soldLabel === 'Booked' ? 'Book' : 'Buy Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 rounded-xl border border-white/10 bg-dark-surface hover:bg-white/5 text-white font-semibold transition-colors flex items-center gap-2">
              Load More Deals <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#1a0f0b] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
            <span className="material-symbols-outlined text-3xl">mark_email_unread</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">Never Miss a Flash Sale</h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Get notified about the hottest deals before everyone else. Join 50,000+ shoppers who save big every day.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              className="flex-1 bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-primary focus:border-primary placeholder:text-white/30 transition-all"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/20 transition-transform active:scale-95 whitespace-nowrap"
              type="button"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-white/30 mt-4">We respect your inbox. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
