/**
 * ─────────────────────────────────────────────────────────
 *  BLOG DATA — Dummy content, replace with real posts
 *  Each post auto-generates /blog/[slug] with SEO + schema
 * ─────────────────────────────────────────────────────────
 */

export const BLOG_CATEGORIES = [
  'All',
  'Travel Tips',
  'Routes & Fares',
  'Madurai Guide',
  'Company News',
];

export const BLOG_POSTS = [
  {
    slug: 'madurai-to-rameswaram-taxi-guide',
    title: 'Madurai to Rameswaram Taxi Guide: Fares, Route & Best Time to Visit',
    excerpt:
      'Planning a Madurai to Rameswaram trip? Here\'s everything you need — fare estimates, route options, travel time, and the best months to visit Rameswaram.',
    category: 'Routes & Fares',
    coverImage: '/images/blog/mdu-thy.webp', // 👉 replace with your image
    author: 'TamilDropTaxi Team',
    date: '2026-07-10',
    readTime: '5 min read',
    metaDescription:
      'Complete guide for Madurai to Rameswaram taxi booking — fare estimates starting ₹2,800, route details, travel duration, and best time to visit.',
    keywords: ['Madurai to Rameswaram taxi', 'Rameswaram taxi fare', 'Madurai Rameswaram distance'],
    content: [
      { type: 'paragraph', text: 'Rameswaram is one of the most popular pilgrimage and tourist destinations for travelers starting from Madurai. Whether you are visiting the Ramanathaswamy Temple or exploring Dhanushkodi, a comfortable drop taxi makes the journey stress-free.' },
      { type: 'heading', text: 'Distance and Travel Time' },
      { type: 'paragraph', text: 'The distance between Madurai and Rameswaram is approximately 168 km, and the drive typically takes around 3.5 to 4 hours depending on traffic and road conditions via NH87.' },
      { type: 'heading', text: 'Taxi Fare Estimate' },
      { type: 'paragraph', text: 'A one-way Sedan taxi from Madurai to Rameswaram starts around ₹2,800, while a round trip starts from ₹5,440 inclusive of driver allowance. SUV and Innova options are also available for larger groups.' },
      { type: 'heading', text: 'Best Time to Visit' },
      { type: 'paragraph', text: 'The ideal time to visit Rameswaram is between October and April when the weather is pleasant. Summer months can be quite hot, so early morning starts are recommended.' },
      { type: 'heading', text: 'Places to Cover Along the Way' },
      { type: 'list', items: [
        'Ramanathaswamy Temple',
        'Dhanushkodi Beach',
        'Pamban Bridge',
        'Adam\'s Bridge viewpoint',
      ] },
      { type: 'paragraph', text: 'Book your Madurai to Rameswaram taxi with TamilDropTaxi for transparent pricing and verified drivers familiar with the pilgrimage route.' },
    ],
  },
  {
    slug: 'madurai-airport-taxi-tips',
    title: '5 Tips for a Smooth Madurai Airport Taxi Experience',
    excerpt:
      'Flying into Madurai Airport? Follow these simple tips to make your airport pickup or drop completely hassle-free.',
    category: 'Travel Tips',
    coverImage: '/images/blog/madurai-airport.jpg', // 👉 replace with your image
    author: 'TamilDropTaxi Team',
    date: '2026-06-28',
    readTime: '4 min read',
    metaDescription:
      'Simple tips for booking a reliable Madurai airport taxi — pickup timing, tracking your driver, and avoiding common delays.',
    keywords: ['Madurai airport taxi', 'Madurai airport pickup', 'IXM airport cab'],
    content: [
      { type: 'paragraph', text: 'Madurai Airport (IXM) connects the temple city to major metros across India. Here are 5 practical tips to make your airport taxi experience smooth and worry-free.' },
      { type: 'heading', text: '1. Book in Advance' },
      { type: 'paragraph', text: 'Always book your airport taxi at least 2-3 hours before your flight lands, especially during peak travel seasons like festival periods.' },
      { type: 'heading', text: '2. Share Your Flight Number' },
      { type: 'paragraph', text: 'Sharing your flight number with your taxi provider allows them to track any delays and adjust the pickup time accordingly, so your driver is always there when you land.' },
      { type: 'heading', text: '3. Keep Contact Details Handy' },
      { type: 'paragraph', text: 'Save your driver\'s number and confirm your pickup point (arrival gate/parking area) beforehand to avoid confusion at a busy airport.' },
      { type: 'heading', text: '4. Confirm the Fare Upfront' },
      { type: 'paragraph', text: 'A transparent, upfront fare estimate avoids any last-minute surprises. TamilDropTaxi shows the full breakdown before you confirm your booking.' },
      { type: 'heading', text: '5. Choose a Verified Service' },
      { type: 'paragraph', text: 'Always choose a taxi service with verified, background-checked drivers, especially for early morning or late-night arrivals.' },
    ],
  },
  {
    slug: 'madurai-local-sightseeing-one-day-itinerary',
    title: 'Madurai in One Day: The Perfect Local Sightseeing Itinerary',
    excerpt:
      'Only have one day in Madurai? Here\'s a curated itinerary covering Meenakshi Temple, local markets, and must-visit spots — all in a single day.',
    category: 'Madurai Guide',
    coverImage: '/images/blog/madurai-sightseeing.jpg', // 👉 replace with your image
    author: 'TamilDropTaxi Team',
    date: '2026-06-15',
    readTime: '6 min read',
    metaDescription:
      'A one-day Madurai sightseeing itinerary covering Meenakshi Amman Temple, Thirumalai Nayakkar Mahal, and local food spots with taxi package suggestions.',
    keywords: ['Madurai one day itinerary', 'Madurai sightseeing places', 'Madurai local taxi package'],
    content: [
      { type: 'paragraph', text: 'Madurai, the temple city of Tamil Nadu, is packed with history, culture, and food. If you only have one day, here\'s how to make the most of it.' },
      { type: 'heading', text: 'Morning: Meenakshi Amman Temple' },
      { type: 'paragraph', text: 'Start your day early at the iconic Meenakshi Amman Temple. Arrive by 7 AM to avoid crowds and witness the morning rituals.' },
      { type: 'heading', text: 'Mid-Morning: Thirumalai Nayakkar Mahal' },
      { type: 'paragraph', text: 'This 17th-century palace showcases stunning Indo-Saracenic architecture and is just a short drive from the temple.' },
      { type: 'heading', text: 'Afternoon: Local Food Break' },
      { type: 'paragraph', text: 'Don\'t miss Madurai\'s famous jigarthanda and the local mess-style thali lunch — a must for any first-time visitor.' },
      { type: 'heading', text: 'Evening: Vandiyur Mariamman Teppakulam' },
      { type: 'paragraph', text: 'End your day at this serene temple tank, especially beautiful during golden hour.' },
      { type: 'heading', text: 'Recommended Taxi Package' },
      { type: 'paragraph', text: 'For this itinerary, our 8 Hours / 80 KM local package (₹1,600) is ideal, covering all stops comfortably with a dedicated driver.' },
    ],
  },
  {
    slug: 'one-way-vs-round-trip-taxi-guide',
    title: 'One-Way Drop Taxi vs Round Trip: Which One Should You Book?',
    excerpt:
      'Confused between a one-way drop taxi and a round trip booking? Here\'s a simple breakdown to help you choose the most cost-effective option.',
    category: 'Travel Tips',
    coverImage: '/images/blog/one-way-vs-round-trip.jpg', // 👉 replace with your image
    author: 'TamilDropTaxi Team',
    date: '2026-05-30',
    readTime: '4 min read',
    metaDescription:
      'Understand the difference between one-way drop taxi and round trip cab bookings, and learn which option saves you more money.',
    keywords: ['one way taxi vs round trip', 'drop taxi meaning', 'outstation cab booking guide'],
    content: [
      { type: 'paragraph', text: 'One of the most common questions we get is: "Should I book a one-way drop taxi or a round trip?" Here\'s a simple guide to help you decide.' },
      { type: 'heading', text: 'What is a Drop Taxi?' },
      { type: 'paragraph', text: 'A drop taxi is a one-way outstation service where you only pay for the distance traveled in one direction — the driver does not wait for your return.' },
      { type: 'heading', text: 'What is a Round Trip?' },
      { type: 'paragraph', text: 'A round trip taxi includes both onward and return journeys, with the same driver and vehicle staying with you throughout the trip.' },
      { type: 'heading', text: 'When to Choose One-Way' },
      { type: 'paragraph', text: 'If you\'re only traveling in one direction — for example, relocating, or your return is by train or flight — a one-way drop taxi is significantly cheaper.' },
      { type: 'heading', text: 'When to Choose Round Trip' },
      { type: 'paragraph', text: 'If you\'re visiting a destination for a day trip or weekend and returning to the same city, a round trip is more economical than booking two separate one-way taxis.' },
      { type: 'heading', text: 'Our Recommendation' },
      { type: 'paragraph', text: 'Use our booking form\'s instant fare estimate to compare both options for your specific route before confirming your booking.' },
    ],
  },
];

/** Get all posts, optionally filtered by category */
export function getPostsByCategory(category) {
  if (!category || category === 'All') return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === category);
}

/** Find a single post by slug */
export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

/** All slugs — used for generateStaticParams */
export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

/** Related posts (same category, excluding current) */
export function getRelatedPosts(currentSlug, category, limit = 3) {
  return BLOG_POSTS
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit)
    .concat(
      BLOG_POSTS.filter((p) => p.slug !== currentSlug && p.category !== category)
    )
    .slice(0, limit);
}
