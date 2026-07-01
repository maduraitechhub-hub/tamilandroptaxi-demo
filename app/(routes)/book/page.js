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
        <h1 className="page-hero-title">Book Your Tamilan Taxi Today – Fast, Safe & Affordable</h1>
        <p className="page-hero-sub">
         Get an instant fare estimate for your one-way taxi, outstation cab, or airport taxi. <br/> Tamilan Drop Taxi offers affordable rates, professional drivers, transparent pricing, and reliable taxi services across Tamil Nadu with no hidden charges or return fare
        </p>
      </div>

      <section className="section section--book">
        <div className="container">
          <div className='bookbg'>
          <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
