import { site } from '../config/site';

/**
 * Fire a Google Ads conversion event.
 * Call this after a successful booking / lead form submission.
 */
export function trackLeadConversion(value = 1.0) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: `${site.googleAdsId}/${site.googleAdsConversionLabel}`,
    value,
    currency: 'INR',
  });
}

/** GA4 custom event */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

/** Track booking form start */
export function trackBookingStart(tripType) {
  trackEvent('booking_start', { trip_type: tripType });
}

/** Track fare estimate shown */
export function trackEstimateShown(tripType, amount) {
  trackEvent('fare_estimate_shown', { trip_type: tripType, value: amount });
}

/** Track WhatsApp click */
export function trackWhatsAppClick(source) {
  trackEvent('whatsapp_click', { source });
  trackLeadConversion(0.5);
}

/** Track phone call click */
export function trackCallClick(source) {
  trackEvent('call_click', { source });
  trackLeadConversion(0.5);
}
