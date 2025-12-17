export enum SellerTier {
  FREE = 'free',
  BASIC = 'basic',
  PREMIUM = 'premium'
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  tier: SellerTier;
  isVerified: boolean;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: string;
  expiresAt?: string;
}

export interface Product {
  _id: string;
  sellerId: string;
  sellerName: string;
  title: string;
  description: string;
  price: number;
  category: string;
  location: string;
  images: string[];
  tierVisibility: SellerTier[];
  isFeatured: boolean;
  status: 'active' | 'sold' | 'pending_review';
  contactInfo: {
    phone?: string;
    email?: string;
    whatsapp?: string;
  };
  views: number;
  createdAt: string;
}

export interface PaymentData {
  reference: string;
  authorization_url: string;
  access_code: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  tier: SellerTier;
}