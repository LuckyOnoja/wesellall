'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = ['Electronics', 'Fashion', 'Vehicles', 'Home'];

export default function SellPage() {
  const [itemsPerMonth, setItemsPerMonth] = useState(15);
  const [avgPrice, setAvgPrice] = useState(25000);
  const [selectedCategory, setSelectedCategory] = useState('Electronics');

  const estimatedEarnings = Math.floor((itemsPerMonth * avgPrice * 0.95) / 1000); // 95% after fees

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center bg-background-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary/5 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>Join 50,000+ Sellers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Sell Anything, <br/>
              <span className="text-gradient">Earn Money Fast.</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 font-body max-w-lg">
              Turn your unwanted items into cash or start a full-time business. WeSellAll connects you with millions of buyers across Nigeria instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-lg"
              >
                Start Selling Now
              </Link>
              <button className="h-14 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg">
                <span className="material-symbols-outlined">play_circle</span>
                Watch Guide
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-white/40 font-medium">
              <div className="flex -space-x-3">
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt_ukvJzccnTlcGPpb-kPbGMW5VOvL7NZKfDHjov68qTbx5m9lwSQUEtxQCWWQX3WX0tEiwUJRhb1MrysazVpBjme70CxHN5PXI6M-BmlHXmwjRcR8u8nHW2dmtM1TSdH-uWht04QyVeocn6VQpEgIwx2QHRrd-lZ5Q-6cshLFsu7jOKN3zJszRJefsNWaheKLpyIKkY_84HyAv7DkFvk1jGg7Yu9HZXQ1LjSYyxUlkpSJrWTZb39TC_2S-lV_lZNoFGdoEkivKQ" />
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5VcpEkjj-xl7bBmY8sYvCRCn1EIdRhGR9IqaWcCTEs1hKnI89FM0O0DUOvzk6OwxRzoQWXVY2GogYcpU-k7Od_C-7aEAfnfHTImgZiWj0tJG2IMMZj82jkqoIgtSSsi547rOf7XvO6khNbpNQa4pN_rbgtwrOBvNuGLtQYVXjoFoKVFAWqJEygwTBtDtwkaGY4p6ADcZXUOeYdfVEVB5LZ4lH6rHodHQb7wue7dp_6gce1ABe-nWhNbB0u_Fv8n9xndpm5MiKaA" />
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDROpaGRpZO9K-frH1IF7Pv2F2R9nc5RIXyyHAlGZ6JBm6iSGSqHqKOj9g65mixuL2J2HgjfXOOkO1OzOBtFTIbkWYm3EUhwvE-rMKp4GnZHcTBM5liTdslJUU-uwvZPPXR3goVHboEq9IfC58BKtLvBHL89d1ExKbOUfXjXTrOJrft_b9lcv4XEdnAm12pkguiaB3SlwJrochzOtGk5lnS7xILoyMQmsDLpSddnjHJgFDBsvXH0Aqz2l9-1nOGZcTZ7-vvU4cHag" />
                <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-dark-surface flex items-center justify-center text-xs text-white font-bold">+2k</div>
              </div>
              <p>New sellers joined this week</p>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 transform scale-75"></div>
            
            {/* Success Card 1 */}
            <div className="absolute top-[20%] right-[10%] w-72 p-4 bg-dark-surface border border-white/5 rounded-2xl shadow-2xl transform rotate-6 opacity-60 scale-90 z-0">
              <div className="flex items-center gap-3 mb-3">
                <img alt="Seller" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxXZWwJEEbkBw26LIwVOvjWrdzGXjqHU0U-OMduDfk3Q6g33Wd7zw8siKvgKnilN-F_vOJIua2fAO9uZokKJQiyY7LkFwBrNWaAZsZjQMdK-KiFyvUJ312-rjdJCzzvJ1c5zVOSIGeBPr8ECv565z3vUs6fu-njrXlgPxV2ecobhqLGgpn8mWby_oVP5TvGu2f77rIoGkhY67lShIz4td1Lmo5zOez9fPrXzyA4CrzcFJsyI76GybFT5fiSLVo35tZTbAa-McJaw" />
                <div>
                  <h4 className="font-bold text-white">Chidi Okafor</h4>
                  <p className="text-xs text-white/50">Electronics Dealer</p>
                </div>
              </div>
              <div className="bg-background-dark/50 rounded-lg p-3">
                <p className="text-xs text-white/60 mb-1">Monthly Revenue</p>
                <p className="text-xl font-bold text-green-400">₦ 1,250,000</p>
              </div>
            </div>

            {/* Success Card 2 */}
            <div className="absolute top-[30%] left-[5%] w-72 p-4 bg-dark-surface border border-white/5 rounded-2xl shadow-2xl transform -rotate-3 opacity-80 scale-95 z-10">
              <div className="flex items-center gap-3 mb-3">
                <img alt="Seller" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTJ35gvTlv6obRLsFljsP8so-QkGEgr-dkkd50EZSYTJxDvJiq9CWS89FRHR5GqMDjExPfxgWqM2v7R21S97vl3eCcXgHour_uLm5n16-OnFdrGzMzCznyiXuaVlWOh4hEhTvJEsZlR73UYOTUhDUd33NKpDmIXnve4HatMelWl0RgpoGe4PpodGv5f7Gv6d8kvS1yU7RdJqM1JoGxSBYu4jL2fPbmFhwOd8Qh_o44fq-rc3x28GmXxg3My9KmKyRAjlG9J3N61A" />
                <div>
                  <h4 className="font-bold text-white">Amina Bello</h4>
                  <p className="text-xs text-white/50">Fashion Vendor</p>
                </div>
              </div>
              <div className="bg-background-dark/50 rounded-lg p-3">
                <p className="text-xs text-white/60 mb-1">Items Sold</p>
                <p className="text-xl font-bold text-primary">145 Items</p>
              </div>
            </div>

            {/* Top Seller Card */}
            <div className="relative w-80 p-6 bg-[#2a1a14] border border-white/10 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] z-20 animate-float">
              <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Top Seller</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img alt="Seller" className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_gxq2CCM8VEsF4wORJOmlYZFBrm0pUwOB1t1ZYRbFjKZzdXaDbD9E-53W2vdqfV-q6mbk6bylIHNUVafJyXrgqYuBjRzM1Dojn5VshMTy834w3taPpcRlT_j3LCit8yQdcEOAhzjYTEp5UTnVqFn01pEEmcZ7aZrg7HWrjxMQv5leL6zl_2R3jgpacAKG79d0M1boC2yX5X9a9WcGIAZrFEGDwB74AOEEF6dHEBJBtmBAxgFxMQ4Z8TxvvUNVApAZUKuW1lFz-Q" />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#2a1a14]"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Sarah Jenkins</h4>
                  <p className="text-sm text-white/50">Home & Decor</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60">Total Sales</span>
                    <span className="material-symbols-outlined text-green-400 text-sm">trending_up</span>
                  </div>
                  <p className="text-3xl font-bold text-white">₦ 4.2M</p>
                  <p className="text-xs text-green-400 mt-1">+12% from last month</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-white/70 border border-white/5">Fast Shipper</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-white/70 border border-white/5">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator Section */}
      <section className="py-24 bg-dark-surface relative overflow-hidden" id="calculator">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background-dark rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Potential</h2>
              <p className="text-white/60">Estimate how much you could earn selling on WeSellAll.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Items per month slider */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-medium text-white">Items to sell per month</label>
                    <span className="text-primary font-bold text-xl">{itemsPerMonth}</span>
                  </div>
                  <input
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    max="100"
                    min="1"
                    type="range"
                    value={itemsPerMonth}
                    onChange={(e) => setItemsPerMonth(Number(e.target.value))}
                  />
                </div>

                {/* Average price slider */}
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-medium text-white">Average item price</label>
                    <span className="text-primary font-bold text-xl">₦ {avgPrice.toLocaleString()}</span>
                  </div>
                  <input
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    max="500000"
                    min="1000"
                    step="1000"
                    type="range"
                    value={avgPrice}
                    onChange={(e) => setAvgPrice(Number(e.target.value))}
                  />
                </div>

                {/* Category selection */}
                <div className="pt-4">
                  <label className="font-medium text-white mb-3 block">Category</label>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                          selectedCategory === cat
                            ? 'bg-primary text-white'
                            : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Earnings Display */}
              <div className="bg-[#2a1a14] border border-white/5 rounded-2xl p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2 relative z-10">
                  Estimated Monthly Earnings
                </p>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-2 relative z-10">
                  ₦ {estimatedEarnings}<span className="text-2xl text-white/40">k</span>
                </h3>
                <p className="text-green-400 text-sm mb-6 flex items-center justify-center gap-1 relative z-10">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  Potential for +20% growth
                </p>
                <Link
                  href="/register"
                  className="w-full py-3 bg-white text-background-dark font-bold rounded-xl hover:bg-gray-100 transition-colors relative z-10 block"
                >
                  Start Earning Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background-dark relative" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">How It Works</h2>
            <p className="text-lg text-white/60">From listing to cashing out, we've simplified the entire process so you can focus on making money.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '1', color: 'primary', title: 'Create Account', desc: 'Sign up in seconds using your email or social media. Verify your identity to build trust.' },
              { number: '2', color: 'secondary', title: 'List Your Item', desc: 'Take photos, add a description, and set your price. Our AI suggests the best categories.' },
              { number: '3', color: 'purple', title: 'Connect & Sell', desc: 'Chat with interested buyers through our secure messaging system and agree on a deal.' },
              { number: '4', color: 'green', title: 'Get Paid', desc: 'Meet safely or ship the item. Receive payment directly to your bank account instantly.' },
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="h-full p-6 bg-dark-surface border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                  <div className={`size-14 rounded-full ${
                    step.color === 'primary' ? 'bg-primary/10 text-primary border-primary/20' :
                    step.color === 'secondary' ? 'bg-secondary/10 text-secondary border-secondary/20' :
                    step.color === 'purple' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                    'bg-green-500/10 text-green-400 border-green-500/20'
                  } font-bold text-xl flex items-center justify-center mb-6 border`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-white/10 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can You Sell Section */}
      <section className="py-24 bg-[#1e110c] border-y border-white/5" id="categories">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Can You Sell?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: '📱', label: 'Phones' },
              { icon: '🚗', label: 'Cars' },
              { icon: '💻', label: 'Laptops' },
              { icon: '👠', label: 'Fashion' },
              { icon: '🛋️', label: 'Furniture' },
              { icon: '📷', label: 'Cameras' },
              { icon: '🎮', label: 'Gaming' },
              { icon: '🏠', label: 'Real Estate' },
              { icon: '🔧', label: 'Tools' },
              { icon: '📚', label: 'Books' },
              { icon: '👶', label: 'Baby Items' },
              { icon: '🐶', label: 'Pets' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-dark-surface border border-white/5 hover:bg-white/5 hover:border-primary/50 transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-bold text-white group-hover:text-primary transition-colors">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-background-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background-dark to-background-dark"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/30 to-transparent opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Ready to start your <br/>
            <span className="text-primary">Selling Journey?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join the fastest growing marketplace in Nigeria today. No listing fees for your first 5 items.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/register"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-orange-600 hover:from-orange-500 hover:to-primary text-white text-xl font-bold rounded-full shadow-[0_0_40px_rgba(255,105,51,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              Create Seller Account
            </Link>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xl font-bold rounded-full backdrop-blur-sm transition-all">
              Download App
            </button>
          </div>
          <p className="mt-6 text-sm text-white/40">No credit card required for basic account.</p>
        </div>
      </section>
    </div>
  );
}
