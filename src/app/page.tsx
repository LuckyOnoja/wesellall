'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Shield,
  Star,
  Truck,
  Users,
  Search,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle,
  Award,
  Heart,
  Eye,
  MessageCircle,
  MapPin,
  Calendar,
  Filter,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Wallet,
  ShieldCheck,
  BadgeCheck,
  Crown,
  Gem,
  ShoppingBag,
  Car,
  Smartphone,
  Laptop,
  Shirt,
  Wrench,
  Music,
  BookOpen,
  Dumbbell,
  Camera,
} from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [stats, setStats] = useState({
    listings: 0,
    sellers: 0,
    buyers: 0,
    deals: 0,
  });

  useEffect(() => {
    // Animate stats counter
    const animateCount = () => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setStats({
          listings: Math.min(125000, count * 1250),
          sellers: Math.min(45600, count * 456),
          buyers: Math.min(85400, count * 854),
          deals: Math.min(95300, count * 953),
        });
        if (count >= 100) clearInterval(interval);
      }, 20);
    };
    animateCount();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`🎉 Subscribed successfully! You'll receive the best deals at: ${email}`);
    setEmail('');
  };

  const heroImages = [
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&auto=format&fit=crop&q=80', // Cars
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&auto=format&fit=crop&q=80', // Phones
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&auto=format&fit=crop&q=80', // Real Estate
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop&q=80', // Fashion
  ];

  const categories = [
    { name: 'Cars & Vehicles', icon: <Car className="h-8 w-8" />, count: '12,456', color: 'from-blue-500 to-cyan-500' },
    { name: 'Phones & Tablets', icon: <Smartphone className="h-8 w-8" />, count: '8,234', color: 'from-purple-500 to-pink-500' },
    { name: 'Real Estate', icon: <Home />, count: '3,891', color: 'from-green-500 to-emerald-500' },
    { name: 'Electronics', icon: <Laptop className="h-8 w-8" />, count: '15,672', color: 'from-orange-500 to-red-500' },
    { name: 'Fashion & Beauty', icon: <Shirt className="h-8 w-8" />, count: '9,823', color: 'from-pink-500 to-rose-500' },
    { name: 'Jobs & Services', icon: <Wrench className="h-8 w-8" />, count: '5,456', color: 'from-indigo-500 to-blue-500' },
    { name: 'Home & Garden', icon: <ShoppingBag className="h-8 w-8" />, count: '7,123', color: 'from-yellow-500 to-orange-500' },
    { name: 'Sports & Fitness', icon: <Dumbbell className="h-8 w-8" />, count: '4,234', color: 'from-teal-500 to-green-500' },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: '2023 Lexus RX 350 F-Sport - Clean Import',
      price: '₦28,500,000',
      originalPrice: '₦30,000,000',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop&q=80',
      seller: 'Auto Elite Dealer',
      sellerVerified: true,
      location: 'Victoria Island, Lagos',
      posted: '3 hours ago',
      views: '1.2k',
      likes: 45,
      premium: true,
      urgent: true,
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 2,
      title: 'iPhone 15 Pro Max 1TB - Brand New, Unopened',
      price: '₦950,000',
      originalPrice: '₦1,200,000',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=80',
      seller: 'Tech Haven NG',
      sellerVerified: true,
      location: 'Wuse, Abuja',
      posted: '6 hours ago',
      views: '2.1k',
      likes: 89,
      premium: true,
      badge: 'Trending',
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 3,
      title: 'Luxury 4-Bedroom Penthouse with Pool View',
      price: '₦180,000,000',
      originalPrice: '₦200,000,000',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80',
      seller: 'Prime Properties',
      sellerVerified: true,
      location: 'Lekki Phase 1, Lagos',
      posted: '1 day ago',
      views: '3.4k',
      likes: 123,
      premium: true,
      featured: true,
      rating: 4.9,
      reviews: 45,
    },
    {
      id: 4,
      title: 'ASUS ROG Strix Gaming Laptop - RTX 4070, 32GB RAM',
      price: '₦1,450,000',
      originalPrice: '₦1,800,000',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80',
      seller: 'Gamer\'s Paradise',
      sellerVerified: true,
      location: 'Port Harcourt, Rivers',
      posted: '2 days ago',
      views: '1.8k',
      likes: 67,
      badge: 'Hot Deal',
      rating: 4.7,
      reviews: 112,
    },
    {
      id: 5,
      title: 'Rolex Datejust 41mm - 2023 Model with Papers',
      price: '₦12,500,000',
      originalPrice: '₦15,000,000',
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&auto=format&fit=crop&q=80',
      seller: 'Luxury Timepieces',
      sellerVerified: true,
      location: 'Ikoyi, Lagos',
      posted: '4 hours ago',
      views: '890',
      likes: 34,
      premium: true,
      rating: 5.0,
      reviews: 23,
    },
    {
      id: 6,
      title: '2022 Toyota Land Cruiser VXR - Full Option',
      price: '₦45,000,000',
      originalPrice: '₦48,000,000',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?w=800&auto=format&fit=crop&q=80',
      seller: 'Premium Autos',
      sellerVerified: true,
      location: 'Maitama, Abuja',
      posted: '1 day ago',
      views: '2.5k',
      likes: 156,
      urgent: true,
      rating: 4.9,
      reviews: 67,
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'List Your Item',
      description: 'Upload photos, set price, and add details. It takes 2 minutes.',
      icon: Sparkles,
    },
    {
      step: '02',
      title: 'Get Instant Visibility',
      description: 'Your listing appears to thousands of active buyers immediately.',
      icon: Rocket,
    },
    {
      step: '03',
      title: 'Receive Offers',
      description: 'Chat with interested buyers and negotiate securely.',
      icon: MessageCircle,
    },
    {
      step: '04',
      title: 'Close The Deal',
      description: 'Use our secure payment and escrow service.',
      icon: CheckCircle,
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Bello',
      role: 'Car Dealer, Lagos',
      content: 'Sold 15 cars in my first month! The premium listing feature is worth every kobo.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&facepad=2',
      rating: 5,
    },
    {
      name: 'Chioma Okonkwo',
      role: 'Phone Retailer, Abuja',
      content: 'My phone business grew 300% since joining. The customer support is amazing!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop&facepad=2',
      rating: 5,
    },
    {
      name: 'Tunde Williams',
      role: 'Real Estate Agent, PH',
      content: 'Closed a ₦120M property deal through WeSellAll. This platform is a game-changer.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&facepad=2',
      rating: 5,
    },
  ];

  const popularCities = [
    { name: 'Lagos', listings: '45,230', icon: '🌆' },
    { name: 'Abuja', listings: '23,450', icon: '🏛️' },
    { name: 'Port Harcourt', listings: '15,670', icon: '🌉' },
    { name: 'Ibadan', listings: '12,340', icon: '🏙️' },
    { name: 'Kano', listings: '10,980', icon: '🕌' },
    { name: 'Enugu', listings: '8,760', icon: '⛰️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Nigeria's #1 Marketplace</span>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm">4.9/5 (12,456 reviews)</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Buy & Sell{' '}
                <span className="gradient-text">Anything</span>{' '}
                in Nigeria
              </h1>

              <p className="text-xl text-gray-600">
                Join 500,000+ Nigerians buying and selling everything from cars to houses.
                <span className="block mt-2 font-semibold text-primary">
                  No commission on basic listings!
                </span>
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-2xl p-1">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 flex items-center px-6">
                    <Search className="h-5 w-5 text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="What are you looking for? (e.g., iPhone 15, Toyota Camry, 3-bedroom flat)"
                      className="w-full py-4 outline-none text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  <div className="flex items-center border-l px-4">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                    <select className="outline-none text-gray-900 bg-transparent">
                      <option>All Nigeria</option>
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Port Harcourt</option>
                      <option>Ibadan</option>
                      <option>Kano</option>
                    </select>
                  </div>
                  <Link
                    href="/products"
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Search
                  </Link>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                  value={`${(stats.listings / 1000).toFixed(1)}k+`}
                  label="Active Listings"
                  icon={<TrendingUp className="h-5 w-5" />}
                />
                <StatCard
                  value={`${(stats.sellers / 1000).toFixed(1)}k+`}
                  label="Verified Sellers"
                  icon={<ShieldCheck className="h-5 w-5" />}
                />
                <StatCard
                  value={`${(stats.buyers / 1000).toFixed(1)}k+`}
                  label="Active Buyers"
                  icon={<Users className="h-5 w-5" />}
                />
                <StatCard
                  value={`${(stats.deals / 1000).toFixed(1)}k+`}
                  label="Deals Closed"
                  icon={<CheckCircle className="h-5 w-5" />}
                />
              </div>
            </div>

            {/* Right Content - Hero Image Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {heroImages.map((img, index) => (
                  <div
                    key={index}
                    className={`relative h-64 rounded-2xl overflow-hidden group ${
                      index === 0 ? 'col-span-2' : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={index === 0 ? 'Premium Cars' : index === 1 ? 'Latest Tech' : index === 2 ? 'Luxury Homes' : 'Fashion'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-4 left-4 z-20 text-white">
                      <span className="text-sm font-medium">
                        {index === 0 ? 'Premium Cars' : 
                         index === 1 ? 'Latest Tech' : 
                         index === 2 ? 'Luxury Homes' : 'Fashion'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            <TrustBadge
              icon={<ShieldCheck className="h-8 w-8" />}
              title="Verified Only"
              description="All sellers verified"
            />
            <TrustBadge
              icon={<Zap className="h-8 w-8" />}
              title="Instant Posting"
              description="Live in 60 seconds"
            />
            <TrustBadge
              icon={<Wallet className="h-8 w-8" />}
              title="Secure Payments"
              description="Escrow protection"
            />
            <TrustBadge
              icon={<Truck className="h-8 w-8" />}
              title="Nationwide"
              description="Delivery available"
            />
            <TrustBadge
              icon={<Award className="h-8 w-8" />}
              title="Award Winning"
              description="Best marketplace 2024"
            />
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Browse Popular Categories</h2>
            <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/products?category=${encodeURIComponent(cat.name)}`}
                className={`group relative p-6 rounded-2xl transition-all hover:scale-105 ${
                  activeCategory === cat.name
                    ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25'
                    : 'bg-white hover:shadow-xl border hover:border-primary/20'
                }`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`p-3 rounded-full ${activeCategory === cat.name ? 'bg-white/20' : 'bg-gray-50'}`}>
                    {cat.icon}
                  </div>
                  <span className="font-medium text-center">{cat.name}</span>
                  <span className={`text-sm ${
                    activeCategory === cat.name ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {cat.count} items
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED LISTINGS ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="h-6 w-6 text-yellow-500" />
                <span className="text-sm font-semibold text-primary">PREMIUM PICKS</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Listings</h2>
              <p className="text-gray-600 mt-2">Curated selection of top-quality items</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/products" className="flex items-center text-primary font-semibold hover:text-primary/80">
                View all
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link href="/products" className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90">
                <Filter className="inline mr-2 h-4 w-4" />
                Browse All
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPULAR CITIES ================= */}
      <section className="py-20 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Across Nigeria</h2>
            <p className="text-gray-600">Find items in your city or nearby locations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularCities.map((city) => (
              <Link
                key={city.name}
                href={`/products?location=${encodeURIComponent(city.name)}`}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{city.icon}</div>
                <h3 className="font-bold text-lg mb-2">{city.name}</h3>
                <p className="text-gray-600 text-sm">{city.listings} listings</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explore All Cities
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How WeSellAll Works</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Selling online has never been easier. Follow these simple steps to start making money today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg mb-6">
                    {step.step}
                  </div>
                  <step.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/sell"
              className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Selling Now - It's Free!
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">What our community says about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Boost Your Sales</h2>
            <p className="text-gray-600">Choose the perfect plan for your selling needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              name="Starter"
              price="₦0"
              period="forever"
              description="Perfect for casual sellers"
              features={['5 free listings/month', 'Basic visibility', 'Standard support', 'Email notifications', 'Seller dashboard']}
              buttonText="Get Started"
              buttonLink="/register?tier=free"
              popular={false}
              color="from-gray-400 to-gray-600"
            />
            <PricingCard
              name="Pro Seller"
              price="₦10,000"
              period="/month"
              description="For serious entrepreneurs"
              features={[
                '50 premium listings',
                'Featured placement',
                'Priority support',
                'Advanced analytics',
                'Pro seller badge',
                'WhatsApp notifications',
              ]}
              buttonText="Go Pro"
              buttonLink="/register?tier=pro"
              popular={true}
              color="from-primary to-orange-500"
              savings="Save 20%"
            />
            <PricingCard
              name="Business"
              price="₦30,000"
              period="/month"
              description="For businesses & dealers"
              features={[
                'Unlimited listings',
                'Top search placement',
                '24/7 premium support',
                'Business analytics suite',
                'Verified business badge',
                'Dedicated account manager',
              ]}
              buttonText="Scale Business"
              buttonLink="/register?tier=business"
              popular={false}
              color="from-secondary to-blue-600"
              savings="Save 40%"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-white mr-2" />
            <span className="text-white font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Sell Your First Item?
          </h2>
          
          <p className="text-white/90 text-xl mb-10">
            Join thousands of successful sellers. First premium listing is free!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register?tier=pro"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all"
            >
              Start Selling Free
            </Link>
            <Link
              href="/sell"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Learn How to Sell
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary mb-6 mx-auto">
            <Gem className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get Exclusive Deals & Updates
          </h2>
          
          <p className="text-gray-400 text-lg mb-8">
            Subscribe to receive the hottest deals, latest listings, and marketplace tips. No spam, ever.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all"
            >
              Subscribe Now
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            Join 50,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ value, label, icon }: any) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
}

function TrustBadge({ icon, title, description }: any) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-3">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}

function ProductCard({ item }: any) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.premium && (
            <span className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              <Crown className="h-3 w-3 mr-1" />
              PREMIUM
            </span>
          )}
          {item.urgent && (
            <span className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              <Zap className="h-3 w-3 mr-1" />
              URGENT
            </span>
          )}
          {item.featured && (
            <span className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
              <Star className="h-3 w-3 mr-1" />
              FEATURED
            </span>
          )}
          {item.badge && (
            <span className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              {item.badge}
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
      </div>

      {/* Product Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
            {item.title}
          </h3>
          {item.sellerVerified && (
            <BadgeCheck className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-primary">{item.price}</div>
            {item.originalPrice && (
              <div className="text-sm text-gray-500 line-through">{item.originalPrice}</div>
            )}
          </div>
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="ml-1 font-medium">{item.rating}</span>
            <span className="ml-1 text-gray-500">({item.reviews})</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              {item.views}
            </span>
            <span className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              {item.likes}
            </span>
          </div>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {item.posted}
          </span>
        </div>

        {/* Seller Info */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
              {item.seller.charAt(0)}
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-medium text-sm">{item.seller}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <MapPin className="h-3 w-3 mr-1" />
                {item.location}
              </div>
            </div>
          </div>
          <Link
            href={`/product/${item.id}`}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, buttonText, buttonLink, popular, color, savings }: any) {
  return (
    <div className={`relative rounded-2xl p-8 ${
      popular 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white shadow-2xl scale-105' 
        : 'bg-white shadow-xl'
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-1 rounded-full text-sm font-bold">
            MOST POPULAR
          </div>
        </div>
      )}
      
      {savings && (
        <div className="absolute -top-3 right-4">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {savings}
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl lg:text-5xl font-bold">{price}</span>
          <span className={`ml-2 ${popular ? 'text-gray-300' : 'text-gray-600'}`}>
            {period}
          </span>
        </div>
        <p className={`mt-2 ${popular ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <CheckCircle className={`h-5 w-5 mr-3 ${
              popular ? 'text-green-400' : 'text-green-500'
            }`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={buttonLink}
        className={`block w-full py-4 rounded-xl font-bold text-lg text-center transition-all ${
          popular
            ? `bg-gradient-to-r ${color} hover:shadow-lg hover:shadow-primary/25`
            : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
}