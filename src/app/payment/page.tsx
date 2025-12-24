'use client';

import { useState, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

// Icons
import { 
  CheckCircle, 
  CreditCard, 
  Shield, 
  Lock, 
  Loader2, 
  AlertCircle,
  Zap, 
  Clock,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';

// Payment form schema
const paymentSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

// Tier configuration (matching registration page)
const tierConfig = {
  starter: {
    name: 'Starter',
    price: 0,
    period: 'Free',
    features: [
      '3 free listings per month',
      'Basic seller dashboard',
      'Email support',
      'Standard seller profile'
    ]
  },
  pro: {
    name: 'Pro Seller',
    price: 10000,
    period: '/mo',
    features: [
      'Unlimited listings',
      'Verified seller badge',
      'Priority customer support',
      'Advanced analytics dashboard',
      'Featured listing priority'
    ],
    popular: true
  },
  business: {
    name: 'Business',
    price: 20000,
    period: '/mo',
    features: [
      'Dedicated storefront',
      'API access',
      'Personal account manager',
      'Bulk listing tools',
      'Custom store branding',
      'Priority in search results'
    ]
  }
};

// Skeleton loading component
function PaymentPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-12 w-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main payment page component
function PaymentPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tierParam = searchParams.get('tier') as keyof typeof tierConfig || 'pro';
  const amountParam = searchParams.get('amount') ? parseInt(searchParams.get('amount')!) : 10000;
  const userId = searchParams.get('userId');
  const reference = searchParams.get('reference');
  
  const [selectedTier, setSelectedTier] = useState(tierParam);
  const [amount, setAmount] = useState(amountParam);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentReference, setPaymentReference] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const [pendingPayment, setPendingPayment] = useState<any>(null);
  const [paymentWindow, setPaymentWindow] = useState<Window | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    mode: 'onChange',
  });

  // Load user and payment data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedPayment = localStorage.getItem('pending_payment');
    
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserData(user);
        
        // Auto-fill form with user data
        setValue('email', user.email);
        setValue('fullName', user.fullName);
        setValue('phone', user.phone || '');
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    
    if (storedPayment) {
      try {
        const payment = JSON.parse(storedPayment);
        setPendingPayment(payment);
        
        // Update tier and amount from pending payment
        if (payment.tier) {
          setSelectedTier(payment.tier);
        }
        if (payment.amount) {
          setAmount(payment.amount);
        }
        if (payment.reference) {
          setPaymentReference(payment.reference);
        }
      } catch (error) {
        console.error('Error parsing payment data:', error);
      }
    }
    
    // Also check URL parameters
    if (tierParam) {
      setSelectedTier(tierParam);
    }
    if (amountParam) {
      setAmount(amountParam);
    }

    // Check if we have payment success from callback
    const checkPaymentStatus = () => {
      const paymentComplete = localStorage.getItem('payment_complete');
      const paymentFailed = localStorage.getItem('payment_failed');
      
      if (paymentComplete) {
        try {
          const paymentData = JSON.parse(paymentComplete);
          handlePaymentCallback(paymentData.reference, true);
        } catch (error) {
          console.error('Error parsing payment complete data:', error);
        }
      } else if (paymentFailed) {
        toast.error('Payment failed. Please try again.');
        localStorage.removeItem('payment_failed');
      }
    };

    checkPaymentStatus();

    // Set up interval to check for payment status updates
    const intervalId = setInterval(checkPaymentStatus, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setValue, tierParam, amountParam]);

  // Get current tier details
  const getTierDetails = () => {
    return tierConfig[selectedTier as keyof typeof tierConfig] || tierConfig.pro;
  };

  const tierDetails = getTierDetails();

  // Open Paystack payment with the authorization URL from registration
  const openPaystackPayment = () => {
    if (!pendingPayment?.authorization_url) {
      toast.error('Payment information is missing. Please try registering again.');
      return;
    }

    // Open the Paystack payment URL in a new window
    const newWindow = window.open(
      pendingPayment.authorization_url,
      'PaystackPayment',
      'width=500,height=600,scrollbars=yes'
    );

    if (!newWindow) {
      toast.error('Please allow popups to complete payment');
      return;
    }

    setPaymentWindow(newWindow);

    // Set up interval to check if payment window was closed
    const checkWindowInterval = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(checkWindowInterval);
        toast('Payment window closed. You can try again.');
      }
    }, 1000);
  };

  // Handle payment callback from Paystack
  const handlePaymentCallback = async (reference: string, isSuccess: boolean) => {
    if (isSuccess) {
      await verifyPayment(reference);
    } else {
      toast.error('Payment was not successful');
      localStorage.removeItem('payment_complete');
    }
  };

  // Verify payment with backend
  const verifyPayment = async (reference: string) => {
    try {
      setIsProcessing(true);
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await fetch('http://localhost:5000/api/payments/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ reference }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment verification failed');
      }

      if (data.success) {
        handlePaymentSuccess(reference, data);
      } else {
        throw new Error('Payment verification failed');
      }
    } catch (error: any) {
      console.error('Verification error:', error);
      toast.error(error.message || 'Payment verification failed');
      setIsProcessing(false);
      localStorage.removeItem('payment_complete');
    }
  };

  // Handle successful payment
  const handlePaymentSuccess = (reference: string, paymentData: any) => {
    setPaymentSuccess(true);
    setPaymentReference(reference);
    
    // Clear pending payment from localStorage
    localStorage.removeItem('pending_payment');
    localStorage.removeItem('payment_complete');
    
    // Update user data with new tier
    if (userData) {
      const updatedUser = {
        ...userData,
        tier: selectedTier,
        paymentStatus: 'paid',
        isVerified: true,
        lastPaymentDate: new Date().toISOString(),
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUserData(updatedUser);
    }
    
    toast.success('Payment successful! Your account has been activated.');
    
    // Close payment window if still open
    if (paymentWindow && !paymentWindow.closed) {
      paymentWindow.close();
    }
    
    // Redirect to dashboard after 3 seconds
    setTimeout(() => {
      router.push('/dashboard?payment=success&ref=' + reference);
    }, 3000);
  };

  // Handle back to registration
  const handleBackToRegistration = () => {
    router.push('/register');
  };

  // Handle manual verification (if user closed window and payment was successful)
  const handleManualVerification = async () => {
    if (!pendingPayment?.reference) {
      toast.error('No payment reference found');
      return;
    }
    
    await verifyPayment(pendingPayment.reference);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with back button */}
        <div className="mb-8">
          <button
            onClick={handleBackToRegistration}
            className="flex items-center text-gray-600 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Registration
          </button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Your <span className="text-primary">Payment</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Secure payment powered by Paystack
            </p>
          </div>
        </div>

        {paymentSuccess ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={64} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Payment Successful! 🎉
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your payment. Your {tierDetails.name} subscription has been activated.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6 inline-block">
                  <p className="text-sm text-gray-600 mb-2">Reference Number</p>
                  <p className="text-xl font-mono font-bold text-gray-900">
                    {paymentReference}
                  </p>
                </div>
                <p className="text-gray-600 mb-8">
                  Redirecting to your dashboard...
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <span className="text-gray-600">Please wait...</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Order Summary */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h3>
                
                {/* Selected Plan */}
                <div className="mb-8">
                  <div className={`p-6 rounded-xl border-2 ${selectedTier === 'pro' ? 'border-primary bg-primary/5' : 'border-gray-200'} mb-6`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-xl text-gray-900">{tierDetails.name}</h4>
                        <p className="text-gray-600">Monthly subscription</p>
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        ₦{tierDetails.price.toLocaleString()}
                      </div>
                    </div>
                    
                    {selectedTier === 'pro' && (
                      <div className="mt-4">
                        <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-6">
                    {tierDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment Details */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-lg mb-4 text-gray-900">Payment Details</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plan Price</span>
                      <span className="font-medium">₦{tierDetails.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">VAT (7.5%)</span>
                      <span className="font-medium">₦{(tierDetails.price * 0.075).toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span className="text-gray-900">Total Amount</span>
                        <span className="text-primary">
                          ₦{(tierDetails.price * 1.075).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Info */}
                {userData && (
                  <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="font-semibold mb-3 text-gray-900">Account Details</h4>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-medium">Name:</span> {userData.fullName}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Email:</span> {userData.email}
                      </p>
                      {userData.phone && (
                        <p className="text-gray-700">
                          <span className="font-medium">Phone:</span> {userData.phone}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Payment Reference */}
                {pendingPayment?.reference && (
                  <div className="mt-6 p-5 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-semibold mb-3 text-gray-900">Payment Reference</h4>
                    <div className="flex items-center justify-between">
                      <code className="text-gray-700 font-mono bg-gray-100 px-3 py-1 rounded">
                        {pendingPayment.reference}
                      </code>
                      <button
                        onClick={handleManualVerification}
                        className="text-sm text-primary hover:underline flex items-center"
                      >
                        <CheckCircle size={16} className="mr-1" />
                        Verify Payment
                      </button>
                    </div>
                  </div>
                )}

                {/* Security Badges */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="flex items-center text-gray-600">
                      <Shield size={20} className="mr-2 text-green-500" />
                      <span className="text-sm">Secure Payment</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Lock size={20} className="mr-2 text-blue-500" />
                      <span className="text-sm">SSL Encrypted</span>
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Powered by Paystack • 256-bit SSL encryption
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-8">
                  <CreditCard className="text-primary mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Complete Payment</h3>
                </div>

                {userData ? (
                  <div className="space-y-8">
                    <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3" size={24} />
                        <div>
                          <p className="font-semibold text-green-800">Account Verified</p>
                          <p className="text-sm text-green-600">
                            You are logged in as {userData.fullName}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-5 text-gray-900">Billing Information</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-600 block mb-1">Email</label>
                          <p className="font-medium text-gray-900">{userData.email}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 block mb-1">Phone</label>
                          <p className="font-medium text-gray-900">{userData.phone || 'Not provided'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-4 text-gray-900">Payment Status</h4>
                        {pendingPayment?.authorization_url ? (
                          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
                            <p className="text-yellow-800 flex items-center">
                              <AlertCircle size={20} className="mr-2" />
                              Payment pending. Click the button below to proceed.
                            </p>
                          </div>
                        ) : (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
                            <p className="text-red-800 flex items-center">
                              <AlertCircle size={20} className="mr-2" />
                              No payment information found. Please register again.
                            </p>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={openPaystackPayment}
                        disabled={isProcessing || !pendingPayment?.authorization_url}
                        className={`
                          w-full py-4 text-lg font-semibold rounded-xl
                          ${(isProcessing || !pendingPayment?.authorization_url) 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-primary hover:bg-primary/90'
                          }
                          text-white transition-all duration-300
                          flex items-center justify-center
                          shadow-lg hover:shadow-xl
                        `}
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="animate-spin inline mr-2" size={20} />
                            Processing...
                          </>
                        ) : !pendingPayment?.authorization_url ? (
                          'Payment Link Not Available'
                        ) : (
                          <>
                            <ExternalLink size={20} className="inline mr-2" />
                            Proceed to Paystack Payment
                          </>
                        )}
                      </button>

                      <p className="text-center text-sm text-gray-600 mt-4 flex items-center justify-center">
                        <Lock size={16} className="mr-2" />
                        Secure payment via Paystack
                      </p>

                      {pendingPayment?.authorization_url && (
                        <div className="mt-4 text-center">
                          <button
                            onClick={() => {
                              // Direct link for users who prefer not to use popup
                              window.open(pendingPayment.authorization_url, '_blank');
                            }}
                            className="text-sm text-primary hover:underline"
                          >
                            Or open payment link in new tab
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="mx-auto text-yellow-500 mb-4" size={48} />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Account Required</h4>
                    <p className="text-gray-600 mb-6">
                      You need to create an account before making a payment.
                    </p>
                    <button
                      onClick={handleBackToRegistration}
                      className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                      Go to Registration
                    </button>
                  </div>
                )}
              </div>

              {/* Payment Instructions */}
              <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
                <h4 className="font-semibold text-lg mb-6 text-gray-900 flex items-center">
                  <Clock size={20} className="mr-2 text-blue-500" />
                  Payment Instructions
                </h4>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <span>Click "Proceed to Paystack Payment" button above</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <span>Complete payment on Paystack's secure page</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <span>You'll be redirected back here automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <span>Your account will be activated instantly</span>
                  </li>
                </ol>
              </div>

              {/* Support Section */}
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
                <h4 className="font-semibold text-lg mb-4 text-gray-900">Need Help?</h4>
                <p className="text-gray-600 mb-4">
                  Our support team is available 24/7 to assist with your payment
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:support@wesellall.com.ng"
                    className="flex items-center justify-center py-2 px-4 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors"
                  >
                    <span className="text-primary font-medium">📧 Email Support</span>
                  </a>
                  <a
                    href="tel:+2348009373552"
                    className="flex items-center justify-center py-2 px-4 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors"
                  >
                    <span className="text-primary font-medium">📞 Call Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Main export with Suspense
export default function PaymentPage() {
  return (
    <Suspense fallback={<PaymentPageSkeleton />}>
      <PaymentPageContent />
    </Suspense>
  );
}