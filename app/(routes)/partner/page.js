import { buildMetadata, PAGE_SEO } from '../../../lib/seo';
import { buildBreadcrumbSchema } from '../../../lib/schema';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import StickyLeadBar from '../../../components/ui/StickyLeadBar';
import PartnerForm from '../../../components/forms/PartnerForm';

export const metadata = buildMetadata(PAGE_SEO.partner);

const benefits = [
  { icon: '💰', title: 'High Earnings', desc: 'Earn ₹40,000–₹80,000 per month with our steady ride flow.' },
  { icon: '📅', title: 'Flexible Hours', desc: 'Work on your own schedule — no mandatory shifts.' },
  { icon: '🛡️', title: 'Insurance Support', desc: 'Travel insurance and accident support for every trip.' },
  { icon: '📱', title: 'Easy App', desc: 'Simple driver app with ride notifications and earnings tracker.' },
  { icon: '🚀', title: 'Fast Onboarding', desc: 'Get started in under 48 hours after document verification.' },
  { icon: '🤝', title: 'Dedicated Support', desc: '24/7 driver support team for any queries or issues.' },
];

export default function PartnerPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Partner With Us', url: '/partner' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar activePage="partner" />
      <StickyLeadBar />

      {/* Partner Form */}
      <section className="section section--light">
        <div className="container">
          <PartnerForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
