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
      'Tamil Nadu most trusted taxi service. Safe, affordable, and reliable cab booking across all 38 districts since 2015.',
    siteUrl: 'https://tamilandroptaxi.com',
    phone: '+919597775787',
    phoneDisplay: '+91 9597775787',
    whatsapp: '919597775787',
    email: 'hello@tamilandroptaxi.com',
    address: 'Tamil Nadu, India',
    established: '2015',
    googleAdsId: 'AW-18168765995',
    googleAdsConversionLabel: 'epMNCKKrw64cEKu8xddD',
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '',
    gscVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    themeColor: '#0d9488',
    ogImage: '/og-image.png',
    logo: '/logo.png',
    favicon: '/logo.png',
    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      twitter: '',
    },
    baseCity: 'Chennai',
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
