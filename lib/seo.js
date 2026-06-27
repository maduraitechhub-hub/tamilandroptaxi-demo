/**
 * ─────────────────────────────────────────────────────────
 *  SEO CONFIG — Centralised metadata for all pages
 * ─────────────────────────────────────────────────────────
 */

const SITE_NAME  = 'Tamilandroptaxi';
const SITE_URL   = 'https://www.tamilandroptaxi.com';
const SITE_PHONE = '+91-88836661000';

/** Static page metadata */
export const PAGE_SEO = {
  home: {
    title:       'Tamil Nadu Drop Taxi | One-Way Outstation Cab Service',
    description: 'Book affordable drop taxi services across Tamil Nadu. One-way outstation cabs from Chennai, Madurai, Coimbatore, Trichy & 38 districts. Instant fare, transparent pricing, no return charges.',
    keywords:    ['Tamil Nadu drop taxi', 'one way taxi Tamil Nadu', 'outstation cab Tamil Nadu', 'Chennai drop taxi', 'Madurai taxi', 'Coimbatore taxi'],
    path:        '/',
  },
  book: {
    title:       'Book a Drop Taxi | Tamilandroptaxi',
    description: 'Book your outstation drop taxi online. Choose your pickup, drop location, date and vehicle. Instant confirmation and transparent pricing with no hidden charges.',
    keywords:    ['book drop taxi Tamil Nadu', 'online taxi booking Tamil Nadu', 'outstation cab booking'],
    path:        '/book',
  },
  about: {
    title:       'About Us | Tamilandroptaxi',
    description: 'Learn about Tamilandroptaxi — Tamil Nadu\'s trusted outstation cab provider offering transparent one-way taxi fares since 2018. Experienced drivers, GPS-tracked vehicles.',
    keywords:    ['about Tamilandroptaxi', 'trusted taxi service Tamil Nadu'],
    path:        '/about',
  },
  cities: {
    title:       'Cities We Serve | Tamilandroptaxi',
    description: 'Tamilandroptaxi operates from 38 districts and major cities across Tamil Nadu. Find drop taxi routes from your city.',
    keywords:    ['Tamil Nadu taxi cities', 'drop taxi districts Tamil Nadu'],
    path:        '/cities',
  },
  contact: {
    title:       'Contact Us | Tamilandroptaxi',
    description: 'Contact Tamilandroptaxi for booking assistance, route queries, or partnership enquiries. We are available 24/7 on call and WhatsApp.',
    keywords:    ['contact Tamilandroptaxi', 'taxi booking helpline Tamil Nadu'],
    path:        '/contact',
  },
  partner: {
    title:       'Partner With Us | Tamilandroptaxi',
    description: 'Are you a driver or vehicle owner in Tamil Nadu? Partner with Tamilandroptaxi and grow your earnings with consistent outstation bookings.',
    keywords:    ['taxi driver partner Tamil Nadu', 'cab owner partnership'],
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
    title:       `${city.name} Drop Taxi | One-Way Outstation Cab | Tamilandroptaxi`,
    description: `Book a one-way drop taxi from ${city.name}. Transparent per-km rates, no return charges, 24/7 availability. ${city.description}.`,
    keywords:    [
      `${city.name} drop taxi`,
      `${city.name} outstation cab`,
      `${city.name} one way taxi`,
      `taxi from ${city.name}`,
      `cab service ${city.name}`,
    ],
    openGraph: {
      title:       `${city.name} Drop Taxi | Tamilandroptaxi`,
      description: `Reliable one-way drop taxi from ${city.name} at transparent per-km rates. Book now.`,
      url:         `${SITE_URL}/taxi/${city.slug}`,
      siteName:    SITE_NAME,
      type:        'website',
    },
    twitter: {
      card:        'summary_large_image',
      title:       `${city.name} Drop Taxi | Tamilandroptaxi`,
      description: `One-way taxi from ${city.name}. Transparent fares, verified drivers, 24/7.`,
    },
    alternates: {
      canonical: `${SITE_URL}/taxi/${city.slug}`,
    },
  };
}

export const SITE_CONFIG = { SITE_NAME, SITE_URL, SITE_PHONE };
