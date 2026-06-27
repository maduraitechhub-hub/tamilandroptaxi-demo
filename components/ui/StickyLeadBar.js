'use client';

import { useEffect, useState } from 'react';
import { site } from '../../config/site';
import { trackCallClick, trackWhatsAppClick } from '../../lib/analytics';

export default function StickyLeadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className={`sticky-lead-bar${visible ? ' visible' : ''}`} role="complementary" aria-label="Quick contact">
        <a
          href={`tel:${site.phone}`}
          className="sticky-btn sticky-btn--call"
          onClick={() => trackCallClick('sticky_bar')}
          aria-label={`Call ${site.siteName}`}
        >
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}?text=Hi, I need to book a taxi.`}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-btn sticky-btn--wa"
          onClick={() => trackWhatsAppClick('sticky_bar')}
          aria-label="Chat on WhatsApp"
        >
          💬 WhatsApp
        </a>
      </div>

      {/* Floating WhatsApp button (desktop) */}
      <a
        href={`https://wa.me/${site.whatsapp}?text=Hi, I need to book a taxi.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        onClick={() => trackWhatsAppClick('floating_button')}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img src="/images/floatingwb.png" alt="WhatsApp" width={56} height={56} />
      </a>
    </>
  );
}
