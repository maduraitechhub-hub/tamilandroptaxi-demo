/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Image Optimisation ─────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 86400,
  },

  // ── Compression ────────────────────────────────────────
  compress: true,

  // ── Security & Performance Headers ────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // ── Redirects ──────────────────────────────────────────
  async redirects() {
    return [
      // Legacy SPA hash-based routes → proper pages
      {
        source: '/#book',
        destination: '/book',
        permanent: true,
      },
    ];
  },

  // ── Output ─────────────────────────────────────────────
  // 'standalone' for self-hosted Docker; remove for Vercel
  // output: 'standalone',

  poweredByHeader: false,
};

module.exports = nextConfig;
