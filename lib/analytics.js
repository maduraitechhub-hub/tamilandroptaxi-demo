import { site } from '../config/site';

/**
 * Push a clean event object straight into the GTM dataLayer.
 */
function pushToDataLayer(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

/**
 * Fire a Google Ads conversion event using the correct label
 * for the given event type (call / whatsapp / form).
 */
export function trackLeadConversion(labelKey, value = 1.0) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const label = site.conversionLabels?.[labelKey];
  if (!label || label.includes('_LABEL_HERE')) {
    console.warn(`[analytics] Missing conversion label for "${labelKey}" — conversion not sent.`);
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `${site.googleAdsId}/${label}`,
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

/** Track "Get Instant Fare Estimate" button submit */
export function trackFareCalculatorSubmit(tripType) {
  trackEvent('fare_calculator_submit', { trip_type: tripType });
}

/** Track fare estimate result shown */
export function trackEstimateShown(tripType, amount) {
  trackEvent('fare_estimate_shown', { trip_type: tripType, value: amount });
}

/** Track final "Confirm Booking" submit — Booking Form Submit */
export function trackBookingFormSubmit({ tripType, amount } = {}) {
  trackEvent('booking_form_submit', { trip_type: tripType, value: amount });
  trackLeadConversion('form', 1.0);
}

/** Track WhatsApp click */
export function trackWhatsAppClick(source) {
  trackEvent('whatsapp_click', { source });
  trackLeadConversion('whatsapp', 0.5);
}

/** Track phone call click */
export function trackCallClick(source) {
  trackEvent('call_click', { source });
  trackLeadConversion('call', 0.5);
}