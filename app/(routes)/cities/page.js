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
        <h1 className="page-hero-title">Cities We Serve</h1>
        <p className="page-hero-sub">
          Reliable taxi service across all major cities in Tamil Nadu.
          <br />Timely pickups, professional drivers, and hassle-free rides everywhere.
        </p>
      </div>

      {/* Featured Cities */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            38 Districts, One <span>Trusted Service</span>
          </h2>
          <p className="">
            From major metro cities to smaller towns, we provide reliable taxi services
            with the same trusted quality and safe travel experience.
          </p>
        </div>
      </section>

      {/* All Cities Grid */}
      <div className="container">
        <div className="cities-wrapper">

          {ALL_CITIES_LIST.map((city) => (
            <Link href="/book" className="city-card" key={city}>
              <div className="city-icon">
                <Image
                  src="/images/location-pin.png"
                  alt={city}
                  width={22}
                  height={22}
                />
              </div>

              <div className="city-content">
                <h3>{city}</h3>
                <span>Book Taxi →</span>
              </div>
            </Link>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
}
