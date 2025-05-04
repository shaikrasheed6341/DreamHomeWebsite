/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zxetkysuahfjolouwpgh.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/homerent/**', // Specific bucket path
      },
    ],
  },
};

module.exports = nextConfig;