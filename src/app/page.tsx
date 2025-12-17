'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Shield, Zap, TrendingUp } from 'lucide-react';
import { formatPrice } from '@/utils/formatters';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    title: '2020 Lexus RX 350 Luxury',
    price: 28000000,
    location: 'Lagos',
    category: 'Cars',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
    seller: 'Auto Elite Motors',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'iPhone 15 Pro Max 512GB',
    price: 1200000,
    location: 'Abuja',
    category: 'Phones & Tablets',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w-800&auto=format&fit=crop',
    seller: 'Tech Haven',
    isFeatured: true,
  },
  {
    id: '3',
    title: '4-Bedroom Duplex - Lekki Phase 1',
    price: 95000000,
    location: 'Lagos',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop',
    seller: 'Prime Properties',
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Dell XPS 15 Laptop',
    price: 850000,
    location: 'Port Harcourt',
    category: 'Computers',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop',
    seller: 'Gadget World',
    isFeatured: true,
  },
];

const categories = [
  { name: 'Cars', icon: '🚗', count: 1254 },
  { name: 'Phones & Tablets', icon: '📱', count: 3456 },
  { name: 'Real Estate', icon: '🏠', count: 892 },
  { name: 'Electronics', icon: '💻', count: 2341 },
  { name: 'Fashion', icon: '👕', count: 4567 },
  { name: 'Home & Garden', icon: '🪴', count: 1789 },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-secondary-800 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Post <span className="text-primary">Free.</span> Sell <span className="text-primary">Fast.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Cash out instantly. Nigeria&apos;s fastest-growing marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center group"
              >
                Start Selling Now
                <Zap className="ml-2 group-hover:animate-pulse" />
              </Link>
              <Link
                href="/products"
                className="btn-outline border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4"
              >
                Browse Premium Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Premium Listings</h2>
              <p className="text-gray-600 mt-2">Top products from our premium sellers</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow hover:shadow-md transition-shadow"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow hover:shadow-md transition-shadow"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl p-8">
                    <div className="relative h-96 rounded-xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-4 mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-6">Sold by: {product.seller}</p>
                      <div className="text-3xl font-bold text-gray-900 mb-6">
                        {formatPrice(product.price)}
                      </div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Shield size={20} className="mr-2 text-green-500" />
                          <span>Verified Seller</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <TrendingUp size={20} className="mr-2 text-blue-500" />
                          <span>Premium Listing</span>
                        </div>
                      </div>
                      <button className="btn-primary w-full">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 Get Your Product on the Landing Page!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Reach thousands of buyers daily with our premium advertising spots
            </p>
            <div className="text-5xl font-bold mb-2">₦100,000</div>
            <p className="text-lg mb-8 opacity-80">per month • Unlimited impressions</p>
            <Link
              href="/register?tier=premium"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              Book Landing Page Spot
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                className="card hover:shadow-xl transition-shadow text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count.toLocaleString()} listings</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Seller Tier</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="card text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Seller</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">₦0</div>
                <p className="text-gray-600">Perfect for starting out</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Post unlimited ads
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic search visibility
                </li>
                <li className="flex items-center justify-center text-gray-400">
                  <span className="mr-2">✗</span>
                  Landing page feature
                </li>
                <li className="flex items-center justify-center text-gray-400">
                  <span className="mr-2">✗</span>
                  Priority placement
                </li>
              </ul>
              <Link href="/register?tier=free" className="btn-outline w-full">
                Get Started Free
              </Link>
            </div>

            {/* Basic Tier */}
            <div className="card text-center relative border-2 border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Seller</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">₦10,000<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600">For serious sellers</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Everything in Free
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Ads reviewed within 24h
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Higher search ranking
                </li>
                <li className="flex items-center justify-center text-gray-400">
                  <span className="mr-2">✗</span>
                  Landing page feature
                </li>
              </ul>
              <Link href="/register?tier=basic" className="btn-primary w-full">
                Upgrade to Basic
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="card text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium Seller</h3>
                <div className="text-4xl font-bold mb-4">₦20,000<span className="text-lg opacity-80">/month</span></div>
                <p className="opacity-80">For maximum visibility</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center justify-center">
                  <span className="text-primary mr-2">★</span>
                  Everything in Basic
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-primary mr-2">★</span>
                  Top of search results
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-primary mr-2">★</span>
                  Landing page eligibility
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-primary mr-2">★</span>
                  Priority support
                </li>
              </ul>
              <Link href="/register?tier=premium" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 w-full">
                Go Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-primary">Sell Fast</span> and <span className="text-primary">Cash Out</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of successful sellers making money on WeSellAll
          </p>
          <Link
            href="/register"
            className="btn-primary text-lg px-10 py-4 inline-flex items-center group"
          >
            Create Your Seller Account
            <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}