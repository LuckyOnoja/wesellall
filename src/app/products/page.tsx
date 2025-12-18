'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Filter,
  Search,
  MapPin,
  Clock,
  Heart,
  Eye,
  ChevronDown,
  ChevronUp,
  Star,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Sparkles,
  X,
  Sliders,
} from 'lucide-react';

const categories = [
  { id: 1, name: 'Cars & Vehicles', count: '12,456', icon: '🚗', color: 'from-blue-500 to-cyan-500' },
  { id: 2, name: 'Phones & Tablets', count: '8,234', icon: '📱', color: 'from-purple-500 to-pink-500' },
  { id: 3, name: 'Real Estate', count: '3,891', icon: '🏠', color: 'from-green-500 to-emerald-500' },
  { id: 4, name: 'Electronics', count: '15,672', icon: '💻', color: 'from-orange-500 to-red-500' },
  { id: 5, name: 'Fashion & Beauty', count: '9,823', icon: '👗', color: 'from-pink-500 to-rose-500' },
  { id: 6, name: 'Jobs & Services', count: '5,456', icon: '💼', color: 'from-indigo-500 to-blue-500' },
  { id: 7, name: 'Home & Garden', count: '7,123', icon: '🛋️', color: 'from-yellow-500 to-orange-500' },
  { id: 8, name: 'Sports & Fitness', count: '4,234', icon: '⚽', color: 'from-teal-500 to-green-500' },
];

const locations = [
  'All Nigeria',
  'Lagos State',
  'Abuja FCT',
  'Port Harcourt',
  'Ibadan',
  'Kano',
  'Enugu',
  'Benin',
  'Abeokuta',
  'Jos',
];

const sortOptions = [
  'Recommended',
  'Newest First',
  'Price: Low to High',
  'Price: High to Low',
  'Most Viewed',
  'Ending Soon',
];

const priceRanges = [
  { label: 'Under ₦50,000', value: '0-50000' },
  { label: '₦50,000 - ₦200,000', value: '50000-200000' },
  { label: '₦200,000 - ₦500,000', value: '200000-500000' },
  { label: '₦500,000 - ₦1M', value: '500000-1000000' },
  { label: '₦1M - ₦5M', value: '1000000-5000000' },
  { label: 'Over ₦5M', value: '5000000-100000000' },
];

const conditionOptions = ['New', 'Used - Like New', 'Used - Good', 'Used - Fair'];

const products = [
  {
    id: 1,
    title: '2022 Toyota Camry XLE',
    price: '₦12,500,000',
    originalPrice: '₦13,800,000',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop',
    category: 'Cars & Vehicles',
    location: 'Lekki, Lagos',
    posted: '2 hours ago',
    views: '1.2k',
    likes: 45,
    condition: 'Used - Like New',
    verifiedSeller: true,
    urgent: true,
    premium: true,
  },
  {
    id: 2,
    title: 'iPhone 14 Pro Max 256GB',
    price: '₦850,000',
    originalPrice: '₦950,000',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w-800&auto=format&fit=crop',
    category: 'Phones & Tablets',
    location: 'Victoria Island, Lagos',
    posted: '5 hours ago',
    views: '2.3k',
    likes: 89,
    condition: 'New',
    verifiedSeller: true,
    trending: true,
  },
  {
    id: 3,
    title: '3-Bedroom Apartment For Rent',
    price: '₦3,500,000/yr',
    originalPrice: '₦4,000,000',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop',
    category: 'Real Estate',
    location: 'Ikoyi, Lagos',
    posted: '1 day ago',
    views: '3.1k',
    likes: 123,
    condition: 'New',
    verifiedSeller: true,
    featured: true,
  },
  {
    id: 4,
    title: 'MacBook Pro M2 16"',
    price: '₦1,200,000',
    originalPrice: '₦1,350,000',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop',
    category: 'Electronics',
    location: 'Wuse, Abuja',
    posted: '3 days ago',
    views: '1.8k',
    likes: 67,
    condition: 'Used - Like New',
    verifiedSeller: true,
  },
  {
    id: 5,
    title: 'Designer Handbag Collection',
    price: '₦450,000',
    originalPrice: '₦600,000',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop',
    category: 'Fashion & Beauty',
    location: 'Maitama, Abuja',
    posted: '6 hours ago',
    views: '890',
    likes: 34,
    condition: 'Used - Good',
    verifiedSeller: false,
    urgent: true,
  },
  {
    id: 6,
    title: 'Fitness Equipment Set',
    price: '₦280,000',
    originalPrice: '₦350,000',
    image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?w=800&auto=format&fit=crop',
    category: 'Sports & Fitness',
    location: 'Port Harcourt',
    posted: '2 days ago',
    views: '1.5k',
    likes: 56,
    condition: 'Used - Good',
    verifiedSeller: true,
  },
  {
    id: 7,
    title: 'Professional Camera Kit',
    price: '₦750,000',
    originalPrice: '₦900,000',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&auto=format&fit=crop',
    category: 'Electronics',
    location: 'Surulere, Lagos',
    posted: '1 day ago',
    views: '2.1k',
    likes: 78,
    condition: 'Used - Like New',
    verifiedSeller: true,
    premium: true,
  },
  {
    id: 8,
    title: 'Executive Office Furniture',
    price: '₦850,000',
    originalPrice: '₦1,200,000',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop',
    category: 'Home & Garden',
    location: 'Garki, Abuja',
    posted: '4 days ago',
    views: '1.3k',
    likes: 42,
    condition: 'Used - Good',
    verifiedSeller: true,
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All Nigeria');
  const [sortBy, setSortBy] = useState('Recommended');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Anything You Need
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Browse 50,000+ items from trusted sellers across Nigeria
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 max-w-3xl">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full py-3 outline-none text-gray-900 placeholder-gray-500"
                />
              </div>
              <div className="flex items-center border-l px-4">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                <select
                  className="outline-none text-gray-900 bg-transparent"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg'
                    : 'bg-white hover:shadow-md border hover:border-primary/20'
                }`}
              >
                <span className="text-2xl mb-2">{cat.icon}</span>
                <span className="font-medium text-sm text-center">{cat.name}</span>
                <span className="text-xs mt-1 opacity-75">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center">
                  <Sliders className="mr-2 h-5 w-5 text-primary" />
                  Filters
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="mr-3"
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Condition</h4>
                <div className="space-y-2">
                  {conditionOptions.map((condition) => (
                    <label key={condition} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCondition === condition}
                        onChange={(e) => setSelectedCondition(e.target.checked ? condition : '')}
                        className="mr-3 rounded"
                      />
                      <span>{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Verified Sellers Only */}
              <div className="mb-8">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span className="font-medium">Verified Sellers Only</span>
                  <ShieldCheck className="ml-2 h-4 w-4 text-green-500" />
                </label>
              </div>

              {/* Location */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Location</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {locations.map((loc) => (
                    <label key={loc} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3 rounded"
                      />
                      <span>{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white p-4 rounded-xl shadow">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <button
                  onClick={() => setShowFilters(true)}
                  className="flex items-center lg:hidden px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </button>
                <span className="text-gray-600">
                  Showing <span className="font-bold">1-8</span> of <span className="font-bold">50,000+</span> items
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Sort by:</span>
                <select
                  className="border rounded-lg px-4 py-2"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.premium && (
                        <span className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          <Sparkles className="h-3 w-3 mr-1" />
                          PREMIUM
                        </span>
                      )}
                      {product.urgent && (
                        <span className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          URGENT
                        </span>
                      )}
                      {product.trending && (
                        <span className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          TRENDING
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block bg-black/60 text-white px-3 py-1 rounded-full text-xs">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      {product.verifiedSeller && (
                        <ShieldCheck className="h-5 w-5 text-green-500" />
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{product.price}</div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                        )}
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {product.condition}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {product.views}
                        </span>
                        <span className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {product.likes}
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {product.posted}
                      </span>
                    </div>

                    {/* Location & Action */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{product.location}</span>
                      </div>
                      <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Previous</button>
                {[1, 2, 3, '...', 8, 9, 10].map((num, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 border rounded-lg ${
                      num === 1
                        ? 'bg-primary text-white border-primary'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Next</button>
              </nav>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get Notified of New Deals
              </h3>
              <p className="text-white/90 mb-6">
                Subscribe to receive alerts when items matching your interests are posted
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg"
                />
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}