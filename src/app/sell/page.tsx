 'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Upload,
  Camera,
  DollarSign,
  Tag,
  MapPin,
  CheckCircle,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  ChevronRight,
  Award,
  BarChart3,
  Clock,
  Smartphone,
  Truck,
} from 'lucide-react';

const successStories = [
  {
    name: 'Ahmed Bello',
    business: 'AutoConnect Lagos',
    revenue: '₦12.5M',
    period: 'first month',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&facepad=2',
  },
  {
    name: 'Chioma Okonkwo',
    business: 'TechGadgets NG',
    revenue: '₦8.2M',
    period: '30 days',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&facepad=2',
  },
  {
    name: 'Tunde Williams',
    business: 'Prime Properties',
    revenue: '₦45M',
    period: 'quarter',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&facepad=2',
  },
];

const features = [
  {
    icon: Zap,
    title: 'List in 2 Minutes',
    description: 'Upload photos, add details, and publish your listing instantly.',
  },
  {
    icon: Shield,
    title: 'Verified Badge',
    description: 'Build trust with buyers using our verification system.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Visibility',
    description: 'Pay to feature your listings and reach more buyers.',
  },
  {
    icon: Users,
    title: 'Large Audience',
    description: 'Access over 500,000 active buyers across Nigeria.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track views, inquiries, and optimize your listings.',
  },
  {
    icon: Truck,
    title: 'Delivery Options',
    description: 'Offer nationwide delivery through our partners.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Sign Up Free',
    description: 'Create your seller account in 2 minutes',
    icon: Users,
  },
  {
    number: '02',
    title: 'List Your Items',
    description: 'Upload photos and add product details',
    icon: Camera,
  },
  {
    number: '03',
    title: 'Set Your Price',
    description: 'Choose competitive pricing for quick sales',
    icon: Tag,
  },
  {
    number: '04',
    title: 'Start Selling',
    description: 'Receive offers and close deals securely',
    icon: DollarSign,
  },
];

export default function SellPage() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [itemValue, setItemValue] = useState('500000');

  const calculateEarnings = (value: string) => {
    const numValue = parseInt(value) || 0;
    return {
      basic: Math.floor(numValue * 0.95),
      featured: Math.floor(numValue * 0.98),
      premium: Math.floor(numValue),
    };
  };

  const earnings = calculateEarnings(itemValue);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <DollarSign className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium">START EARNING TODAY</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Sell Anything, <br />
                <span className="text-yellow-300">Earn Money Fast</span>
              </h1>
              
              <p className="text-white/90 text-lg mb-8">
                Join 50,000+ Nigerian sellers making money daily. No listing fees, 
                no commission on basic sales. Get paid directly to your bank account.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all"
                >
                  Start Selling Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  Calculate Earnings
                </button>
              </div>
            </div>

            {/* Success Stories */}
            <div className="space-y-6">
              <h3 className="text-white text-2xl font-bold mb-8">Recent Success Stories</h3>
              {successStories.map((story, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{story.name}</h4>
                      <p className="text-white/80 text-sm">{story.business}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-300">{story.revenue}</div>
                      <p className="text-white/60 text-sm">{story.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Calculator */}
      {showCalculator && (
        <div className="max-w-4xl mx-auto px-4 -mt-8 mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Earnings Calculator</h3>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                What's the value of your item?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                <input
                  type="range"
                  min="10000"
                  max="50000000"
                  step="10000"
                  value={itemValue}
                  onChange={(e) => setItemValue(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>₦10,000</span>
                  <span>₦50,000,000</span>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-3xl font-bold text-primary">₦{parseInt(itemValue).toLocaleString()}</div>
                <div className="text-gray-600">Item Value</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600 mb-2">Basic Listing</div>
                  <div className="text-2xl font-bold text-primary">₦{earnings.basic.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">You earn 95%</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Free listing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Standard visibility
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
                <div className="text-center mb-4">
                  <div className="text-sm text-white/80 mb-2">Featured Listing</div>
                  <div className="text-2xl font-bold">₦{earnings.featured.toLocaleString()}</div>
                  <div className="text-sm text-white/80">You earn 98%</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    Priority placement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    5x more views
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white mr-2" />
                    Seller badge
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600 mb-2">Premium Listing</div>
                  <div className="text-2xl font-bold text-primary">₦{earnings.premium.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">You earn 100%</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Homepage feature
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Top search results
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dedicated support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Start Selling in 4 Easy Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-5xl font-bold text-gray-200 mb-4">{step.number}</div>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sell on WeSellAll?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You Can Sell */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Can You Sell?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '🚗', label: 'Cars' },
              { icon: '📱', label: 'Phones' },
              { icon: '🏠', label: 'Houses' },
              { icon: '💻', label: 'Laptops' },
              { icon: '👗', label: 'Fashion' },
              { icon: '🛋️', label: 'Furniture' },
              { icon: '🎮', label: 'Games' },
              { icon: '⚽', label: 'Sports' },
              { icon: '📚', label: 'Books' },
              { icon: '🎨', label: 'Art' },
              { icon: '🔧', label: 'Tools' },
              { icon: '🎵', label: 'Music' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of successful sellers. Your first 5 listings are completely free!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">₦0</div>
                <div className="font-medium mb-2">Listing Fee</div>
                <div className="text-sm text-white/80">First 5 listings free</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="font-medium mb-2">You Keep</div>
                <div className="text-sm text-white/80">On basic sales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="font-medium mb-2">Support</div>
                <div className="text-sm text-white/80">Dedicated seller support</div>
              </div>
            </div>

            <Link
              href="/register"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all"
            >
              Start Selling Now - It's Free!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'How much does it cost to list an item?',
                a: 'The first 5 listings are completely free! After that, basic listings remain free. We only charge for premium features like boosting your listings.',
              },
              {
                q: 'How do I get paid?',
                a: 'You get paid directly to your Nigerian bank account. We support transfers to all major Nigerian banks.',
              },
              {
                q: 'How long does it take to sell an item?',
                a: 'Most items sell within 3-7 days. Featured listings typically sell 5x faster.',
              },
              {
                q: 'Is it safe to sell online?',
                a: 'Yes! We have a verified seller system, secure messaging, and buyer protection policies to ensure safe transactions.',
              },
              {
                q: 'Can I sell services too?',
                a: 'Absolutely! You can list services like plumbing, photography, tutoring, and more.',
              },
              {
                q: 'Do you offer seller support?',
                a: 'Yes, we have 24/7 seller support via WhatsApp, email, and phone.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}