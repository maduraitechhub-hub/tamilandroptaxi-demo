import Script from 'next/script';
import { site } from '../config/site';
import { PAGE_SEO } from '../lib/seo';
import { buildOrganizationSchema } from '../lib/schema';
import '../styles/globals.css';

export const metadata = {
  metadataBase: new URL(site.siteUrl),
  applicationName: site.siteName,
  title: {
    default: PAGE_SEO.home.title,
    template: `%s | ${site.siteName}`,
  },
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  authors: [{ name: site.siteName, url: site.siteUrl }],
  category: 'travel',
  referrer: 'origin-when-cross-origin',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  icons: {
    icon: [{ url: site.favicon, type: 'image/png' }],
    apple: [{ url: site.favicon, type: 'image/png' }],
  },
  openGraph: {
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    type: 'website',
    locale: 'en_IN',
    siteName: site.siteName,
    url: `${site.siteUrl}/`,
    images: [{ url: `${site.siteUrl}${site.ogImage}`, width: 1200, height: 630, alt: site.siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [`${site.siteUrl}${site.ogImage}`],
  },
  other: {
    'geo.region': site.stateCode,
    'geo.placename': `${site.stateName}, ${site.country}`,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      },
    }
    : {}),
  ...(site.gscVerification ? { verification: { google: site.gscVerification } } : {}),
};

export const viewport = {
  themeColor: site.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={site.favicon} type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Google Ads */}
        {site.googleAdsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${site.googleAdsId}');
                ${site.ga4Id ? `gtag('config', '${site.ga4Id}');` : ''}
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        {/* Global Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
