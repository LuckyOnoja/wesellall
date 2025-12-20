# WeSellAll - Complete Pages Overview

## Project Summary
WeSellAll is a Nigerian marketplace platform (similar to Jiji, OLX) built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The platform allows users to buy and sell items across Nigeria with features like verified sellers, secure transactions, and location-based listings.

---



### Purpose
The main homepage showcasing the platform's value proposition and key features.

### Design Theme:
- Dark theme with `#23140f` background
- Primary color: `#ff6933` (orange)
- Secondary color: `#004E89` (blue)
- Glassmorphism effects
- Material Symbols icons
- Smooth animations

---

## 2. Products/Browse Page (`/products` - `src/app/products/page.tsx`)

### Purpose
Main product listing page where users browse and search for items.

### Key Features:
1. **Hero Banner**
   - Gradient background (primary to secondary)
   - Search bar with location dropdown
   - "Find Anything You Need" headline

2. **Quick Categories**
   - 8 category buttons with icons and item counts
   - Clickable category filters
   - Visual feedback on selection

3. **Filters Sidebar** (Left)
   - Price range filters (radio buttons)
   - Condition filters (checkboxes)
   - Verified sellers toggle
   - Location filters
   - Sticky positioning

4. **Products Grid** (Right)
   - 3-column grid layout
   - Product cards showing:
     - Image with badges (Premium, Urgent, Trending)
     - Title, price, original price (if discounted)
     - Condition badge
     - Views, likes, time posted
     - Location
     - "View Details" button
   - Hover effects and transitions

5. **Toolbar**
   - Results count
   - Sort options dropdown (Recommended, Newest, Price, etc.)
   - Mobile filter toggle

6. **Pagination**
   - Page numbers with ellipsis
   - Previous/Next buttons

7. **Newsletter CTA**
   - Email subscription form
   - Gradient background

### Sample Products:
- 2022 Toyota Camry XLE (₦12.5M)
- iPhone 14 Pro Max (₦850K)
- 3-Bedroom Apartment (₦3.5M/yr)
- MacBook Pro M2 (₦1.2M)
- Designer Handbag Collection (₦450K)
- Fitness Equipment Set (₦280K)
- Professional Camera Kit (₦750K)
- Executive Office Furniture (₦850K)

---

## 3. Categories Page (`/categories` - `src/app/categories/page.tsx`)

### Purpose
Dedicated page for browsing all product categories with detailed information.

### Key Features:
1. **Hero Section**
   - Gradient background
   - "Browse All Categories" headline
   - Search bar for filtering categories

2. **Stats Cards**
   - 4 stat cards: Total Categories (50+), Active Listings (50k+), New Daily (2k+), Active Users (500k+)
   - Icons and values

3. **Categories Grid**
   - 12 category cards in grid layout
   - Each card shows:
     - Category image with gradient overlay
     - Icon badge (emoji)
     - Category name
     - Item count
     - Popular items list (3 items with counts)
     - "Browse Category" button
   - Hover effects with scale and shadow

4. **Featured Categories**
   - 3 large featured cards: Cars & Vehicles, Phones & Tablets, Real Estate
   - Gradient backgrounds
   - Direct links to category products

5. **CTA Section**
   - "Ready to Sell?" section with registration CTA

### Categories List:
1. Cars & Vehicles (12,456 items)
2. Phones & Tablets (8,234 items)
3. Real Estate (3,891 items)
4. Electronics (15,672 items)
5. Fashion & Beauty (9,823 items)
6. Jobs & Services (5,456 items)
7. Home & Garden (7,123 items)
8. Sports & Fitness (4,234 items)
9. Agriculture (3,456 items)
10. Health & Beauty (5,678 items)
11. Education (2,345 items)
12. Pets & Animals (1,234 items)

---

## 4. Sell Page (`/sell` - `src/app/sell/page.tsx`)

### Purpose
Landing page encouraging users to become sellers, explaining the selling process and benefits.

### Key Features:
1. **Hero Section**
   - Split layout: Left (content) + Right (success stories)
   - "Sell Anything, Earn Money Fast" headline
   - Two CTAs: "Start Selling Free" and "Calculate Earnings"
   - Success stories cards showing:
     - Seller name, business, revenue, period
     - Profile images

2. **Earnings Calculator** (Toggleable)
   - Slider input for item value (₦10K - ₦50M)
   - 3 earning scenarios:
     - Basic Listing (95% earnings)
     - Featured Listing (98% earnings)
     - Premium Listing (100% earnings)
   - Feature lists for each tier

3. **How It Works (4 Steps)**
   - Step 1: Sign Up Free
   - Step 2: List Your Items
   - Step 3: Set Your Price
   - Step 4: Start Selling
   - Numbered cards with icons

4. **Why Sell on WeSellAll?**
   - 6 feature cards:
     - List in 2 Minutes
     - Verified Badge
     - Boost Visibility
     - Large Audience
     - Analytics Dashboard
     - Delivery Options

5. **What You Can Sell**
   - Grid of 12 item types with emoji icons (Cars, Phones, Houses, Laptops, Fashion, Furniture, Games, Sports, Books, Art, Tools, Music)

6. **CTA Section**
   - Large gradient section with:
     - 3 stat cards: ₦0 Listing Fee, 95% You Keep, 24h Support
     - "Start Selling Now - It's Free!" button

7. **FAQ Section**
   - 6 frequently asked questions in 2-column grid
   - Topics: Listing costs, payment methods, selling time, safety, services, support

### Success Stories:
- Ahmed Bello (AutoConnect Lagos): ₦12.5M in first month
- Chioma Okonkwo (TechGadgets NG): ₦8.2M in 30 days
- Tunde Williams (Prime Properties): ₦45M in quarter

---

## 5. Trending Page (`/trending` - `src/app/trending/page.tsx`)

### Purpose
Shows trending/popular items, categories, and searches to help users discover hot deals.

### Key Features:
1. **Hero Section**
   - Orange-red-pink gradient background
   - "What's Trending Now" headline
   - Time filter buttons: 24h, 7 days, 30 days, All time

2. **Stats Overview**
   - 3 stat cards:
     - Trending Items Today (1,245) with +12% change
     - Active Viewers (8,756) with +24% change
     - Items Sold Today (342) with +18% change

3. **Main Content (2-Column Layout)**
   
   **Left Column - Hot Right Now:**
   - List of trending items with:
     - Large images
     - Rank badges (#1, #2, etc.)
     - Trend indicators (+25%, -8%, etc.)
     - Title, category, price
     - Views, favorites, location
     - Description
     - Action buttons
   - Category filter dropdown
   - "Load More" button

   **Right Sidebar:**
   - **Trending Categories**: 6 categories with icons, item counts, and trend percentages
   - **Popular Searches**: 8 search term chips (clickable)
   - **Trending Cities**: 5 cities with item counts and trend percentages
   - **CTA Card**: "Want to Be Trending?" with boost listings button

### Sample Trending Items:
- iPhone 15 Pro Max (₦950K, +25%)
- Toyota RAV4 2021 (₦18.5M, +18%)
- MacBook Air M2 (₦850K, +32%)
- 3-Bedroom Duplex (₦45M, +12%)
- Air Jordan 1 Retro (₦85K, -8%)
- PlayStation 5 (₦450K, +45%)

### Trending Categories:
- Smartphones (+28%)
- Electric Cars (+42%)
- Home Office (+35%)
- Fitness Gear (+19%)
- Luxury Watches (+15%)
- Smart Home (+38%)

---

## 6. Deals Page (`/deals` - `src/app/deals/page.tsx`)

### Purpose
Showcases discounted items, flash sales, and limited-time offers.

### Key Features:
1. **Hero Banner**
   - Red-orange-yellow gradient
   - "Amazing Deals & Discounts" headline
   - **Countdown Timer**: Days, Hours, Minutes, Seconds (Flash Deal countdown)
   - "LIMITED TIME OFFERS" badge

2. **Deal Categories**
   - 4 category cards:
     - Flash Deals (24)
     - Daily Deals (156)
     - Weekend Specials (89)
     - Clearance (342)
   - Gradient backgrounds, clickable

3. **Toolbar**
   - "Hot Deals" heading with active deals count (612)
   - Sort dropdown (Most Popular, Discount %, Price, Ending Soon, Newest)

4. **Deals Grid**
   - 4-column grid
   - Deal cards showing:
     - Discount badge (21% OFF, 24% OFF, etc.)
     - Urgent badge (if applicable)
     - Product image
     - Progress bar showing sold items (e.g., "45/50 sold")
     - Category, rating, reviews
     - Title
     - Discount price (large) + Original price (strikethrough)
     - Time left ("Ends in 2 days")
     - Views, favorites
     - Verified seller badge + location
     - "Buy Now" button + favorite button

5. **Load More Button**
   - Gradient button to load additional deals

6. **Deal Alerts CTA**
   - Email subscription form
   - "Never Miss a Deal Again!" headline
   - Unsubscribe note

7. **Safety Tips Section**
   - 3 tip cards:
     - Verify the Seller
     - Meet in Safe Places
     - Check Return Policy

### Sample Deals:
- Samsung Galaxy S23 Ultra: ₦750K (was ₦950K, 21% OFF)
- HP Pavilion Gaming Laptop: ₦650K (was ₦850K, 24% OFF)
- Toyota Camry 2020: ₦12.5M (was ₦15M, 17% OFF)
- Designer Leather Sofa Set: ₦550K (was ₦850K, 35% OFF)
- Canon EOS R5 Camera: ₦1.35M (was ₦1.8M, 25% OFF)
- iPhone 14 Pro: ₦720K (was ₦900K, 20% OFF)
- Professional Treadmill: ₦320K (was ₦450K, 29% OFF)
- Samsung 65" 4K Smart TV: ₦550K (was ₦750K, 27% OFF)

---

## 7. Dashboard Page (`/dashboard` - `src/app/dashboard/page.tsx`)

### Purpose
Seller dashboard for managing listings, viewing stats, and accessing seller tools.

### Key Features:
1. **Header**
   - "Seller Dashboard" title
   - Welcome message

2. **Stats Cards (4 Cards)**
   - Total Views (1,250)
   - Total Sales (24)
   - Total Earnings (₦1,850,000)
   - Active Listings (8)
   - Icons and color-coded backgrounds

3. **Two-Column Layout**
   
   **Left Column - Navigation:**
   - Sidebar with tabs:
     - Overview
     - My Listings
     - Messages
     - Payments
     - Settings
   - Quick Actions:
     - "Post New Ad" button
     - "Upgrade Plan" button

   **Right Column - Content:**
   - **Overview Tab:**
     - Recent Listings section:
       - List of 3 recent listings
       - Shows: title, price, views, status (active/sold)
       - Edit button for each
     - Performance Metrics:
       - Response Rate (85%)
       - Avg. Response Time (2.1h)

### Sample Recent Listings:
- iPhone 13 Pro: ₦450K, 156 views, active
- MacBook Air M1: ₦650K, 89 views, sold
- Samsung S22 Ultra: ₦380K, 203 views, active

---

## 8. Admin Page (`/admin` - `src/app/admin/page.tsx`)

### Purpose
Admin dashboard for reviewing and approving/rejecting submitted advertisements.

### Key Features:
1. **Header**
   - "Admin Dashboard" title
   - "Review and manage advertisements" subtitle

2. **Two-Column Layout**
   
   **Left Column - Stats & Filters:**
   - **Overview Card:**
     - Pending Reviews count (3)
     - Approved Today count (12)
     - Rejected Today count (3)
   
   - **Filters Card:**
     - Category dropdown (All, Cars, Phones, Real Estate)
     - Price range dropdown (Any, Under ₦1M, ₦1M-₦10M, Over ₦10M)
     - "Apply Filters" button

   **Right Column - Ads List:**
   - "Pending Ads for Review" heading
   - List of pending ads showing:
     - Thumbnail image
     - Title
     - Seller name
     - Category
     - Price
     - Expandable details (on click):
       - Submitted date
       - Category
       - Approve/Reject buttons
     - Quick Approve/Reject buttons (when collapsed)
   - Empty state when no pending ads

### Sample Pending Ads:
- 2021 Toyota Camry: ₦8.5M (Auto Dealer Ltd, Cars)
- iPhone 14 Pro Max: ₦950K (Tech Store NG, Phones)
- 4-Bedroom Duplex: ₦75M (Real Estate Co, Real Estate)

---

## 9. Register Page (`/register` - `src/app/register/page.tsx`)

### Purpose
Multi-step registration form for new sellers to create accounts and choose subscription plans.

### Key Features:
1. **Step 1: Account Information**
   - Form fields:
     - Full Name (required)
     - Business Name (optional)
     - Email Address (required)
     - Phone Number (required, +234 prefix)
     - Password (required, min 8 chars, uppercase/lowercase/number)
     - Confirm Password (required)
     - Location dropdown (required, Nigerian cities)
     - Terms & Conditions checkbox
   - "Continue to Plan Selection" button
   - "Sign in here" link

2. **Step 2: Plan Selection**
   - 3 pricing tier cards:
     - **Starter (Free)**: 5 monthly listings, basic profile, standard support
     - **Pro Seller (₦10,000/mo)**: 50 premium listings, featured placement, priority support, pro badge, analytics, bulk upload (up to 100)
     - **Business (₦30,000/mo)**: Unlimited listings, top placement, 24/7 support, business analytics, verified badge, priority approval, unlimited bulk upload, full API access, account manager
   - Plan summary card showing selected plan details
   - Back button + Submit button
   - Loading state during submission

3. **Right Column - Benefits & Stats:**
   - **Stats Card**: 4 stats (500k+ Active Buyers, 3-5x Faster Sales, 98% Satisfaction, 24h Support Response)
   - **Success Stories**: 2 testimonials with names, businesses, and quotes
   - **Features List**: 4 features with icons (Verified Badge, Fast Approval, Targeted Buyers, Sales Analytics)
   - **Trust Badge**: "Trusted by 50,000+ Nigerian Sellers" with guarantee text

4. **Progress Bar**
   - Shows current step (1 of 2)
   - Step indicators with connecting lines

5. **Animated Background**
   - Gradient orbs for visual appeal

---

## Design System Summary

### Colors:
- **Primary**: `#ff6933` (Orange)
- **Secondary**: `#004E89` (Blue)
- **Background Dark**: `#23140f`
- **Dark Surface**: `#2c1a14`
- **Background Light**: `#f8f6f5`

### Typography:
- **Display Font**: Space Grotesk (300, 400, 500, 600, 700)
- **Body Font**: Noto Sans (400, 500, 600, 700)
- **Icons**: Material Symbols Outlined

### Key UI Patterns:
- Glassmorphism effects
- Gradient backgrounds
- Card-based layouts
- Hover animations
- Badge system (Premium, Urgent, Trending, Verified)
- Progress indicators
- Countdown timers
- Stats cards
- Filter sidebars
- Responsive grids

### Common Components:
- Search bars with location selectors
- Product/listing cards
- Category cards
- Stats cards
- CTA sections
- Footer with links
- Navigation bars
- Filter panels
- Pagination
- Badges and tags

---

## Technical Stack:
- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.1
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (on landing page)
- **Icons**: Lucide React + Material Symbols Outlined
- **Forms**: React Hook Form + Zod validation
- **Notifications**: React Hot Toast

---

## User Flows:

1. **Buyer Flow**: Landing → Products/Categories → Product Details → Contact Seller
2. **Seller Flow**: Landing → Sell Page → Register → Dashboard → Create Listing
3. **Admin Flow**: Admin Dashboard → Review Ads → Approve/Reject
4. **Discovery Flow**: Landing → Trending/Deals → Products

---

This overview provides a comprehensive understanding of all pages in the WeSellAll marketplace platform for generating redesign prompts.

