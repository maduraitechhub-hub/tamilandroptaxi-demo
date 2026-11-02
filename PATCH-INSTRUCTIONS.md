# Tamilan Drop Taxi – worked-file patch

This ZIP contains only the source files changed for the requested Madurai-origin, long-distance taxi booking and SEO updates. Extract it at the root of your existing Git repository and replace files at the same paths.

## Changes included

- Fixed `buildMetadata()` so existing static pages and dynamic route pages receive valid metadata/canonical URLs.
- Updated homepage SEO title and description around Madurai-origin outstation routes.
- Added dedicated destination route landing pages for the popular routes represented on the homepage: Chennai, Coimbatore, Trichy, Salem, Bangalore, Pondicherry, Tiruvannamalai, Tirupati and Tirunelveli.
- Updated route page headings, FAQs, service structured data, and route-specific booking CTA.
- Route cards now open the matching route landing page.
- Booking forms default the origin/pickup to Madurai; route links prefill the destination.
- Added browser-side required-field validation and server-side name/mobile/route validation.
- City directory cards prefill Madurai and the selected destination.
- Corrected route copy that incorrectly described Madurai → Chennai/Coimbatore as Chennai-origin routes.
- Footer popular-route links now point to the relevant route page or prefilled booking form.
- Removed the Madurai-to-Madurai route from generated route pages and sitemap.
- Replaced Google Maps API key-looking values in `.env.example` with placeholders. The uploaded example contained exposed key values; rotate/restrict those keys in Google Cloud before deployment.

## Current business contact details

The existing central config already uses:
- Phone: `+91 9597775787`
- WhatsApp: `919597775787`
- Email: `hello@tamilandroptaxi.com`
- Base city: Madurai

Homepage, contact page, footer, sticky call/WhatsApp actions and route pages read these values from `config/site.js`. No old Pudukkottai address or Chennai-based company wording was found in the supplied source tree. The old number `7708015319` was also not present.

## Google Search Console HTML verification

- Added `public/googlea2a238d4dd103540.html` using the exact verification file uploaded for this site.
- After deployment, confirm this URL opens directly: `https://tamilandroptaxi.com/googlea2a238d4dd103540.html`.
- Then return to Google Search Console and click **Verify** for the matching HTML-file verification method. Do not rename the file or edit its contents. Keep it in `public/` for future re-verification.

## Required deployment configuration

Set these environment variables in your hosting provider (do not commit secrets):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
- `MAIL_TO=hello@tamilandroptaxi.com`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (browser key restricted by HTTP referrer and only required browser APIs)
- `GOOGLE_MAPS_API_KEY` (server key restricted to Routes API and server access)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (optional Search Console verification token)
- `NEXT_PUBLIC_GA4_ID` (optional if GA4 is used)

The current `config/site.js` has placeholder Google Ads conversion labels for `call` and `whatsapp`. Replace those with the real conversion labels from Google Ads if you want those two conversions recorded. The form conversion label is already populated in the supplied config.

## Before deploying

1. Review the route list and ensure each destination is currently served by your business.
2. Confirm vehicle rates, driver allowance, tolls and permits with your actual operating policy. The online estimate is indicative; final fare should be confirmed with the customer.
3. Compare old and new URL paths. Add 301 redirects for any old route URLs that changed; do not redirect every old URL to the homepage.
4. Run `npm ci` and `npm run build` in your own environment.
5. Test one-way booking, round-trip booking, rental booking, phone links, WhatsApp links, SMTP delivery and Google Maps route estimates on mobile and desktop.
6. Submit the updated `/sitemap.xml` in Google Search Console and inspect the new `/taxi/...` URLs.

## Validation note

Plain JavaScript files passed `node --check`. A full Next.js production build could not be completed in this environment because dependency installation did not finish. Run the build in your Git/deployment environment before publishing.
