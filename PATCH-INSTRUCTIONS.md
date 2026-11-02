Tamilan Drop Taxi - focused functionality/performance patch

Replace only these four files in the matching paths in your Next.js project:
- components/forms/BookingForm.js
- components/forms/PlacesAutocompleteInput.js
- lib/submitSiteForm.js
- app/api/send-form/route.js

What changed:
1. Google Places autocomplete no longer destroys and recreates its widget every time the form's disabled state changes. The existing separate disabled-state effect handles that state update.
2. Booking form validates required fields and Indian mobile numbers before fare estimation and before sending the booking request.
3. Booking return date cannot be earlier than pickup date. Date minimum uses the browser's local date rather than UTC date.
4. Server-side booking/contact/partner validation rejects invalid Indian mobile numbers and incomplete booking data.
5. Fixed the shared form conversion call: it now uses the 'form' conversion key instead of passing a number as the label key. Booking conversions remain tracked once by BookingForm.
6. Booking success copy now correctly says the booking request was sent; it does not imply a confirmed cab reservation.
7. Added name/telephone autocomplete hints to booking inputs.

No image assets were modified. This patch does not change fare rates, route-distance calculation, Google Maps keys, SMTP settings, or existing booking/email workflow.

After replacing files, run:
  npm ci
  npm run build

Then test on staging:
- one-way estimate and booking request
- round-trip estimate and booking request
- rental estimate and booking request
- invalid / incomplete mobile number is rejected
- Google Places fields remain selected when submitting/confirming
- contact and partner form submissions

Note: A production build could not be run in this environment because npm dependency installation timed out. Please run the commands above in your project environment before deploying.
