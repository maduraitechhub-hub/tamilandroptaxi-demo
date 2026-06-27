import { CITY_SLUGS } from '@/config/locations';

const SITE_URL = 'https://www.tamilandroptaxi.com';

/** Static routes with SEO priority hints */
const staticRoutes = [
  { path: '/',             priority: 1.0,  changeFreq: 'weekly'  },
  { path: '/book',         priority: 0.9,  changeFreq: 'monthly' },
  { path: '/cities',       priority: 0.85, changeFreq: 'weekly'  },
  { path: '/about',        priority: 0.7,  changeFreq: 'monthly' },
  { path: '/contact',      priority: 0.7,  changeFreq: 'monthly' },
  { path: '/partner',      priority: 0.6,  changeFreq: 'monthly' },
  // Dedicated Madurai local + round trip landing page
  {
    path:       '/madurai-local-round-trip-taxi',
    priority:   0.87,
    changeFreq: 'weekly',
  },
];

export default function sitemap() {
  const staticEntries = staticRoutes.map(({ path, priority, changeFreq }) => ({
    url:              `${SITE_URL}${path}`,
    lastModified:     new Date(),
    changeFrequency:  changeFreq,
    priority,
  }));

  const cityEntries = CITY_SLUGS.map((slug) => ({
    url:              `${SITE_URL}/taxi/${slug}`,
    lastModified:     new Date(),
    changeFrequency:  'weekly',
    priority:         0.8,
  }));

  return [...staticEntries, ...cityEntries];
}
