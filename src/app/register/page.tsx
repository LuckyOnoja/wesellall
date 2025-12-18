'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Award, 
  ChevronRight,
  Eye,
  EyeOff,
  BadgeCheck,
  Crown,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Wallet,
  Clock,
  Star
} from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters').regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain uppercase, lowercase, and number'
  ),
  confirmPassword: z.string(),
  phone: z.string().min(11, 'Invalid Nigerian phone number').regex(/^[0-9]+$/, 'Only numbers allowed'),
  businessName: z.string().optional(),
  location: z.string().min(2, 'Please enter your location'),
  tier: z.enum(['free', 'pro', 'business']),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof registrationSchema>;

const tierDetails = {
  free: {
    name: 'Starter',
    price: 0,
    period: 'Free Forever',
    color: 'from-gray-400 to-gray-600',
    features: [
      { text: '5 monthly listings', included: true },
      { text: 'Basic seller profile', included: true },
      { text: 'Standard support', included: true },
      { text: 'Email notifications', included: true },
      { text: 'Analytics dashboard', included: false },
      { text: 'Priority placement', included: false },
      { text: 'Premium badge', included: false },
      { text: 'Bulk upload', included: false },
      { text: 'API access', included: false },
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  pro: {
    name: 'Pro Seller',
    price: 10000,
    period: 'per month',
    color: 'from-primary to-orange-500',
    features: [
      { text: '50 premium listings', included: true },
      { text: 'Featured placement', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Pro seller badge', included: true },
      { text: 'WhatsApp notifications', included: true },
      { text: 'Bulk upload (up to 100)', included: true },
      { text: 'Basic API access', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
    cta: 'Go Pro - Most Popular',
    popular: true,
    savings: 'Save 20%',
  },
  business: {
    name: 'Business',
    price: 30000,
    period: 'per month',
    color: 'from-secondary to-blue-600',
    features: [
      { text: 'Unlimited listings', included: true },
      { text: 'Top search placement', included: true },
      { text: '24/7 premium support', included: true },
      { text: 'Business analytics suite', included: true },
      { text: 'Verified business badge', included: true },
      { text: 'Priority listing approval', included: true },
      { text: 'Unlimited bulk upload', included: true },
      { text: 'Full API access', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Scale Your Business',
    popular: false,
    savings: 'Save 40%',
  },
};

export default function RegistrationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTier = (searchParams.get('tier') as keyof typeof tierDetails) || 'free';
  
  const [selectedTier, setSelectedTier] = useState<keyof typeof tierDetails>(initialTier);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      tier: initialTier,
      location: searchParams.get('location') || '',
    },
  });

  const nextStep = async () => {
    const isValid = await trigger(['fullName', 'email', 'password', 'confirmPassword', 'phone', 'location']);
    if (isValid) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      if (data.tier === 'free') {
        toast.success('🎉 Account created successfully! Redirecting to dashboard...');
        setTimeout(() => router.push('/dashboard'), 1500);
      } else {
        // For paid tiers, redirect to payment
        toast.success('🎉 Account created! Redirecting to payment...');
        setTimeout(() => {
          router.push(`/payment?tier=${data.tier}&amount=${tierDetails[data.tier].price}`);
        }, 1500);
      }
      setIsSubmitting(false);
    }, 2000);
  };

  const stats = [
    { value: '500k+', label: 'Active Buyers', icon: Users },
    { value: '3-5x', label: 'Faster Sales', icon: Zap },
    { value: '98%', label: 'Satisfaction', icon: Star },
    { value: '24h', label: 'Support Response', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary/5">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        {step > 1 && (
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-200 text-gray-400'
                  } font-bold`}>
                    {s}
                  </div>
                  {s < 2 && (
                    <div className={`w-24 h-1 mx-4 ${step > s ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-primary">Step {step} of 2</span>
              <h3 className="text-lg font-bold mt-1">
                {step === 1 ? 'Account Information' : 'Choose Your Plan'}
              </h3>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">W</span>
                  </div>
                  <span className="gradient-text">WeSellAll</span>
                </Link>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  {step === 1 ? 'Create Your Seller Account' : 'Choose Your Selling Plan'}
                </h1>
                <p className="text-gray-600">
                  {step === 1 
                    ? 'Join Nigeria\'s fastest-growing marketplace in 2 minutes' 
                    : 'Select the perfect plan for your selling needs'}
                </p>
              </div>

              {step === 1 ? (
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('fullName')}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.fullName ? 'border-red-300' : 'border-gray-300'
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                        placeholder="John Adebayo"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Business Name (Optional) */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Business Name <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        {...register('businessName')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="Your Business Name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 py-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-600">
                          +234
                        </span>
                        <input
                          type="tel"
                          {...register('phone')}
                          className={`flex-1 px-4 py-3 rounded-r-xl border ${
                            errors.phone ? 'border-red-300' : 'border-gray-300'
                          } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                          placeholder="8012345678"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          {...register('password')}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.password ? 'border-red-300' : 'border-gray-300'
                          } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition pr-12`}
                          placeholder="At least 8 characters"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          {...register('confirmPassword')}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                          } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition pr-12`}
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Location (City/State) *
                    </label>
                    <select
                      {...register('location')}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.location ? 'border-red-300' : 'border-gray-300'
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                    >
                      <option value="">Select your location</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Port Harcourt">Port Harcourt</option>
                      <option value="Ibadan">Ibadan</option>
                      <option value="Kano">Kano</option>
                      <option value="Enugu">Enugu</option>
                      <option value="Benin">Benin</option>
                      <option value="Abeokuta">Abeokuta</option>
                    </select>
                    {errors.location && (
                      <p className="text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  {/* Terms */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 w-4 h-4 text-primary rounded focus:ring-primary/20"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link href="/terms" className="text-primary font-medium hover:underline">
                        Terms of Service
                      </Link>
                      ,{' '}
                      <Link href="/privacy" className="text-primary font-medium hover:underline">
                        Privacy Policy
                      </Link>
                      , and{' '}
                      <Link href="/refund" className="text-primary font-medium hover:underline">
                        Refund Policy
                      </Link>
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    Continue to Plan Selection
                    <ChevronRight className="inline ml-2 h-5 w-5" />
                  </button>

                  <p className="text-center text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary font-semibold hover:underline">
                      Sign in here
                    </Link>
                  </p>
                </form>
              ) : (
                /* Step 2: Plan Selection */
                <div>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {(['free', 'pro', 'business'] as const).map((tier) => (
                      <div
                        key={tier}
                        onClick={() => {
                          setSelectedTier(tier);
                          setValue('tier', tier);
                        }}
                        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all hover:scale-[1.02] ${
                          selectedTier === tier
                            ? `border-primary bg-gradient-to-b ${tierDetails[tier].color}/5`
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        {tierDetails[tier].popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold">
                              MOST POPULAR
                            </span>
                          </div>
                        )}

                        {tierDetails[tier].savings && (
                          <div className="absolute -top-3 right-4">
                            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                              {tierDetails[tier].savings}
                            </span>
                          </div>
                        )}

                        <div className="text-center mb-6">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                            selectedTier === tier 
                              ? `bg-gradient-to-r ${tierDetails[tier].color} text-white`
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {tier === 'free' && <Sparkles size={20} />}
                            {tier === 'pro' && <Crown size={20} />}
                            {tier === 'business' && <BadgeCheck size={20} />}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{tierDetails[tier].name}</h3>
                          <div className="flex items-baseline justify-center">
                            <span className="text-3xl font-bold">
                              ₦{tierDetails[tier].price.toLocaleString()}
                            </span>
                            <span className="text-gray-600 ml-1">
                              {tierDetails[tier].period}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {tierDetails[tier].features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              {feature.included ? (
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              ) : (
                                <div className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0">✗</div>
                              )}
                              <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                                {feature.text}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className={`text-center p-3 rounded-lg ${
                          selectedTier === tier 
                            ? `bg-gradient-to-r ${tierDetails[tier].color} text-white`
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {selectedTier === tier ? '✓ Selected' : 'Select Plan'}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Plan Summary */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h4 className="font-bold text-lg mb-4">Selected Plan Summary</h4>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${tierDetails[selectedTier].color} text-white`}>
                            {selectedTier === 'free' && <Sparkles size={20} />}
                            {selectedTier === 'pro' && <Crown size={20} />}
                            {selectedTier === 'business' && <BadgeCheck size={20} />}
                          </div>
                          <div>
                            <h5 className="font-bold text-lg">{tierDetails[selectedTier].name}</h5>
                            <p className="text-gray-600">
                              {selectedTier === 'free' ? 'Perfect for getting started' :
                               selectedTier === 'pro' ? 'Ideal for serious sellers' :
                               'Best for established businesses'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="text-3xl font-bold text-primary">
                          ₦{tierDetails[selectedTier].price.toLocaleString()}
                        </div>
                        <div className="text-gray-600">{tierDetails[selectedTier].period}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-4 rounded-xl border border-gray-300 font-medium hover:bg-gray-50 transition"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleSubmit(onSubmit)}
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="inline animate-spin mr-2 h-5 w-5" />
                          Processing...
                        </>
                      ) : selectedTier === 'free' ? (
                        'Create Free Account'
                      ) : (
                        `Pay ₦${tierDetails[selectedTier].price.toLocaleString()} & Start Selling`
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Benefits & Stats */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">Why Nigerian Sellers Choose WeSellAll</h2>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3">
                        <Icon size={24} />
                      </div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <TrendingUp className="mr-2 text-primary" />
                Seller Success Stories
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold">Ahmed Bello</h4>
                    <p className="text-gray-600 text-sm">Auto Dealer, Lagos</p>
                    <p className="mt-2 text-gray-700">
                      "Made ₦12M in first month! The Pro plan paid for itself 10x over."
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <div>
                    <h4 className="font-bold">Chioma Okonkwo</h4>
                    <p className="text-gray-600 text-sm">Phone Retailer, Abuja</p>
                    <p className="mt-2 text-gray-700">
                      "Sales tripled after switching to WeSellAll. Best decision ever!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold mb-6">Everything You Get</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Verified Seller Badge</h4>
                    <p className="text-gray-600 text-sm">Build trust with buyers instantly</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Fast Listing Approval</h4>
                    <p className="text-gray-600 text-sm">Live in minutes, not days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Targeted Buyers</h4>
                    <p className="text-gray-600 text-sm">Reach interested buyers in your area</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sales Analytics</h4>
                    <p className="text-gray-600 text-sm">Track performance and optimize</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Trusted by 50,000+ Nigerian Sellers</span>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                No hidden fees • Cancel anytime • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}