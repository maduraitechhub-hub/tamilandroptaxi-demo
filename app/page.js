import HomePageClient from '@/components/sections/HomePageClient';

/**
 * Home page — delegates everything to HomePageClient
 * (metadata is set globally in app/layout.js via PAGE_SEO.home)
 */
export default function HomePage() {
  return <HomePageClient />;
}
