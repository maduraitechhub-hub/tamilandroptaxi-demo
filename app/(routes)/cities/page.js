import { buildMetadata, PAGE_SEO } from '../../../lib/seo';
import { buildBreadcrumbSchema } from '../../../lib/schema';
import { CITIES, ALL_CITIES_LIST } from '../../../config/locations';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import StickyLeadBar from '../../../components/ui/StickyLeadBar';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = buildMetadata(PAGE_SEO.cities);

export default function CitiesPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
  ]);

  const half = Math.ceil(ALL_CITIES_LIST.length / 2);
  const citiesLeft = ALL_CITIES_LIST.slice(0, half);
  const citiesRight = ALL_CITIES_LIST.slice(half);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar activePage="cities" />
      <StickyLeadBar />

      <div className="page-hero">
        <div className="page-hero-badge">🗺️ Coverage</div>
        <h1 className="page-hero-title">Cities We Serve</h1>
        <p className="page-hero-sub">
          Reliable taxi service across all major cities in Tamil Nadu.
          <br />Timely pickups, professional drivers, and hassle-free rides everywhere.
        </p>
      </div>

      {/* Featured Cities */}
      <section className="section">
        <div className="container">
          <div className="section-label">Major Hubs</div>
          <h2 className="section-title">Taxi Service Across <span>Tamil Nadu</span></h2>
          <p className="section-sub">
            From major metro cities to smaller towns, we provide reliable taxi services
            with the same trusted quality and safe travel experience.
          </p>

          <div className="cities-grid">
            {CITIES.map((city) => (
              <Link key={city.slug} href={`/taxi/${city.slug}`} className="city-card">
                <div className="city-img">
                  <Image src={city.image} alt={`${city.name} Drop Taxi`} width={120} height={120} />
                </div>
                <div className="city-body">
                  <div className="city-name">{city.name}</div>
                  <div className="city-info">{city.description}</div>
                  <div className="city-routes">🗺️ {city.routes} routes</div>
                  <span className="btn-city">Book Taxi Here →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Cities Grid */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-label">All Districts</div>
          <h2 className="section-title">38 Districts, One <span>Trusted Service</span></h2>
          <div className="all-cities-grid">
            <ul className="cities-list">
              {citiesLeft.map((c) => (
                <li key={c}>
                  <Link href="/book">
                    <span className="city-dot">📍</span> {c}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="cities-list">
              {citiesRight.map((c) => (
                <li key={c}>
                  <Link href="/book">
                    <span className="city-dot">📍</span> {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
