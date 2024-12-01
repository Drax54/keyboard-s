// // lib/generateStaticParams.js
// const { websites } = require('../data/websites');
// const { browsers } = require('../data/browsers');
// const { games } = require('../data/games');
// const { applications } = require('../data/applications');



// const fetchDynamicData = async () => {
//   // Replace with your API or database fetch logic
//   const response = await fetch('https://api.example.com/data');
//   const data = await response.json();

//   // Assuming `data` contains arrays of entities for each category
//   return {
//     websites: data.websites,
//     browsers: data.browsers,
//     software: data.software,
//     games: data.games,
//   };
// };

// // Helper function to generate params for any category
// function generateParamsForCategory(data) {
//   return Object.keys(data).map(id => ({ id }));
// }

// // Generate params for each category
// function generateBrowserStaticParams() {
//   return generateParamsForCategory(browsers);
// }

// function generateSoftwareStaticParams() {
//   return generateParamsForCategory(applications);
// }

// function generateGamesStaticParams() {
//   return generateParamsForCategory(games);
// }

// function generateWebsitesStaticParams() {
//   return generateParamsForCategory(websites);
// }

// // Combine all categories
// function generateAllStaticParams() {
//   const browserPaths = generateBrowserStaticParams().map((item) => ({
//     category: "browsers",
//     ...item,
//   }));

//   const softwarePaths = generateSoftwareStaticParams().map((item) => ({
//     category: "software",
//     ...item,
//   }));

//   const gamesPaths = generateGamesStaticParams().map((item) => ({
//     category: "games",
//     ...item,
//   }));

//   const websitesPaths = generateWebsitesStaticParams().map((item) => ({
//     category: "websites",
//     ...item,
//   }));

//   return [...browserPaths, ...softwarePaths, ...gamesPaths, ...websitesPaths];
// }

// // Export all functions
// module.exports = {
//   generateBrowserStaticParams,
//   generateSoftwareStaticParams,
//   generateGamesStaticParams,
//   generateWebsitesStaticParams,
//   generateAllStaticParams,
// };



// // lib/generateStaticParams.js
import { websites } from '../data/websites.ts';
import { browsers } from '../data/browsers.ts';
import { games } from '../data/games.ts';
import { applications } from '../data/applications.ts';
import { operatingSystems } from '../data/operating-systems.ts'; // Import OS data


function generateParamsForCategory(data) {
  return Object.keys(data).map((id) => ({ id }));
}

export function generateBrowserStaticParams() {
  return generateParamsForCategory(browsers);
}


// Generate static params for operating systems (OS)
export function generateOsStaticParams() {
  return generateParamsForCategory(operatingSystems);
}

export function generateSoftwareStaticParams() {
  console.log('Software Data:', applications); // Log the input data
  const params = generateParamsForCategory(applications);
  console.log('Software Params:', params); // Log the generated params
  return params;
}

export function generateGamesStaticParams() {
  return generateParamsForCategory(games);
}

export function generateWebsitesStaticParams() {
  return generateParamsForCategory(websites);
}

export function generateAllStaticParams() {
  const browserPaths = generateBrowserStaticParams().map((item) => ({
    category: 'browsers',
    ...item,
  }));

  const softwarePaths = generateSoftwareStaticParams().map((item) => ({
    category: 'software',
    ...item,
  }));

  const gamesPaths = generateGamesStaticParams().map((item) => ({
    category: 'games',
    ...item,
  }));

  const websitesPaths = generateWebsitesStaticParams().map((item) => ({
    category: 'websites',
    ...item,
  }));

  const osPaths = generateOsStaticParams().map((item) => ({
    category: 'os',
    ...item,
  }));

  return [...browserPaths, ...softwarePaths, ...gamesPaths, ...websitesPaths, ...osPaths];
}
