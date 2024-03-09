// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Konfigurasi Next.js yang sudah ada
  
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  