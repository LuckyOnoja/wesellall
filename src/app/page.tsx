'use client';

import Link from 'next/link';

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 bg-background-dark">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-[120px] animate-float"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[80px] animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center gap-8 max-w-4xl">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-wide uppercase mb-2">
              🇳🇬 Nigeria's #1 Marketplace
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Buy & Sell Anything <br/>
              <span className="text-gradient">Securely in Nigeria.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-body">
              From Lagos to Abuja, connect with millions of buyers and sellers. Trusted by over 2 million Nigerians.
            </p>
          </div>
          {/* Glass Search Bar */}
          <div className="w-full max-w-2xl p-2 rounded-2xl glass shadow-2xl mt-4">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="flex-1 flex items-center h-12 w-full px-4 rounded-xl bg-black/20 border border-white/5 focus-within:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-white/40 mr-3">search</span>
                <input className="bg-transparent border-none outline-none text-white placeholder-white/40 w-full h-full focus:ring-0 text-base" placeholder="Search for cars, phones, or property..." type="text" />
              </div>
              <div className="flex items-center h-12 w-full sm:w-auto px-4 rounded-xl bg-black/20 border border-white/5 text-white/60 text-sm cursor-pointer hover:bg-black/30 transition-colors">
                <span className="material-symbols-outlined text-lg mr-2">location_on</span>
                <span>All Nigeria</span>
                <span className="material-symbols-outlined text-lg ml-auto sm:ml-2">expand_more</span>
              </div>
              <button className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Search
              </button>
            </div>
          </div>
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-sm font-semibold flex items-center gap-2"><span className="material-symbols-outlined">verified_user</span> Verified Sellers</div>
            <div className="text-sm font-semibold flex items-center gap-2"><span className="material-symbols-outlined">payments</span> Secure Escrow</div>
            <div className="text-sm font-semibold flex items-center gap-2"><span className="material-symbols-outlined">rocket_launch</span> Fast Selling</div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES GRID ================= */}
      <section className="py-24 bg-background-dark relative" id="categories">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Browse Categories</h2>
              <p className="text-white/60">Find exactly what you are looking for</p>
            </div>
            <a className="text-primary hover:text-white transition-colors flex items-center gap-1 text-sm font-medium" href="#">View All <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Category Cards */}
            {[
              { name: 'Vehicles', icon: 'directions_car', desc: 'Cars, Buses, Trucks', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7vXhsODNWfxqcBk1Jeyzx0IkGIzX_rhRIpbBId_VZ-Np1CNnW-v19pDazso56gy3ZldTbm3vX9pO5T2SyJeAK-1n8vtYPrBTLBJ9SoQ6XXQLkmplCIwSXMPvzROPNlENVq1EbY_k1T6W5Wc_l9YP8G2fFaekc-E9s2fsZF5DLt_kL0H8GM9QwJy6m-rsww_N81ZTCy13HRCdgWGOT2pPt_HLBVWls7hTnV1ZBfnKXRKY8_zWUyzGmheyW32_1ZWn9GuzalHjBA' },
              { name: 'Real Estate', icon: 'real_estate_agent', desc: 'Houses, Land, Apartments', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcste-V6YLtuwOdcqtJTT6vovRojAolDPLQuFhzpMmI3BKRWTIZ_41LVuXl_V1Reo6UpyBFMOQUsGXXuGk14w-wBCfUklWltzwg1h_mMgXxXCy_xdVacE-HXI-IigG8vC_SwdRoEEdNp4LHkFQrvZtBIi9SMhMl4mhik8odlUdDcSehgBSP7ok9ZGTibAmaMWARts3hNKSo7t52pkSjfBG6XSeOna6Yhfy2IsTlqMunLcktElHSs_Qi_JKdpwDziQri1-ruAeD8g' },
              { name: 'Electronics', icon: 'devices', desc: 'Phones, Laptops, Audio', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMhBaJIbDPqfPHZXBHk3oZqQmTxwhDrd_MrCdUOoKUa1uRfGuCWqfrkn_ZxNUQdW-9ID0XDUFp4yIpCSsplylhmvQ9j9e_7rQ-Fyzk8VT1pljuXcLOYuOaedS4rDiz9WelWeSuntNi279UfHt3WsjZ0QkVODKvZvFc96GLWytnF5b3gUo6Y2E3y7ezw1xu9OFHEmZiSlIUN7ssaLifc7UXcXseGtrTFg_GIbBhZqCqScxmN4cwxnCYdUsyIBUWJXPFS1L4n-ImBw' },
              { name: 'Fashion', icon: 'checkroom', desc: 'Clothing, Shoes, Bags', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX0l9AzYsaTuZ6X55sL03Gwv6NPZPWQzcc7Y32-93SVqo_bcQOMndF6alt9heicaUh5httFV7MchwUzy9hFPWAclv6WI5k3RbzEalbZKfX4OSjstJ3k47Hi82AYb31rdIXIvmxCIj7096WQSRYia48HKcJHTTehlKvC1-F_bD7ZyGnoSw5-yrhWcxoptBjJs0uUXIsx28nDKwN9Rq2a2UfuFkrSCcMqf-Dk3x49HQeWP03xfVS09dXUlv3Ww_u6n_68UhrWy6ncg' },
              { name: 'Jobs', icon: 'work', desc: 'Full-time, Part-time', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLleH8qsh6_MG5Mx0LDXTIG6VAcdQr00MZ1WhQuHtkga4YsMnYK2pq9N49myPc6AIVXly0od6-Habc3Rd1Y3XRFE55NOCW9VckETTtjJpDF9IhNe6jI_aZLaa-ZejhN0ES85bsFsn6i9lEN1CtCUiO0e38grVQeWh-B1oSTw473MnShxR6r9QMHU0SoOsgBybUC5Z72PdfNJvrXQ7ZI-XEKYrGJTWtPEvJQxSB6DAkHaqza0qyWW8eVtOWFs7kHsjMx2vDd2a0RQ' },
              { name: 'Services', icon: 'handyman', desc: 'Cleaning, Repair, Movers', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7cxuFsvWQneDFDLzg3kyXvfJH6z1k-fF9YJKG44SY452xNo1feKWIr_XFgeu02kMbwYi34o_0dW5kEj6t7HSRordJFPAKpghYMR5OVWsNqoGrAZqruMGsnL16T7tLwqq5-uyGQ1xFsTfP_ezp0k6GJ7DvRBtpWfGdFTcA-fJdGnpD3aJveOG1rwa72Xz5gAhfYsXCaI6uhCVNNzNLsd-Oeq1PpgciFlTMkcP1R49PHksLvMH4A4C5mB3K8_Ol4ggf3ak8vzOo7w' },
              { name: 'Home & Garden', icon: 'chair', desc: 'Furniture, Appliances', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Cy89j5Ub_eNPf-6k1m1Ly2HBvoSRAnZ1O45wRKWVCsjAlg2eYO2zceIPDRnUYpOArE0hL7Xw3JlYx6inLqm83FgSOUG3Hp_SJlz1P8nGvCyMXnq_BPfWL-xV93hZDoa0CbwOgKwZv-Qk2ohzQtYIJhBha7BZfwyJsHUUeVCrRf-CsSv1VBvC6qvvDkhWVhieVbwrAvTcNucI8A7glN2zKjdrOts4V4TVqHsix1YG1QuWbE_Nmu5DtcGXotpcX2vk_SBdWZyKEg' },
              { name: 'Pets', icon: 'pets', desc: 'Dogs, Cats, Accessories', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArqSjRYnu0tIVLIf9qe_ROyrYcAE62U7z5-jxBrR65gwxaAcJiMZ9ilr2hPaD9hprbwvEfNr3NXtOBRsRi7E_16mpMmvVFTeidXfLyK4FjZvpZmKMu7CcUY7PLYf5PXC6k8nZOw5grsX9yilzV8FSXjIRuO6JLQ2DM6zMBm4r-0lHIzC-javW6FNVcB3_CcS67TFRcd0lPl_GMPgi8xbG7YPJK13qHMDOs3wpXeR4r1lhzFXRWMDJswI4vFBhxMuWv0-K1K3UBMQ' },
            ].map((cat) => (
              <Link key={cat.name} href="#" className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-dark-surface border border-white/5 hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                <img alt={cat.desc} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={cat.img} />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="material-symbols-outlined text-primary text-3xl mb-1 block group-hover:-translate-y-1 transition-transform">{cat.icon}</span>
                  <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                  <p className="text-xs text-white/60 h-0 overflow-hidden group-hover:h-auto group-hover:mt-1 transition-all">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1e110c] border-y border-white/5" id="featured">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">local_fire_department</span>
            Featured Listings
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x">
            {/* Listing Cards */}
            {[
              { title: 'Toyota Camry 2021', price: '₦ 8.5M', location: 'Lagos', time: 'Posted 2h ago', desc: 'Clean title, foreign used, low mileage. Perfect condition...', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ' },
              { title: '3 Bedroom Flat', price: '₦ 45M', location: 'Lekki, Lagos', time: 'Posted 5h ago', desc: 'Serviced apartment with swimming pool and gym...', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzlzcQJhWyo3p39-FtBiIoyqcBg3zewCxqZA465TJkwOw18DWhoKdZAsryRWFEB1n1X23z9sN09GzDk5tl7FOkvTfPwDWV4PsYLiDiApCrZqEMwDwrCYOuIGGIs_oK2Djj8jPsvcEVtxOIPVTWGclsx7nt4IfTYBKu97NzFSD7NoUC0bJmNl8EH1nlVBJbo7tuhfWja6SmnL4AWewjBREh1sfjWelVnxbfbQWOVUkwr5IfWByRCro59RMNs3RLs__mislQDO4-Uw' },
              { title: 'iPhone 15 Pro Max', price: '₦ 1.2M', location: 'Abuja', time: 'Posted 1d ago', desc: 'Brand new, sealed. 256GB, Natural Titanium...', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg' },
              { title: 'Gaming Setup', price: '₦ 450K', location: 'Port Harcourt', time: 'Posted 3d ago', desc: 'Complete setup with monitor, keyboard and mouse...', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA' },
            ].map((listing, idx) => (
              <div key={idx} className="min-w-[280px] md:min-w-[320px] snap-center bg-dark-surface rounded-xl overflow-hidden group hover:shadow-[0_10px_30px_-10px_rgba(255,105,51,0.2)] transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img alt={listing.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={listing.img} />
                  <div className="absolute top-3 right-3 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
                    {listing.price}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white/90 text-xs px-2 py-1 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> {listing.location}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{listing.title}</h3>
                  <p className="text-sm text-white/60 mb-3 line-clamp-2">{listing.desc}</p>
                  <div className="flex justify-between items-center border-t border-white/5 pt-3">
                    <span className="text-xs text-white/40">{listing.time}</span>
                    <button className="text-primary hover:text-white text-sm font-medium transition-colors">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS TIMELINE ================= */}
      <section className="py-24 bg-background-dark relative overflow-hidden" id="how-it-works">
        {/* Abstract line background */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
          <svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 20">
            <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="currentColor" strokeDasharray="2,2" strokeWidth="0.5"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Start Selling in Minutes</h2>
            <p className="text-white/60 max-w-xl mx-auto">Our streamlined process makes it easy to turn your items into cash.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="size-20 rounded-2xl bg-dark-surface border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,105,51,0.2)] transition-all duration-500 relative">
                <span className="absolute -top-3 -right-3 size-8 bg-primary rounded-full flex items-center justify-center text-white font-bold border-4 border-background-dark">1</span>
                <span className="material-symbols-outlined text-4xl text-white/80 group-hover:text-primary transition-colors">photo_camera</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Snap a Photo</h3>
              <p className="text-sm text-white/50 px-4">Take clear photos of your item. Good lighting helps it sell faster.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="hidden md:block absolute top-10 left-[20%] right-[80%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="size-20 rounded-2xl bg-dark-surface border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,105,51,0.2)] transition-all duration-500 relative">
                <span className="absolute -top-3 -right-3 size-8 bg-primary rounded-full flex items-center justify-center text-white font-bold border-4 border-background-dark">2</span>
                <span className="material-symbols-outlined text-4xl text-white/80 group-hover:text-primary transition-colors">edit_note</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Add Details</h3>
              <p className="text-sm text-white/50 px-4">Set a price and write a description. Be honest about the condition.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="size-20 rounded-2xl bg-dark-surface border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(255,105,51,0.2)] transition-all duration-500 relative">
                <span className="absolute -top-3 -right-3 size-8 bg-primary rounded-full flex items-center justify-center text-white font-bold border-4 border-background-dark">3</span>
                <span className="material-symbols-outlined text-4xl text-white/80 group-hover:text-primary transition-colors">waving_hand</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Get Paid</h3>
              <p className="text-sm text-white/50 px-4">Chat with buyers, agree on a price, and get paid securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="py-24 bg-[#1e110c] border-y border-white/5" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Choose Your Plan</h2>
            <p className="text-white/60">Scale your selling with our premium tools.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Free Plan */}
            <div className="bg-dark-surface border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <p className="text-white/40 text-sm mb-6">For casual sellers</p>
              <div className="text-4xl font-black text-white mb-6">Free</div>
              <ul className="space-y-3 mb-8 text-sm text-white/70">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Post 3 ads/month</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Standard visibility</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Basic support</li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">Start Free</button>
            </div>
            {/* Pro Plan (Featured) */}
            <div className="bg-[#2a1a14] border-2 border-primary rounded-2xl p-8 transform md:scale-105 shadow-[0_0_40px_-10px_rgba(255,105,51,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-2">Power Seller</h3>
              <p className="text-primary/80 text-sm mb-6">For serious merchants</p>
              <div className="text-4xl font-black text-white mb-6">₦5,000<span className="text-lg font-normal text-white/40">/mo</span></div>
              <ul className="space-y-3 mb-8 text-sm text-white/90">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Unlimited ads</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 5x more visibility</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Verified Badge</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Priority Support</li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg transition-colors">Get Started</button>
            </div>
            {/* Business Plan */}
            <div className="bg-dark-surface border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
              <p className="text-white/40 text-sm mb-6">For large stores</p>
              <div className="text-4xl font-black text-white mb-6">₦20,000<span className="text-lg font-normal text-white/40">/mo</span></div>
              <ul className="space-y-3 mb-8 text-sm text-white/70">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Dedicated Storefront</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Advanced Analytics</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> API Access</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Account Manager</li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS MAP SECTION ================= */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Nationwide Coverage</span>
            <h2 className="text-4xl md:text-5xl font-black">Connecting Buyers <br/> Across Nigeria</h2>
            <p className="text-lg text-white/60">Whether you are in the hustle of Lagos or the hills of Enugu, WeSellAll bridges the gap between you and your next customer.</p>
            <div className="flex gap-4 pt-4">
              <div className="px-4 py-2 rounded-lg bg-dark-surface border border-white/10">
                <div className="text-2xl font-bold text-white">36+</div>
                <div className="text-xs text-white/40">States</div>
              </div>
              <div className="px-4 py-2 rounded-lg bg-dark-surface border border-white/10">
                <div className="text-2xl font-bold text-white">2M+</div>
                <div className="text-xs text-white/40">Users</div>
              </div>
              <div className="px-4 py-2 rounded-lg bg-dark-surface border border-white/10">
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-xs text-white/40">Listings</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full bg-dark-surface rounded-3xl border border-white/5 p-4 flex items-center justify-center overflow-hidden group">
            {/* Abstract Map Representation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 to-transparent"></div>
            <img alt="Map of Nigeria outline" className="h-full w-auto object-contain opacity-20 group-hover:opacity-30 transition-opacity duration-500 invert grayscale brightness-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6RHEy09jFFu6DH2-WRj7FlZjr3PUa-YkeEogANzYXAbVdgnMhr6D73BX91sRQVV8voSUjPphP2qiAbWsejcd4U10J78tWEedTgdzGkknRGnbCc5V1Xd41iODwnmRyXxZOd5euH9oQjyzaeMUL9WoRsNGgMEjNiRVrUMbMN6FCA71Blz4y-FzV_H4wMkdx7F3lh1bHg9Q5olhixK-APBDEtnt1OtPxU2LA0t-XDyYXWfpLmLgScXPP26fLhm0eH1bVhEbgnNDK9Q" />
            {/* Hotspots */}
            <div className="absolute top-[65%] left-[20%] group/pin cursor-pointer">
              <div className="size-4 bg-primary rounded-full animate-pulse shadow-[0_0_20px_#ff6933]"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                Lagos (800k+ Ads)
              </div>
            </div>
            <div className="absolute top-[45%] left-[50%] group/pin cursor-pointer">
              <div className="size-4 bg-secondary rounded-full animate-pulse shadow-[0_0_20px_#004E89]"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                Abuja (450k+ Ads)
              </div>
            </div>
            <div className="absolute top-[75%] right-[30%] group/pin cursor-pointer">
              <div className="size-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                Port Harcourt
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-secondary/20 to-background-dark border-t border-white/10 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Ready to Sell?</h2>
          <p className="text-xl text-white/70 mb-10">Join thousands of Nigerians making money on WeSellAll today. It's free to get started.</p>
          <button className="bg-primary hover:bg-primary/90 text-white text-lg font-bold py-4 px-12 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,105,51,0.4)]">
            Create Free Account
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-12 border-t border-white/5 text-sm text-white/40">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a className="hover:text-primary" href="#">About Us</a></li>
              <li><a className="hover:text-primary" href="#">Careers</a></li>
              <li><a className="hover:text-primary" href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a className="hover:text-primary" href="#">Safety Tips</a></li>
              <li><a className="hover:text-primary" href="#">Contact Us</a></li>
              <li><a className="hover:text-primary" href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary" href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
              <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">rss_feed</span></a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center pt-8 border-t border-white/5">
          © 2023 WeSellAll Nigeria. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
