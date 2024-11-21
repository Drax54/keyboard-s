// Generate static params for browsers
const generateBrowserStaticParams = () => {
  return [
    { id: "google-chrome" },
    { id: "mozilla-firefox" },
    { id: "microsoft-edge" },
    { id: "safari" },
    { id: "opera-browser" },
    { id: "uc-browser" },
    { id: "arc-browser" },
    { id: "maxthon-browser" },
    { id: "tor-browser" },
  ];
};

// Generate static params for software
const generateSoftwareStaticParams = () => {
  return [
    { id: "microsoft-word" },
    { id: "microsoft-excel" },
    { id: "microsoft-powerpoint" },
    { id: "adobe-illustrator" },
    { id: "vscode" },
    { id: "salesforce" },
    { id: "tableau" },
  ];
};

// Generate static params for games
const generateGamesStaticParams = () => {
  return [
    { id: "minecraft" },
    { id: "valorant" },
    { id: "counter-strike" },
    { id: "fortnite" },
    { id: "world-of-warcraft" },
  ];
};

// Generate static params for websites
const generateWebsitesStaticParams = () => {
  return [
    { id: "gmail" },
    { id: "youtube" },
    { id: "github" },
    { id: "notion" },
    { id: "slack" },
  ];
};

// Combine all categories
const generateAllStaticParams = () => {
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
};

// Export all static params
module.exports = {
  generateBrowserStaticParams,
  generateSoftwareStaticParams,
  generateGamesStaticParams,
  generateWebsitesStaticParams,
  generateAllStaticParams,
};
