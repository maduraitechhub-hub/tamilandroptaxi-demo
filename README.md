# Tamilandroptaxi — Next.js Production Website

A production-ready, SEO-optimised Next.js 14 taxi booking website built from analysis of tamilandroptaxi.com. Designed for high Lighthouse scores, Google Ads lead generation, and multi-domain scaling.

---

## 📁 Folder Structure

```
tamilandroptaxi/
├── app/
│   ├── layout.js                  # Root layout — GA4, Google Ads, Schema
│   ├── page.js                    # Homepage (Server Component + SEO)
│   ├── sitemap.js                 # Dynamic sitemap (all routes + cities)
│   ├── robots.js                  # Dynamic robots.txt
│   ├── (routes)/
│   │   ├── book/page.js           # /book — Booking form page
│   │   ├── cities/page.js         # /cities — All cities
│   │   ├── about/page.js          # /about
│   │   ├── partner/page.js        # /partner — Driver signup
│   │   ├── contact/page.js        # /contact
│   │   └── taxi/[city]/page.js    # /taxi/madurai, /taxi/chennai … (Programmatic SEO)
│   └── api/
│       ├── send-form/route.js     # Email form submissions (nodemailer)
│       └── trip-estimate/route.js # Fare calculation (Google Routes API)
│
├── components/
│   ├── ui/
│   │   ├── Navbar.js              # Fixed nav with scroll effect
│   │   ├── Footer.js              # SEO-linked footer
│   │   ├── StickyLeadBar.js       # Mobile sticky CTA + floating WhatsApp
│   │   └── FormFeedbackModal.js   # Accessible success/error modal
│   ├── forms/
│   │   ├── BookingForm.js         # One-way / Round trip / Rental tabs
│   │   ├── ContactForm.js         # Contact form
│   │   ├── PartnerForm.js         # Driver signup form
│   │   ├── PlacesAutocompleteInput.js  # Google Places autocomplete
│   │   └── TripEstimationPanel.js # Fare estimate display + confirm
│   └── sections/
│       └── HomePageClient.js      # Full homepage (all sections)
│
├── config/
│   ├── site.js                    # 🔑 Multi-domain config (one file to rule them all)
│   └── locations.js               # Cities, routes, FAQs — SEO data engine
│
├── lib/
│   ├── seo.js                     # Metadata builder for all pages
│   ├── schema.js                  # JSON-LD schema generators
│   ├── analytics.js               # GA4 + Google Ads conversion tracking
│   ├── fareCalculator.js          # Trip fare calculation logic
│   ├── fareConfig.js              # Vehicle rates and rental packages
│   ├── googleDistance.js          # Google Routes API distance fetcher
│   ├── googlePlaces.js            # Google Places autocomplete loader
│   ├── mailer.js                  # Nodemailer SMTP email sender
│   ├── fetchTripEstimate.js       # Client-side API call helper
│   └── submitSiteForm.js          # Form submission + conversion tracking
│
├── styles/
│   └── globals.css                # All CSS — variables, components, responsive
│
├── public/
│   ├── images/                    # All site images (cars, cities, icons)
│   ├── logo.png
│   └── og-image.png
│
├── .env.example                   # All env vars documented
├── .gitignore
├── jsconfig.json                  # Path aliases
├── next.config.js                 # Image optimisation + security headers
├── vercel.json                    # Vercel deployment config
└── package.json
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your real values
```

### 3. Run development server
```bash
npm run dev
# Open http://localhost:3000
```

### 4. Build for production
```bash
npm run build
npm start
```

---

## 🌐 Vercel Deployment

### Deploy in 3 steps:

**Step 1 — Push to GitHub**
```bash
git init
git add .
git commit -m "Initial production build"
git remote add origin https://github.com/YOUR_USERNAME/tamilandroptaxi.git
git push -u origin main
```

**Step 2 — Connect to Vercel**
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Add environment variables (copy from `.env.example`)

**Step 3 — Set Environment Variables in Vercel Dashboard**
```
NEXT_PUBLIC_SITE_KEY          = tamilandroptaxi
NEXT_PUBLIC_SITE_URL          = https://tamilandroptaxi.com
NEXT_PUBLIC_GA4_ID            = G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = xxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = AIza...
SMTP_HOST                     = smtp.hostinger.com
SMTP_PORT                     = 465
SMTP_SECURE                   = true
SMTP_USER                     = hello@tamilandroptaxi.com
SMTP_PASS                     = your-password
MAIL_TO                       = hello@tamilandroptaxi.com
```

**Step 4 — Add Custom Domain**
1. Vercel Dashboard → Domains → Add `tamilandroptaxi.com`
2. Point DNS: add CNAME `@` → `cname.vercel-dns.com` at your registrar

---

## 🗺️ SEO Architecture

### Page Structure
| URL | Type | SEO Priority |
|-----|------|-------------|
| `/` | Homepage | 1.0 |
| `/book` | Booking page | 0.9 |
| `/taxi/madurai` | City SEO page | 0.85 |
| `/taxi/chennai` | City SEO page | 0.85 |
| `/cities` | Cities list | 0.8 |
| `/about` | Brand page | 0.7 |
| `/contact` | Contact | 0.6 |

### Schema Markup Implemented
- `TaxiService` + `LocalBusiness` — root layout
- `FAQPage` — homepage + city pages
- `BreadcrumbList` — all pages
- `Service` — booking page
- City-specific `TaxiService` — each `/taxi/[city]` page

### Adding a New City (Programmatic SEO)
Open `config/locations.js` and add to the `CITIES` array:
```js
{
  slug: 'vellore',
  name: 'Vellore',
  displayName: 'Vellore',
  description: 'Fort City of Tamil Nadu',
  longDescription: 'Vellore is known for its ...',
  image: '/images/vellore.png',
  routes: 8,
  popular: false,
  faqs: [
    { q: 'What is taxi fare from Vellore to Chennai?', a: 'Starting at ₹2,318 ...' }
  ],
  topRoutes: [
    { to: 'Chennai', price: '₹2,318', km: '145 km' },
  ],
}
```
That's it — the page `/taxi/vellore` auto-generates with full SEO, schema, FAQ, booking form, and sitemap entry.

---

## 🏢 Multi-Domain Setup

To launch a second domain (e.g. `tamilnadutoptaxi.com`):

**Step 1 — Add config** in `config/site.js`:
```js
tamilnadutoptaxi: {
  siteKey: 'tamilnadutoptaxi',
  siteName: 'TamilNadu Top Taxi',
  siteUrl: 'https://tamilnadutoptaxi.com',
  phone: '+91XXXXXXXXXX',
  whatsapp: '91XXXXXXXXXX',
  // ... other fields
}
```

**Step 2 — Create second Vercel project** from same GitHub repo with:
```
NEXT_PUBLIC_SITE_KEY = tamilnadutoptaxi
NEXT_PUBLIC_SITE_URL = https://tamilnadutoptaxi.com
```

**Step 3 — Point the new domain** to the new Vercel project.

Zero code changes. The same codebase serves both domains with different branding.

---

## 📣 Google Ads Setup

### Conversion Actions to Create
| Action | Trigger | Value |
|--------|---------|-------|
| Booking Confirmed | `trackLeadConversion()` on form submit | ₹500 |
| WhatsApp Click | `trackWhatsAppClick()` | ₹100 |
| Phone Call Click | `trackCallClick()` | ₹100 |

### Recommended Campaigns
1. **Search — Branded**: "Tamilandroptaxi", "tamilandroptaxi.com"
2. **Search — Service**: "drop taxi Tamil Nadu", "one way cab Tamil Nadu"
3. **Search — City**: "Madurai drop taxi", "Chennai to Bangalore cab"
4. **Search — Route**: "Chennai to Coimbatore taxi fare"

### Landing Pages for Ads
- Generic ad → `/book`
- Madurai ad → `/taxi/madurai`
- Chennai ad → `/taxi/chennai`
- Airport ad → `/book` (pre-fill with airport keyword via URL params)

---

## 🔑 Required API Keys

| Key | Where to Get | Used For |
|-----|-------------|---------|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | console.cloud.google.com | Places autocomplete + fare distance |
| `NEXT_PUBLIC_GA4_ID` | analytics.google.com | Traffic analytics |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | search.google.com/search-console | Search Console ownership |
| SMTP credentials | Your hosting provider (Hostinger) | Booking/contact emails |

### Google Cloud — APIs to Enable
1. Maps JavaScript API
2. Places API (New)
3. Routes API
4. (Optional) Geocoding API

---

## ⚡ Performance Targets

| Metric | Target | How Achieved |
|--------|--------|-------------|
| Lighthouse Performance | 95+ | Next.js Image, lazy loading, minimal JS |
| LCP | < 2.5s | Priority image on hero, preconnect fonts |
| CLS | < 0.1 | Fixed image dimensions, no layout shift |
| FID/INP | < 100ms | Server Components, minimal client JS |
| TTFB | < 200ms | Vercel edge network |

---

## 🔮 Future Scaling

### Phase 1 — More Cities (now)
Add to `config/locations.js` → pages auto-generate

### Phase 2 — Route Pages
Create `/route/[from]-to-[to]` for "Chennai to Madurai taxi" keywords
→ Add `app/(routes)/route/[slug]/page.js`

### Phase 3 — Blog / Content
Create `app/(routes)/blog/[slug]/page.js` for:
- "Best drop taxi in Tamil Nadu"
- "One way vs round trip taxi guide"
- "Airport taxi booking tips"

### Phase 4 — Second Domain
Follow Multi-Domain Setup above for `tamilnadutoptaxi.com`

### Phase 5 — App Integration
Replace form submission with a proper booking system API

---

## 📞 Support

- Phone: +91 81221 48519
- Email: hello@tamilandroptaxi.com
- WhatsApp: [wa.me/918122148519](https://wa.me/918122148519)
