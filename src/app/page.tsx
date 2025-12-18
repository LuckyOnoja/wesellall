'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Star,
  Truck,
  Users,
  Search,
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const featuredProducts = [
    {
      id: 1,
      title: 'Lexus RX 350 (2020)',
      price: '₦25,000,000',
      image: '/cars/lexus.jpg',
      seller: 'Verified Auto Dealer',
      location: 'Lagos',
      posted: '6 hours ago',
    },
    {
      id: 2,
      title: 'iPhone 14 Pro Max',
      price: '₦850,000',
      image: '/phones/iphone.jpg',
      seller: 'Tech Store NG',
      location: 'Abuja',
      posted: '12 hours ago',
    },
    {
      id: 3,
      title: 'Luxury 3-Bedroom Apartment',
      price: '₦150,000,000',
      image: '/realestate/apartment.jpg',
      seller: 'Elite Properties',
      location: 'Lekki',
      posted: '1 day ago',
    },
    {
      id: 4,
      title: 'ASUS ROG Gaming Laptop',
      price: '₦1,200,000',
      image: '/electronics/laptop.jpg',
      seller: 'Gamer Zone',
      location: 'Port Harcourt',
      posted: '2 days ago',
    },
  ];

  const categories = [
    'Cars',
    'Phones',
    'Houses',
    'Electronics',
    'Jobs',
    'Services',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/image3.jpg"
          alt="Marketplace"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Buy & Sell Anything <br />
            <span className="text-primary">Across Nigeria</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Post free ads, reach real buyers, and close deals faster.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-3xl mx-auto">
            <form className="flex flex-col md:flex-row gap-3">
              <div className="flex items-center border rounded-xl px-4 flex-1">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search cars, phones, houses..."
                  className="w-full py-3 outline-none text-gray-900"
                />
              </div>
              <select className="border rounded-xl px-4 py-3 text-gray-900">
                <option>All Locations</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>PH</option>
              </select>
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90">
                Search
              </button>
            </form>
          </div>

          {/* Stats */}
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-200">
            <span>🚗 120k+ listings</span>
            <span>👥 45k+ sellers</span>
            <span>⚡ Avg sale: 48hrs</span>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <TrustItem icon={ShieldCheck} text="Verified Sellers" />
          <TrustItem icon={Users} text="Real Buyers" />
          <TrustItem icon={Truck} text="Nationwide Reach" />
          <TrustItem icon={Star} text="Top Rated Platform" />
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Popular Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat}
                href="/products"
                className="bg-white border rounded-xl py-6 text-center font-medium hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Listings</h2>
            <Link href="/products" className="text-primary flex items-center">
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-primary font-bold mb-2">{item.price}</p>

                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <ShieldCheck className="h-4 w-4 mr-1 text-green-600" />
                    Verified Seller
                  </div>

                  <p className="text-xs text-gray-500">
                    {item.location} · {item.posted}
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <button className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90">
                    Contact Seller
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Boost Your Sales</h2>
          <p className="mb-12 opacity-90">
            Ads with boosts sell up to 5× faster
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="₦0"
              features={['Unlimited ads', 'Basic visibility']}
            />
            <PricingCard
              title="Boosted"
              price="₦10,000"
              highlight
              features={[
                'Featured placement',
                'Priority ranking',
                'More buyer reach',
              ]}
            />
            <PricingCard
              title="Homepage"
              price="₦20,000+"
              features={[
                'Homepage banner',
                'Top search results',
                'Dedicated support',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-20 bg-secondary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Hot Deals Before Everyone Else
        </h2>
        <p className="mb-8 opacity-90">
          Max 2 emails per month. No spam.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row max-w-xl mx-auto gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-xl text-gray-900"
          />
          <button className="bg-primary px-8 py-3 rounded-xl font-medium">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function TrustItem({ icon: Icon, text }: any) {
  return (
    <div>
      <Icon className="mx-auto h-8 w-8 text-primary" />
      <p className="mt-2 font-medium">{text}</p>
    </div>
  );
}

function PricingCard({ title, price, features, highlight }: any) {
  return (
    <div
      className={`rounded-xl p-8 ${
        highlight
          ? 'bg-white text-gray-900 scale-105'
          : 'bg-white/10 border border-white/20'
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-6">{price}</p>
      <ul className="space-y-3 mb-6">
        {features.map((f: string) => (
          <li key={f} className="flex items-center">
            <CheckIcon /> {f}
          </li>
        ))}
      </ul>
      <Link
        href="/register"
        className={`block py-3 rounded-lg font-medium ${
          highlight
            ? 'bg-primary text-white'
            : 'bg-white text-primary'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-green-500 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
