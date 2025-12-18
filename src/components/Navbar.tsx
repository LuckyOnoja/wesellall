'use client';

import Link from 'next/link';
import { ShoppingCart, User, Menu, X, Bell, Search, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Browse' },
    { href: '/categories', label: 'Categories' },
    { href: '/trending', label: 'Trending', icon: <TrendingUp size={16} /> },
    { href: '/sell', label: 'Sell', highlight: true },
    { href: '/deals', label: 'Deals' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
             <img 
                src={'logo.png'}  
                alt='logo'
                className="h-8"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                } ${item.highlight ? 'bg-primary text-white hover:bg-primary/90' : ''}`}
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent w-full outline-none text-sm"
            />
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-full">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-full">
              <ShoppingCart size={20} />
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-50">Dashboard</Link>
                <Link href="/messages" className="block px-4 py-2 hover:bg-gray-50">Messages</Link>
                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-50">Settings</Link>
                <div className="border-t my-2"></div>
                <Link href="/logout" className="block px-4 py-2 hover:bg-gray-50 text-red-500">Logout</Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-2xl p-4 animate-slide-up">
            {/* Mobile Search */}
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-4">
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent w-full outline-none"
              />
            </div>

            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium ${
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${item.highlight ? 'bg-primary text-white hover:bg-primary/90' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </div>
                  <span className="text-gray-400">→</span>
                </Link>
              ))}
            </div>

            <div className="border-t mt-4 pt-4 space-y-2">
              <button className="w-full flex items-center justify-center space-x-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <ShoppingCart size={20} />
                <span>Cart (3)</span>
              </button>
              <Link
                href="/profile"
                className="w-full flex items-center justify-center space-x-2 p-3 text-gray-600 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <span>Profile</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}