/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,

    images: {
    // Bahar se hotlink hone se rokta hai
    remotePatterns: [],
    // Allowed image quality values (team photos use 90 for a sharper look)
    qualities: [75, 90],
  },

   async headers() {
    return [
      {
        source: '/team',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' }, // Google image search se bhi hatao agar chahiye
        ],
      },
    ]
  },
};

export default nextConfig;
