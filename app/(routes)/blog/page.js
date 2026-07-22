import Link from 'next/link';
import Image from 'next/image';
import { buildBreadcrumbSchema } from '../../../lib/schema';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../../config/blogPosts';
import { site } from '../../../config/site';
import Navbar from '../../../components/ui/Navbar';
import Footer from '../../../components/ui/Footer';
import StickyLeadBar from '../../../components/ui/StickyLeadBar';

const SITE_URL = 'https://www.tamilnadudroptaxi.com';

export const metadata = {
  title: 'Blog | TamilDropTaxi — Travel Tips, Routes & Madurai Guides',
  description:
    'Read travel tips, route guides, fare breakdowns, and Madurai sightseeing guides from TamilDropTaxi — Tamil Nadu\'s trusted outstation taxi service.',
  keywords: [
    'Tamil Nadu taxi blog',
    'Madurai travel guide',
    'taxi fare guide Tamil Nadu',
    'outstation cab tips',
  ],
  openGraph: {
    title: 'Blog | TamilDropTaxi',
    description: 'Travel tips, route guides, and Madurai sightseeing guides from TamilDropTaxi.',
    url: `${SITE_URL}/blog`,
    siteName: site.siteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | TamilDropTaxi',
    description: 'Travel tips, route guides, and Madurai sightseeing guides from TamilDropTaxi.',
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogListingPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Navbar activePage="blog" />
      <StickyLeadBar />

      <div className="page-hero">
        <h1 className="page-hero-title">Travel Tips &amp; Guides</h1>
        <p className="page-hero-sub">
          Route guides, fare breakdowns, and Madurai sightseeing tips from the TamilDropTaxi team.
        </p>
      </div>

      {/* Category filter (static — links use query-less anchor styling) */}
      <section className="section section--book" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="blog-category-pills">
            {BLOG_CATEGORIES.map((cat) => (
              <span key={cat} className={`blog-category-pill${cat === 'All' ? ' active' : ''}`}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="section">
          <div className="container">
            <Link href={`/blog/${featured.slug}`} className="blog-featured-card">
              <div className="blog-featured-img">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  width={700}
                  height={420}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="blog-featured-body">
                <span className="blog-category-tag">{featured.category}</span>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <div className="blog-meta">
                  <span>{formatDate(featured.date)}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog grid */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-label">Latest Articles</div>
          <h2 className="section-title">More From Our <span>Blog</span></h2>

          <div className="blog-grid">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={400}
                    height={240}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="blog-card-body">
                  <span className="blog-category-tag">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--teal" aria-label="Book a taxi">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title section-title--light">Ready to Plan Your <span>Trip?</span></h2>
          <p className="section-sub section-sub--light">
            Get an instant fare estimate and book your taxi in minutes.
          </p>
          <div className="cta-row">
            <Link href="/book" className="btn-hero-primary">Book Online →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
