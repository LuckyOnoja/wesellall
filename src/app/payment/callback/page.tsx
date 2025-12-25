'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

function PaymentCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const reference = searchParams.get('reference');
    const trxref = searchParams.get('trxref');
    const status = searchParams.get('status');

    const paymentReference = reference || trxref;

    if (status === 'success' && paymentReference) {
      // Store in localStorage for the payment page to find
      localStorage.setItem('payment_complete', JSON.stringify({
        reference: paymentReference,
        timestamp: new Date().toISOString()
      }));
      
      toast.success('Payment successful!');
      
      // Redirect to main payment page
      setTimeout(() => {
        router.push('/payment');
      }, 1000);
    } else {
      localStorage.setItem('payment_failed', JSON.stringify({
        error: 'Payment was not successful',
        timestamp: new Date().toISOString()
      }));
      
      toast.error('Payment was not successful');
      
      setTimeout(() => {
        router.push('/payment');
      }, 1000);
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Processing Payment...
        </h2>
        <p className="text-gray-600">
          Please wait while we verify your payment.
        </p>
      </div>
    </div>
  );
}

export default function PaymentCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Loading...
          </h2>
          <p className="text-gray-600">
            Please wait while we process your request.
          </p>
        </div>
      </div>
    }>
      <PaymentCallbackContent />
    </Suspense>
  );
}