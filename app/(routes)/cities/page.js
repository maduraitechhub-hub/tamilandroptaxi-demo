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
        <h1 className="page-hero-title">Top Cities We Serve Across Tamil Nadu</h1>
        <p className="page-hero-sub">
         From the Temple City of Madurai to the Marina shores of Chennai, Tamilan Drop Taxi serves all major cities across <br/> Tamil Nadu with on-time pickups, verified professional drivers, and completely hassle-free one-way drop taxi rides. 
        </p>
      </div>

      {/* Featured Cities */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
           Trusted Tamilan Drop Taxi Services in All 38 Districts
          </h2>
          <p className="">
           Tamilan Drop Taxi provides safe, affordable, and reliable one-way drop taxi, outstation taxi, and airport taxi services across all 38 districts of Tamil Nadu. Whether you're travelling to Chennai, Madurai, Coimbatore, Trichy, Salem, Tirunelveli, or any other city, enjoy professional drivers, transparent pricing, and on-time pickups for a hassle-free journey.

          </p>
        </div>
      </section>

      {/* All Cities Grid */}
      <div className="container">
        <div className="cities-wrapper">

          {ALL_CITIES_LIST.map((city) => (
            <Link href="/book" className="city-card" key={city}>
              <span className="city-icon">
                <Image
                  src="/images/location-pin.png"
                  alt={city}
                  width={22}
                  height={22}
                />
              </span>

              <span className="city-content">
                <h3>{city}</h3>
                <span>Book Taxi →</span>
              </span>
            </Link>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
}
