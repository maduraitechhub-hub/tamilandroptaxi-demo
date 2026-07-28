import Script from 'next/script';
import { Nunito, Raleway } from 'next/font/google';
import { site } from '../config/site';
import { PAGE_SEO } from '../lib/seo';
import { buildOrganizationSchema } from '../lib/schema';
import '../styles/globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
  display: 'swap',
});

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
    <html lang="en" className={`${nunito.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href={site.favicon} type="image/png" />

        {/* Google Tag Manager */}
        {site.gtmId && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${site.gtmId}');
            `}
          </Script>
        )}
        {/* End Google Tag Manager */}

        {/* Google Ads — loaded after page becomes interactive, not render-blocking */}
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
        {/* Google Tag Manager (noscript) */}
        {site.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}

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