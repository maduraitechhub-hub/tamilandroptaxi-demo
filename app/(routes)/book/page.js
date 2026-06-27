import { buildMetadata, PAGE_SEO } from '../../../lib/seo';
import { buildBreadcrumbSchema, buildServiceSchema } from '../../../lib/schema';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import BookingForm from '../../../components/forms/BookingForm';
import StickyLeadBar from '../../../components/ui/StickyLeadBar';

export const metadata = buildMetadata(PAGE_SEO.book);

export default function BookPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Book Taxi', url: '/book' },
  ]);
  const serviceSchema = buildServiceSchema({
    name: 'Online Taxi Booking Tamil Nadu',
    description: 'Book one-way, round trip, or airport taxi online across Tamil Nadu with instant fare estimate.',
    url: '/book',
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar activePage="book" />
      <StickyLeadBar />

      <div className="page-hero">
        <div className="page-hero-badge">📋 Quick Booking</div>
        <h1 className="page-hero-title">Book Your Taxi</h1>
        <p className="page-hero-sub">
          Get an instant fare estimate and confirm your booking in under 2 minutes.
          <br />Professional drivers • Transparent pricing • No hidden charges.
        </p>
      </div>

      <section className="section section--book">
        <div className="container container--narrow">
          <BookingForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
