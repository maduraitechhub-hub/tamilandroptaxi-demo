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
    title:       'Madurai Drop Taxi | Tamilandroptaxi - One Way Outstation Cabs',
    description: 'Madurai\'s most trusted drop taxi service. Book one-way outstation cabs from Madurai to Chennai, Coimbatore, Trichy, Tirunelveli & all 38 Tamil Nadu districts. Instant fare, transparent pricing, no return charges.',
    keywords:    ['Madurai drop taxi', 'Madurai taxi service', 'Madurai outstation cab', 'Madurai to Chennai taxi', 'Madurai to Coimbatore taxi', 'one way taxi Madurai', 'Madurai airport taxi', 'drop taxi Tamil Nadu'],
    path:        '/',
  },
  book: {
    title:       'Book a Drop Taxi from Madurai | Tamilandroptaxi',
    description: 'Book your Madurai outstation drop taxi online. Choose your pickup, drop location, date and vehicle. Instant confirmation and transparent pricing with no hidden charges.',
    keywords:    ['book drop taxi Madurai', 'online taxi booking Madurai', 'outstation cab booking Madurai'],
    path:        '/book',
  },
  about: {
    title:       'About Us | Tamilandroptaxi Madurai',
    description: 'Learn about Tamilandroptaxi — Madurai\'s trusted outstation cab provider offering transparent one-way taxi fares since 2015. Experienced drivers, GPS-tracked vehicles.',
    keywords:    ['about Tamilandroptaxi', 'trusted taxi service Madurai'],
    path:        '/about',
  },
  cities: {
    title:       'Cities We Serve from Madurai | Tamilandroptaxi',
    description: 'Tamilandroptaxi operates from Madurai to 38 districts and major cities across Tamil Nadu. Find drop taxi routes from Madurai to your destination.',
    keywords:    ['Madurai taxi routes', 'drop taxi districts from Madurai'],
    path:        '/cities',
  },
  contact: {
    title:       'Contact Us | Tamilandroptaxi Madurai',
    description: 'Contact Tamilandroptaxi Madurai for booking assistance, route queries, or partnership enquiries. We are available 24/7 on call and WhatsApp.',
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
    path:        '/madurai-local-round-trip-taxi',
  },
};

/**
 * Build Next.js Metadata object from a PAGE_SEO entry
 */
export function buildMetadata(pageKey) {
  const seo = PAGE_SEO[pageKey];
  if (!seo) return {};
  return {
    title:       seo.title,
    description: seo.description,
    keywords:    seo.keywords,
    openGraph: {
      title:       seo.title,
      description: seo.description,
      url:         `${SITE_URL}${seo.path}`,
      siteName:    SITE_NAME,
      type:        'website',
    },
    twitter: {
      card:        'summary_large_image',
      title:       seo.title,
      description: seo.description,
    },
    alternates: {
      canonical: `${SITE_URL}${seo.path}`,
    },
  };
}

/**
 * Build metadata for programmatic city pages (/taxi/[city])
 */
export function buildCitySeo(city) {
  return {
    title:       `Madurai to ${city.name} Taxi | One-Way Outstation Cab | Tamilandroptaxi`,
    description: `Book a one-way drop taxi from Madurai to ${city.name}. Transparent per-km rates, no return charges, 24/7 availability. ${city.description}.`,
    keywords:    [
      `Madurai to ${city.name} taxi`,
      `Madurai ${city.name} drop taxi`,
      `Madurai ${city.name} outstation cab`,
      `Madurai ${city.name} one way taxi`,
      `cab service Madurai to ${city.name}`,
    ],
    openGraph: {
      title:       `Madurai to ${city.name} Taxi | Tamilandroptaxi`,
      description: `Reliable one-way drop taxi from Madurai to ${city.name} at transparent per-km rates. Book now.`,
      url:         `${SITE_URL}/taxi/${city.slug}`,
      siteName:    SITE_NAME,
      type:        'website',
    },
    twitter: {
      card:        'summary_large_image',
      title:       `Madurai to ${city.name} Taxi | Tamilandroptaxi`,
      description: `One-way taxi from Madurai to ${city.name}. Transparent fares, verified drivers, 24/7.`,
    },
    alternates: {
      canonical: `${SITE_URL}/taxi/${city.slug}`,
    },
  };
}

export const SITE_CONFIG = { SITE_NAME, SITE_URL, SITE_PHONE };
