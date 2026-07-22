import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  BLOG_SLUGS,
  getPostBySlug,
  getRelatedPosts,
} from '../../../../config/blogPosts';
import { buildBreadcrumbSchema } from '../../../../lib/schema';
import { site } from '../../../../config/site';
import Navbar from '../../../../components/ui/Navbar';
import Footer from '../../../../components/ui/Footer';
import StickyLeadBar from '../../../../components/ui/StickyLeadBar';

const SITE_URL = 'https://www.tamilnadudroptaxi.com';

/** Pre-render all blog post pages at build time */
export async function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | TamilDropTaxi Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: site.siteName,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${SITE_URL}${post.coverImage}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [`${SITE_URL}${post.coverImage}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

/** Build BlogPosting / Article JSON-LD schema */
function buildArticleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: site.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${site.logo}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

/** Render the block-based content array */
function BlogContent({ content }) {
  return (
    <div className="blog-post-content">
      {content.map((block, i) => {
        if (block.type === 'heading') {
          return <h2 key={i} className="blog-post-heading">{block.text}</h2>;
        }
        if (block.type === 'paragraph') {
          return <p key={i} className="blog-post-paragraph">{block.text}</p>;
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="blog-post-list">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = buildArticleSchema(post);
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Navbar activePage="blog" />
      <StickyLeadBar />

      {/* Hero */}
      <div className="page-hero blog-post-hero">
        <div className="container container--narrow">
          <h1 className="page-hero-title">{post.title}</h1>
          <div className="blog-meta blog-meta--light">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container--narrow">
          <div className="blog-post-cover">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={860}
              height={480}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container container--narrow">
          <BlogContent content={post.content} />

          {/* Inline CTA */}
          <div className="blog-post-cta">
            <div className="blog-post-cta-title">Ready to book your taxi?</div>
            <p className="blog-post-cta-sub">
              Get an instant fare estimate for your route — one-way, round trip, or local packages.
            </p>
            <div className="blog-post-cta-actions">
              <Link href="/book" className="btn-hero-primary">Get Fare Estimate →</Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=Hi, I read your blog and want to book a taxi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-label">Keep Reading</div>
            <h2 className="section-title">Related <span>Articles</span></h2>
            <div className="blog-grid">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="blog-card">
                  <div className="blog-card-img">
                    <Image
                      src={rp.coverImage}
                      alt={rp.title}
                      width={400}
                      height={240}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-category-tag">{rp.category}</span>
                    <h3 className="blog-card-title">{rp.title}</h3>
                    <p className="blog-card-excerpt">{rp.excerpt}</p>
                    <div className="blog-meta">
                      <span>{formatDate(rp.date)}</span>
                      <span>•</span>
                      <span>{rp.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
