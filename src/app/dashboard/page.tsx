'use client';

import { useState } from 'react';
import { BarChart3, Package, MessageSquare, CreditCard, Upload, Settings } from 'lucide-react';
import { formatPrice } from '@/utils/formatters';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalViews: 1250,
    totalSales: 24,
    totalEarnings: 1850000,
    activeListings: 8,
  };

  const recentListings = [
    { id: 1, title: 'iPhone 13 Pro', price: 450000, views: 156, status: 'active' },
    { id: 2, title: 'MacBook Air M1', price: 650000, views: 89, status: 'sold' },
    { id: 3, title: 'Samsung S22 Ultra', price: 380000, views: 203, status: 'active' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your selling overview.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg mr-4">
                <Package className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold">{stats.totalSales}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <CreditCard className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold">{formatPrice(stats.totalEarnings)}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg mr-4">
                <Upload className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold">{stats.activeListings}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Navigation */}
          <div className="lg:col-span-1">
            <div className="card">
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'listings', label: 'My Listings', icon: Package },
                  { id: 'messages', label: 'Messages', icon: MessageSquare },
                  { id: 'payments', label: 'Payments', icon: CreditCard },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <item.icon size={20} className="mr-3" />
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <button className="btn-primary w-full mb-3">
                  <Upload size={20} className="mr-2" />
                  Post New Ad
                </button>
                <button className="btn-outline w-full">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Recent Listings */}
                <div className="card">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Recent Listings</h3>
                    <button className="text-primary font-semibold">
                      View All →
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentListings.map((listing) => (
                      <div
                        key={listing.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <h4 className="font-semibold">{listing.title}</h4>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-gray-600">
                              {formatPrice(listing.price)}
                            </span>
                            <span className="text-sm text-gray-500">
                              {listing.views} views
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                listing.status === 'active'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {listing.status}
                            </span>
                          </div>
                        </div>
                        <button className="text-primary hover:underline">
                          Edit
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="card">
                  <h3 className="text-xl font-bold mb-6">Performance</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        85%
                      </div>
                      <p className="text-gray-600">Response Rate</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        2.1h
                      </div>
                      <p className="text-gray-600">Avg. Response Time</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}