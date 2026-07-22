'use client';

import { useEffect, useRef, useState } from 'react';
import { getGoogleMapsApiKey, loadPlacesLibrary } from '../../lib/googlePlaces';

const TAMIL_NADU_BIAS = {
  south: 8.0,
  west: 76.2,
  north: 13.6,
  east: 80.4,
};

function readWidgetText(element) {
  if (!element) return '';
  if (typeof element.value === 'string') return element.value;
  const input = element.shadowRoot?.querySelector('input');
  return input?.value ?? '';
}

/**
 * Place search field using google.maps.places.PlaceAutocompleteElement (Places API new).
 *
 * PERFORMANCE: Google Maps JS (and the heavy Places library) is NOT loaded on page
 * render. It only loads the first time the user focuses/clicks this field — this
 * keeps Maps' ~300KB+ payload out of the initial page load entirely (homepage,
 * city pages, /book — all of them), only fetching it when someone actually shows
 * intent to type a location. Falls back to a plain text input if no API key is
 * configured or loading fails.
 */
export default function PlacesAutocompleteInput({
  name,
  placeholder,
  required = false,
  disabled = false,
  mode = 'address',
  className = '',
}) {
  const hostRef = useRef(null);
  const widgetRef = useRef(null);
  const hiddenRef = useRef(null);
  const plainInputRef = useRef(null);

  const hasApiKey = Boolean(getGoogleMapsApiKey());
  const [status, setStatus] = useState(hasApiKey ? 'idle' : 'fallback'); // idle | loading | ready | fallback
  const [text, setText] = useState('');

  const startLoading = () => {
    setStatus((prev) => (prev === 'idle' ? 'loading' : prev));
  };

  // Load the Places widget only once triggered by user interaction (focus/pointer)
  useEffect(() => {
    if (status !== 'loading' || !hostRef.current) return undefined;

    let cancelled = false;

    const init = async () => {
      try {
        const { PlaceAutocompleteElement } = await loadPlacesLibrary();
        if (cancelled || !hostRef.current) return;

        const options = {
          includedRegionCodes: ['in'],
          locationBias: TAMIL_NADU_BIAS,
        };

        if (mode === 'city') {
          options.includedPrimaryTypes = [
            'locality',
            'administrative_area_level_2',
            'administrative_area_level_3',
            'postal_town',
          ];
        }

        const widget = new PlaceAutocompleteElement(options);
        if (placeholder) widget.placeholder = placeholder;
        if (text) widget.value = text;

        hostRef.current.replaceChildren(widget);
        widgetRef.current = widget;

        const syncText = (nextValue) => {
          setText(nextValue);
          if (hiddenRef.current) {
            hiddenRef.current.value = nextValue;
          }
        };

        const onInput = () => syncText(readWidgetText(widget));

        widget.addEventListener('input', onInput);
        widget.addEventListener('gmp-select', async ({ placePrediction }) => {
          try {
            const place = placePrediction.toPlace();
            await place.fetchFields({
              fields: ['displayName', 'formattedAddress'],
            });
            const label =
              place.formattedAddress || place.displayName || readWidgetText(widget);
            syncText(label);
          } catch {
            syncText(readWidgetText(widget));
          }
        });

        if (disabled) widget.disabled = true;

        setStatus('ready');
        // Focus the real widget so the user's click/tap continues seamlessly
        requestAnimationFrame(() => {
          const innerInput = widget.shadowRoot?.querySelector('input');
          innerInput?.focus();
        });
      } catch (err) {
        console.warn('Google Places autocomplete unavailable:', err);
        if (!cancelled) setStatus('fallback');
      }
    };

    init();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.disabled = Boolean(disabled);
    }
  }, [disabled]);

  useEffect(() => {
    const hidden = hiddenRef.current;
    const form = hidden?.form;
    if (!form || status !== 'ready') return undefined;

    const syncBeforeSubmit = () => {
      const next = readWidgetText(widgetRef.current);
      setText(next);
      if (hidden) hidden.value = next;
    };

    form.addEventListener('submit', syncBeforeSubmit);
    return () => form.removeEventListener('submit', syncBeforeSubmit);
  }, [status]);

  // ── Fallback / not-yet-loaded plain input ──────────────────────
  if (status === 'fallback' || status === 'idle' || status === 'loading') {
    return (
      <div className={`places-autocomplete-field ${className}`.trim()}>
        <input
          ref={plainInputRef}
          type="text"
          name={status === 'fallback' ? name : undefined}
          className={status === 'fallback' ? className : 'places-autocomplete-plain'}
          placeholder={status === 'loading' ? 'Loading…' : placeholder}
          required={required}
          disabled={disabled || status === 'loading'}
          autoComplete="off"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={startLoading}
          onPointerDown={startLoading}
        />
        {/* Keep a hidden field with the right `name` while the real widget loads,
            so the form still submits something if the user types fast and hits enter
            before the widget swaps in. */}
        {status !== 'fallback' && (
          <input type="hidden" name={name} value={text} readOnly />
        )}
      </div>
    );
  }

  // ── Ready: real Google widget mounted ──────────────────────────
  return (
    <div className={`places-autocomplete-field ${className}`.trim()}>
      <input
        ref={hiddenRef}
        type="text"
        name={name}
        value={text}
        required={required}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
        className="places-autocomplete-hidden"
        readOnly
      />
      <div
        ref={hostRef}
        className={`places-autocomplete-host${disabled ? ' is-disabled' : ''}`}
      />
    </div>
  );
}