import { site } from '../config/site';

/**
 * Push a clean event object straight into the GTM dataLayer.
 * This is the format GTM's built-in "Custom Event" trigger listens for
 * (i.e. { event: 'your_event_name', ...params }), so every event fired
 * through this file shows up in GTM's Preview mode and can be used to
 * build triggers/tags directly — no extra config needed on the GTM side
 * beyond creating a Custom Event trigger with the matching event name.
 */
function pushToDataLayer(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

/**
 * Fire a Google Ads conversion event (kept as-is for the existing
 * Google Ads gtag.js setup in layout.js).
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

/** GA4 custom event (via gtag.js, if loaded) + GTM dataLayer push (for GTM tags/triggers) */
export function trackEvent(eventName, params = {}) {
  pushToDataLayer(eventName, params);
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/** Track booking form start (tab selected: oneway / roundtrip / rental) */
export function trackBookingStart(tripType) {
  trackEvent('booking_start', { trip_type: tripType });
}

/** Track "Get Instant Fare Estimate" button submit — Fare Calculator Submit (GTM event: fare_calculator_submit) */
export function trackFareCalculatorSubmit(tripType) {
  trackEvent('fare_calculator_submit', { trip_type: tripType });
}

/** Track fare estimate result shown */
export function trackEstimateShown(tripType, amount) {
  trackEvent('fare_estimate_shown', { trip_type: tripType, value: amount });
}

/** Track final "Confirm Booking" submit — Booking Form Submit (GTM event: booking_form_submit) */
export function trackBookingFormSubmit({ tripType, amount } = {}) {
  // Note: submitSiteForm() already fires trackLeadConversion(1.0) on every
  // successful submit, so we don't call it again here to avoid double-counting.
  trackEvent('booking_form_submit', { trip_type: tripType, value: amount });
}

/** Track WhatsApp click — WhatsApp Button Click (GTM event: whatsapp_click) */
export function trackWhatsAppClick(source) {
  trackEvent('whatsapp_click', { source });
  trackLeadConversion(0.5);
}

/** Track phone call click — Call Button Click (GTM event: call_click) */
export function trackCallClick(source) {
  trackEvent('call_click', { source });
  trackLeadConversion(0.5);
}
