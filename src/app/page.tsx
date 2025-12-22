'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('All Nigeria');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (location !== 'All Nigeria') params.set('location', location);
    router.push(`/products?${params.toString()}`);
  };

  const categories = [
    { name: 'Vehicles', icon: 'directions_car', description: 'Cars, Buses, Trucks' },
    { name: 'Real Estate', icon: 'real_estate_agent', description: 'Houses, Land, Apartments' },
    { name: 'Electronics', icon: 'devices', description: 'Phones, Laptops, Audio' },
    { name: 'Fashion', icon: 'checkroom', description: 'Clothing, Shoes, Bags' },
    { name: 'Jobs', icon: 'work', description: 'Full-time, Part-time' },
    { name: 'Services', icon: 'handyman', description: 'Cleaning, Repair, Movers' },
    { name: 'Home & Garden', icon: 'chair', description: 'Furniture, Appliances' },
    { name: 'Pets', icon: 'pets', description: 'Dogs, Cats, Accessories' },
  ];


  const featuredListings = [
    {
      title: 'Toyota Camry 2021',
      price: '₦ 8.5M',
      location: 'Lagos',
      time: 'Posted 2h ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ',
      description: 'Clean title, foreign used, low mileage. Perfect condition...',
    },
    {
      title: '3 Bedroom Flat',
      price: '₦ 45M',
      location: 'Lekki, Lagos',
      time: 'Posted 5h ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzlzcQJhWyo3p39-FtBiIoyqcBg3zewCxqZA465TJkwOw18DWhoKdZAsryRWFEB1n1X23z9sN09GzDk5tl7FOkvTfPwDWV4PsYLiDiApCrZqEMwDwrCYOuIGGIs_oK2Djj8jPsvcEVtxOIPVTWGclsx7nt4IfTYBKu97NzFSD7NoUC0bJmNl8EH1nlVBJbo7tuhfWja6SmnL4AWewjBREh1sfjWelVnxbfbQWOVUkwr5IfWByRCro59RMNs3RLs__mislQDO4-Uw',
      description: 'Serviced apartment with swimming pool and gym...',
    },
    {
      title: 'iPhone 15 Pro Max',
      price: '₦ 1.2M',
      location: 'Abuja',
      time: 'Posted 1d ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg',
      description: 'Brand new, sealed. 256GB, Natural Titanium...',
    },
    {
      title: 'Gaming Setup',
      price: '₦ 450K',
      location: 'Port Harcourt',
      time: 'Posted 3d ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA',
      description: 'Complete setup with monitor, keyboard and mouse...',
    },
  ];


  return (
    <div className="bg-white text-slate-800 font-body overflow-x-hidden w-full max-w-full" style={{ color: '#1e293b' }}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-0 overflow-hidden bg-white">
        {/* Background - Image on Mobile, Video on Desktop for better performance */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Image Background - Mobile (faster loading) */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/hero-bg.jpg"
              alt="Nigerian marketplace background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Video Background - Desktop (more engaging) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          
          {/* Fallback gradient if no image/video */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-white to-brand-orange/5"></div>
          
          {/* Overlay for better text readability - responsive opacity */}
          <div className="absolute inset-0 bg-white/70 sm:bg-white/60 backdrop-blur-[2px]"></div>
          
          {/* Gradient blur effects on top */}
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-[80px]"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-brand-orange/5 blur-[60px]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6 sm:gap-8 max-w-5xl">
          <div className="space-y-4 sm:space-y-6 w-full">
            <span className="inline-block py-1.5 px-3 sm:px-4 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] sm:text-xs font-bold tracking-wide uppercase">
              🇳🇬 Nigeria's #1 Marketplace
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-brand-blue font-display px-2">
              Buy & Sell Anything <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue/70">Securely in Nigeria.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-body px-4">
              From Lagos to Abuja, connect with millions of buyers and sellers. Trusted by over 2 million Nigerians.
            </p>
          </div>
          <div className="w-full max-w-3xl mt-4 sm:mt-6 px-2 sm:px-0">
            <form onSubmit={handleSearch} className="bg-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border-2 border-brand-blue/10 shadow-xl shadow-brand-blue/5 hover:border-brand-blue/30 transition-colors">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 flex items-center h-12 sm:h-14 w-full px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-blue/20 transition-all">
                  <span className="material-symbols-outlined text-brand-blue mr-2 sm:mr-3 text-lg sm:text-xl">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 w-full h-full focus:ring-0 text-base sm:text-lg"
                    placeholder="Search for cars, phones..."
              />
          </div>
                <div className="h-px sm:h-8 w-full sm:w-px bg-slate-200 sm:bg-slate-200 hidden sm:block"></div>
                <div className="flex items-center h-12 sm:h-14 w-full sm:w-auto px-3 sm:px-4 rounded-lg sm:rounded-xl bg-white text-slate-600 text-xs sm:text-sm font-medium cursor-pointer hover:bg-slate-50 transition-colors whitespace-nowrap">
                  <span className="material-symbols-outlined text-brand-orange text-base sm:text-lg mr-2">location_on</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                    className="bg-transparent border-none outline-none cursor-pointer text-slate-600 text-xs sm:text-sm w-full sm:w-auto"
              >
                <option>All Nigeria</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
                  <span className="material-symbols-outlined text-base sm:text-lg ml-2 text-slate-400">expand_more</span>
              </div>
            <button
              type="submit"
                  className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-lg sm:rounded-xl shadow-lg shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-base sm:text-lg touch-manipulation"
            >
                  Search
              </button>
              </div>
          </form>
          </div>
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2 text-brand-blue font-bold tracking-wide text-[10px] sm:text-xs md:text-sm lg:text-base uppercase px-4">
            <span className="material-symbols-outlined text-brand-orange text-sm sm:text-base">bolt</span>
            <span className="whitespace-nowrap">Post Free - Sell Fast - Cash Out Instantly</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 text-slate-400 px-4">
            <div className="text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-brand-blue text-base sm:text-lg">verified_user</span> 
              <span className="whitespace-nowrap">Verified Sellers</span>
            </div>
            <div className="text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-brand-blue text-base sm:text-lg">payments</span> 
              <span className="whitespace-nowrap">Secure Escrow</span>
            </div>
            <div className="text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-brand-blue text-base sm:text-lg">rocket_launch</span> 
              <span className="whitespace-nowrap">Fast Selling</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-light" id="categories">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 md:mb-10 border-b border-slate-200 pb-3 sm:pb-4 gap-3 sm:gap-0">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue mb-1 sm:mb-2 font-display">Marketplace for Nigeria by Nigeria</h2>
              <p className="text-sm sm:text-base text-slate-500">Find exactly what you are looking for</p>
            </div>
            <Link href="/categories" className="text-brand-blue hover:text-brand-orange transition-colors flex items-center gap-1 text-xs sm:text-sm font-bold whitespace-nowrap touch-manipulation">
              View All <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
            </Link>
            </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories?cat=${encodeURIComponent(cat.name.toLowerCase())}`}
                className="group bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-brand-blue/30 transition-all duration-300 p-3 sm:p-4 flex flex-col items-center text-center gap-2 sm:gap-4 touch-manipulation active:scale-95"
              >
                <div className="size-12 sm:size-14 md:size-16 rounded-full bg-brand-blue/5 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                  <span className="material-symbols-outlined text-brand-blue text-2xl sm:text-2xl md:text-3xl">{cat.icon}</span>
                </div>
                <div className="space-y-0.5 sm:space-y-1 w-full">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-800 group-hover:text-brand-blue transition-colors line-clamp-1">{cat.name}</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROMOTIONS ================= */}
      <section className="py-8 sm:py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-lg sm:rounded-xl bg-brand-light border border-slate-200 p-6 sm:p-8 flex flex-col items-start justify-center min-h-[140px] sm:min-h-[160px] relative overflow-hidden group hover:border-brand-blue/30 transition-colors touch-manipulation active:scale-[0.98]">
              <div className="absolute right-0 bottom-0 opacity-10 text-7xl sm:text-9xl text-brand-blue font-black -mr-2 sm:-mr-4 -mb-2 sm:-mb-4 rotate-12">Ad</div>
              <span className="text-brand-orange text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Sponsored</span>
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-1">Targeted Ads</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">Reach customers in Lagos</p>
              <Link href="#" className="text-brand-blue font-semibold text-xs sm:text-sm hover:underline touch-manipulation">Learn More</Link>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-brand-blue/5 border border-brand-blue/10 p-6 sm:p-8 flex flex-col items-start justify-center min-h-[140px] sm:min-h-[160px] relative overflow-hidden group touch-manipulation active:scale-[0.98]">
              <div className="absolute right-3 sm:right-4 top-3 sm:top-4 size-10 sm:size-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-brand-blue text-lg sm:text-xl">trending_up</span>
              </div>
              <span className="text-brand-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Boost Sales</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">Promote Your Biz</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">Get 5x more views today</p>
              <button className="bg-brand-blue text-white text-[10px] sm:text-xs font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-brand-blue/90 touch-manipulation">Start Now</button>
      </div>
            <div className="rounded-lg sm:rounded-xl bg-brand-light border border-slate-200 p-6 sm:p-8 flex flex-col items-start justify-center min-h-[140px] sm:min-h-[160px] relative overflow-hidden group hover:border-brand-orange/30 transition-colors touch-manipulation active:scale-[0.98] sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-orange/5"></div>
              <span className="text-brand-orange text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Limited Time</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">Premium Features</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">50% off for new sellers</p>
              <Link href="#" className="text-brand-orange font-semibold text-xs sm:text-sm hover:underline flex items-center gap-1 touch-manipulation">
                Claim Offer <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
              </Link>
        </div>
            </div>
          </div>
      </section>

      {/* ================= FEATURED LISTINGS ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-light" id="featured">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 text-brand-blue">
            <span className="material-symbols-outlined text-brand-orange text-2xl sm:text-3xl">local_fire_department</span>
            <span>Featured Listings</span>
          </h2>
          <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 sm:pb-8 scrollbar-hide snap-x snap-mandatory -mx-4 sm:-mx-0 px-4 sm:px-0 w-full max-w-full">
            {featuredListings.map((listing, idx) => (
              <div
                key={idx}
                className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-center bg-white border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 touch-manipulation active:scale-[0.98]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    alt={listing.title}
                    src={listing.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 320px"
                  />
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-brand-orange text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full shadow-md">
                    {listing.price}
                  </div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-brand-blue text-xs sm:text-sm">location_on</span> 
                    <span className="whitespace-nowrap">{listing.location}</span>
        </div>
          </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-1">{listing.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3 line-clamp-2">{listing.description}</p>
                  <div className="flex justify-between items-center border-t border-slate-100 pt-2 sm:pt-3">
                    <span className="text-[10px] sm:text-xs text-slate-400">{listing.time}</span>
                    <button className="text-brand-blue hover:text-brand-orange text-xs sm:text-sm font-bold transition-colors touch-manipulation">View Details</button>
            </div>
          </div>
        </div>
            ))}
              </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden" id="how-it-works">
        <div className="absolute inset-0 hidden md:flex justify-center items-center opacity-5 pointer-events-none">
          <svg className="w-full h-full text-brand-blue" preserveAspectRatio="none" viewBox="0 0 100 20">
            <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.5"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 text-brand-blue font-display px-2">Start Selling in Minutes</h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto px-4">Our streamlined process makes it easy to turn your items into cash.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative max-w-full">
            <div className="flex flex-col items-center text-center group w-full">
              <div className="size-20 sm:size-24 rounded-xl sm:rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center mb-4 sm:mb-6 shadow-xl group-hover:border-brand-blue/50 group-hover:shadow-brand-blue/10 transition-all duration-500 relative touch-manipulation mx-auto">
                <span className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 size-7 sm:size-8 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold border-[3px] sm:border-4 border-white z-10">1</span>
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-brand-blue/60 group-hover:text-brand-blue transition-colors">photo_camera</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800">Snap a Photo</h3>
              <p className="text-xs sm:text-sm text-slate-500 px-2 sm:px-4 max-w-full">Take clear photos of your item. Good lighting helps it sell faster.</p>
            </div>
            <div className="flex flex-col items-center text-center group relative w-full">
              <div className="hidden sm:block absolute top-10 sm:top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
              <div className="size-20 sm:size-24 rounded-xl sm:rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center mb-4 sm:mb-6 shadow-xl group-hover:border-brand-blue/50 group-hover:shadow-brand-blue/10 transition-all duration-500 relative touch-manipulation mx-auto">
                <span className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 size-7 sm:size-8 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold border-[3px] sm:border-4 border-white z-10">2</span>
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-brand-blue/60 group-hover:text-brand-blue transition-colors">edit_note</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800">Add Details</h3>
              <p className="text-xs sm:text-sm text-slate-500 px-2 sm:px-4 max-w-full">Set a price and write a description. Be honest about the condition.</p>
            </div>
            <div className="flex flex-col items-center text-center group w-full">
              <div className="size-20 sm:size-24 rounded-xl sm:rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center mb-4 sm:mb-6 shadow-xl group-hover:border-brand-blue/50 group-hover:shadow-brand-blue/10 transition-all duration-500 relative touch-manipulation mx-auto">
                <span className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 size-7 sm:size-8 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold border-[3px] sm:border-4 border-white z-10">3</span>
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-brand-blue/60 group-hover:text-brand-blue transition-colors">waving_hand</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800">Get Paid</h3>
              <p className="text-xs sm:text-sm text-slate-500 px-2 sm:px-4 max-w-full">Chat with buyers, agree on a price, and get paid securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-light border-y border-slate-200" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 text-brand-blue font-display">Choose Your Plan</h2>
            <p className="text-sm sm:text-base text-slate-500">Scale your selling with our premium tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch md:items-center">
            <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Basic</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">For casual sellers</p>
              <div className="text-3xl sm:text-4xl font-black text-brand-blue mb-4 sm:mb-6">Free</div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-600 grow">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base sm:text-lg">check</span> Post 3 ads/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base sm:text-lg">check</span> Standard visibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base sm:text-lg">check</span> Basic support
                </li>
              </ul>
              <button className="w-full py-2.5 sm:py-3 rounded-lg border border-brand-blue/20 text-brand-blue font-bold hover:bg-brand-blue/5 transition-colors touch-manipulation text-sm sm:text-base">Start Free</button>
            </div>
            <div className="bg-white border-2 border-brand-blue rounded-xl sm:rounded-2xl p-6 sm:p-8 transform md:scale-105 shadow-xl shadow-brand-blue/10 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-lg">POPULAR</div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-blue mb-2">Power Seller</h3>
              <p className="text-brand-orange text-xs sm:text-sm mb-4 sm:mb-6">For serious merchants</p>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 sm:mb-6">₦5,000<span className="text-base sm:text-lg font-normal text-slate-400">/mo</span></div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-700 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-blue text-base sm:text-lg">check_circle</span> Unlimited ads
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-blue text-base sm:text-lg">check_circle</span> 5x more visibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-blue text-base sm:text-lg">check_circle</span> Verified Badge
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-blue text-base sm:text-lg">check_circle</span> Priority Support
                </li>
              </ul>
              <button className="w-full py-2.5 sm:py-3 rounded-lg bg-brand-blue hover:bg-brand-blue/90 text-white font-bold shadow-lg transition-colors touch-manipulation text-sm sm:text-base">Get Started</button>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Business</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">For large stores</p>
              <div className="text-3xl sm:text-4xl font-black text-brand-blue mb-4 sm:mb-6">₦20,000<span className="text-base sm:text-lg font-normal text-slate-400">/mo</span></div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-600 grow">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base sm:text-lg">check</span> Dedicated Storefront
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base sm:text-lg">check</span> Advanced Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base sm:text-lg">check</span> API Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-base sm:text-lg">check</span> Account Manager
                </li>
              </ul>
              <button className="w-full py-2.5 sm:py-3 rounded-lg border border-brand-blue/20 text-brand-blue font-bold hover:bg-brand-blue/5 transition-colors touch-manipulation text-sm sm:text-base">Contact Sales</button>
              </div>
            </div>
          </div>
      </section>

      {/* ================= NATIONWIDE COVERAGE ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="md:w-1/2 space-y-4 sm:space-y-6 w-full">
            <span className="text-brand-orange font-bold tracking-wider uppercase text-xs sm:text-sm">Nationwide Coverage</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 font-display">Connecting Buyers <br className="hidden sm:block"/> Across Nigeria</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-500">Whether you are in the hustle of Lagos or the hills of Enugu, WeSellAll bridges the gap between you and your next customer.</p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-brand-light border border-slate-200">
                <div className="text-xl sm:text-2xl font-bold text-brand-blue">36+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">States</div>
              </div>
              <div className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-brand-light border border-slate-200">
                <div className="text-xl sm:text-2xl font-bold text-brand-blue">2M+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">Users</div>
              </div>
              <div className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-brand-light border border-slate-200">
                <div className="text-xl sm:text-2xl font-bold text-brand-blue">500K+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">Listings</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[300px] sm:h-[350px] md:h-[400px] w-full bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex items-center justify-center overflow-hidden group border border-slate-100 shadow-xl">
            <div className="absolute inset-0 bg-white"></div>
                  <Image
              alt="Map of Nigeria outline"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6RHEy09jFFu6DH2-WRj7FlZjr3PUa-YkeEogANzYXAbVdgnMhr6D73BX91sRQVV8voSUjPphP2qiAbWsejcd4U10J78tWEedTgdzGkknRGnbCc5V1Xd41iODwnmRyXxZOd5euH9oQjyzaeMUL9WoRsNGgMEjNiRVrUMbMN6FCA71Blz4y-FzV_H4wMkdx7F3lh1bHg9Q5olhixK-APBDEtnt1OtPxU2LA0t-XDyYXWfpLmLgScXPP26fLhm0eH1bVhEbgnNDK9Q"
              fill
              className="h-full w-auto object-contain opacity-20 transition-opacity duration-500"
            />
            <div className="absolute top-[65%] left-[20%] group/pin cursor-pointer z-10">
              <div className="size-4 bg-brand-orange rounded-full animate-pulse shadow-lg shadow-brand-orange/30"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                Lagos (800k+ Ads)
              </div>
            </div>
            <div className="absolute top-[45%] left-[50%] group/pin cursor-pointer z-10">
              <div className="size-4 bg-brand-blue rounded-full animate-pulse shadow-lg shadow-brand-blue/30"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                Abuja (450k+ Ads)
              </div>
              </div>
            <div className="absolute top-[75%] right-[30%] group/pin cursor-pointer z-10">
              <div className="size-3 bg-slate-400 rounded-full shadow-md"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                Port Harcourt
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-light border-t border-slate-200 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 tracking-tighter text-brand-blue font-display px-2">Ready to Sell?</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-6 sm:mb-8 md:mb-10 px-4">Join thousands of Nigerians making money on WeSellAll today. It's free to get started.</p>
          <Link
            href="/register"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white text-sm sm:text-base md:text-lg font-bold py-3 sm:py-4 px-8 sm:px-10 md:px-12 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-orange/20 inline-block touch-manipulation"
          >
            Create Free Account
          </Link>
            </div>
      </section>
    </div>
  );
}
