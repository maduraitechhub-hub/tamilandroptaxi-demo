'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '../../config/site';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Book Taxi', href: '/book' },
  { label: 'Cities', href: '/cities' },
  { label: 'About Us', href: '/about' },
  { label: 'Partner', href: '/partner' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ activePage }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => {
    if (activePage) {
      return href === '/' ? activePage === 'home' : href.includes(activePage);
    }
    return pathname === href;
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label={`${site.siteName} Home`}>
            <Image
              src="/images/logo.png"
              alt={`${site.siteName} Logo`}
              width={50}
              height={50}
              className="nav-logo-img"
              priority
            />
            <div className="nav-logo-text">
              <span className="nav-logo-main">{site.siteName}</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links" role="menubar">
            {NAV_ITEMS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`nav-link${isActive(n.href) ? ' active' : ''}`}
                role="menuitem"
              >
                {n.label}
              </Link>
            ))}
            <Link href="/book" className="nav-cta" aria-label="Book a taxi now">
              Book Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className={`nav-link${isActive(n.href) ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
            role="menuitem"
          >
            {n.label}
          </Link>
        ))}
        <Link href="/book" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Book Now
        </Link>

        {/* Mobile quick actions */}
        <div className="mobile-quick-actions">
          <a href={`tel:${site.phone}`} className="mobile-action-btn mobile-action-call">
            📞 Call Us
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-action-btn mobile-action-wa"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
