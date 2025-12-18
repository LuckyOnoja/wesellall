'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Tag, 
  Clock, 
  Zap, 
  TrendingUp, 
  Shield, 
  Percent, 
  ArrowRight, 
  Star, 
  Eye, 
  Heart,
  AlertCircle,
  TrendingDown,
  Calendar,
  Timer
} from 'lucide-react';

const deals = [
  {
    id: 1,
    title: 'Samsung Galaxy S23 Ultra',
    originalPrice: '₦950,000',
    discountPrice: '₦750,000',
    discount: '21% OFF',
    category: 'Phones & Tablets',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop',
    timeLeft: '2 days',
    sold: '45/50',
    urgent: true,
    rating: 4.8,
    reviews: 124,
    location: 'Lagos',
  },
  {
    id: 2,
    title: 'HP Pavilion Gaming Laptop',
    originalPrice: '₦850,000',
    discountPrice: '₦650,000',
    discount: '24% OFF',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop',
    timeLeft: '1 day',
    sold: '32/40',
    featured: true,
    rating: 4.6,
    reviews: 89,
    location: 'Abuja',
  },
  {
    id: 3,
    title: 'Toyota Camry 2020',
    originalPrice: '₦15,000,000',
    discountPrice: '₦12,500,000',
    discount: '17% OFF',
    category: 'Cars & Vehicles',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?w=800&auto=format&fit=crop',
    timeLeft: '3 days',
    sold: '8/12',
    urgent: true,
    rating: 4.9,
    reviews: 45,
    location: 'Port Harcourt',
  },
  {
    id: 4,
    title: 'Designer Leather Sofa Set',
    originalPrice: '₦850,000',
    discountPrice: '₦550,000',
    discount: '35% OFF',
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop',
    timeLeft: '5 days',
    sold: '15/25',
    rating: 4.7,
    reviews: 67,
    location: 'Ibadan',
  },
  {
    id: 5,
    title: 'Canon EOS R5 Camera',
    originalPrice: '₦1,800,000',
    discountPrice: '₦1,350,000',
    discount: '25% OFF',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop',
    timeLeft: '2 days',
    sold: '18/30',
    featured: true,
    rating: 4.9,
    reviews: 112,
    location: 'Lagos',
  },
  {
    id: 6,
    title: 'iPhone 14 Pro - 256GB',
    originalPrice: '₦900,000',
    discountPrice: '₦720,000',
    discount: '20% OFF',
    category: 'Phones & Tablets',
    image: 'https://images.unsplash.com/photo-1678880032032-3e94843c7e23?w=800&auto=format&fit=crop',
    timeLeft: '1 day',
    sold: '42/50',
    urgent: true,
    rating: 4.8,
    reviews: 156,
    location: 'Abuja',
  },
  {
    id: 7,
    title: 'Professional Treadmill',
    originalPrice: '₦450,000',
    discountPrice: '₦320,000',
    discount: '29% OFF',
    category: 'Sports & Fitness',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
    timeLeft: '4 days',
    sold: '23/35',
    rating: 4.5,
    reviews: 45,
    location: 'Kano',
  },
  {
    id: 8,
    title: 'Samsung 65" 4K Smart TV',
    originalPrice: '₦750,000',
    discountPrice: '₦550,000',
    discount: '27% OFF',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop',
    timeLeft: '3 days',
    sold: '28/40',
    featured: true,
    rating: 4.7,
    reviews: 78,
    location: 'Lagos',
  },
];

const dealCategories = [
  { name: 'Flash Deals', count: 24, icon: Zap, color: 'from-red-500 to-pink-500' },
  { name: 'Daily Deals', count: 156, icon: Calendar, color: 'from-blue-500 to-cyan-500' },
  { name: 'Weekend Specials', count: 89, icon: Tag, color: 'from-green-500 to-emerald-500' },
  { name: 'Clearance', count: 342, icon: TrendingDown, color: 'from-orange-500 to-yellow-500' },
];

export default function DealsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Most Popular');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Tag className="h-5 w-5 text-white mr-2" />
            <span className="text-white font-medium">LIMITED TIME OFFERS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Amazing Deals & Discounts
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss out on these exclusive discounts. Limited quantities available!
          </p>

          {/* Countdown Timer */}
          <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Timer className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Flash Deal Ends In:</span>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="bg-white text-red-600 text-2xl font-bold px-4 py-2 rounded-lg">02</div>
                <div className="text-white text-sm mt-1">DAYS</div>
              </div>
              <div className="text-white text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-white text-red-600 text-2xl font-bold px-4 py-2 rounded-lg">14</div>
                <div className="text-white text-sm mt-1">HOURS</div>
              </div>
              <div className="text-white text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-white text-red-600 text-2xl font-bold px-4 py-2 rounded-lg">32</div>
                <div className="text-white text-sm mt-1">MINS</div>
              </div>
              <div className="text-white text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-white text-red-600 text-2xl font-bold px-4 py-2 rounded-lg">15</div>
                <div className="text-white text-sm mt-1">SECS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Deal Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {dealCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className={`bg-gradient-to-r ${cat.color} rounded-2xl p-6 text-white cursor-pointer hover:scale-105 transition-transform`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-8 w-8" />
                  <span className="text-2xl font-bold">{cat.count}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{cat.name}</h3>
                <p className="text-white/80 text-sm">Active deals</p>
              </div>
            );
          })}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Hot Deals</h2>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
              612 Active Deals
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Sort by:</span>
            <select
              className="border rounded-lg px-4 py-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Most Popular</option>
              <option>Discount %</option>
              <option>Price: Low to High</option>
              <option>Ending Soon</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {deal.discount} OFF
                </span>
              </div>

              {/* Urgent Badge */}
              {deal.urgent && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <Zap className="inline h-3 w-3 mr-1" />
                    URGENT
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white text-sm mb-2">
                    <span className="font-bold">{deal.sold}</span> sold
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${parseInt(deal.sold.split('/')[0]) / parseInt(deal.sold.split('/')[1]) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Deal Details */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{deal.category}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">{deal.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({deal.reviews})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  {deal.title}
                </h3>

                {/* Prices */}
                <div className="flex items-baseline space-x-3 mb-4">
                  <div className="text-2xl font-bold text-primary">{deal.discountPrice}</div>
                  <div className="text-lg text-gray-500 line-through">{deal.originalPrice}</div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Ends in {deal.timeLeft}
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      2.3k
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      156
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Shield className="h-4 w-4 mr-2 text-green-500" />
                  Verified Seller • {deal.location}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                    Buy Now
                  </button>
                  <button className="p-3 border rounded-lg hover:bg-gray-50">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Deals */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all">
            Load More Deals
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Deal Alerts CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-3xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Never Miss a Deal Again!</h2>
            <p className="text-gray-600 text-lg mb-8">
              Get notified when deals matching your interests are posted
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg">
                Get Deal Alerts
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Max 2 emails per week. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Shield className="mr-3 h-6 w-6 text-green-500" />
            Safe Shopping Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold mb-2">Verify the Seller</h4>
              <p className="text-gray-600 text-sm">
                Always check seller verification status and ratings before purchasing.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold mb-2">Meet in Safe Places</h4>
              <p className="text-gray-600 text-sm">
                Arrange to meet in public, well-lit areas for item collection.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Percent className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold mb-2">Check Return Policy</h4>
              <p className="text-gray-600 text-sm">
                Ensure the seller offers return options for damaged or incorrect items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}