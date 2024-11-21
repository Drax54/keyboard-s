// const { generateBrowserStaticParams } = require('./lib/staticParams');

// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: process.env.SITE_URL || 'http://localhost:3000',
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
//   generateIndexSitemap: true,
//   changefreq: 'daily',
//   priority: 0.7, // Default priority for pages
//   exclude: ['/404', '/api/*'], // Exclude paths if necessary
//   robotsTxtOptions: {
//     policies: [{ userAgent: '*', allow: '/' }],
//   },
//   additionalPaths: async (config) => {
//     const browserPaths = generateBrowserStaticParams().map((param) => ({
//       loc: `/browsers/${param.id}`,
//       changefreq: 'weekly',
//       priority: 0.8,
//       lastmod: new Date().toISOString(),
//     }));

//     // Add static category pages
//     const categoryPaths = [
//       { loc: '/software', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
//       { loc: '/browsers', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
//       { loc: '/games', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
//       { loc: '/websites', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
//     ];

//     return [...browserPaths, ...categoryPaths];
//   },
// };




const { generateAllStaticParams } = require('./lib/staticParams');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7, // Default priority for pages
  exclude: ['/404', '/api/*'], // Exclude paths if necessary
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalPaths: async (config) => {
    const allPaths = generateAllStaticParams().map((param) => ({
      loc: `/${param.category}/${param.id}`, // Combine category and ID to form path
      changefreq: 'weekly',                // Default frequency
      priority: 0.8,                       // Default priority
      lastmod: new Date().toISOString(),   // Add the current date
    }));

    // Add static category overview pages
    const categoryPaths = [
      { loc: '/software', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
      { loc: '/browsers', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
      { loc: '/games', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
      { loc: '/websites', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
    ];

    return [...allPaths, ...categoryPaths]; // Combine all paths and category overview pages
  },
};






