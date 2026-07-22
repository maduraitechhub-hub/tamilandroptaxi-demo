'use client';

import Link from 'next/link';
import Image from 'next/image';
import { site } from '../../config/site';

const SERVICES = [
  { label: 'One-Way Drop Taxi',          href: '/book'                          },
  { label: 'Outstation Cab Booking',     href: '/book'                          },
  { label: 'Airport Taxi Service',       href: '/book'                          },
  { label: 'Corporate Cab Service',      href: '/book'                          },
  { label: 'Madurai Local & Round Trip', href: '/madurai-local-round-trip-taxi' },
  { label: 'Driver Partner Programme',   href: '/partner'                       },
];

const QUICK_LINKS = [
  { label: 'Home',            href: '/'        },
  { label: 'Book a Taxi',     href: '/book'    },
  { label: 'Our Cities',      href: '/cities'  },
  { label: 'About Us',        href: '/about'   },
  { label: 'Blog',            href: '/blog'    },
  { label: 'Contact Us',      href: '/contact' },
  { label: 'Partner With Us', href: '/partner' },
];

const TOP_ROUTES = [
  { label: 'Chennai → Madurai',    href: '/taxi/madurai'    },
  { label: 'Chennai → Coimbatore', href: '/taxi/coimbatore' },
  { label: 'Chennai → Trichy',     href: '/taxi/trichy'     },
  { label: 'Madurai → Chennai',    href: '/taxi/chennai'    },
  { label: 'Coimbatore → Chennai', href: '/taxi/chennai'    },
  { label: 'Trichy → Chennai',     href: '/taxi/chennai'    },
];

/* Inline SVG icons — simple, verified paths, no extra npm package needed */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 320 512" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 576 512" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.1 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232 337.6V174.4L361 256l-129 81.6z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: 'Facebook',  href: site.social?.facebook,  Icon: FacebookIcon  },
  { name: 'Instagram', href: site.social?.instagram, Icon: InstagramIcon },
  { name: 'YouTube',   href: site.social?.youtube,   Icon: YoutubeIcon   },
].filter((s) => s.href);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand column */}
          <div>
            <div className="footer-logo">
              <Image
                src={site.logo}
                alt={`${site.siteName} logo`}
                width={52}
                height={52}
                className="footer-logo-img"
              />
              <div>
                <div className="footer-logo-name">{site.siteName}</div>
                <div className="footer-logo-sub">{site.siteTagline}</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Tamil Nadu&apos;s most trusted one-way outstation taxi service.
              Transparent fares. Verified drivers. 24/7 availability.
            </p>
            <div className="footer-contact">
              <a href={`tel:${site.phone}`} className="footer-contact-link">
                📞 {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="footer-contact-link">
                ✉️ {site.email}
              </a>
            </div>

            {SOCIAL_LINKS.length > 0 && (
              <div className="footer-socials">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.Icon;
                  return (    
                    <Link                
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={item.name}
                      title={item.name}
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Services column */}
          <div>
            <div className="footer-col-title">Our Services</div>
            <ul className="footer-links">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top routes column */}
          <div>
            <div className="footer-col-title">Popular Routes</div>
            <ul className="footer-links">
              {TOP_ROUTES.map((r) => (
                <li key={r.label}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} <span className="footer-bottom-brand">{site.siteName}</span>. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}