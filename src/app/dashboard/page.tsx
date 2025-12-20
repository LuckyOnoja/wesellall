'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeSidebarLink, setActiveSidebarLink] = useState('overview');
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');

  const statsData = [
    {
      value: '45.2k',
      label: 'Total Views',
      change: '+12%',
      icon: 'visibility',
      color: 'blue',
      bgColor: 'bg-blue-500/10',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      value: '142',
      label: 'Total Sales',
      change: '+8%',
      icon: 'shopping_cart',
      color: 'green',
      bgColor: 'bg-green-500/10',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
    },
    {
      value: '₦ 1.8M',
      label: 'Total Earnings',
      change: '+24%',
      icon: 'payments',
      color: 'primary',
      bgColor: 'bg-primary/10',
      iconBg: 'bg-primary/20',
      iconColor: 'text-primary',
    },
    {
      value: '12',
      label: 'Total Listings',
      change: '4 Active',
      icon: 'inventory',
      color: 'purple',
      bgColor: 'bg-purple-500/10',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      isChange: false,
    },
  ];

  const recentListings = [
    {
      id: '#839201',
      title: 'Toyota Camry 2021',
      price: '₦ 8.5M',
      status: 'Active',
      statusColor: 'green',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ',
    },
    {
      id: '#839202',
      title: 'iPhone 15 Pro Max',
      price: '₦ 1.2M',
      status: 'Pending',
      statusColor: 'yellow',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg',
    },
    {
      id: '#839190',
      title: 'Gaming Setup',
      price: '₦ 450K',
      status: 'Sold',
      statusColor: 'gray',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA',
      sold: true,
    },
    {
      id: '#839215',
      title: '3 Bedroom Flat',
      price: '₦ 45M',
      status: 'Active',
      statusColor: 'green',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzlzcQJhWyo3p39-FtBiIoyqcBg3zewCxqZA465TJkwOw18DWhoKdZAsryRWFEB1n1X23z9sN09GzDk5tl7FOkvTfPwDWV4PsYLiDiApCrZqEMwDwrCYOuIGGIs_oK2Djj8jPsvcEVtxOIPVTWGclsx7nt4IfTYBKu97NzFSD7NoUC0bJmNl8EH1nlVBJbo7tuhfWja6SmnL4AWewjBREh1sfjWelVnxbfbQWOVUkwr5IfWByRCro59RMNs3RLs__mislQDO4-Uw',
    },
  ];

  const sidebarLinks = [
    { id: 'overview', label: 'Overview', icon: 'dashboard', badge: null },
    { id: 'listings', label: 'Listings', icon: 'inventory_2', badge: '12' },
    { id: 'messages', label: 'Messages', icon: 'mail', badge: '3', badgeColor: 'bg-primary' },
    { id: 'analytics', label: 'Analytics', icon: 'bar_chart', badge: null },
    { id: 'wallet', label: 'Wallet', icon: 'account_balance_wallet', badge: null },
    { id: 'settings', label: 'Settings', icon: 'settings', badge: null },
  ];

  const getStatusBadge = (status: string, statusColor: string, sold?: boolean) => {
    if (sold) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/40 border border-white/10">
          <span className="size-1.5 rounded-full bg-white/40"></span>
          {status}
        </span>
      );
    }
    const colorClasses: Record<string, string> = {
      green: 'bg-green-500/10 text-green-400 border-green-500/20',
      yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      gray: 'bg-white/5 text-white/40 border-white/10',
    };
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${colorClasses[statusColor]}`}>
        <span className={`size-1.5 rounded-full ${statusColor === 'green' ? 'bg-green-500' : statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-white/40'}`}></span>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-background-dark text-white font-body min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-16 glass fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-1 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,105,51,0.4)]">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </div>
            <span className="text-xl font-bold tracking-tight font-display hidden sm:block">
              WeSellAll <span className="text-xs font-normal text-white/50 ml-1">Seller Hub</span>
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-white/70 hover:text-white transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full ring-2 ring-background-dark"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold leading-tight">Chinedu O.</p>
              <p className="text-xs text-white/50">Verified Seller</p>
            </div>
            <div className="size-9 rounded-full bg-dark-surface border border-white/10 overflow-hidden">
              <img
                alt="Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLleH8qsh6_MG5Mx0LDXTIG6VAcdQr00MZ1WhQuHtkga4YsMnYK2pq9N49myPc6AIVXly0od6-Habc3Rd1Y3XRFE55NOCW9VckETTtjJpDF9IhNe6jI_aZLaa-ZejhN0ES85bsFsn6i9lEN1CtCUiO0e38grVQeWh-B1oSTw473MnShxR6r9QMHU0SoOsgBybUC5Z72PdfNJvrXQ7ZI-XEKYrGJTWtPEvJQxSB6DAkHaqza0qyWW8eVtOWFs7kHsjMx2vDd2a0RQ"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16 h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-dark-surface border-r border-white/5 hidden lg:flex flex-col flex-shrink-0 h-full overflow-y-auto pb-4">
          <div className="p-4">
            <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-bold transition-all duration-300 shadow-[0_0_10px_rgba(255,105,51,0.1)]">
              <span className="material-symbols-outlined">add_circle</span>
              New Listing
            </button>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            <div className="text-xs font-bold text-white/40 px-4 py-2 mt-2 uppercase tracking-wider">Main</div>
            {sidebarLinks.slice(0, 4).map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveSidebarLink(link.id)}
                className={`sidebar-link flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-lg transition-colors ${
                  activeSidebarLink === link.id ? 'active' : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.label}
                {link.badge && (
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${link.badgeColor || 'bg-white/10'}`}>
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
            <div className="text-xs font-bold text-white/40 px-4 py-2 mt-6 uppercase tracking-wider">Account</div>
            {sidebarLinks.slice(4).map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveSidebarLink(link.id)}
                className={`sidebar-link flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-r-lg transition-colors ${
                  activeSidebarLink === link.id ? 'active' : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.label}
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-white/5">
            <button className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors w-full">
              <span className="material-symbols-outlined">logout</span>
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-background-dark relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto space-y-8 relative z-10">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-display font-bold text-white mb-1">Dashboard</h1>
                <p className="text-white/60">Welcome back! Here's what's happening with your store today.</p>
              </div>
              <div className="flex items-center gap-2 text-sm bg-dark-surface p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setTimeFilter('Last 30 Days')}
                  className={`px-3 py-1.5 rounded shadow-sm font-medium transition-colors ${
                    timeFilter === 'Last 30 Days' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  Last 30 Days
                </button>
                <button
                  onClick={() => setTimeFilter('All Time')}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    timeFilter === 'All Time' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  All Time
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-surface border border-white/5 rounded-2xl p-5 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute right-0 top-0 w-24 h-24 ${stat.bgColor} rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className={`p-2.5 ${stat.iconBg} ${stat.iconColor} rounded-xl`}>
                      <span className="material-symbols-outlined">{stat.icon}</span>
                    </div>
                    <span
                      className={`text-xs font-medium flex items-center gap-1 px-2 py-1 rounded-full ${
                        stat.isChange === false
                          ? 'text-white/40'
                          : 'text-green-400 bg-green-400/10'
                      }`}
                    >
                      {stat.isChange === false ? (
                        stat.change
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-xs">trending_up</span>
                          {stat.change}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold font-display text-white mb-1">{stat.value}</h3>
                    <p className="text-sm text-white/50">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Listings Table */}
              <div className="lg:col-span-2 bg-dark-surface border border-white/5 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">list_alt</span>
                    Recent Listings
                  </h3>
                  <Link className="text-sm text-primary hover:text-white transition-colors" href="#">
                    View All
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-xs text-white/40 uppercase tracking-wider border-b border-white/5 bg-white/[0.02]">
                        <th className="px-6 py-4 font-medium">Item</th>
                        <th className="px-6 py-4 font-medium">Price</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {recentListings.map((listing, index) => (
                        <tr
                          key={index}
                          className={`group hover:bg-white/[0.02] transition-colors ${
                            index < recentListings.length - 1 ? 'border-b border-white/5' : ''
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                              <div className="size-12 rounded-lg overflow-hidden bg-black/20 flex-shrink-0">
                                <img
                                  alt={listing.title}
                                  className={`w-full h-full object-cover ${listing.sold ? 'grayscale opacity-50' : ''}`}
                                  src={listing.img}
                                />
                              </div>
                              <div>
                                <div className={`font-bold ${listing.sold ? 'text-white/50' : 'text-white'}`}>
                                  {listing.title}
                                </div>
                                <div className={`text-xs ${listing.sold ? 'text-white/30' : 'text-white/40'}`}>
                                  ID: {listing.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className={`px-6 py-4 font-bold ${listing.sold ? 'text-white/50' : 'text-white'}`}>
                            {listing.price}
                          </td>
                          <td className="px-6 py-4">{getStatusBadge(listing.status, listing.statusColor, listing.sold)}</td>
                          <td className="px-6 py-4 text-right">
                            {listing.sold ? (
                              <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-xs font-medium text-white/60 transition-colors">
                                Relist
                              </button>
                            ) : (
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  className="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                                <button
                                  className="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-primary transition-colors"
                                  title="Promote"
                                >
                                  <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sidebar Widgets */}
              <div className="space-y-6">
                {/* Response Performance */}
                <div className="bg-dark-surface border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                  <h3 className="text-lg font-bold text-white mb-6">Response Performance</h3>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative size-40 rounded-full flex items-center justify-center bg-background-dark/50">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'conic-gradient(#ff6933 94%, #362019 0)',
                        }}
                      ></div>
                      <div className="absolute inset-3 bg-dark-surface rounded-full flex flex-col items-center justify-center z-10">
                        <span className="text-4xl font-black text-white font-display">94%</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Response Rate</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-xs text-white/40 mb-1">Avg. Response Time</div>
                      <div className="font-bold text-white">25 mins</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-xs text-white/40 mb-1">Customer Rating</div>
                      <div className="font-bold text-white flex items-center justify-center gap-1">
                        4.8 <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boost Sales CTA */}
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/5 rounded-2xl p-6 text-center">
                  <div className="size-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                    <span className="material-symbols-outlined text-2xl">campaign</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">Boost Your Sales</h4>
                  <p className="text-sm text-white/60 mb-4">Get 5x more views by promoting your top listings.</p>
                  <button className="w-full py-2.5 bg-white text-background-dark font-bold text-sm rounded-lg hover:bg-white/90 transition-colors">
                    Promote Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
