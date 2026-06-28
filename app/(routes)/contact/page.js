import { buildMetadata, PAGE_SEO } from '../../../lib/seo';
import { buildBreadcrumbSchema } from '../../../lib/schema';
import { site } from '../../../config/site';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import StickyLeadBar from '../../../components/ui/StickyLeadBar';
import ContactForm from '../../../components/forms/ContactForm';

export const metadata = buildMetadata(PAGE_SEO.contact);

export default function ContactPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  const contactItems = [
    { icon: '📞', title: 'Phone', value: site.phoneDisplay, href: `tel:${site.phone}` },
    { icon: '📱', title: 'WhatsApp', value: site.phoneDisplay, href: `https://wa.me/${site.whatsapp}` },
    { icon: '📧', title: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: '🕐', title: 'Hours', value: '24/7 — Always Available', href: null },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar activePage="contact" />
      <StickyLeadBar />

      <div className="page-hero">
        <h1 className="page-hero-title">Contact Us</h1>
        <p className="page-hero-sub">
          We're available 24/7 to help you with bookings, support, and travel assistance.
          <br />Call, WhatsApp, or drop us a message — we respond within 2 hours.
        </p>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info">
              <div className="section-label">Reach Us</div>
              <h2 className="contact-title">Always Here to Help</h2>
              <p className="contact-sub">
                Whether you have a booking question, need a custom quote, or require support during
                your journey — our team is always available.
              </p>

              <div className="contact-items">
                {contactItems.map((item) => (
                  <div key={item.title} className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-title">{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className="contact-item-value">{item.value}</a>
                      ) : (
                        <div className="contact-item-value">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${site.whatsapp}?text=Hi, I need a taxi booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-whatsapp--full"
              >
                💬 Chat on WhatsApp Now
              </a>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
