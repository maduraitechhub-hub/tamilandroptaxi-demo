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
  return CITY_SLUGS.filter((slug) => slug !== 'madurai').map((slug) => ({ city: slug }));
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

  const routeFaqs = [
    { q: `How do I book a taxi from Madurai to ${city.name}?`, a: `Enter your pickup point, destination, travel date and vehicle in the online booking form. Get an indicative fare estimate, then submit your booking. You can also call or WhatsApp Tamilan Drop Taxi to confirm availability.` },
    { q: `Can I book a one-way drop taxi from Madurai to ${city.name}?`, a: `Yes. Select One Way in the booking form and enter your exact pickup and drop locations. The final fare and vehicle availability are confirmed by our team before the trip.` },
    { q: `How is the fare calculated for Madurai to ${city.name}?`, a: `The online estimate uses the driving route distance and selected vehicle rate. Toll charges, permits or other applicable trip costs are confirmed separately before booking.` },
    { q: `Can I book a round-trip taxi from Madurai to ${city.name}?`, a: `Yes. Select Round Trip, enter both cities and your travel dates, and request an estimate. Our team will confirm the final trip plan and availability.` },
  ];
  const faqSchema = buildFaqSchema(routeFaqs);
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cities', url: '/cities' },
    { name: `${city.name} Taxi`, url: `/taxi/${city.slug}` },
  ]);
  const citySchema = buildCitySchema(city);

  const otherCities = CITIES.filter((c) => c.slug !== city.slug && c.slug !== 'madurai').slice(0, 4);

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
        <h1 className="page-hero-title">Madurai to {city.name} Taxi</h1>
        <p className="page-hero-sub">
          Book a one-way outstation taxi from Madurai to {city.name}.
          <br />Get an online fare estimate, then confirm your long-distance trip by call or WhatsApp.
        </p>
        <div className="hero-cta-row">
          <a href={`tel:${site.phone}`} className="btn-hero-primary">
            📞 Call Now
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=Hi, I need a taxi from Madurai to ${city.name}.`}
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
          <h2 className="section-title">Book Madurai to {city.name} Taxi</h2>
          <BookingForm defaultDrop={`${city.name}, India`} />
        </div>
      </section>

      {/* About This City */}
      <section className="section">
        <div className="container">
          <div className="city-page-grid">
            <div className="city-page-info">
              <div className="section-label">About {city.name}</div>
              <h2 className="section-title">Madurai to {city.name} <span>Outstation Cab Service</span></h2>
              <p className="about-desc">Need a long-distance cab from Madurai to {city.name}? Tamilan Drop Taxi helps you request a one-way or round-trip outstation booking. Enter your exact pickup and drop points in the booking form to calculate a route-based estimate. Final fare and vehicle availability are confirmed by our team.</p>

              <div className="route-table-wrap">
                <h3 className="route-table-title">Plan Your Madurai to {city.name} Journey</h3>
                <p className="about-desc">
                  Share your exact pickup point, destination, travel date and preferred vehicle.
                  The online estimator uses the selected locations to calculate the route distance
                  and indicative fare. Tolls, permits and final availability are confirmed before booking.
                </p>
                <Link href={`/book?from=Madurai&to=${encodeURIComponent(city.name)}`} className="route-book-btn">
                  Get Madurai to {city.name} Fare Estimate
                </Link>
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
                <div className="cta-box-title">Book Madurai to {city.name} Taxi</div>
                <p className="cta-box-sub">Call or WhatsApp for instant confirmation</p>
                <a href={`tel:${site.phone}`} className="btn-cta-full btn-cta-call">
                  📞 {site.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=Hi, I need a taxi from Madurai to ${city.name}.`}
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
            {routeFaqs.map((faq, i) => (
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
