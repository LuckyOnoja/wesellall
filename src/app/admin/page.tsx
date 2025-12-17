'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Eye, Filter } from 'lucide-react';
import toast from 'react-hot-toast';

const pendingAds = [
  {
    id: '1',
    title: '2021 Toyota Camry',
    seller: 'Auto Dealer Ltd',
    category: 'Cars',
    price: 8500000,
    images: ['https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&auto=format&fit=crop'],
    submittedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    title: 'iPhone 14 Pro Max',
    seller: 'Tech Store NG',
    category: 'Phones',
    price: 950000,
    images: ['https://images.unsplash.com/photo-1678652173913-c41168843d93?w=400&auto=format&fit=crop'],
    submittedAt: '2024-01-15T09:15:00Z',
  },
  {
    id: '3',
    title: '4-Bedroom Duplex',
    seller: 'Real Estate Co',
    category: 'Real Estate',
    price: 75000000,
    images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&auto=format&fit=crop'],
    submittedAt: '2024-01-14T16:45:00Z',
  },
];

export default function AdminDashboard() {
  const [ads, setAds] = useState(pendingAds);
  const [selectedAd, setSelectedAd] = useState<string | null>(null);

  const handleApprove = (adId: string) => {
    setAds(ads.filter(ad => ad.id !== adId));
    toast.success('Ad approved successfully');
  };

  const handleReject = (adId: string) => {
    setAds(ads.filter(ad => ad.id !== adId));
    toast.error('Ad rejected');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Review and manage advertisements</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Card */}
            <div className="card">
              <h3 className="font-semibold mb-4">Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Reviews</span>
                  <span className="font-bold text-2xl">{ads.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Approved Today</span>
                  <span className="font-bold text-2xl text-green-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rejected Today</span>
                  <span className="font-bold text-2xl text-red-600">3</span>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter size={20} className="mr-2" />
                Filters
              </h3>
              <div className="space-y-3">
                <select className="input-field">
                  <option value="">All Categories</option>
                  <option value="cars">Cars</option>
                  <option value="phones">Phones</option>
                  <option value="real-estate">Real Estate</option>
                </select>
                <select className="input-field">
                  <option value="">Any Price Range</option>
                  <option value="low">Under ₦1M</option>
                  <option value="medium">₦1M - ₦10M</option>
                  <option value="high">Over ₦10M</option>
                </select>
                <button className="btn-primary w-full">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Ads List */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Pending Ads for Review</h2>
                <span className="text-sm text-gray-600">
                  Showing {ads.length} ads
                </span>
              </div>

              <div className="space-y-4">
                {ads.map((ad) => (
                  <div
                    key={ad.id}
                    className={`p-4 border rounded-lg transition-all ${
                      selectedAd === ad.id ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={ad.images[0]}
                          alt={ad.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-lg">{ad.title}</h4>
                            <p className="text-gray-600 text-sm mt-1">
                              by {ad.seller} • {ad.category}
                            </p>
                            <div className="text-xl font-bold text-gray-900 mt-2">
                              ₦{ad.price.toLocaleString()}
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedAd(ad.id === selectedAd ? null : ad.id)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                          >
                            <Eye size={20} />
                          </button>
                        </div>

                        {selectedAd === ad.id && (
                          <div className="mt-4 pt-4 border-t">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="text-sm font-medium text-gray-600">Submitted</label>
                                <p className="text-gray-900">
                                  {new Date(ad.submittedAt).toLocaleDateString()}
                                </p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-600">Category</label>
                                <p className="text-gray-900">{ad.category}</p>
                              </div>
                            </div>
                            <div className="flex space-x-3">
                              <button
                                onClick={() => handleApprove(ad.id)}
                                className="btn-primary flex-1 flex items-center justify-center"
                              >
                                <CheckCircle size={20} className="mr-2" />
                                Approve Ad
                              </button>
                              <button
                                onClick={() => handleReject(ad.id)}
                                className="btn-outline flex-1 flex items-center justify-center"
                              >
                                <XCircle size={20} className="mr-2" />
                                Reject Ad
                              </button>
                            </div>
                          </div>
                        )}

                        {selectedAd !== ad.id && (
                          <div className="flex space-x-3 mt-4">
                            <button
                              onClick={() => handleApprove(ad.id)}
                              className="btn-primary flex-1 text-sm py-2"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleReject(ad.id)}
                              className="btn-outline flex-1 text-sm py-2"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {ads.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                    <h3 className="text-xl font-semibold mb-2">All caught up!</h3>
                    <p className="text-gray-600">No pending ads to review.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}