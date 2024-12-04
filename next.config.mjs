/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;