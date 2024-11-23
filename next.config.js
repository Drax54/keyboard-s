// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    // Improved static optimization
    // staticWorkerRequestDeduping: true,
    // workerThreads: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
  },
  // Cache optimization
  staticPageGenerationTimeout: 120,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Transpile optimization
  swcMinify: true,
  poweredByHeader: false,
};

module.exports = nextConfig;