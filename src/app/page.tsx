'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [location, setLocation] = useState('All Nigeria');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (category !== 'All Categories') params.set('category', category);
    if (location !== 'All Nigeria') params.set('location', location);
    router.push(`/products?${params.toString()}`);
  };

  const categories = [
    { name: 'Fashion', icon: 'checkroom', count: '1,203 Ads' },
    { name: 'Vehicles', icon: 'directions_car', count: '8,450 Ads' },
    { name: 'Property', icon: 'home_work', count: '5,320 Ads' },
    { name: 'Electronics', icon: 'smartphone', count: '12k Ads' },
    { name: 'Jobs', icon: 'work', count: '450 Ads' },
    { name: 'Pets', icon: 'pets', count: '200 Ads' },
  ];

  const featuredPromos = [
    {
      title: 'Upgrade Tech',
      subtitle: 'Latest smartphones at best prices.',
      badge: 'NEW',
      gradient: 'from-primary/90',
      link: '/products?category=Electronics',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqZgJZ_IejJMOTq5wPaI57lO9XkGyBCGhD13czEs--1z7Gj70flUUqjVpKRvluzEn3dAWtNG9xBAISmGCO5Ktd6GZD8kVR7Ywo5ifHzez6afaNVhDl4Lsxe9UlvP5pgNHIZmZsv35PwxGDDpsARzohsHqkA_WBw3UOGUoRa1TpXR5KvuUYUQZur3ZHCnCSpxRvL6UE0dyzYBoKBu6lHtAGP24dUbKIugu1pg-yFVHWYb3kuknd5zOMZQylW9pMCeMk8hkhbcfaPg',
    },
    {
      title: 'Dream Homes',
      subtitle: 'Apartments for rent in Lagos.',
      badge: 'HOT',
      gradient: 'from-slate-900/80',
      link: '/products?category=Real Estate',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADyzsT0Z8CP2xYycCnm6cPRVXHOMXoE4_zSTHJrHabxjUd33AgFTlwGAh5kf3KSHhB7ipEGL-5f9nVJm0zRs_WdLqZ9jkILOt5_o3F_46N1mbnAd9TB8BBnaseiOvjVNXC8zIeumxxqjau0xLmqobxJIu-MhIMvyQ6l5JdTK2hmMjwAXr-3NBx6RQ5YOHLAXtRN_wO-AwS1i4wqVKPEPB2Rd_p-UJKzzaSQTr62D8d6wmUqnXfCYoIUm2DbsnUDkYdTeGe_CzS0Q',
    },
    {
      title: 'Fashion Week',
      subtitle: 'Update your wardrobe today.',
      badge: 'TRENDING',
      gradient: 'from-secondary/90',
      link: '/products?category=Fashion',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnFwGrXab0Hyhj5bxx_JsBYuc8fYkaMt5gbA1PEuAvBmmuRx31-6f3UG5ydQ8wrIFj_WVWrvZuZxMEQ2f7dvrLDuEuqB21ZbZr5s3wCG8T8fLyFZ7DPitcxU7GiprB_f-Ck74_ad1HUWRJ9rgymP2Sm1WzhbTTwidLbJHoKH14-ccOBtnOzTYrl7oHzIwG4aGA0_9BltPUxQW2Mn2T8fL4KyJz9CZXL6uxU7rijyT9p_iG45hVSZVLAvSUxzxm9Po0QS2hBh-l-A',
    },
  ];

  const premiumListings = [
    {
      title: 'Toyota Camry 2021 Clean',
      price: '₦ 8,500,000',
      category: 'Vehicles',
      location: 'Lagos',
      time: '2 hrs ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkRC1-AH3FfUWOSZ5Mpekpxbi0b8u-gsD2syI6Hr3TOqSRal2kM6jplGRbFzFjzKv7-cK6Eioo9XTodgn8OwEOeKPZU0Lpe-93lYBn4g7bzVJBLzCewz7azaxuRfxt-AsBIHxTtnhiTr7N0AzsW4k5P7_41RuS3LxcaAL8SQY9NAWK5Z8SxSBAhsa8H4SePXyNyoFrm5OrrulzzSBx7tgle90fGg8UmKwPFFfVnr7uAPjeIiQA02dE7quMMKVaeXk-4pfQ66gmrg',
      premium: true,
    },
    {
      title: 'iPhone 13 Pro Max 256GB',
      price: '₦ 650,000',
      category: 'Mobiles',
      location: 'Abuja',
      time: '5 hrs ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiZIo_i7YongNLsHoSG-lA_6TvHb8NTtWem_1UpsT-WlZZ8Y6sWUUqnorTV24LUYEs50tLR8B--qrD3Db8kEjokEXPcmFr3-IZ78whG_Ox6QbYiIjkJR-CWnZbHoxt53vFSM7jVRZv5fE27k_XD2bU-72yqE2NHGNCsNJ2C3dIHEsWoRWly3q6F6pm5vECeTg6TvaAi3HrNM2CjTkbex_xuPa5jRiFUXjoV8-TXxSrOmW-Gg6pRsoSulaZ0ICZ3dhspl8G2EbyNg',
      premium: false,
    },
    {
      title: '2 Bedroom Flat Serviced',
      price: '₦ 2,500,000/yr',
      category: 'Real Estate',
      location: 'Lekki',
      time: '1 day ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnMWY_avjgNS8awyPlTDFC7QxyZGa_cZKIMRiV29vdYGScK-WeD5bbFMYiYd9tcYU-lJY6nJxwFvzOLfCBOn7RQ083j-4HSXE6bJdjnNqZ2JK8fUkax6yKBIKFDq-Ms5SCn0dna4cR84nIwCQtgVTFaQmB4uPT5O8ODMYj2wUrE6sVLYycyQmy2vZvaYvTx9c5npbeSDvNIIw1OmiebokZmA3-WFX9Hici9b2m58gWDxg--4VxhXL26av6NBkUzcwsWojrvuxhfg',
      premium: true,
    },
    {
      title: 'Sony Noise Cancelling',
      price: '₦ 45,000',
      category: 'Electronics',
      location: 'Ikeja',
      time: '3 hrs ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgHAKyDJ1r0hJoeIJPM5QdT8D57SKp91ux0uwV4Y-pOf-CsMjMcpDPq6BPOBcJOTyUfjCacceZAMKE2V276Vb6QWF_lJbaLPRE45kRzDwu_EkCAdRBDMumqS9eCjYYQfXTtEQOZxMkqgbul0zGDb5shPvCAyomHO5kaU1W9MKhM63gO0t3VE2Sps_U8C9ZehMh9H2ZDiHwpKgh72B-kBbD4QaDDxJEuMaTnGSD8Pq2qRz3EdrZdBC4hOWVzEPm6NOtGDvrTcc3Mw',
      premium: false,
    },
  ];

  const recentListings = [
    {
      title: 'Cute Golden Retriever',
      price: '₦ 120,000',
      category: 'Pets',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlRmsgcG84omRCSfmTcI8FeSlpEqSqzOTAbb2o88sPbxPwkaEGJfT56XwbKNwhyyRzQSnnOEi_T534yyztvM6WczUQsr6HbL2ztOnZoICIPkgroLnB4HeHIa0s_gPaO_WBV2ss6PSEYw2UANTuETBWF_IpmFmAMShnNDeWkqlyIwgkoAWJVaREp38Rb_FAv0H9gbtXWO6q2Nl1xBlCx-1W_6zmKk3oPhIpO6QZbbMq7PYYa52c9nsd--Yi4diafnb-MUBhpUtlww',
    },
    {
      title: 'Nike Air Max Red',
      price: '₦ 35,000',
      category: 'Fashion',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDFwktxEKQSIp9vyudnxlU_--ZXI7H0H-mh5H8hFytImskqszbE7ZsVpJHa-iWaMRTzhQ1Ww9UV7nsraD_mP5oH1AnhEtr2Ct2vs6Py88J5v2CpM5AQWpbiGNKMsk94Esbh5V5Waw8d2Hf1gnmnhC-7DSuz4pdgH2kj0YjJIlQoVS_WfoZDx8YR82tl_dftJqDAkV3SNPxEjnz3LjIzMqckSftdIrUUdZuiBWRn7s_2cLdM1ba3Z8n3mxCWUwXll6tln4yDW50wQ',
    },
    {
      title: 'MacBook Pro M1 Used',
      price: '₦ 850,000',
      category: 'Computer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeHwNlvmsCXli_AQW2KI0Ez7jh4Ley1ar-w7DShWPGKR5Mrfde6UdajWE31_rPUb-hXKlTGkdfcK0SiFGP33ZuZOk-vVGadKhapj5_XCbcjEr7lQ8dVAfedXaoBz_geHlFG2D_oMl_MX037D8AgDDYT13kKBggknALndhNfwydUkHbOBr9WYuIb3yYIn5PcpGUiArOZ0GW8DIZKbrxDfYWbl4Yk8ixzFPUsuCXhQJjESI0jAF4EqXRTdGNSoLea1WvCiUhSOTGkg',
    },
    {
      title: 'Modern Sofa Set',
      price: '₦ 150,000',
      category: 'Home & Garden',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDny9ilLxrtaPAQCkRbVBn7EICCPmj8Lmjbtzm3xKIRM9njx1jFAUok8JdOKB0It-hj8_AB-VO3Hd-Mk6fkBRxoc8wDk-HUqsKLWIMYzTC7oXTm-JQBzgxgX6UHknrVaToi22_B5Df-z4Dxzpw3HyXIxZkzktCqXwRhHnyM3VfZTCznffr8tiAjYTS1a7KEEM-bHvvHFtJYCkXcmOs81jbydFhHcXRGOlTZikesQ5HQJ6Bl94EP3pItRcDql85SdSl34fDsABu63g',
    },
  ];

  return (
    <div className="bg-background-light text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-surface-light overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full text-primary" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight mb-4">
            Post Free - Sell Fast - <span className="text-secondary">Cash Out Instantly</span>
            </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mb-10">
            Join thousands of Nigerians buying and selling everyday. The safest marketplace for everything from phones to property.
          </p>
          <form onSubmit={handleSearch} className="w-full max-w-5xl bg-white p-3 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2">
            <div className="grow flex items-center px-4 py-2 bg-slate-50 rounded-xl">
              <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none focus:ring-0 focus:outline-none text-slate-700 placeholder-slate-400 text-sm md:text-base h-full"
                placeholder="What are you looking for?"
              />
          </div>
            <div className="md:w-1/4 flex items-center px-4 py-2 bg-slate-50 rounded-xl border-l-0 md:border-l border-slate-200">
              <span className="material-symbols-outlined text-slate-400 mr-3">category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent border-none outline-none focus:ring-0 focus:outline-none text-slate-700 text-sm md:text-base cursor-pointer"
              >
                <option>All Categories</option>
                <option>Vehicles</option>
                <option>Real Estate</option>
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
              </div>
            <div className="md:w-1/4 flex items-center px-4 py-2 bg-slate-50 rounded-xl border-l-0 md:border-l border-slate-200">
              <span className="material-symbols-outlined text-slate-400 mr-3">location_on</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent border-none outline-none focus:ring-0 focus:outline-none text-slate-700 text-sm md:text-base cursor-pointer"
              >
                <option>All Nigeria</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
              </div>
            <button
              type="submit"
              className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl shadow-md transition duration-200 flex items-center justify-center gap-2 outline-none focus:outline-none"
            >
              SEARCH
              </button>
          </form>
          </div>
        </div>

      {/* ================= CATEGORIES SECTION ================= */}
      <div className="bg-background-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Browse by Category</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Marketplace for Nigeria by Nigeria</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories?cat=${encodeURIComponent(cat.name.toLowerCase())}`}
                className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-primary hover:shadow-md transition duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <span className={`material-symbols-outlined text-primary group-hover:text-white text-2xl`}>{cat.icon}</span>
                </div>
                <span className="text-slate-700 font-medium group-hover:text-primary transition-colors">{cat.name}</span>
                <span className="text-xs text-slate-400 mt-1">{cat.count}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/categories" className="text-primary font-semibold hover:underline flex items-center justify-center w-full gap-1">
              View All Categories <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
                  </div>
                </div>
              </div>

      {/* ================= FEATURED PROMOTIONS ================= */}
      <div className="bg-surface-light py-12 border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPromos.map((promo, idx) => (
              <Link
                key={idx}
                href={promo.link}
                className="relative overflow-hidden rounded-xl h-48 group"
              >
                <Image
                  alt={promo.title}
                  src={promo.image}
                  fill
                  className="object-cover transform group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${promo.gradient} to-transparent flex flex-col justify-center px-6`}>
                  <span className={`bg-${promo.badge === 'NEW' ? 'secondary' : promo.badge === 'HOT' ? 'white' : 'primary'} ${promo.badge === 'HOT' ? 'text-slate-900' : 'text-white'} text-xs font-bold px-2 py-1 rounded w-fit mb-2`}>
                    {promo.badge}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-1">{promo.title}</h3>
                  <p className={`${promo.badge === 'NEW' ? 'text-blue-100' : promo.badge === 'HOT' ? 'text-slate-200' : 'text-orange-100'} text-sm mb-4`}>
                    {promo.subtitle}
                  </p>
                  <span className="text-white font-semibold underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary transition">
                    {promo.badge === 'NEW' ? 'Shop Now' : promo.badge === 'HOT' ? 'Browse' : 'Explore'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PREMIUM & TRENDING ADS ================= */}
      <div className="bg-background-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Premium & Trending Ads</h2>
              <p className="text-slate-500 mt-1">The most viewed listings in the last 24 hours.</p>
        </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white shadow-md">All</button>
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">
                Cars
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">
                Phones
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumListings.map((listing, idx) => (
              <Link
                key={idx}
                href="/products"
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  {listing.premium && (
                    <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded z-10">
                      PREMIUM
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-black/50 text-white p-1 rounded-full z-10 cursor-pointer hover:bg-red-500 transition">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                  </span>
                  <Image
                    alt={listing.title}
                    src={listing.image}
                    fill
                    className="object-cover transform group-hover:scale-110 transition duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
        </div>
                <div className="p-4 flex flex-col grow">
                  <div className="text-xs text-slate-400 mb-1">
                    {listing.category} • {listing.location}
          </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-1">{listing.title}</h3>
                  <div className="mt-auto">
                    <p className="text-xl font-bold text-primary">{listing.price}</p>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span> {listing.time}
                      </span>
                      <span className="text-primary text-sm font-medium hover:text-secondary transition">View Details</span>
            </div>
          </div>
        </div>
              </Link>
            ))}
              </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Load More Listings
            </Link>
              </div>
            </div>
          </div>

      {/* ================= RECENTLY POSTED ================= */}
      <div className="bg-surface-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-secondary pl-4">Recently Posted</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {recentListings.map((listing, idx) => (
              <Link
                key={idx}
                href="/products"
                className="flex bg-white p-3 rounded-lg border border-slate-200 hover:shadow-md transition"
              >
                <div className="relative w-24 h-24 rounded-md overflow-hidden shrink-0">
                  <Image
                    alt={listing.title}
                    src={listing.image}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
              </div>
                <div className="ml-4 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{listing.title}</h4>
                  <span className="text-xs text-slate-500 mb-1">{listing.category}</span>
                  <span className="text-primary font-bold text-sm">{listing.price}</span>
            </div>
              </Link>
            ))}
            </div>
          </div>
        </div>

      {/* ================= CTA SECTION ================= */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Have something to sell?</h2>
            <p className="text-blue-200">Post your ad for free and reach millions of buyers in Nigeria.</p>
        </div>
          <Link
            href="/register"
            className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Start Selling Now
          </Link>
            </div>
          </div>
    </div>
  );
}
