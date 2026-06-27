import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CITIES, CITY_SLUGS, getCityBySlug } from '../../../../config/locations';
import { buildMetadata, buildCitySeo } from '../../../../lib/seo';
import { buildFaqSchema, buildBreadcrumbSchema, buildCitySchema } from '../../../../lib/schema';
import { site } from '../../../../config/site';
import Navbar from '../../../../components/ui/Navbar';
import Footer from '../../../../components/ui/Footer';
import StickyLeadBar from '../../../../components/ui/StickyLeadBar';
import BookingForm from '../../../../components/forms/BookingForm';

/** Pre-render all city pages at build time */
export async function generateStaticParams() {
  return CITY_SLUGS.map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  const seo = buildCitySeo(city);
  return buildMetadata(seo);
}

export default function CityPage({ params }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const seo = buildCitySeo(city);
  const faqSchema = buildFaqSchema(city.faqs);
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
    { name: `${city.name} Taxi`, url: `/taxi/${city.slug}` },
  ]);
  const citySchema = buildCitySchema(city);

  const otherCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <StickyLeadBar />

      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-badge">📍 {city.name}</div>
        <h1 className="page-hero-title">{city.name} Drop Taxi</h1>
        <p className="page-hero-sub">
          Book a reliable drop taxi in {city.name}. One-way, round trip, and airport transfers
          <br />with verified drivers. Starting from ₹15/km. Available 24/7.
        </p>
        <div className="hero-cta-row">
          <a href={`tel:${site.phone}`} className="btn-hero-primary">
            📞 Call Now
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=Hi, I need a taxi from ${city.name}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-secondary"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Booking Form */}
      <section className="section section--book">
        <div className="container container--narrow">
          <div className="section-label">Quick Booking</div>
          <h2 className="section-title">{city.name} Taxi Booking</h2>
          <BookingForm />
        </div>
      </section>

      {/* About This City */}
      <section className="section">
        <div className="container">
          <div className="city-page-grid">
            <div className="city-page-info">
              <div className="section-label">About {city.name}</div>
              <h2 className="section-title">{city.name} <span>Cab Service</span></h2>
              <p className="about-desc">{city.longDescription}</p>

              {/* Top Routes */}
              <div className="route-table-wrap">
                <h3 className="route-table-title">Popular Routes from {city.name}</h3>
                <table className="route-table">
                  <thead>
                    <tr>
                      <th>Destination</th>
                      <th>Distance</th>
                      <th>Starting Price</th>
                      <th>Book</th>
                    </tr>
                  </thead>
                  <tbody>
                    {city.topRoutes.map((r) => (
                      <tr key={r.to}>
                        <td>{city.name} → {r.to}</td>
                        <td>{r.km}</td>
                        <td className="route-price">{r.price}</td>
                        <td>
                          <Link href="/book" className="route-book-btn">Book</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* City Image + CTAs */}
            <div className="city-page-aside">
              <div className="city-page-img-wrap">
                <Image
                  src={city.image}
                  alt={`${city.name} Drop Taxi`}
                  width={400}
                  height={300}
                  className="city-page-img"
                />
              </div>
              <div className="city-page-cta-box">
                <div className="cta-box-title">Book {city.name} Taxi Now</div>
                <p className="cta-box-sub">Call or WhatsApp for instant confirmation</p>
                <a href={`tel:${site.phone}`} className="btn-cta-full btn-cta-call">
                  📞 {site.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=Hi, I need a taxi from ${city.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-full btn-cta-wa"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <div className="section-label">FAQs</div>
          <h2 className="section-title">{city.name} Taxi <span>FAQs</span></h2>
          <div className="faq-list">
            {city.faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="section">
        <div className="container">
          <div className="section-label">Explore More</div>
          <h2 className="section-title">Other Cities We <span>Serve</span></h2>
          <div className="cities-grid cities-grid--sm">
            {otherCities.map((c) => (
              <Link key={c.slug} href={`/taxi/${c.slug}`} className="city-card">
                <div className="city-img">
                  <Image src={c.image} alt={`${c.name} Drop Taxi`} width={100} height={100} />
                </div>
                <div className="city-body">
                  <div className="city-name">{c.name}</div>
                  <div className="city-info">{c.description}</div>
                  <span className="btn-city">Book Taxi →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
