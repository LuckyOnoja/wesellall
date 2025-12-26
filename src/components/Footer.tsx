import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  CreditCard,
  Truck,
  Headphones,
  Download,
  Globe
} from 'lucide-react';
import wLogo from '@/app/assets/images/w-logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Marketplace: [
      { label: 'Browse All', href: '/products' },
      { label: 'Trending Now', href: '/trending' },
      { label: 'New Arrivals', href: '/new' },
      { label: 'Best Deals', href: '/deals' },
      { label: 'Local Pickups', href: '/local' },
    ],
    'For Sellers': [
      { label: 'Start Selling', href: '/sell' },
      { label: 'Seller Dashboard', href: '/dashboard' },
      { label: 'Pricing Plans', href: '/pricing' },
      { label: 'Seller Success Guide', href: '/guide' },
      { label: 'Bulk Upload', href: '/bulk' },
    ],
    'Buyer Resources': [
      { label: 'How to Buy Safely', href: '/buy-safely' },
      { label: 'Payment Methods', href: '/payment' },
      { label: 'Delivery Options', href: '/delivery' },
      { label: 'Buyer Protection', href: '/protection' },
      { label: 'FAQ', href: '/faq' },
    ],
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press & Media', href: '/press' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src={wLogo}
                alt="WeSellAll Logo"
                height={80}
                width={300}
                className="h-20 md:h-24 w-auto"
              />
              <div>
                <span className="text-2xl font-bold text-white">WeSellAll</span>
                <p className="text-white text-sm">Nigeria's Trusted Marketplace</p>
              </div>
            </Link>
            
            <p className="text-white max-w-md">
              Connecting buyers and sellers across Nigeria. Your trusted partner for 
              secure online transactions since 2020.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm text-white">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg">
                <CreditCard className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-white">Escrow Payment</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg">
                <Truck className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-white">Nationwide Delivery</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-4 text-brand-orange">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-brand-orange transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                <span className="text-white">+234 800 937 3552</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                <span className="text-white">support@wesellall.com.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span className="text-white">Lagos, Nigeria</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-sm text-white hover:text-brand-orange">
                <Globe className="h-4 w-4 text-white" />
                <span>English</span>
              </button>
              <button className="flex items-center space-x-2 text-sm text-white hover:text-brand-orange">
                <Download className="h-4 w-4 text-white" />
                <span>Download App</span>
              </button>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-orange transition-colors">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-orange transition-colors">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-orange transition-colors">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-orange transition-colors">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-white">
              <Link href="/privacy" className="hover:text-brand-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-orange transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-brand-orange transition-colors">
                Cookie Policy
              </Link>
              <span>© {currentYear} WeSellAll. All rights reserved.</span>
            </div>
          </div>
        </div>

        {/* Support Banner */}
        <div className="mt-12 bg-gradient-to-r from-brand-blue/20 to-brand-blue/20 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="p-3 bg-white/10 rounded-full">
                <Headphones className="h-6 w-6 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-bold text-brand-orange">24/7 Customer Support</h4>
                <p className="text-sm text-white">Got questions? We're here to help!</p>
              </div>
            </div>
            <button className="bg-white text-brand-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}