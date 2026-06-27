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
