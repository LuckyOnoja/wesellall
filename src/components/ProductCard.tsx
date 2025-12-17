'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Share2, Eye, MapPin, Star } from 'lucide-react';
import { formatPrice } from '@/utils/formatters';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    location: string;
    category: string;
    image: string;
    seller: string;
    rating?: number;
    isFeatured?: boolean;
    isVerified?: boolean;
  };
  variant?: 'grid' | 'list';
}

export default function ProductCard({ product, variant = 'grid' }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (variant === 'list') {
    return (
      <div
        className="flex border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-64 h-64 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
          {product.isFeatured && (
            <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
        </div>
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.isVerified && (
                  <span className="flex items-center text-sm text-green-600">
                    <Star size={14} className="mr-1 fill-current" />
                    Verified
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">Sold by: {product.seller}</p>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin size={18} className="mr-2" />
                {product.location}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatPrice(product.price)}
              </div>
              <div className="flex space-x-2 justify-end">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full ${isLiked ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'}`}
                >
                  <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                </button>
                <button className="p-2 rounded-full text-gray-400 hover:text-primary hover:bg-gray-100">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Eye size={18} className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">1.2k views</span>
            </div>
            <button className="btn-primary px-8">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        {product.isFeatured && (
          <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm"
        >
          <Heart
            size={20}
            className={isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}
          />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          {product.rating && (
            <div className="flex items-center text-sm">
              <Star size={14} className="text-yellow-400 fill-current mr-1" />
              {product.rating.toFixed(1)}
            </div>
          )}
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary cursor-pointer">
          {product.title}
        </h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin size={14} className="mr-2" />
          {product.location}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </div>
          <button className="btn-primary text-sm px-4 py-2">
            View Details
          </button>
        </div>
        {product.isVerified && (
          <div className="mt-3 flex items-center text-sm text-green-600">
            <Star size={14} className="mr-2 fill-current" />
            Verified Seller
          </div>
        )}
      </div>
    </div>
  );
}