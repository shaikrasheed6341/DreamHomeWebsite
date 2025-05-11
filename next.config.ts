/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecbmbqcpywczvkskaxyc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/dreamhome/**',
      },
    ],
  },
};

module.exports = nextConfig;