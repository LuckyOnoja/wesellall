'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, TrendingUp, Star, Zap, Users } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Cars & Vehicles',
    icon: '🚗',
    items: '12,456',
    popularItems: [
      { name: 'Toyota Camry', count: '1,234' },
      { name: 'Honda Accord', count: '987' },
      { name: 'Mercedes Benz', count: '654' },
    ],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Phones & Tablets',
    icon: '📱',
    items: '8,234',
    popularItems: [
      { name: 'iPhone 14', count: '2,345' },
      { name: 'Samsung Galaxy', count: '1,876' },
      { name: 'Tecno & Infinix', count: '3,210' },
    ],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Real Estate',
    icon: '🏠',
    items: '3,891',
    popularItems: [
      { name: 'Apartments for Rent', count: '1,234' },
      { name: 'Lands for Sale', count: '876' },
      { name: 'Commercial Property', count: '543' },
    ],
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Electronics',
    icon: '💻',
    items: '15,672',
    popularItems: [
      { name: 'Laptops', count: '3,456' },
      { name: 'TVs', count: '2,987' },
      { name: 'Home Theater', count: '1,234' },
    ],
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Fashion & Beauty',
    icon: '👗',
    items: '9,823',
    popularItems: [
      { name: "Women's Clothing", count: '4,321' },
      { name: "Men's Shoes", count: '2,345' },
      { name: 'Watches & Jewelry', count: '1,567' },
    ],
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Jobs & Services',
    icon: '💼',
    items: '5,456',
    popularItems: [
      { name: 'IT Jobs', count: '1,234' },
      { name: 'Cleaning Services', count: '876' },
      { name: 'Delivery Services', count: '543' },
    ],
    color: 'from-indigo-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Home & Garden',
    icon: '🛋️',
    items: '7,123',
    popularItems: [
      { name: 'Furniture', count: '2,345' },
      { name: 'Kitchen Appliances', count: '1,876' },
      { name: 'Garden Tools', count: '987' },
    ],
    color: 'from-yellow-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Sports & Fitness',
    icon: '⚽',
    items: '4,234',
    popularItems: [
      { name: 'Gym Equipment', count: '1,234' },
      { name: 'Football Jerseys', count: '876' },
      { name: 'Running Shoes', count: '654' },
    ],
    color: 'from-teal-500 to-green-500',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Agriculture',
    icon: '🌾',
    items: '3,456',
    popularItems: [
      { name: 'Farm Equipment', count: '987' },
      { name: 'Livestock', count: '654' },
      { name: 'Seeds & Fertilizers', count: '321' },
    ],
    color: 'from-lime-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Health & Beauty',
    icon: '💄',
    items: '5,678',
    popularItems: [
      { name: 'Skincare Products', count: '2,345' },
      { name: 'Hair Products', count: '1,876' },
      { name: 'Medical Equipment', count: '987' },
    ],
    color: 'from-rose-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop',
  },
  {
    id: 11,
    name: 'Education',
    icon: '📚',
    items: '2,345',
    popularItems: [
      { name: 'Textbooks', count: '876' },
      { name: 'Online Courses', count: '543' },
      { name: 'Tutoring Services', count: '321' },
    ],
    color: 'from-violet-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop',
  },
  {
    id: 12,
    name: 'Pets & Animals',
    icon: '🐕',
    items: '1,234',
    popularItems: [
      { name: 'Dogs', count: '567' },
      { name: 'Cats', count: '432' },
      { name: 'Pet Supplies', count: '321' },
    ],
    color: 'from-amber-500 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1514888286974-6d03bde4ba4?w=800&auto=format&fit=crop',
  },
];

const stats = [
  { label: 'Total Categories', value: '50+', icon: TrendingUp },
  { label: 'Active Listings', value: '50k+', icon: Star },
  { label: 'New Daily', value: '2k+', icon: Zap },
  { label: 'Active Users', value: '500k+', icon: Users },
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Browse All Categories
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Find exactly what you're looking for across 50+ categories of products and services
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${encodeURIComponent(category.name)}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Category Icon */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-2xl`}>
                    {category.icon}
                  </div>
                </div>

                {/* Item Count */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {category.items} items
                  </span>
                </div>
              </div>

              {/* Category Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>

                {/* Popular Items */}
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-gray-600">Popular Items:</h4>
                  {category.popularItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-500">{item.count}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                  Browse Category
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold mb-4">No Categories Found</h3>
            <p className="text-gray-600 mb-8">
              Try searching for something else or browse all categories
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90"
            >
              View All Categories
            </button>
          </div>
        )}

        {/* Featured Categories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-4">Cars & Vehicles</h3>
              <p className="mb-6 opacity-90">Find your dream car from trusted dealers nationwide</p>
              <Link
                href="/products?category=Cars & Vehicles"
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Browse 12,456 vehicles <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">Phones & Tablets</h3>
              <p className="mb-6 opacity-90">Latest smartphones and tablets at amazing prices</p>
              <Link
                href="/products?category=Phones & Tablets"
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Browse 8,234 devices <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-4">Real Estate</h3>
              <p className="mb-6 opacity-90">Find your perfect home or investment property</p>
              <Link
                href="/products?category=Real Estate"
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Browse 3,891 properties <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful sellers making money on WeSellAll
          </p>
          <Link
            href="/register"
            className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
          >
            Start Selling Free
          </Link>
        </div>
      </div>
    </div>
  );
}