'use client';

import Link from 'next/link';
import Image from 'next/image';
import { site } from '../../config/site';

const SERVICES = [
  { label: 'One-Way Drop Taxi',          href: '/book'                          },
  { label: 'Outstation Cab Booking',     href: '/book'                          },
  { label: 'Airport Taxi Service',       href: '/book'                          },
  { label: 'Madurai Local & Round Trip', href: '/madurai-local-round-trip-taxi' },
  { label: 'Driver Partner Programme',   href: '/partner'                       },
];

const QUICK_LINKS = [
  { label: 'Home',            href: '/'        },
  { label: 'Book a Taxi',     href: '/book'    },
  { label: 'Our Cities',      href: '/cities'  },
  { label: 'About Us',        href: '/about'   },
  { label: 'Contact Us',      href: '/contact' },
  { label: 'Partner With Us', href: '/partner' },
];

const TOP_ROUTES = [
  { label: 'Madurai → Chennai',    href: '/book'    },
  { label: 'Madurai → Coimbatore', href: '/book' },
  { label: 'Madurai → Trichy',     href: '/book'     },
  { label: 'Madurai → Bangalore',    href: '/book'    },
  { label: 'Madurai → Tirunalveli', href: '/book'    },
  { label: 'Madurai → Pondicherry',     href: '/book'    },
];

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
                src="/images/logo.png"
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
          Tamilan Drop Taxi offer Professional Taxi Services connecting Madurai with transparent pricing and verified drivers.
            </p>
            <div className="footer-contact">
              <a href={`tel:${site.phone}`} className="footer-contact-link">
                📞 {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="footer-contact-link">
                ✉️ {site.email}
              </a>
            </div>
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
