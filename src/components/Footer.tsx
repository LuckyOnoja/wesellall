import Link from 'next/link';
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
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">W</span>
              </div>
              <div>
                <span className="text-2xl font-bold">WeSellAll</span>
                <p className="text-gray-400 text-sm">Nigeria's Trusted Marketplace</p>
              </div>
            </Link>
            
            <p className="text-gray-400 max-w-md">
              Connecting buyers and sellers across Nigeria. Your trusted partner for 
              secure online transactions since 2020.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg">
                <CreditCard className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Escrow Payment</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg">
                <Truck className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Nationwide Delivery</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors text-sm"
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
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-400">+234 800 937 3552</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-400">support@wesellall.com.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-400">Lagos, Nigeria</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </button>
              <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white">
                <Download className="h-4 w-4" />
                <span>Download App</span>
              </button>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <span>© {currentYear} WeSellAll. All rights reserved.</span>
            </div>
          </div>
        </div>

        {/* Support Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="p-3 bg-white/10 rounded-full">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold">24/7 Customer Support</h4>
                <p className="text-sm text-gray-300">Got questions? We're here to help!</p>
              </div>
            </div>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}