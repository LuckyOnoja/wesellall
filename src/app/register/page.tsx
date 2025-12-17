'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { SellerTier, RegistrationFormData } from '@/types';
import { api, endpoints } from '@/utils/api';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  phone: z.string().min(10, 'Invalid phone number'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  tier: z.enum(['free', 'basic', 'premium']),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof registrationSchema>;

const tierDetails = {
  free: {
    name: 'Free Seller',
    price: 0,
    features: [
      'Post unlimited ads',
      'Basic search visibility',
      'Standard support',
    ],
  },
  basic: {
    name: 'Basic Seller',
    price: 10000,
    features: [
      'Everything in Free tier',
      'Ads reviewed within 24h',
      'Higher search ranking',
      'Priority support',
    ],
  },
  premium: {
    name: 'Premium Seller',
    price: 20000,
    features: [
      'Everything in Basic tier',
      'Top of search results',
      'Landing page eligibility',
      'Verified seller badge',
      'Dedicated account manager',
    ],
  },
};

export default function RegistrationPage() {
  const searchParams = useSearchParams();
  const initialTier = (searchParams.get('tier') as SellerTier) || 'free';
  
  const [selectedTier, setSelectedTier] = useState<SellerTier>(initialTier);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      tier: initialTier,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await api.post(endpoints.auth.register, data);
      
      if (data.tier === 'free') {
        toast.success('Registration successful! You can now start selling.');
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        // For paid tiers, redirect to Paystack
        setPaymentUrl(response.data.paymentData.authorization_url);
        toast.loading('Redirecting to payment...');
        setTimeout(() => {
          window.location.href = response.data.paymentData.authorization_url;
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Registration failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTierSelect = (tier: SellerTier) => {
    setSelectedTier(tier);
    setValue('tier', tier);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join <span className="text-primary">WeSellAll</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Start selling to thousands of buyers in Nigeria
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tier Selection */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="text-xl font-bold mb-6">Select Your Plan</h3>
              <div className="space-y-4">
                {(['free', 'basic', 'premium'] as SellerTier[]).map((tier) => (
                  <div
                    key={tier}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedTier === tier
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleTierSelect(tier)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {tierDetails[tier].name}
                        </h4>
                        <div className="text-2xl font-bold mt-2">
                          ₦{tierDetails[tier].price.toLocaleString()}
                          {tier !== 'free' && <span className="text-sm text-gray-600">/month</span>}
                        </div>
                      </div>
                      {selectedTier === tier && (
                        <CheckCircle className="text-primary" size={24} />
                      )}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {tierDetails[tier].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Selected Tier Summary */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Selected Plan</h4>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{tierDetails[selectedTier].name}</span>
                  <span className="text-2xl font-bold text-primary">
                    ₦{tierDetails[selectedTier].price.toLocaleString()}
                  </span>
                </div>
                {selectedTier !== 'free' && (
                  <p className="text-sm text-gray-600 mt-2">
                    Billed monthly. Cancel anytime.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="label">Full Name</label>
                    <input
                      type="text"
                      {...register('fullName')}
                      className="input-field"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="label">Email Address</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="input-field"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="label">Phone Number</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="input-field"
                      placeholder="08012345678"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="label">Address</label>
                    <input
                      type="text"
                      {...register('address')}
                      className="input-field"
                      placeholder="City, State"
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="label">Password</label>
                    <input
                      type="password"
                      {...register('password')}
                      className="input-field"
                      placeholder="At least 6 characters"
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="label">Confirm Password</label>
                    <input
                      type="password"
                      {...register('confirmPassword')}
                      className="input-field"
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tier Hidden Input */}
                <input type="hidden" {...register('tier')} />

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 mr-3"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" />
                      Processing...
                    </>
                  ) : selectedTier === 'free' ? (
                    'Create Free Account'
                  ) : (
                    `Pay ₦${tierDetails[selectedTier].price.toLocaleString()} & Start Selling`
                  )}
                </button>

                <p className="text-center text-gray-600 text-sm">
                  Already have an account?{' '}
                  <a href="/login" className="text-primary font-semibold hover:underline">
                    Sign in
                  </a>
                </p>
              </form>

              {/* Payment Redirect Notice */}
              {paymentUrl && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center">
                    <Loader2 className="animate-spin text-blue-500 mr-3" />
                    <div>
                      <p className="font-medium text-blue-800">
                        Redirecting to payment gateway...
                      </p>
                      <p className="text-sm text-blue-600 mt-1">
                        If you are not redirected automatically,{' '}
                        <a href={paymentUrl} className="font-semibold underline">
                          click here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Features Comparison */}
            <div className="mt-8 card">
              <h3 className="text-xl font-bold mb-6">Why Choose WeSellAll?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold mb-2">Fast Selling</h4>
                  <p className="text-gray-600 text-sm">
                    Products sell 3x faster compared to other platforms
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">🛡️</span>
                  </div>
                  <h4 className="font-semibold mb-2">Secure Transactions</h4>
                  <p className="text-gray-600 text-sm">
                    Verified sellers and secure payment processing
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">👥</span>
                  </div>
                  <h4 className="font-semibold mb-2">Large Audience</h4>
                  <p className="text-gray-600 text-sm">
                    Reach thousands of active buyers across Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}