/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Allows ALL external hosts (use only for dev/testing)
      },
    ],
  },
};

export default nextConfig;
