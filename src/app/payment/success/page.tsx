'use client';

import { CheckCircle, Mail, Download, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PaymentSuccessProps {
  reference: string;
  tier: string;
  amount: number;
  email: string;
}

export default function PaymentSuccess({ reference, tier, amount, email }: PaymentSuccessProps) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/dashboard';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const downloadReceipt = () => {
    const receipt = `
      WeSellAll Payment Receipt
      =========================
      
      Reference: ${reference}
      Date: ${new Date().toLocaleDateString()}
      Time: ${new Date().toLocaleTimeString()}
      
      Payment Details:
      ---------------
      Tier: ${tier}
      Amount: ₦${amount.toLocaleString()}
      Email: ${email}
      Status: ✅ Successful
      
      Thank you for your payment!
      
      WeSellAll Team
      support@wesellall.com.ng
    `;

    const blob = new Blob([receipt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wesellall-receipt-${reference}.txt`;
    a.click();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-green-600" size={80} />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to WeSellAll Premium! 🎉
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Your payment was successful and your account has been activated.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card text-center">
          <Mail className="mx-auto mb-4 text-primary" size={32} />
          <h3 className="font-bold mb-2">Check Your Email</h3>
          <p className="text-sm text-gray-600">
            We've sent login details and welcome guide to {email}
          </p>
        </div>

        <div className="card text-center">
          <Download className="mx-auto mb-4 text-primary" size={32} />
          <h3 className="font-bold mb-2">Download Receipt</h3>
          <button
            onClick={downloadReceipt}
            className="btn-outline text-sm mt-2"
          >
            Download Receipt
          </button>
        </div>

        <div className="card text-center">
          <Share2 className="mx-auto mb-4 text-primary" size={32} />
          <h3 className="font-bold mb-2">Share & Earn</h3>
          <p className="text-sm text-gray-600">
            Share your referral link and earn 10% commission
          </p>
        </div>
      </div>

      <div className="card">
        <h3 className="font-bold mb-4">Next Steps</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4">
              1
            </div>
            <div>
              <h4 className="font-semibold">Complete Your Profile</h4>
              <p className="text-gray-600 text-sm">
                Add profile picture, business description, and contact details
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4">
              2
            </div>
            <div>
              <h4 className="font-semibold">Post Your First Product</h4>
              <p className="text-gray-600 text-sm">
                Upload clear photos and detailed descriptions for faster sales
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4">
              3
            </div>
            <div>
              <h4 className="font-semibold">Promote Your Products</h4>
              <p className="text-gray-600 text-sm">
                Share on social media and use our marketing tools
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Redirecting to your dashboard in {countdown} seconds...
        </p>
        <a
          href="/dashboard"
          className="btn-primary px-8"
        >
          Go to Dashboard Now
        </a>
      </div>
    </div>
  );
}