import { site } from '../config/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: new URL(site.siteUrl).host,
  };
}
