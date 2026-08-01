/**
 * ─────────────────────────────────────────────────────────
 *  CENTRAL SITE CONFIGURATION – Multi-Domain Support
 *  Add a new domain by adding a new key to DOMAIN_CONFIGS.
 *  The active config is selected via NEXT_PUBLIC_SITE_KEY env.
 * ─────────────────────────────────────────────────────────
 */

export const DOMAIN_CONFIGS = {
  tamilandroptaxi: {
    siteKey: 'tamilandroptaxi',
    siteName: 'Tamilandroptaxi',
    siteTagline: 'Premium Cab Service',
    siteDescription:
      'Book Tamilan Drop Taxi for safe and affordable one-way, outstation, and airport taxi services from Madurai across all 38 districts of Tamil Nadu. No return charges.',
    siteUrl: 'https://tamilandroptaxi.com',
    phone: '+919597775787',
    phoneDisplay: '+91 9597775787',
    whatsapp: '919597775787',
    email: 'hello@tamilandroptaxi.com',
    address: 'Madurai, Tamil Nadu, India',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    postalCode: '', // unga office pincode add pannunga
    latitude: 9.9252,
    longitude: 78.1198,
    established: '2015',

    // ── Google Ads Conversion Tracking ──────────────────────
    googleAdsId: 'AW-18280882706',
    conversionLabels: {
      // ✅ CONFIRMED — this is the "Contact" action's real label
      form: 'eJf5CIa989ccEJLEgI1E',

      // ⚠️ REPLACE THESE — create new conversion actions in
      // Google Ads (Website type) and paste their labels here.
      // Until replaced, call/whatsapp conversions will NOT be tracked.
      call: 'CALL_LABEL_HERE',
      whatsapp: 'WHATSAPP_LABEL_HERE',
    },

    gtmId: 'GTM-PS4X9TGN',
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '',
    gscVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    themeColor: '#0d9488',
    ogImage: '/og-image.png',
    logo: '/logo.png',
    favicon: '/favicon.png',
    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: '',
    },
    baseCity: 'Madurai',
    stateCode: 'IN-TN',
    stateName: 'Tamil Nadu',
    country: 'India',
    serviceArea: 'Tamil Nadu',
  },

  // ── Template for a second domain ──────────────────────────
  // tamilandroptaxi: {
  //   siteKey: 'tamilandroptaxi',
  //   siteName: 'Tamilan Dop Taxi',
  //   siteTagline: 'Premium Cab Service',
  //   siteUrl: 'https://tamilandroptaxi.com',
  //   phone: '+91XXXXXXXXXX',
  //   ...
  // },
};

/** Returns the active site config based on env variable NEXT_PUBLIC_SITE_KEY */
export function getSiteConfig() {
  const key = process.env.NEXT_PUBLIC_SITE_KEY || 'tamilandroptaxi';
  return DOMAIN_CONFIGS[key] || DOMAIN_CONFIGS.tamilandroptaxi;
}

/** Shorthand helpers */
export const site = getSiteConfig();
export const siteUrl = site.siteUrl;
export const siteName = site.siteName;
export const phone = site.phone;
export const whatsapp = site.whatsapp;