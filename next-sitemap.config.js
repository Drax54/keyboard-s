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
  siteUrl: process.env.SITE_URL || 'https://boostmykey.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  outDir: './out', 
  exclude: ['/404', '/api/*', '/submit-shortcut'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalPaths: async (config) => {
    const staticPaths = generateAllStaticParams();
    console.log('Static paths for sitemap:', staticPaths); // Debugging

    const additionalPaths = staticPaths.map(({ category, id }) => ({
      loc: `/${category}/${id}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    const categoryPaths = [
      { loc: '/software', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
      { loc: '/browsers', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
      { loc: '/games', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
      { loc: '/websites', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString() },
    ];

    return [...additionalPaths, ...categoryPaths];
  },
};
