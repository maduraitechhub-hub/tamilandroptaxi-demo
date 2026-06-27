import Image from 'next/image';
import { buildMetadata, PAGE_SEO } from '../../../lib/seo';
import { buildBreadcrumbSchema } from '../../../lib/schema';
import { site } from '../../../config/site';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import StickyLeadBar from '../../../components/ui/StickyLeadBar';

export const metadata = buildMetadata(PAGE_SEO.about);

const values = [
  'Safety First Approach', 'Transparent Pricing', 'Verified Drivers Only',
  '24/7 Customer Support', 'GPS Tracked Rides', 'No Hidden Charges',
  'Pan Tamil Nadu Coverage', 'Comfortable Fleet',
];

const stats = [
  { value: '500+', label: 'Verified Drivers' },
  { value: '38', label: 'Districts Covered' },
  { value: '50K+', label: 'Happy Customers' },
  { value: '10+', label: 'Years of Service' },
];

export default function AboutPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar activePage="about" />
      <StickyLeadBar />

      <div className="page-hero">
        <div className="page-hero-badge">🏆 Since {site.established}</div>
        <h1 className="page-hero-title">About Us</h1>
        <p className="page-hero-sub">
          Tamil Nadu's most trusted taxi service since {site.established}, delivering safe and reliable rides.
          <br />Professional drivers and quality service for every journey.
        </p>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <Image
                src="/images/aboutimg.png"
                alt={`About ${site.siteName}`}
                width={500}
                height={400}
                className="about-img"
                priority
              />
              <div className="about-year-badge">
                <div className="about-year">10+</div>
                <div className="about-year-label">Years of Service</div>
              </div>
            </div>

            <div>
              <div className="section-label">Our Story</div>
              <h2 className="about-title">Your trusted travel connection across Tamil Nadu.</h2>
              <p className="about-desc">
                Founded in {site.established} in Madurai, {site.siteName} started with a simple mission: to make
                safe, reliable intercity travel accessible to everyone across Tamil Nadu. What began as a small
                fleet of 5 cars has grown into a trusted network of 500+ verified drivers covering all 38 districts.
              </p>
              <p className="about-desc">
                We understand the unique needs of Tamil Nadu travelers — from pilgrimage trips to Madurai and
                Rameswaram, to corporate travel between Chennai and Coimbatore. Our local knowledge, combined
                with professional service standards, makes us the preferred choice for millions.
              </p>

              <div className="about-values">
                {values.map((v) => (
                  <div key={v} className="about-value">
                    <div className="about-value-dot" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--teal">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item stat-item--light">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
