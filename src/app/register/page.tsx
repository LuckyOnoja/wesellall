'use client';

import { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

const registrationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  phone: z.string().min(10, 'Invalid phone number'),
  businessName: z.string().optional(),
  tier: z.enum(['starter', 'pro', 'business']),
});

type FormData = z.infer<typeof registrationSchema>;

const tierDetails = {
  starter: {
    name: 'Starter',
    price: 0,
    period: 'Free',
    icon: 'storefront',
    description: 'Perfect for casual sellers. 3 free listings per month.',
  },
  pro: {
    name: 'Pro Seller',
    price: 5000,
    period: '/mo',
    icon: 'verified',
    description: 'Unlimited listings, Verified Badge & Priority Support.',
    popular: true,
  },
  business: {
    name: 'Business',
    price: 20000,
    period: '/mo',
    icon: 'domain',
    description: 'Dedicated storefront, API access & Account Manager.',
  },
};

// Create a skeleton loading component
function RegistrationPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-primary/5">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form Skeleton */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 text-2xl font-bold mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-xl animate-pulse" />
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="h-10 w-3/4 mx-auto bg-gray-200 rounded mb-3 animate-pulse" />
                <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded animate-pulse" />
              </div>

              <div className="space-y-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-12 w-full bg-gray-200 rounded-xl animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Benefits Skeleton */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-3xl p-8 animate-pulse">
              <div className="h-8 w-3/4 bg-gray-700 rounded mb-6" />
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 mb-3" />
                    <div className="h-6 w-16 mx-auto bg-gray-700 rounded mb-1" />
                    <div className="h-4 w-20 mx-auto bg-gray-700 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main registration form component
function RegistrationPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTier = (searchParams.get('tier') as keyof typeof tierDetails) || 'pro';

  const [selectedTier, setSelectedTier] = useState<keyof typeof tierDetails>(initialTier);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      tier: initialTier,
    },
  });

  const nextStep = async () => {
    const isValid = await trigger(['firstName', 'lastName', 'email', 'password', 'phone']);
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
      if (data.tier === 'starter') {
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

  const currentTier = tierDetails[selectedTier];
  const totalDue = currentTier.price;

  return (
    <div className="relative flex flex-col lg:flex-row h-screen">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150"></div>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
        {/* Left Column - Form */}
        <div className="w-full lg:w-7/12 xl:w-1/2 h-full flex flex-col p-6 lg:p-12 overflow-y-auto scrollbar-hide">
        <header className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </div>
            <span className="text-xl font-bold font-display tracking-tight">WeSellAll</span>
          </Link>
          <Link className="text-sm text-white/60 hover:text-primary transition-colors" href="#">
            Already a seller? Log in
          </Link>
        </header>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className={step === 1 ? 'text-primary' : 'text-white/40'}>Step 1: Account Info</span>
            <span className={step === 2 ? 'text-primary' : 'text-white/40'}>Step 2: Plan Selection</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500 ease-out"
              style={{ width: step === 1 ? '50%' : '100%' }}
            ></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
          {/* Step 1: Account Info */}
          <div className={`step-content ${step === 1 ? 'active' : ''}`}>
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">Create your seller account</h1>
            <p className="text-white/60 mb-8">Join Nigeria's fastest growing marketplace. Start selling in minutes.</p>
            <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">First Name</label>
                  <input
                    {...register('firstName')}
                    className={`w-full bg-dark-input border ${
                      errors.firstName ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder-white/30`}
                    placeholder="e.g. Chukwudi"
                    type="text"
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-400 mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">Last Name</label>
                  <input
                    {...register('lastName')}
                    className={`w-full bg-dark-input border ${
                      errors.lastName ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder-white/30`}
                    placeholder="e.g. Okafor"
                    type="text"
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-400 mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Business Name (Optional)</label>
                <input
                  {...register('businessName')}
                  className="w-full bg-dark-input border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder-white/30"
                  placeholder="e.g. Chukwudi Electronics"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Email Address</label>
                <input
                  {...register('email')}
                  className={`w-full bg-dark-input border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder-white/30`}
                  placeholder="name@example.com"
                  type="email"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Phone Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-white/10 bg-white/5 text-white/60 text-sm">
                    🇳🇬 +234
                  </span>
                  <input
                    {...register('phone')}
                    className={`w-full bg-dark-input border ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    } rounded-r-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder-white/30`}
                    placeholder="801 234 5678"
                    type="tel"
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full bg-dark-input border ${
                      errors.password ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-4 py-3 pr-12 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder-white/30`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
                <p className="text-xs text-white/40 mt-1">Must be at least 8 characters</p>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg transition-transform active:scale-95 shadow-[0_4px_20px_rgba(255,105,51,0.3)] flex items-center justify-center gap-2"
                >
                  Continue to Plans <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>

          {/* Step 2: Plan Selection */}
          <div className={`step-content ${step === 2 ? 'active' : ''}`}>
            <button
              onClick={prevStep}
              className="flex items-center text-white/50 hover:text-white mb-6 text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-lg mr-1">arrow_back</span> Back to Account Info
            </button>
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">Select your selling plan</h1>
            <p className="text-white/60 mb-8">Choose the package that fits your business scale. You can change this later.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                {(['starter', 'pro', 'business'] as const).map((tier) => {
                  const tierInfo = tierDetails[tier];
                  const isSelected = selectedTier === tier;
                  return (
                    <label key={tier} className="block relative cursor-pointer group">
                      <input
                        {...register('tier')}
                        className="peer sr-only"
                        type="radio"
                        value={tier}
                        checked={isSelected}
                        onChange={() => {
                          setSelectedTier(tier);
                          setValue('tier', tier);
                        }}
                      />
                      <div
                        className={`tilt-card bg-dark-surface border rounded-xl p-5 flex items-center gap-4 transition-all ${
                          isSelected
                            ? tier === 'pro'
                              ? 'border-2 border-primary bg-primary/10 shadow-[0_0_30px_rgba(255,105,51,0.1)]'
                              : 'border-primary bg-primary/5'
                            : 'border-white/10'
                        }`}
                      >
                        {tier === 'pro' && 'popular' in tierInfo && tierInfo.popular && (
                          <div className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Most Popular
                          </div>
                        )}
                        <div
                          className={`size-12 rounded-full flex items-center justify-center transition-colors ${
                            isSelected && tier === 'pro'
                              ? 'bg-primary/20 text-primary'
                              : 'bg-white/5 text-white/70 group-hover:text-primary'
                          }`}
                        >
                          <span className="material-symbols-outlined">{tierInfo.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-white text-lg">{tierInfo.name}</h3>
                            <span className="text-white font-display font-bold">
                              {tierInfo.price === 0 ? (
                                tierInfo.period
                              ) : (
                                <>
                                  ₦{tierInfo.price.toLocaleString()}
                                  <span className="text-sm font-normal text-white/50">{tierInfo.period}</span>
                                </>
                              )}
                            </span>
                          </div>
                          <p className="text-sm text-white/50">{tierInfo.description}</p>
                        </div>
                        <div
                          className={`size-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected ? 'border-primary bg-primary' : 'border-white/20'
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-white text-sm transition-opacity ${
                              isSelected ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            check
                          </span>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
              <div className="pt-4 border-t border-white/10 mt-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-white/60">Total due today</span>
                  <span className="text-2xl font-bold text-white font-display">
                    {totalDue === 0 ? 'Free' : `₦${totalDue.toLocaleString()}`}
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg transition-transform active:scale-95 shadow-[0_4px_20px_rgba(255,105,51,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Complete Registration'}
                </button>
                <p className="text-xs text-center text-white/40 mt-4">
                  By clicking "Complete Registration", you agree to our{' '}
                  <Link className="text-primary hover:underline" href="#">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link className="text-primary hover:underline" href="#">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
        <footer className="mt-8 text-xs text-white/30 text-center lg:text-left">
          © 2023 WeSellAll Nigeria. Secure 256-bit encrypted connection.
        </footer>
        </div>

        {/* Right Column - Stats & Testimonials */}
        <div className="hidden lg:flex w-5/12 xl:w-1/2 bg-dark-surface/50 border-l border-white/5 relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10"></div>
        <div className="relative max-w-md w-full space-y-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl border border-white/5 transform hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl text-primary mb-3">groups</span>
              <div className="text-2xl font-bold font-display text-white">50k+</div>
              <div className="text-sm text-white/60">Active Sellers</div>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 transform hover:-translate-y-1 transition-transform duration-300 delay-100">
              <span className="material-symbols-outlined text-3xl text-secondary mb-3">monetization_on</span>
              <div className="text-2xl font-bold font-display text-white">₦2B+</div>
              <div className="text-sm text-white/60">Monthly Sales</div>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 transform hover:-translate-y-1 transition-transform duration-300 delay-150">
              <span className="material-symbols-outlined text-3xl text-green-500 mb-3">verified_user</span>
              <div className="text-2xl font-bold font-display text-white">100%</div>
              <div className="text-sm text-white/60">Secure Payments</div>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 transform hover:-translate-y-1 transition-transform duration-300 delay-200">
              <span className="material-symbols-outlined text-3xl text-yellow-500 mb-3">star</span>
              <div className="text-2xl font-bold font-display text-white">4.8/5</div>
              <div className="text-sm text-white/60">Seller Rating</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-2xl border-l-4 border-primary">
            <div className="flex gap-1 text-primary mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">star</span>
              ))}
            </div>
            <p className="text-lg italic text-white/90 mb-4 font-display">
              "WeSellAll transformed my small shoe business in Lagos. Within 3 months, my sales tripled. The platform is incredibly easy to use."
            </p>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white/20 overflow-hidden">
                <img
                  alt="User avatar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArqSjRYnu0tIVLIf9qe_ROyrYcAE62U7z5-jxBrR65gwxaAcJiMZ9ilr2hPaD9hprbwvEfNr3NXtOBRsRi7E_16mpMmvVFTeidXfLyK4FjZvpZmKMu7CcUY7PLYf5PXC6k8nZOw5grsX9yilzV8FSXjIRuO6JLQ2DM6zMBm4r-0lHIzC-javW6FNVcB3_CcS67TFRcd0lPl_GMPgi8xbG7YPJK13qHMDOs3wpXeR4r1lhzFXRWMDJswI4vFBhxMuWv0-K1K3UBMQ"
                />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Chioma Adebayo</div>
                <div className="text-xs text-white/50">Owner, Chic Footwear</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">Why sell on WeSellAll?</h3>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">rocket_launch</span>
              <p className="text-sm text-white/70">Instant access to millions of buyers across Nigeria.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">support_agent</span>
              <p className="text-sm text-white/70">24/7 dedicated support team to help you grow.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">analytics</span>
              <p className="text-sm text-white/70">Powerful analytics tools to track your performance.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

// Create a wrapper component that uses Suspense
export default function RegistrationPage() {
  return (
    <Suspense fallback={<RegistrationPageSkeleton />}>
      <RegistrationPageContent />
    </Suspense>
  );
}
