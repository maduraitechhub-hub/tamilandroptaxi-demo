/**
 * ─────────────────────────────────────────────────────────
 *  SEO CONFIG — Centralised metadata for all pages
 * ─────────────────────────────────────────────────────────
 */

const SITE_NAME  = 'Tamilandroptaxi';
const SITE_URL   = 'https://tamilandroptaxi.com'; // FIXED: removed www to match site.js siteUrl (avoids canonical mismatch)
const SITE_PHONE = '+91-9597775787'; // FIXED: was a stale/different number than site.js — keep these in sync

/** Static page metadata */
export const PAGE_SEO = {
  home: {
    title:       'Madurai Drop Taxi & Outstation Cab | Tamilan Drop Taxi',
    description: 'Book a one-way drop taxi from Madurai to Chennai, Coimbatore, Trichy, Bangalore and destinations across Tamil Nadu. Get an online fare estimate, call or WhatsApp to confirm.',
    keywords:    ['Tamilan Drop Taxi', 'Madurai drop taxi', 'Madurai taxi service', 'Madurai outstation cab', 'Madurai to Chennai taxi', 'Madurai to Coimbatore taxi', 'one way taxi Madurai', 'Madurai airport taxi', 'drop taxi Tamil Nadu'],
    path:        '/',
  },
  book: {
    title:       'Book Tamilan Drop Taxi | One Way & Outstation Taxi Booking',
    description: 'Book your one-way drop taxi, outstation taxi, or airport transfer with Tamilan Drop Taxi.',
    keywords:    ['book drop taxi Madurai', 'online taxi booking Madurai', 'outstation cab booking Madurai'],
    path:        '/book',
  },
  about: {
    title:       'About Tamilan Drop Taxi | Madurai\'s Trusted One Way Taxi Service',
    description: 'Learn about Tamilan Drop Taxi, we provide safe, affordable, and reliable one-way, outstation, and airport taxi services across Tamil Nadu since 2015.',
    keywords:    ['about Tamilandroptaxi', 'trusted taxi service Madurai'],
    path:        '/about',
  },
  cities: {
    title:       'Cities We Serve | Tamilan Drop Taxi Across Tamil Nadu',
    description: 'Explore the cities served by Tamilan Drop Taxi. Book one-way, outstation, and airport taxi services from Madurai to Chennai, Coimbatore, Trichy, Tirunelveli, Rameswaram, Kodaikanal, and all 38 districts of Tamil Nadu.',
    keywords:    ['Madurai taxi routes', 'drop taxi districts from Madurai'],
    path:        '/cities',
  },
  contact: {
    title:       'Contact us today | Book Your Taxi in Madurai',
    description: 'Contact Tamilan Drop Taxi for one-way, outstation, and airport taxi bookings in Madurai. Call, WhatsApp, or book online for instant confirmation and 24/7 support.',
    keywords:    ['contact Tamilandroptaxi', 'taxi booking helpline Madurai'],
    path:        '/contact',
  },
  partner: {
    title:       'Partner With Us | Tamilandroptaxi Madurai',
    description: 'Are you a driver or vehicle owner in Madurai or Tamil Nadu? Partner with Tamilandroptaxi and grow your earnings with consistent outstation bookings.',
    keywords:    ['taxi driver partner Madurai', 'cab owner partnership Tamil Nadu'],
    path:        '/partner',
  },

  /** Dedicated page targeting Madurai local sightseeing + outstation round trip SEO */
  maduraiLocalRoundTrip: {
    title:       'Madurai Local Sightseeing & Round Trip Taxi | Tamilandroptaxi',
    description: 'Book a Madurai local taxi for sightseeing — Meenakshi Temple, Nayakkar Mahal & more — or a round trip outstation cab to Rameswaram (from ₹5,440), Kodaikanal (from ₹4,000) & beyond. Transparent fares, 24/7 service.',
    keywords:    [
      'Madurai local taxi',
      'Madurai sightseeing cab',
      'Madurai local sightseeing package',
      'Madurai local trip taxi',
      'Madurai round trip taxi',
      'Madurai to Rameswaram round trip taxi',
      'Madurai to Kodaikanal taxi',
      'Madurai outstation round trip cab',
      'Madurai temple tour taxi',
    ],
    path:        '/book',
  },
};

/**
 * Build Next.js Metadata object from a PAGE_SEO entry
 */
export function buildMetadata(pageKey) {
  const seo = typeof pageKey === 'string' ? PAGE_SEO[pageKey] : pageKey;
  if (!seo) return {};

  const canonical = seo.alternates?.canonical ||
    `${SITE_URL}${seo.path || '/'}`;
  return {
    title: seo.title,
    description: seo.description,
    ...(seo.keywords ? { keywords: seo.keywords } : {}),
    openGraph: seo.openGraph || {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: seo.twitter || {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
    alternates: { canonical },
  };
}

/**
 * Build metadata for programmatic city pages (/taxi/[city])
 */
export function buildCitySeo(city) {
  return {
    title:       `Madurai to ${city.name} Taxi | One-Way Drop Cab | Tamilan Drop Taxi`,
    description: `Book a one-way taxi from Madurai to ${city.name}. Request a fare estimate online or call/WhatsApp Tamilan Drop Taxi to confirm your long-distance trip.`,
    keywords:    [
      `Madurai to ${city.name} taxi`,
      `Madurai ${city.name} drop taxi`,
      `Madurai ${city.name} outstation cab`,
      `Madurai ${city.name} one way taxi`,
      `cab service Madurai to ${city.name}`,
    ],
    openGraph: {
      title:       `Madurai to ${city.name} Taxi | Tamilan Drop Taxi`,
      description: `Plan your Madurai to ${city.name} outstation journey. Choose a vehicle, request an estimate and confirm your taxi by phone or WhatsApp.`,
      url:         `${SITE_URL}/taxi/${city.slug}`,
      siteName:    SITE_NAME,
      type:        'website',
    },
    twitter: {
      card:        'summary_large_image',
      title:       `Madurai to ${city.name} Taxi | Tamilan Drop Taxi`,
      description: `One-way taxi from Madurai to ${city.name}. Transparent fares, verified drivers, 24/7.`,
    },
    alternates: {
      canonical: `${SITE_URL}/taxi/${city.slug}`,
    },
  };
}

export const SITE_CONFIG = { SITE_NAME, SITE_URL, SITE_PHONE };
