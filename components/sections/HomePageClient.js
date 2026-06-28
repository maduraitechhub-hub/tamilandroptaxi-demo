'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { site } from '../../config/site';
import { CITIES, POPULAR_ROUTES, GLOBAL_FAQS } from '../../config/locations';
import { trackCallClick, trackWhatsAppClick } from '../../lib/analytics';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import StickyLeadBar from '../ui/StickyLeadBar';

const BookingForm = dynamic(() => import('../forms/BookingForm'), {
  loading: () => <div className="form-skeleton">Loading booking form…</div>,
  ssr: false,
});

const SERVICES = [
  { icon: '/images/airport.png', title: 'Airport Pickup & Drop', desc: 'On-time airport transfers with professional drivers for a smooth, stress-free journey.' },
  { icon: '/images/outstation.png', title: 'Outstation Taxi', desc: 'Travel beyond city limits with comfortable and affordable outstation cab services.' },
  { icon: '/images/oneway.png', title: 'One Way Drop', desc: 'Book convenient one-way rides without paying for a return trip.' },
  { icon: '/images/roundtrip.png', title: 'Round Trip', desc: 'Flexible round-trip travel with reliable service for business, family, or leisure.' },
];

const FEATURES = [
  { icon: '/images/verified-driver.png', title: 'Verified Drivers', desc: 'All our drivers are fully licensed and background verified.' },
  { icon: '/images/safe-travel.png', title: 'Safe Travel', desc: 'GPS-tracked rides for your complete safety.' },
  { icon: '/images/affordable-price.png', title: 'Affordable Price', desc: 'Best rates with no hidden charges — transparent pricing.' },
  { icon: '/images/tamilnadu-wide.png', title: 'Tamil Nadu Wide', desc: 'Covering all 38 districts across Tamil Nadu.' },
  { icon: '/images/support.png', title: '24/7 Support', desc: 'Round-the-clock customer care in Tamil & English.' },
];

const FLEET = [
  { name: 'Swift Dzire', badge: 'Economy', seats: '4 Seater', ac: 'AC', luggage: '2 Bags', price: '₹15/km', image: '/images/dzire.png' },
  { name: 'Toyota Etios', badge: 'Economy', seats: '4 Seater', ac: 'AC', luggage: '2 Bags', price: '₹16/km', image: '/images/etios.png' },
  { name: 'Toyota Innova', badge: 'Popular', seats: '6 Seater', ac: 'AC', luggage: '4 Bags', price: '₹20/km', image: '/images/innova.png' },
  { name: 'Innova Crysta', badge: 'Premium', seats: '7 Seater', ac: 'AC', luggage: '5 Bags', price: '₹23/km', image: '/images/crysta.webp' },
];

const TESTIMONIALS = [
  { name: 'Rajan Kumar', city: 'Madurai', rating: 5, text: 'Excellent service! The driver was punctual and professional. Great experience on my Madurai to Chennai trip.', image: '/images/user-1.png' },
  { name: 'Priya Srinivasan', city: 'Coimbatore', rating: 5, text: 'Best drop taxi in Tamil Nadu! Very affordable and the driver was very polite. Highly recommended.', image: '/images/user-2.png' },
  { name: 'Senthil Murugan', city: 'Trichy', rating: 5, text: 'Used the service 5 times already. Always on time, always clean cars. Will continue using it.', image: '/images/user-3.png' },
];

const CITIES_LEFT = ['Coimbatore Drop Taxi','Chennai Drop Taxi','Trichy Drop Taxi','Namakkal Drop Taxi','Pollachi Drop Taxi','Vellore Drop Taxi','Tirunelveli Drop Taxi','Mettupalayam Drop Taxi','Villupuram Drop Taxi','Thoothukudi Drop Taxi','Nagercoil Drop Taxi','Thiruvannamalai Drop Taxi','Neyveli Drop Taxi','Kumbakonam Drop Taxi','Salem Drop Taxi'];
const CITIES_RIGHT = ['Tirupur Drop Taxi','Karur Drop Taxi','Madurai Drop Taxi','Erode Drop Taxi','Hosur Drop Taxi','Thanjavur Drop Taxi','Dindigul Drop Taxi','Krishnagiri Drop Taxi','Kanyakumari Drop Taxi','Kallakurichi Drop Taxi','Dharmapuri Drop Taxi','Karaikudi Drop Taxi','Rameshwaram Drop Taxi','Ramanathapuram Drop Taxi'];

function StatsBar() {
  const stats = [
    { value: 50000, suffix: '+', label: 'Happy Riders' },
    { value: 500, suffix: '+', label: 'Verified Drivers' },
    { value: 38, suffix: '', label: 'Districts Covered' },
    { value: 4.8, suffix: '★', label: 'Average Rating' },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      let start = 0;
      const inc = stat.value / (2000 / 30);
      return setInterval(() => {
        start += inc;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start >= stat.value
            ? stat.value
            : stat.value % 1 !== 0 ? parseFloat(start.toFixed(1)) : Math.floor(start);
          return updated;
        });
        if (start >= stat.value) clearInterval(intervals[i]);
      }, 30);
    });
    return () => intervals.forEach(clearInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div key={s.label} className="stat-item">
            <div className="stat-num">
              {s.value >= 1000 ? counts[i].toLocaleString() : counts[i]}{s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePageClient() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Navbar activePage="home" />
      <StickyLeadBar />

      {/* ── HERO ──────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg">
          <Image src="/images/bannerbg.png" alt="" fill style={{ objectFit: 'cover' }} priority quality={85} />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">🏆 Tamil Nadu's #1 Drop Taxi Service</div>
            <h1 className="hero-title">
              Safe & Affordable
              <span className="hero-title-accent"> Drop Taxi</span>
              Across Tamil Nadu
            </h1>
            <p className="hero-sub">
              One-way drops, airport transfers & outstation cab service across all 38 districts.
              Verified drivers · No hidden charges · 24/7 support.
            </p>
            <div className="hero-actions">
              <a
                href={`tel:${site.phone}`}
                className="btn-hero-primary"
                onClick={() => trackCallClick('hero')}
                aria-label={`Call ${site.siteName}`}
              >
                📞 {site.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}?text=Hi, I need to book a taxi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
                onClick={() => trackWhatsAppClick('hero')}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="hero-right">
            <div className="hero-form-wrap">
              <div className="hero-form-title">Get Instant Fare Estimate</div>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────── */}
      {/* <StatsBar /> */}

      {/* ── SERVICES ──────────────────────────── */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-label">What We Offer</div>
          <h2 id="services-heading" className="section-title">Our Taxi <span>Services</span></h2>
          <p className="section-sub">
            From airport transfers to long-distance intercity trips — we've got every journey covered
            with professional drivers and transparent pricing.
          </p>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <Link key={s.title} href="/book" className="service-card">
                <div className="service-icon">
                  <Image src={s.icon} alt={s.title} width={1000} height={1000} />
                </div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────── */}
      <section className="section section--alt" aria-labelledby="features-heading">
        <div className="container">
          <div className="section-label">Why Choose Us</div>
          <h2 id="features-heading" className="section-title">Tamil Nadu's Most <span>Trusted</span> Taxi</h2>
          <p className="section-sub">
            Since {site.established}, we've been delivering safe and affordable cab service across Tamil Nadu.
          </p>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon-img">
                  <Image src={f.icon} alt={f.title} width={56} height={56} />
                </div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ──────────────────────────────── */}
      <section className="section" aria-labelledby="fleet-heading">
        <div className="container">
          <div className="section-label">Our Fleet</div>
          <h2 id="fleet-heading" className="section-title">Choose Your <span>Vehicle</span></h2>
          <p className="section-sub">All vehicles are AC, GPS-equipped, and maintained to highest standards.</p>
          <div className="fleet-grid">
            {FLEET.map((car) => (
              <div key={car.name} className="fleet-card">
                {car.badge === 'Popular' && <div className="fleet-badge fleet-badge--popular">Popular</div>}
                {car.badge === 'Premium' && <div className="fleet-badge fleet-badge--premium">Premium</div>}
                <div className="fleet-img">
                  <Image src={car.image} alt={car.name} width={200} height={120} style={{ objectFit: 'contain' }} />
                </div>
                <div className="fleet-name">{car.name}</div>
                <div className="fleet-specs">
                  <span>🪑 {car.seats}</span>
                  <span>❄️ {car.ac}</span>
                  <span>🧳 {car.luggage}</span>
                </div>
                <div className="fleet-price">{car.price}</div>
                <Link href="/book" className="btn-fleet">Book This Car</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ──────────────────────── */}
      <section className="section section--alt" aria-labelledby="routes-heading">
        <div className="container">
          <div className="section-label">Popular Routes</div>
          <h2 id="routes-heading" className="section-title">Frequently Booked <span>Routes</span></h2>
          <p className="section-sub">
            Transparent starting fares for the most popular drop taxi routes. Actual fare depends on vehicle type.
          </p>
          <div className="routes-grid">
            {POPULAR_ROUTES.map((r) => (
              <Link key={`${r.from}-${r.to}`} href="/book" className="route-card">
                <div className="route-img">
                  <Image src={r.image} alt={`${r.from} to ${r.to} taxi`} width={300} height={180} style={{ objectFit: 'cover' }} />
                </div>
                <div className="route-body">
                  <div className="route-cities">{r.from} → {r.to}</div>
                  <div className="route-km">{r.km}</div>
                  <div className="route-price-row">
                    <div className="route-est">Starting fare</div>
                    <div className="route-fare">{r.price}</div>
                  </div>
                  <span className="route-book-cta">Book Now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITIES WE SERVE (SEO) ──────────────── */}
      {/* <section className="section" aria-labelledby="cities-heading">
        <div className="container">
          <div className="section-label">Coverage</div>
          <h2 id="cities-heading" className="section-title">Drop Taxi in <span>Every Corner</span> of Tamil Nadu</h2>
          <div className="cities-cols">
            <ul className="cities-list">
              {CITIES_LEFT.map((c) => <li key={c}><Link href="/cities">📍 {c}</Link></li>)}
            </ul>
            <ul className="cities-list">
              {CITIES_RIGHT.map((c) => <li key={c}><Link href="/cities">📍 {c}</Link></li>)}
            </ul>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/cities" className="btn-outline">View All Cities →</Link>
          </div>
        </div>
      </section> */}

      {/* ── FEATURED CITIES ──────────────────── */}
      <section className="section section--alt" aria-labelledby="fcities-heading">
        <div className="container">
          <div className="section-label">Top Destinations</div>
          <h2 id="fcities-heading" className="section-title">Major City <span>Taxi Services</span></h2>
          <div className="cities-grid">
            {CITIES.slice(0, 5).map((city) => (
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

      {/* ── TESTIMONIALS ──────────────────────── */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-label">Customer Reviews</div>
          <h2 id="testimonials-heading" className="section-title">What Our <span>Riders Say</span></h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <Image src={t.image} alt={t.name} width={44} height={44} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-city">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="faq-heading">
        <div className="container container--narrow">
          <div className="section-label">FAQs</div>
          <h2 id="faq-heading" className="section-title">Frequently Asked <span>Questions</span></h2>
          <div className="faq-list">
            {GLOBAL_FAQS.map((faq, i) => (
              <details
                key={i}
                className="faq-item"
                open={openFaq === i}
                onToggle={(e) => setOpenFaq(e.target.open ? i : null)}
              >
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────── */}
      <section className="section section--teal" aria-label="Book a taxi">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title section-title--light">Ready to Book Your <span>Taxi?</span></h2>
          <p className="section-sub section-sub--light">
            Call or WhatsApp us now for instant confirmation. Available 24/7 across Tamil Nadu.
          </p>
          <div className="cta-row">
            <a
              href={`tel:${site.phone}`}
              className="btn-hero-primary"
              onClick={() => trackCallClick('bottom_cta')}
            >
              📞 Call {site.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=Hi, I need to book a taxi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
              onClick={() => trackWhatsAppClick('bottom_cta')}
            >
              💬 WhatsApp Now
            </a>
            <Link href="/book" className="btn-outline btn-outline--light">
              Book Online →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
