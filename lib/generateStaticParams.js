// lib/staticParams.js
const { websites } = require('../data/websites');
const { browsers } = require('../data/browsers');
const { games } = require('../data/games');
const { applications } = require('../data/applications');

// Helper function to generate params for any category
function generateParamsForCategory(data) {
  return Object.keys(data).map(id => ({ id }));
}

// Generate params for each category
function generateBrowserStaticParams() {
  return generateParamsForCategory(browsers);
}

function generateSoftwareStaticParams() {
  return generateParamsForCategory(applications);
}

function generateGamesStaticParams() {
  return generateParamsForCategory(games);
}

function generateWebsitesStaticParams() {
  return generateParamsForCategory(websites);
}

// Combine all categories
function generateAllStaticParams() {
  const browserPaths = generateBrowserStaticParams().map((item) => ({
    category: "browsers",
    ...item,
  }));

  const softwarePaths = generateSoftwareStaticParams().map((item) => ({
    category: "software",
    ...item,
  }));

  const gamesPaths = generateGamesStaticParams().map((item) => ({
    category: "games",
    ...item,
  }));

  const websitesPaths = generateWebsitesStaticParams().map((item) => ({
    category: "websites",
    ...item,
  }));

  return [...browserPaths, ...softwarePaths, ...gamesPaths, ...websitesPaths];
}

// Export all functions
module.exports = {
  generateBrowserStaticParams,
  generateSoftwareStaticParams,
  generateGamesStaticParams,
  generateWebsitesStaticParams,
  generateAllStaticParams,
};