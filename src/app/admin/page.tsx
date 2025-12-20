'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState('moderation');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedListing, setExpandedListing] = useState<string | null>('#8823');

  const pendingListings = [
    {
      id: '#8823',
      title: 'Luxury 3 Bedroom Apartment in Lekki Phase 1',
      price: '₦ 120,000,000',
      category: 'Real Estate',
      location: 'Lekki, Lagos',
      submittedTime: '25 mins ago',
      description:
        "Newly built 3 bedroom apartment with BQ available for sale in Lekki Phase 1. Features include: All rooms ensuite, Fitted Kitchen, Swimming Pool, Gym, 24hrs Power supply. Title: Governor's Consent. Serious buyers only.",
      seller: {
        name: 'Chinedu Properties',
        initial: 'CP',
        verified: true,
        memberSince: '2021',
        listings: 45,
        rating: 4.8,
        strikes: 0,
      },
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCzlzcQJhWyo3p39-FtBiIoyqcBg3zewCxqZA465TJkwOw18DWhoKdZAsryRWFEB1n1X23z9sN09GzDk5tl7FOkvTfPwDWV4PsYLiDiApCrZqEMwDwrCYOuIGGIs_oK2Djj8jPsvcEVtxOIPVTWGclsx7nt4IfTYBKu97NzFSD7NoUC0bJmNl8EH1nlVBJbo7tuhfWja6SmnL4AWewjBREh1sfjWelVnxbfbQWOVUkwr5IfWByRCro59RMNs3RLs__mislQDO4-Uw',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Cy89j5Ub_eNPf-6k1m1Ly2HBvoSRAnZ1O45wRKWVCsjAlg2eYO2zceIPDRnUYpOArE0hL7Xw3JlYx6inLqm83FgSOUG3Hp_SJlz1P8nGvCyMXnq_BPfWL-xV93hZDoa0CbwOgKwZv-Qk2ohzQtYIJhBha7BZfwyJsHUUeVCrRf-CsSv1VBvC6qvvDkhWVhieVbwrAvTcNucI8A7glN2zKjdrOts4V4TVqHsix1YG1QuWbE_Nmu5DtcGXotpcX2vk_SBdWZyKEg',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBcste-V6YLtuwOdcqtJTT6vovRojAolDPLQuFhzpMmI3BKRWTIZ_41LVuXl_V1Reo6UpyBFMOQUsGXXuGk14w-wBCfUklWltzwg1h_mMgXxXCy_xdVacE-HXI-IigG8vC_SwdRoEEdNp4LHkFQrvZtBIi9SMhMl4mhik8odlUdDcSehgBSP7ok9ZGTibAmaMWARts3hNKSo7t52pkSjfBG6XSeOna6Yhfy2IsTlqMunLcktElHSs_Qi_JKdpwDziQri1-ruAeD8g',
      ],
    },
    {
      id: '#8824',
      title: 'Toyota Camry 2021 LE',
      price: '₦ 8,500,000',
      category: 'Vehicles',
      location: 'Ikeja, Lagos',
      submittedTime: '1h ago',
      sellerName: 'Auto King',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYkajuIqCGYfuwfVXGXWRDvDBnLBTKDdnft5BzopWA2klnazlXnQymparvK6PKYFzOkyta8W7tO2ixfsYprpgeREruncGKCNBNfFHUitje723GRoS56gTUN1gIADAboCFEm_ThSZSKJDihIu7CStUFjyqZpkfQaSN3o4fUnEO_iXI8hLChrlEsspxYoLYRI2nHGNpPdIx_i_3gpy0M8sg8tgx1LdbiveCjpz9hBryWokg1f8ebdRIzUp24GqdrfD9UkAYW_8bAEQ',
    },
    {
      id: '#8825',
      title: 'iPhone 15 Pro Max - 256GB',
      price: '₦ 1,250,000',
      category: 'Electronics',
      location: 'Abuja',
      submittedTime: '2h ago',
      sellerName: 'Gadget World',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBsx2ugUFtLxtNHa7xTDv-C5pA4EX2xgAQw_4S20a96i4M4YExJzYRP0L_GDQReFfcpk4egVXVqm2-NrpWcvrUv6kdmR9za2OYTMk16odQjBtc1Cqv-4gin3QKel6Q8WAe9EVrKKHrsFL8n_hmnUa_i0ODPToPYjo_dpQOOeqbKN-qIYy40pcwuegzoRWqIJEAJwcpN97jtb6wZpMVvG58oIkOoyMwlrBQSdvV6SxKq-LmRVb1-zUHLSn3itiHInPSoVE21xnMg',
    },
    {
      id: '#8826',
      title: 'Gaming Setup Complete',
      price: '₦ 450,000',
      category: 'Computers',
      location: 'Port Harcourt',
      submittedTime: '3h ago',
      sellerName: 'New User_192',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc5c0MSfuZs1mUIw7TYK9ypMWhPXAAUhDs8b-5a6JPmJKvYllCjnpQsDziHLDX5NGSWsS-ZS021uK4F0sUgVzQR86jrEudGEHKcIi3miwtF1K-QymYgu23_o9vE5ek-RGh-4e-nCVf0Xtw409NFtugy7B8A5dTkh_SoHa9gDNp-VeH7JPjj0BCKZHRvnUOKmJdv7u3BWgTCVs7S75Oci_bC8xCIDsPAspc08Kck2xpb_5I6hft926ylguRoUs5xMOqF3OOmsFKA',
      potentiallyUnsafe: true,
    },
  ];

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'moderation', label: 'Moderation Queue', icon: 'gavel', badge: '42', active: true },
    { id: 'users', label: 'Users', icon: 'people' },
    { id: 'reports', label: 'Reports', icon: 'flag' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <div className="bg-background-dark text-slate-300 font-body h-screen overflow-hidden flex selection:bg-primary selection:text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-dark-surface border-r border-white/5 flex flex-col h-full flex-shrink-0 z-20">
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,105,51,0.4)]">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block leading-tight">WeSellAll</span>
              <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Admin Portal</span>
            </div>
          </Link>
        </div>
        <div className="p-6 pb-2">
          <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Daily Overview</div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-dark-elevated rounded-xl p-4 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <span className="material-symbols-outlined text-4xl">pending_actions</span>
              </div>
              <div className="text-2xl font-display font-bold text-white mb-1">42</div>
              <div className="text-xs text-primary font-medium">Pending Review</div>
            </div>
            <div className="bg-dark-elevated rounded-xl p-4 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <div className="text-2xl font-display font-bold text-white mb-1">1.2k</div>
              <div className="text-xs text-green-400 font-medium">Approved Today</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full ${
                activeNav === item.id || item.active
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${activeNav === item.id || item.active ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-2">
            <img
              alt="Admin Profile"
              className="size-9 rounded-full object-cover ring-2 ring-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLleH8qsh6_MG5Mx0LDXTIG6VAcdQr00MZ1WhQuHtkga4YsMnYK2pq9N49myPc6AIVXly0od6-Habc3Rd1Y3XRFE55NOCW9VckETTtjJpDF9IhNe6jI_aZLaa-ZejhN0ES85bsFsn6i9lEN1CtCUiO0e38grVQeWh-B1oSTw473MnShxR6r9QMHU0SoOsgBybUC5Z72PdfNJvrXQ7ZI-XEKYrGJTWtPEvJQxSB6DAkHaqza0qyWW8eVtOWFs7kHsjMx2vDd2a0RQ"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white truncate">Admin User</div>
              <div className="text-xs text-white/40 truncate">Super Admin</div>
            </div>
            <button className="text-white/40 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>
        <header className="h-20 flex items-center justify-between px-8 border-b border-white/5 z-10 bg-background-dark/80 backdrop-blur-sm">
          <div>
            <h1 className="text-2xl font-display font-bold text-white">Pending Approvals</h1>
            <p className="text-xs text-white/40">Review listings before they go live</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-[18px]">
                search
              </span>
              <input
                className="bg-dark-surface border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary w-64 placeholder-white/20"
                placeholder="Search ID, Seller, or Keyword..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
            <button className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Expanded Listing Card */}
            {expandedListing === '#8823' && pendingListings[0] && 'images' in pendingListings[0] && (
              <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/20">
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-1"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded border border-primary/20">
                        PENDING #8823
                      </span>
                      <span className="text-xs text-white/40 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        Submitted 25 mins ago
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="size-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition-colors"
                        title="Flag User"
                      >
                        <span className="material-symbols-outlined text-[18px]">flag</span>
                      </button>
                      <button
                        onClick={() => setExpandedListing(null)}
                        className="size-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition-colors"
                        title="Collapse"
                      >
                        <span className="material-symbols-outlined text-[18px]">expand_less</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 space-y-3">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black relative group cursor-pointer">
                        <img
                          alt="Listing Main"
                          className="w-full h-full object-cover"
                          src={pendingListings[0]?.images?.[0] || ''}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <span className="material-symbols-outlined text-white">zoom_in</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {pendingListings[0]?.images?.slice(1, 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="aspect-square rounded-md overflow-hidden border border-white/10 bg-black opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <img alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" src={img} />
                          </div>
                        ))}
                        <div className="aspect-square rounded-md overflow-hidden border border-white/10 bg-black flex items-center justify-center text-white/40 text-xs font-bold cursor-pointer hover:bg-white/5 transition-colors">
                          +2
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="flex justify-between items-start">
                          <h2 className="text-2xl font-bold text-white mb-2">{pendingListings[0]?.title}</h2>
                          <div className="text-2xl font-display font-bold text-primary">{pendingListings[0]?.price}</div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">category</span> {pendingListings[0]?.category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">location_on</span> {pendingListings[0]?.location}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          <span className="text-white/40">ID: 8823910</span>
                        </div>
                        <p className="text-white/80 leading-relaxed text-sm bg-dark-surface p-4 rounded-lg border border-white/5">
                          {pendingListings[0]?.description}
                        </p>
                      </div>
                      {pendingListings[0]?.seller && (
                      <div className="bg-dark-elevated rounded-lg p-4 flex items-center justify-between border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                            {pendingListings[0].seller.initial}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white flex items-center gap-1">
                              {pendingListings[0].seller.name}
                              {pendingListings[0].seller.verified && (
                                <span className="material-symbols-outlined text-blue-400 text-[14px]" title="Verified Seller">
                                  verified
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-white/40">
                              Member since {pendingListings[0].seller.memberSince} • {pendingListings[0].seller.listings} Listings
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-4 text-xs text-white/60 text-right">
                          <div>
                            <div className="font-bold text-white">{pendingListings[0].seller.rating}</div>
                            <div>Rating</div>
                          </div>
                          <div>
                            <div className="font-bold text-green-400">{pendingListings[0].seller.strikes}</div>
                            <div>Strikes</div>
                          </div>
                        </div>
                      </div>
                      )}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <button className="glass-button-danger py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                          <span className="material-symbols-outlined">close</span>
                          Reject Ad
                        </button>
                        <button className="glass-button-success py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                          <span className="material-symbols-outlined">check</span>
                          Approve Ad
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Compact Listing Cards */}
            {pendingListings.slice(1).map((listing, index) => (
              <div
                key={listing.id}
                className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group border border-white/5 hover:border-white/10"
                onClick={() => setExpandedListing(listing.id)}
              >
                <div className={`size-16 rounded-lg bg-dark-surface overflow-hidden flex-shrink-0 relative ${listing.potentiallyUnsafe ? '' : ''}`}>
                  <img
                    alt={listing.title}
                    className={`w-full h-full object-cover ${listing.potentiallyUnsafe ? 'grayscale opacity-50' : ''}`}
                    src={listing.img}
                  />
                  {listing.potentiallyUnsafe && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <span className="material-symbols-outlined text-white text-sm">warning</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-white truncate pr-4 flex items-center gap-2">
                      {listing.title}
                      {listing.potentiallyUnsafe && (
                        <span className="bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded border border-red-500/20 font-medium">
                          Potentially Unsafe
                        </span>
                      )}
                    </h3>
                    <span className="text-primary font-bold whitespace-nowrap">{listing.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span>{listing.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/10"></span>
                    <span>{listing.location}</span>
                    <span className="w-1 h-1 rounded-full bg-white/10"></span>
                    <span>Posted {listing.submittedTime}</span>
                    <span className="w-1 h-1 rounded-full bg-white/10"></span>
                    <span className="text-white/70">Seller: {listing.sellerName}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-2 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors text-white/40"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle reject
                    }}
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-green-500/20 hover:text-green-400 transition-colors text-white/40"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle approve
                    }}
                  >
                    <span className="material-symbols-outlined">check</span>
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/40"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedListing(listing.id);
                    }}
                  >
                    <span className="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-8 flex justify-center">
              <button className="text-sm text-white/40 hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                Loading more listings...
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

                    </div>

                    <div className="flex gap-2">

                      <button

                        className="size-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition-colors"

                        title="Flag User"

                      >

                        <span className="material-symbols-outlined text-[18px]">flag</span>

                      </button>

                      <button

                        onClick={() => setExpandedListing(null)}

                        className="size-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition-colors"

                        title="Collapse"

                      >

                        <span className="material-symbols-outlined text-[18px]">expand_less</span>

                      </button>

                    </div>

                  </div>

                  <div className="flex flex-col md:flex-row gap-8">

                    <div className="w-full md:w-1/3 space-y-3">

                      <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black relative group cursor-pointer">

                        <img

                          alt="Listing Main"

                          className="w-full h-full object-cover"

                          src={pendingListings[0]?.images?.[0] || ''}

                        />

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">

                          <span className="material-symbols-outlined text-white">zoom_in</span>

                        </div>

                      </div>

                      <div className="grid grid-cols-3 gap-2">

                        {pendingListings[0]?.images?.slice(1, 3).map((img, idx) => (

                          <div

                            key={idx}

                            className="aspect-square rounded-md overflow-hidden border border-white/10 bg-black opacity-60 hover:opacity-100 transition-opacity cursor-pointer"

                          >

                            <img alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" src={img} />

                          </div>

                        ))}

                        <div className="aspect-square rounded-md overflow-hidden border border-white/10 bg-black flex items-center justify-center text-white/40 text-xs font-bold cursor-pointer hover:bg-white/5 transition-colors">

                          +2

                        </div>

                      </div>

                    </div>

                    <div className="flex-1 space-y-6">

                      <div>

                        <div className="flex justify-between items-start">

                          <h2 className="text-2xl font-bold text-white mb-2">{pendingListings[0].title}</h2>

                          <div className="text-2xl font-display font-bold text-primary">{pendingListings[0].price}</div>

                        </div>

                        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">

                          <span className="flex items-center gap-1">

                            <span className="material-symbols-outlined text-[16px]">category</span> {pendingListings[0].category}

                          </span>

                          <span className="w-1 h-1 rounded-full bg-white/20"></span>

                          <span className="flex items-center gap-1">

                            <span className="material-symbols-outlined text-[16px]">location_on</span> {pendingListings[0].location}

                          </span>

                          <span className="w-1 h-1 rounded-full bg-white/20"></span>

                          <span className="text-white/40">ID: 8823910</span>

                        </div>

                        <p className="text-white/80 leading-relaxed text-sm bg-dark-surface p-4 rounded-lg border border-white/5">

                          {pendingListings[0].description}

                        </p>

                      </div>

                      <div className="bg-dark-elevated rounded-lg p-4 flex items-center justify-between border border-white/5">

                        <div className="flex items-center gap-3">

                          <div className="size-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">

                            {pendingListings[0].seller.initial}

                          </div>

                          <div>

                            <div className="text-sm font-bold text-white flex items-center gap-1">

                              {pendingListings[0].seller.name}

                              {pendingListings[0].seller.verified && (

                                <span className="material-symbols-outlined text-blue-400 text-[14px]" title="Verified Seller">

                                  verified

                                </span>

                              )}

                            </div>

                            <div className="text-xs text-white/40">

                              Member since {pendingListings[0].seller.memberSince} • {pendingListings[0].seller.listings} Listings

                            </div>

                          </div>

                        </div>

                        <div className="flex gap-4 text-xs text-white/60 text-right">

                          <div>

                            <div className="font-bold text-white">{pendingListings[0].seller.rating}</div>

                            <div>Rating</div>

                          </div>

                          <div>

                            <div className="font-bold text-green-400">{pendingListings[0].seller.strikes}</div>

                            <div>Strikes</div>

                          </div>

                        </div>

                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2">

                        <button className="glass-button-danger py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">

                          <span className="material-symbols-outlined">close</span>

                          Reject Ad

                        </button>

                        <button className="glass-button-success py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">

                          <span className="material-symbols-outlined">check</span>

                          Approve Ad

                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            )}



            {/* Compact Listing Cards */}

            {pendingListings.slice(1).map((listing, index) => (

              <div

                key={listing.id}

                className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group border border-white/5 hover:border-white/10"

                onClick={() => setExpandedListing(listing.id)}

              >

                <div className={`size-16 rounded-lg bg-dark-surface overflow-hidden flex-shrink-0 relative ${listing.potentiallyUnsafe ? '' : ''}`}>

                  <img

                    alt={listing.title}

                    className={`w-full h-full object-cover ${listing.potentiallyUnsafe ? 'grayscale opacity-50' : ''}`}

                    src={listing.img}

                  />

                  {listing.potentiallyUnsafe && (

                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">

                      <span className="material-symbols-outlined text-white text-sm">warning</span>

                    </div>

                  )}

                </div>

                <div className="flex-1 min-w-0">

                  <div className="flex justify-between items-center mb-1">

                    <h3 className="font-bold text-white truncate pr-4 flex items-center gap-2">

                      {listing.title}

                      {listing.potentiallyUnsafe && (

                        <span className="bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded border border-red-500/20 font-medium">

                          Potentially Unsafe

                        </span>

                      )}

                    </h3>

                    <span className="text-primary font-bold whitespace-nowrap">{listing.price}</span>

                  </div>

                  <div className="flex items-center gap-3 text-xs text-white/50">

                    <span>{listing.category}</span>

                    <span className="w-1 h-1 rounded-full bg-white/10"></span>

                    <span>{listing.location}</span>

                    <span className="w-1 h-1 rounded-full bg-white/10"></span>

                    <span>Posted {listing.submittedTime}</span>

                    <span className="w-1 h-1 rounded-full bg-white/10"></span>

                    <span className="text-white/70">Seller: {listing.sellerName}</span>

                  </div>

                </div>

                <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">

                  <button

                    className="p-2 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors text-white/40"

                    onClick={(e) => {

                      e.stopPropagation();

                      // Handle reject

                    }}

                  >

                    <span className="material-symbols-outlined">close</span>

                  </button>

                  <button

                    className="p-2 rounded-lg hover:bg-green-500/20 hover:text-green-400 transition-colors text-white/40"

                    onClick={(e) => {

                      e.stopPropagation();

                      // Handle approve

                    }}

                  >

                    <span className="material-symbols-outlined">check</span>

                  </button>

                  <button

                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/40"

                    onClick={(e) => {

                      e.stopPropagation();

                      setExpandedListing(listing.id);

                    }}

                  >

                    <span className="material-symbols-outlined">expand_more</span>

                  </button>

                </div>

              </div>

            ))}

            <div className="mt-8 flex justify-center">

              <button className="text-sm text-white/40 hover:text-primary transition-colors flex items-center gap-2">

                <span className="material-symbols-outlined animate-spin text-lg">sync</span>

                Loading more listings...

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

}


