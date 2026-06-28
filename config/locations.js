/**
 * ─────────────────────────────────────────────────────────
 *  LOCATION DATA — Programmatic SEO Engine
 *  Add new cities here and pages auto-generate.
 * ─────────────────────────────────────────────────────────
 */

export const CITIES = [
  {
    slug: 'madurai',
    name: 'Madurai',
    displayName: 'Madurai',
    description: 'Temple City of Tamil Nadu',
    longDescription:
      'Madurai, the cultural capital of Tamil Nadu, is home to the iconic Meenakshi Amman Temple. Book a reliable drop taxi from Madurai to anywhere across Tamil Nadu with Tamilandroptaxi.',
    image: '/images/madurai.png',
    routes: 12,
    popular: true,
    faqs: [
      {
        q: 'How much does a drop taxi from Madurai to Chennai cost?',
        a: 'A one-way drop taxi from Madurai to Chennai starts at ₹6,872 for a Sedan. The price depends on vehicle type and the exact pick-up and drop locations.',
      },
      {
        q: 'How long does it take to travel from Madurai to Coimbatore by taxi?',
        a: 'The drive from Madurai to Coimbatore typically takes around 3 to 3.5 hours (approx. 220 km) via NH83.',
      },
      {
        q: 'Is there a 24/7 taxi service available in Madurai?',
        a: 'Yes, Tamilandroptaxi provides round-the-clock taxi service in Madurai for airport transfers, outstation trips, and local rides.',
      },
      {
        q: 'What vehicles are available for Madurai drop taxi service?',
        a: 'We offer Swift Dzire (₹15/km), Toyota Etios (₹16/km), Toyota Innova (₹20/km), and Innova Crysta (₹23/km) for all trip types.',
      },
    ],
    topRoutes: [
      { to: 'Chennai', price: '₹6,872', km: '465 km' },
      { to: 'Coimbatore', price: '₹3,500', km: '213 km' },
      { to: 'Trichy', price: '₹2,200', km: '134 km' },
      { to: 'Rameshwaram', price: '₹2,800', km: '168 km' },
    ],
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    displayName: 'Chennai',
    description: 'Capital City of Tamil Nadu',
    longDescription:
      'Chennai, the bustling capital of Tamil Nadu, is a major hub for business and tourism. Book a premium drop taxi from Chennai to any destination in Tamil Nadu with transparent pricing.',
    image: '/images/chennai.png',
    routes: 25,
    popular: true,
    faqs: [
      {
        q: 'What is the taxi fare from Chennai to Bangalore?',
        a: 'A one-way taxi from Chennai to Bangalore starts at ₹5,264 for a Sedan (approx. 350 km). Premium vehicles like Innova are also available.',
      },
      {
        q: 'Does Tamilandroptaxi provide airport transfers in Chennai?',
        a: 'Yes, we provide prompt airport pick-up and drop service from Chennai International Airport (MAA) at any hour.',
      },
      {
        q: 'Can I book a round trip taxi from Chennai?',
        a: 'Absolutely! Our round trip cabs from Chennai come with a dedicated driver who stays with you and returns you to Chennai.',
      },
    ],
    topRoutes: [
      { to: 'Coimbatore', price: '₹7,477', km: '500 km' },
      { to: 'Madurai', price: '₹6,872', km: '465 km' },
      { to: 'Trichy', price: '₹5,045', km: '335 km' },
      { to: 'Bangalore', price: '₹5,264', km: '350 km' },
    ],
  },
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    displayName: 'Coimbatore',
    description: 'Manchester of South India',
    longDescription:
      'Coimbatore, the industrial capital of Tamil Nadu, is well-connected to all major cities. Book a comfortable drop taxi from Coimbatore for business trips or leisure travel.',
    image: '/images/coimbatore.png',
    routes: 18,
    popular: true,
    faqs: [
      {
        q: 'What is the drop taxi fare from Coimbatore to Chennai?',
        a: 'A one-way drop taxi from Coimbatore to Chennai starts from ₹7,477 for a Sedan (approx. 500 km).',
      },
      {
        q: 'Is there a taxi service from Coimbatore to Ooty?',
        a: 'Yes, we offer drop taxis from Coimbatore to Ooty. The journey is approximately 86 km and takes around 2.5 hours through the scenic Nilgiri hills.',
      },
      {
        q: 'How early should I book my Coimbatore airport taxi?',
        a: 'We recommend booking at least 2 hours in advance for airport transfers, though last-minute bookings are handled based on availability.',
      },
    ],
    topRoutes: [
      { to: 'Chennai', price: '₹7,477', km: '500 km' },
      { to: 'Madurai', price: '₹3,500', km: '213 km' },
      { to: 'Ooty', price: '₹1,800', km: '86 km' },
      { to: 'Bangalore', price: '₹4,200', km: '360 km' },
    ],
  },
  {
    slug: 'trichy',
    name: 'Trichy',
    displayName: 'Trichy (Tiruchirappalli)',
    description: 'Rock Fort City',
    longDescription:
      'Tiruchirappalli, known as Trichy, is famous for its ancient Rock Fort and Ranganathaswamy Temple. Book your Trichy drop taxi for convenient travel across Tamil Nadu.',
    image: '/images/trichy.png',
    routes: 14,
    popular: true,
    faqs: [
      {
        q: 'What is the taxi fare from Trichy to Chennai?',
        a: 'A one-way taxi from Trichy to Chennai starts at ₹5,045 for a Sedan (approximately 335 km via NH38).',
      },
      {
        q: 'Does Tamilandroptaxi operate from Trichy airport?',
        a: 'Yes, we provide airport taxi service from Tiruchirappalli International Airport (TRZ) for all destinations in Tamil Nadu.',
      },
    ],
    topRoutes: [
      { to: 'Chennai', price: '₹5,045', km: '335 km' },
      { to: 'Madurai', price: '₹2,200', km: '134 km' },
      { to: 'Coimbatore', price: '₹3,200', km: '210 km' },
      { to: 'Thanjavur', price: '₹1,200', km: '58 km' },
    ],
  },
  {
    slug: 'salem',
    name: 'Salem',
    displayName: 'Salem',
    description: 'Steel City of Tamil Nadu',
    longDescription:
      'Salem is a major city in Tamil Nadu known for its steel industry and Yercaud hills nearby. Tamilandroptaxi offers reliable cab service from Salem to all destinations.',
    image: '/images/salem.png',
    routes: 10,
    popular: false,
    faqs: [
      {
        q: 'What is the taxi fare from Salem to Chennai?',
        a: 'A one-way drop taxi from Salem to Chennai starts at ₹5,230 for a Sedan (approximately 340 km via NH44).',
      },
    ],
    topRoutes: [
      { to: 'Chennai', price: '₹5,230', km: '340 km' },
      { to: 'Coimbatore', price: '₹2,800', km: '164 km' },
      { to: 'Bangalore', price: '₹3,200', km: '210 km' },
    ],
  },
];

/** All city slugs — used for generateStaticParams */
export const CITY_SLUGS = CITIES.map((c) => c.slug);

/** Find a city by slug */
export function getCityBySlug(slug) {
  return CITIES.find((c) => c.slug === slug) || null;
}

/** Popular routes for homepage */
export const POPULAR_ROUTES = [
  { from: 'Chennai', to: 'Vellore', price: '₹2,318', image: '/images/chn-vel.png', km: '145 km' },
  { from: 'Chennai', to: 'Pondicherry', price: '₹2,710', image: '/images/chn-pdy.png', km: '162 km' },
  { from: 'Chennai', to: 'Trichy', price: '₹5,045', image: '/images/chn-trc.png', km: '335 km' },
  { from: 'Chennai', to: 'Salem', price: '₹5,230', image: '/images/chn-slm.png', km: '340 km' },
  { from: 'Chennai', to: 'Coimbatore', price: '₹7,477', image: '/images/chn-cbe.png', km: '500 km' },
  { from: 'Chennai', to: 'Bangalore', price: '₹5,264', image: '/images/chn-bng.png', km: '350 km' },
  { from: 'Chennai', to: 'Madurai', price: '₹6,872', image: '/images/chn-mdu.png', km: '465 km' },
  { from: 'Chennai', to: 'Tiruvannamalai', price: '₹3,116', image: '/images/chn-thy.png', km: '185 km' },
  { from: 'Chennai', to: 'Tirupati', price: '₹2,262', image: '/images/chn-tpt.png', km: '140 km' },
  { from: 'Madurai', to: 'Chennai', price: '₹6,872', image: '/images/mdu-chn.png', km: '465 km' },
  { from: 'Madurai', to: 'Coimbatore', price: '₹3,500', image: '/images/chn-cbe.png', km: '213 km' },
  { from: 'Madurai', to: 'Tirunelveli', price: '₹2,200', image: '/images/mdu-thy.png', km: '160 km' },
];

/** Global FAQ for homepage schema */
export const GLOBAL_FAQS = [
  {
    q: 'What is a drop taxi service in Tamil Nadu?',
    a: 'A drop taxi is a one-way outstation cab service where you only pay for the one-way journey. Unlike traditional rentals, there is no return fare, making it the most cost-effective option for intercity travel in Tamil Nadu.',
  },
  {
    q: 'How do I book a taxi online with Tamilandroptaxi?',
    a: 'Simply fill in your pickup location, drop location, travel date and time in our booking form. Get an instant fare estimate and confirm your booking. Our team will contact you within minutes.',
  },
  {
    q: 'What are the taxi rates per km in Tamil Nadu?',
    a: 'Our rates start at ₹15/km for Sedan (Swift Dzire), ₹16/km for Etios, ₹20/km for Innova, and ₹23/km for Innova Crysta. All rates are inclusive of driver bata and toll charges.',
  },
  {
    q: 'Are Tamilandroptaxi drivers verified?',
    a: 'Yes, all our drivers undergo thorough background checks, are fully licensed, and are trained in customer service and road safety. Every vehicle is GPS-tracked for your safety.',
  },
  {
    q: 'Do you provide airport taxi service across Tamil Nadu?',
    a: 'Yes! We operate from all major airports in Tamil Nadu including Chennai (MAA), Coimbatore (CJB), Madurai (IXM), and Trichy (TRZ) airports.',
  },
  {
    q: 'Is there a minimum distance for drop taxi booking?',
    a: 'Our drop taxi service is ideal for trips of 50 km or more. For shorter trips within a city, we recommend our local rental packages.',
  },
];

/** All cities listed in footer / cities page */
export const ALL_CITIES_LIST = [
  'Coimbatore', 'Chennai', 'Trichy', 'Namakkal', 'Pollachi',
  'Vellore', 'Tirunelveli', 'Mettupalayam', 'Villupuram', 'Thoothukudi',
  'Nagercoil', 'Thiruvannamalai', 'Neyveli', 'Kumbakonam', 'Salem',
  'Tirupur', 'Karur', 'Madurai', 'Erode', 'Hosur',
  'Thanjavur', 'Dindigul', 'Krishnagiri', 'Kanyakumari', 'Kallakurichi',
  'Dharmapuri', 'Karaikudi', 'Rameshwaram', 'Ramanathapuram',
];

/**
 * ─────────────────────────────────────────────────────────
 *  MADURAI — LOCAL SIGHTSEEING + ROUND TRIP DATA
 *  Backs the dedicated /madurai-local-round-trip-taxi page.
 *  Fares computed from the live fareConfig.js formula
 *  (Sedan ₹15/km + ₹400 driver allowance) so numbers shown
 *  on this page always stay consistent with the booking
 *  form's own "Get Instant Fare Estimate" results.
 * ─────────────────────────────────────────────────────────
 */

/** Local / hourly rental packages, featured for "Madurai local trip" intent */
export const MADURAI_LOCAL_PACKAGES = [
  {
    label: '2 Hours / 20 KM',
    price: '₹700',
    bestFor: 'Quick temple visit or a couple of nearby spots',
  },
  {
    label: '4 Hours / 40 KM',
    price: '₹1,000',
    bestFor: 'Meenakshi Temple + 2–3 more sightseeing stops',
    popular: true,
  },
  {
    label: '8 Hours / 80 KM',
    price: '₹1,600',
    bestFor: 'A full-day Madurai sightseeing circuit',
  },
];

/** Places typically covered on a Madurai local sightseeing trip */
export const MADURAI_SIGHTSEEING_SPOTS = [
  'Meenakshi Amman Temple',
  'Thirumalai Nayakkar Mahal',
  'Gandhi Memorial Museum',
  'Vandiyur Mariamman Teppakulam',
  'Alagar Koil',
  'Pazhamudhir Solai',
];

/** Round trip routes ex-Madurai, Sedan starting fares (km × 2 × ₹15 + ₹400) */
export const MADURAI_ROUND_TRIP_ROUTES = [
  { to: 'Rameswaram', km: '168 km', price: '₹5,440' },
  { to: 'Kodaikanal', km: '120 km', price: '₹4,000' },
  { to: 'Kanyakumari', km: '240 km', price: '₹7,600' },
  { to: 'Thekkady (Periyar)', km: '140 km', price: '₹4,600' },
  { to: 'Munnar', km: '170 km', price: '₹5,500' },
  { to: 'Chennai', km: '465 km', price: '₹14,350' },
  { to: 'Coimbatore', km: '213 km', price: '₹6,790' },
  { to: 'Trichy', km: '134 km', price: '₹4,420' },
];

/** FAQs targeting "Madurai local trip" + "Madurai round trip taxi" long-tail SEO */
export const MADURAI_LOCAL_ROUNDTRIP_FAQS = [
  {
    q: 'What is the fare for a Madurai local sightseeing taxi?',
    a: 'Our Madurai local packages start at ₹700 for 2 Hours / 20 KM, ₹1,000 for 4 Hours / 40 KM, and ₹1,600 for a full 8 Hours / 80 KM sightseeing day — all in a Sedan with driver allowance included.',
  },
  {
    q: 'Which places are covered in a Madurai local trip?',
    a: 'Popular stops include Meenakshi Amman Temple, Thirumalai Nayakkar Mahal, Gandhi Memorial Museum, Vandiyur Mariamman Teppakulam, Alagar Koil, and Pazhamudhir Solai. We can customise the route based on your package hours.',
  },
  {
    q: 'What is the round trip taxi fare from Madurai to Rameswaram?',
    a: 'A Madurai to Rameswaram round trip taxi starts from ₹5,440 for a Sedan (approx. 168 km one-way, billed as a 336 km round trip with driver allowance included).',
  },
  {
    q: 'Can I book a round trip taxi for an overnight or multi-day Madurai to Kodaikanal or Munnar trip?',
    a: 'Yes, multi-day round trips are available. For trips spanning more than one day, an additional driver allowance applies per extra day — our team will confirm the exact total when you share your travel dates on call or WhatsApp.',
  },
  {
    q: 'Is a Madurai to Kodaikanal or Munnar weekend round trip possible?',
    a: 'Absolutely — Kodaikanal (starting ₹4,000) and Munnar (starting ₹5,500) are popular weekend round trip routes from Madurai, both well-suited to a 2-day plan with one driver allowance per day.',
  },
  {
    q: 'How do I book a Madurai local or round trip taxi?',
    a: 'Use the booking form on this page — choose the "Rental" tab for a local sightseeing package or the "Round Trip" tab for an outstation route, fill in your details, and get an instant fare estimate before confirming.',
  },
];
