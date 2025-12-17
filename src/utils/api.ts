import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const endpoints = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    me: '/auth/me',
  },
  payments: {
    initialize: '/payments/initialize',
    verify: '/payments/verify',
  },
  products: {
    create: '/products',
    list: '/products',
    featured: '/products/featured',
    byCategory: (category: string) => `/products/category/${category}`,
    byId: (id: string) => `/products/${id}`,
  },
  admin: {
    ads: '/admin/ads',
    approveAd: (id: string) => `/admin/ads/${id}/approve`,
    rejectAd: (id: string) => `/admin/ads/${id}/reject`,
    stats: '/admin/stats',
  },
};