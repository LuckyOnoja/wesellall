'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Zap, Clock, Heart, Eye, MapPin, Star, TrendingDown } from 'lucide-react';

const trendingItems = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    category: 'Phones & Tablets',
    price: '₦950,000',
    change: '+25%',
    trend: 'up',
    views: '12.5k',
    favorites: '856',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop',
    location: 'Lagos',
  },
  {
    id: 2,
    title: 'Toyota RAV4 2021',
    category: 'Cars & Vehicles',
    price: '₦18,500,000',
    change: '+18%',
    trend: 'up',
    views: '8.7k',
    favorites: '432',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
    location: 'Abuja',
  },
  {
    id: 3,
    title: 'MacBook Air M2',
    category: 'Electronics',
    price: '₦850,000',
    change: '+32%',
    trend: 'up',
    views: '15.2k',
    favorites: '1,234',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop',
    location: 'Port Harcourt',
  },
  {
    id: 4,
    title: '3-Bedroom Duplex',
    category: 'Real Estate',
    price: '₦45,000,000',
    change: '+12%',
    trend: 'up',
    views: '5.6k',
    favorites: '321',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop',
    location: 'Lekki',
  },
  {
    id: 5,
    title: 'Air Jordan 1 Retro',
    category: 'Fashion & Beauty',
    price: '₦85,000',
    change: '-8%',
    trend: 'down',
    views: '9.8k',
    favorites: '654',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&auto=format&fit=crop',
    location: 'Ibadan',
  },
  {
    id: 6,
    title: 'PlayStation 5',
    category: 'Electronics',
    price: '₦450,000',
    change: '+45%',
    trend: 'up',
    views: '21.3k',
    favorites: '1,897',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&auto=format&fit=crop',
    location: 'Lagos',
  },
];

const trendingCategories = [
  { name: 'Smartphones', change: '+28%', items: '2,345', icon: '📱' },
  { name: 'Electric Cars', change: '+42%', items: '876', icon: '🚗' },
  { name: 'Home Office', change: '+35%', items: '1,543', icon: '💻' },
  { name: 'Fitness Gear', change: '+19%', items: '987', icon: '🏋️' },
  { name: 'Luxury Watches', change: '+15%', items: '654', icon: '⌚' },
  { name: 'Smart Home', change: '+38%', items: '1,234', icon: '🏠' },
];

const trendingSearches = [
  'iPhone 15',
  'Toyota Camry 2020',
  'Laptop under ₦300k',
  'Apartments for rent Lagos',
  'Samsung Galaxy S23',
  'Land for sale Abuja',
  'Motorcycles',
  'Generator 5KVA',
];

export default function TrendingPage() {
  const [timeFilter, setTimeFilter] = useState('24h');
  const [categoryFilter, setCategoryFilter] = useState('All');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-6 w-6 text-white mr-2" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            What's Trending Now
          </h1>
          <p className="text-white/90 text-lg text-center max-w-2xl mx-auto mb-8">
            Discover the most popular products, fastest-selling items, and hottest deals across Nigeria
          </p>

          {/* Time Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {['24h', '7 days', '30 days', 'All time'].map((time) => (
              <button
                key={time}
                onClick={() => setTimeFilter(time)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  timeFilter === time
                    ? 'bg-white text-orange-600'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">1,245</div>
                <div className="text-sm text-gray-600">Trending Items Today</div>
              </div>
              <div className="p-3 rounded-full bg-orange-100">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +12% from yesterday
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">8,756</div>
                <div className="text-sm text-gray-600">Active Viewers</div>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +24% this week
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">342</div>
                <div className="text-sm text-gray-600">Items Sold Today</div>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +18% from last week
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Trending Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Hot Right Now</h2>
              <select
                className="border rounded-lg px-4 py-2"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option>All Categories</option>
                <option>Phones & Tablets</option>
                <option>Cars & Vehicles</option>
                <option>Electronics</option>
                <option>Real Estate</option>
              </select>
            </div>

            <div className="space-y-6">
              {trendingItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-1/3 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                          #{item.id}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          item.trend === 'up'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item.trend === 'up' ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          )}
                          {item.change}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-sm text-gray-500">{item.category}</span>
                          <h3 className="text-xl font-bold hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <div className="text-2xl font-bold text-primary">{item.price}</div>
                      </div>

                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {item.views} views
                        </span>
                        <span className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {item.favorites} favorites
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-6">
                        This item is trending rapidly with high engagement and interest from buyers
                      </p>

                      <div className="flex items-center justify-between">
                        <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90">
                          View Details
                        </button>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Eye className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200">
                Load More Trending Items
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Trending Categories
              </h3>
              <div className="space-y-4">
                {trendingCategories.map((cat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{cat.icon}</span>
                      <div>
                        <h4 className="font-medium">{cat.name}</h4>
                        <p className="text-sm text-gray-500">{cat.items} items</p>
                      </div>
                    </div>
                    <span className={`font-medium ${
                      cat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {cat.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Searches */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-3">
                {trendingSearches.map((search, idx) => (
                  <Link
                    key={idx}
                    href={`/products?search=${encodeURIComponent(search)}`}
                    className="inline-block bg-gray-100 hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    {search}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trending Cities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-6">Trending Cities</h3>
              <div className="space-y-4">
                {[
                  { city: 'Lagos', items: '15,234', trend: '+28%' },
                  { city: 'Abuja', items: '8,765', trend: '+19%' },
                  { city: 'Port Harcourt', items: '5,432', trend: '+32%' },
                  { city: 'Ibadan', items: '4,321', trend: '+15%' },
                  { city: 'Kano', items: '3,456', trend: '+12%' },
                ].map((city, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {city.city.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium">{city.city}</h4>
                        <p className="text-sm text-gray-500">{city.items} items</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-medium">{city.trend}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white text-center">
              <h3 className="text-lg font-bold mb-4">Want to Be Trending?</h3>
              <p className="text-white/90 mb-6">
                Boost your listings to reach thousands of buyers
              </p>
              <Link
                href="/register"
                className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100"
              >
                Boost Your Listings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}