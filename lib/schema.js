import { site } from '../config/site';

/** LocalBusiness + TaxiService schema for root layout */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TaxiService', 'LocalBusiness'],
    '@id': `${site.siteUrl}/#organization`,
    name: site.siteName,
    alternateName: ['tamilandroptaxi', 'tamilandroptaxi'],
    description: site.siteDescription,
    url: site.siteUrl,
    logo: `${site.siteUrl}${site.logo}`,
    image: `${site.siteUrl}${site.ogImage}`,
    telephone: site.phone,
    email: site.email,
    foundingDate: site.established,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: site.stateName,
      containedInPlace: { '@type': 'Country', name: site.country },
    },
    serviceType: ['Drop taxi', 'Outstation cab', 'Airport transfer', 'One way taxi', 'Round trip cab'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.addressLocality,
      addressRegion: site.stateName,
      postalCode: site.postalCode || undefined,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.latitude,
      longitude: site.longitude,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      contactType: 'customer service',
      availableLanguage: ['Tamil', 'English'],
      hoursAvailable: 'Mo-Su 00:00-23:59',
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
    ].filter(Boolean),
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card',
  };
}

/** FAQ schema */
export function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/** Breadcrumb schema */
export function buildBreadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url ? `${site.siteUrl}${c.url}` : undefined,
    })),
  };
}

/** Service schema for individual service types */
export function buildServiceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${site.siteUrl}${url}`,
    provider: { '@id': `${site.siteUrl}/#organization` },
    areaServed: { '@type': 'AdministrativeArea', name: site.stateName },
    serviceType: 'TaxiService',
  };
}

/** City page LocalBusiness schema */
export function buildCitySchema(city) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TaxiService', 'LocalBusiness'],
    name: `${site.siteName} – ${city.name}`,
    description: city.longDescription,
    url: `${site.siteUrl}/taxi/${city.slug}`,
    telephone: site.phone,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: site.stateName },
    },
    parentOrganization: { '@id': `${site.siteUrl}/#organization` },
  };
}
