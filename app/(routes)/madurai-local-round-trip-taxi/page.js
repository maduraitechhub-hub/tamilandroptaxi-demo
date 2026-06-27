/**
 * /madurai-local-round-trip-taxi — Dual-intent SEO landing page
 *
 * Targets:
 *   • "Madurai local trip taxi" / "Madurai local sightseeing cab"
 *   • "Madurai round trip taxi" / "Madurai to Rameswaram round trip taxi"
 *
 * Uses existing shared components — no new component files needed.
 */

import { buildMetadata }                    from '@/lib/seo';
import { buildFaqSchema, buildBreadcrumbSchema, buildServiceSchema } from '@/lib/schema';
import {
  MADURAI_LOCAL_PACKAGES,
  MADURAI_SIGHTSEEING_SPOTS,
  MADURAI_ROUND_TRIP_ROUTES,
  MADURAI_LOCAL_ROUNDTRIP_FAQS,
}                                            from '@/config/locations';

import Navbar         from '@/components/ui/Navbar';
import Footer         from '@/components/ui/Footer';
import StickyLeadBar  from '@/components/ui/StickyLeadBar';
import BookingForm    from '@/components/forms/BookingForm';

/* ── Static metadata ─────────────────────────────────────── */
export const metadata = buildMetadata('maduraiLocalRoundTrip');

/* ── JSON-LD schema ──────────────────────────────────────── */
const faqSchema         = buildFaqSchema(MADURAI_LOCAL_ROUNDTRIP_FAQS);
const breadcrumbSchema  = buildBreadcrumbSchema([
  { name: 'Home',                              url: 'https://www.tamilandroptaxi.com/' },
  { name: 'Madurai Local & Round Trip Taxi',   url: 'https://www.tamilandroptaxi.com/madurai-local-round-trip-taxi' },
]);
const localServiceSchema = buildServiceSchema({
  name:        'Madurai Local Sightseeing Taxi',
  description: 'Hourly local taxi packages for Madurai sightseeing — Meenakshi Temple, Thirumalai Nayakkar Mahal & more. Starting ₹700 for 2 Hours / 20 KM.',
  areaServed:  'Madurai',
  phone:       '+91-9751500800',
  url:         'https://www.tamilandroptaxi.com/madurai-local-round-trip-taxi',
});
const roundTripServiceSchema = buildServiceSchema({
  name:        'Madurai Outstation Round Trip Taxi',
  description: 'Round trip cab from Madurai to Rameswaram, Kodaikanal, Kanyakumari, Munnar & more. Sedan starting ₹5,440 for Madurai–Rameswaram round trip.',
  areaServed:  'Madurai',
  phone:       '+91-9751500800',
  url:         'https://www.tamilandroptaxi.com/madurai-local-round-trip-taxi',
});

/* ── Page component ─────────────────────────────────────── */
export default function MaduraiLocalRoundTripPage() {
  return (
    <>
      {/* JSON-LD blocks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roundTripServiceSchema) }}
      />

      <Navbar />
      <StickyLeadBar />

      <main>
        {/* ── HERO ───────────────────────────────────────── */}
        <section className="page-hero madurai-hero">
          <div className="container">
            <div className="page-hero-content">
              <span className="page-hero-badge">Madurai Local &amp; Round Trip Taxi</span>
              <h1 className="page-hero-title">
                Madurai Local Sightseeing &amp;<br />
                <span className="text-gold">Round Trip Taxi Service</span>
              </h1>
              <p className="page-hero-subtitle">
                Explore Madurai&apos;s temples and landmarks at your own pace with our
                hourly local packages — or book a hassle-free round trip cab to
                Rameswaram, Kodaikanal, Kanyakumari and beyond.
                Transparent fares. Verified drivers. 24/7 availability.
              </p>
              <div className="page-hero-meta">
                <span className="hero-meta-chip">⏱ Packages from 2 Hrs</span>
                <span className="hero-meta-chip">📍 Pickup Anywhere in Madurai</span>
                <span className="hero-meta-chip">💰 Sedan from ₹700</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOOKING FORM ───────────────────────────────── */}
        <section className="section-booking-embed bg-light-navy">
          <div className="container">
            <div className="section-header-center">
              <h2 className="section-title">Get Your Instant Fare Estimate</h2>
              <p className="section-subtitle">
                Choose <strong>Rental</strong> for a local Madurai sightseeing package
                or <strong>Round Trip</strong> for an outstation return journey.
              </p>
            </div>
            <div className="booking-form-wrap">
              <BookingForm defaultCity="Madurai" />
            </div>
          </div>
        </section>

        {/* ── LOCAL SIGHTSEEING PACKAGES ─────────────────── */}
        <section className="section-packages section-pad">
          <div className="container">
            <div className="section-header-center">
              <span className="section-eyebrow">Hourly Packages</span>
              <h2 className="section-title">Madurai Local Trip — Rental Packages</h2>
              <p className="section-subtitle">
                All packages include a verified driver and are billed from your Madurai
                pickup point. Extra kilometres beyond the package limit are charged at
                ₹15/km.
              </p>
            </div>

            <div className="packages-grid">
              {MADURAI_LOCAL_PACKAGES.map((pkg) => (
                <div
                  key={pkg.label}
                  className={`package-card${pkg.popular ? ' package-card--popular' : ''}`}
                >
                  {pkg.popular && (
                    <div className="package-popular-badge">Most Popular</div>
                  )}
                  <div className="package-label">{pkg.label}</div>
                  <div className="package-price">{pkg.price}</div>
                  <div className="package-vehicle">Sedan (Swift Dzire / Etios)</div>
                  <p className="package-best-for">{pkg.bestFor}</p>
                  <a href="tel:+919751500800" className="btn btn-primary btn-block">
                    Book This Package
                  </a>
                </div>
              ))}
            </div>

            {/* Sightseeing spots */}
            <div className="spots-wrap">
              <h3 className="spots-heading">Popular Madurai Sightseeing Spots We Cover</h3>
              <ul className="spots-list">
                {MADURAI_SIGHTSEEING_SPOTS.map((spot) => (
                  <li key={spot} className="spots-item">
                    <span className="spots-dot" aria-hidden="true" />
                    {spot}
                  </li>
                ))}
              </ul>
              <p className="spots-note">
                Your driver is familiar with all Madurai sightseeing routes.
                Customise your stop list when you call or WhatsApp to book.
              </p>
            </div>
          </div>
        </section>

        {/* ── ROUND TRIP ROUTES ──────────────────────────── */}
        <section className="section-rt-routes section-pad bg-navy-light">
          <div className="container">
            <div className="section-header-center">
              <span className="section-eyebrow">Outstation Round Trip</span>
              <h2 className="section-title">Madurai Round Trip Taxi Fares</h2>
              <p className="section-subtitle">
                All fares are <strong>starting prices</strong> for a Sedan with driver
                allowance included. For SUV / Innova rates, use the booking form above.
                Toll and state permit charges are extra.
              </p>
            </div>

            <div className="rt-table-wrap">
              <table className="rt-table">
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>One-Way Distance</th>
                    <th>Round Trip Fare (Sedan)</th>
                    <th>Book</th>
                  </tr>
                </thead>
                <tbody>
                  {MADURAI_ROUND_TRIP_ROUTES.map((r) => (
                    <tr key={r.to}>
                      <td className="rt-dest">Madurai → {r.to}</td>
                      <td>{r.km}</td>
                      <td className="rt-price">Starting {r.price}</td>
                      <td>
                        <a
                          href="tel:+919751500800"
                          className="btn btn-sm btn-outline-primary"
                          aria-label={`Book Madurai to ${r.to} round trip taxi`}
                        >
                          Book Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="rt-disclaimer">
              * Fares calculated as (one-way km × 2) × ₹15/km + ₹400 driver allowance.
              Multi-day trips attract an additional ₹400 driver allowance per extra day.
              Final fare confirmed at booking.
            </p>
          </div>
        </section>

        {/* ── WHY CHOOSE US ──────────────────────────────── */}
        <section className="section-why section-pad">
          <div className="container">
            <div className="section-header-center">
              <h2 className="section-title">Why Choose Tamilandroptaxi in Madurai?</h2>
            </div>
            <div className="why-grid">
              {[
                { icon: '✅', title: 'Verified, Local Drivers', desc: 'Our Madurai drivers know every temple lane and sightseeing route — background-checked and licensed.' },
                { icon: '💰', title: 'No Hidden Charges',       desc: 'The fare you see on the estimate is what you pay. Toll and state permit are itemised separately, never hidden.' },
                { icon: '📞', title: '24/7 Booking Support',    desc: 'Call or WhatsApp anytime — early morning temple visits, late-night train connections, we\'ve got you.' },
                { icon: '🚗', title: 'Well-Maintained Fleet',   desc: 'Air-conditioned, GPS-tracked Sedans and SUVs — serviced regularly so your journey stays comfortable.' },
                { icon: '🔄', title: 'Flexible Round Trips',    desc: 'Plan a day-trip to Rameswaram or a weekend getaway to Kodaikanal — we accommodate your schedule.' },
                { icon: '🗺️', title: 'Custom Sightseeing Routes', desc: 'Tell us which Madurai spots you want to visit and we\'ll plan the most efficient route for your package hours.' },
              ].map((item) => (
                <div key={item.title} className="why-card">
                  <div className="why-icon" aria-hidden="true">{item.icon}</div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────── */}
        <section className="section-faq section-pad bg-light-navy">
          <div className="container">
            <div className="section-header-center">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Madurai local sightseeing taxi &amp; round trip outstation cab — common queries answered.
              </p>
            </div>

            <div className="faq-list">
              {MADURAI_LOCAL_ROUNDTRIP_FAQS.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{faq.q}</summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────── */}
        <section className="section-final-cta section-pad">
          <div className="container">
            <div className="final-cta-card">
              <h2 className="final-cta-title">Ready to Explore Madurai?</h2>
              <p className="final-cta-sub">
                Book a local sightseeing package or outstation round trip in minutes.
                Call, WhatsApp, or use the booking form — we confirm within minutes.
              </p>
              <div className="final-cta-actions">
                <a href="tel:+919751500800" className="btn btn-gold btn-lg">
                  📞 Call to Book
                </a>
                <a
                  href="https://wa.me/919751500800?text=Hi%2C%20I%20want%20to%20book%20a%20Madurai%20local%20or%20round%20trip%20taxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
