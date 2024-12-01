// import { Card } from "@/components/ui/card";
// import { applications } from "@/data/applications";
// import { games } from "@/data/games";
// import { operatingSystems } from "@/data/operating-systems";
// import { websites } from "@/data/websites";
// import Link from "next/link";

// interface CategoryCardProps {
//   title: string;
//   items: {
//     id: string;
//     name: string;
//     icon: string;
//     description: string;
//   }[];
//   baseUrl: string;
// }

// function CategoryCard({ title, items, baseUrl }: CategoryCardProps) {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {Object.values(items).map((item) => (
//           <Link key={item.id} href={`${baseUrl}/${item.id}`}>
//             <Card className="p-4 hover:bg-accent transition-colors">
//               <div className="flex items-center gap-3">
//                 <img src={item.icon} alt={item.name} className="w-8 h-8" />
//                 <div>
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p className="text-sm text-muted-foreground">{item.description}</p>
//                 </div>
//               </div>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="container py-10 space-y-10 ml-16">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold tracking-tight mb-4">
//           Keyboard Shortcuts Hub
//         </h1>
//         <p className="text-xl text-muted-foreground">
//           Your one-stop destination for keyboard shortcuts across different platforms
//         </p>
//       </div>

//       <CategoryCard
//         title="Operating Systems"
//         items={operatingSystems}
//         baseUrl="/os"
//       />

//       <CategoryCard
//         title="Software"
//         items={applications}
//         baseUrl="/software"
//       />

//       <CategoryCard
//         title="Games"
//         items={games}
//         baseUrl="/games"
//       />

//       <CategoryCard
//         title="Websites"
//         items={websites}
//         baseUrl="/websites"
//       />
//     </div>
//   );
// }

// app/page.tsx



//app/page.tsx
//version 2

// "use client";

// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { applications } from "@/data/applications";
// import { games } from "@/data/games";
// import { operatingSystems } from "@/data/operating-systems";
// import { websites } from "@/data/websites";
// import Link from "next/link";

// interface CategoryCardProps {
//   title: string;
//   items: {
//     id: string;
//     name: string;
//     icon: string;
//     description: string;
//   }[];
//   baseUrl: string;
// }

// function CategoryCard({ title, items, baseUrl }: CategoryCardProps) {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map((item) => (
//           <Link key={item.id} href={`${baseUrl}/${item.id}`}>
//             <Card className="p-4 hover:bg-accent transition-colors">
//               <div className="flex items-center gap-3">
//                 <img src={item.icon} alt={item.name} className="w-8 h-8" />
//                 <div>
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p className="text-sm text-muted-foreground">{item.description}</p>
//                 </div>
//               </div>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Convert objects to arrays at initialization
//   const operatingSystemsArray = Object.values(operatingSystems);
//   const applicationsArray = Array.isArray(applications) ? applications : Object.values(applications);
//   const gamesArray = Array.isArray(games) ? games : Object.values(games);
//   const websitesArray = Object.values(websites);

//   const [filteredResults, setFilteredResults] = useState({
//     operatingSystems: operatingSystemsArray,
//     applications: applicationsArray,
//     games: gamesArray,
//     websites: websitesArray,
//   });

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(lowerCaseQuery);

//     if (lowerCaseQuery) {
//       setFilteredResults({
//         operatingSystems: operatingSystemsArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery)
//         ),
//         applications: applicationsArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery)
//         ),
//         games: gamesArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery)
//         ),
//         websites: websitesArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery)
//         ),
//       });
//     } else {
//       setFilteredResults({
//         operatingSystems: operatingSystemsArray,
//         applications: applicationsArray,
//         games: gamesArray,
//         websites: websitesArray,
//       });
//     }
//   };

//   return (
//     <div className="container py-10 space-y-10">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold tracking-tight mb-4">
//           Keyboard Shortcuts Hub
//         </h1>
//         <p className="text-xl text-muted-foreground">
//           Your one-stop destination for keyboard shortcuts across different platforms
//         </p>
//         <input
//           type="text"
//           placeholder="Search applications, games, OS, websites..."
//           value={searchQuery}
//           onChange={(e) => handleSearch(e.target.value)}
//           className="mt-4 px-4 py-2 border rounded w-full max-w-lg"
//         />
//       </div>

//       {filteredResults.operatingSystems.length > 0 && (
//         <CategoryCard
//           title="Operating Systems"
//           items={filteredResults.operatingSystems}
//           baseUrl="/os"
//         />
//       )}
//       {filteredResults.applications.length > 0 && (
//         <CategoryCard
//           title="Software"
//           items={filteredResults.applications}
//           baseUrl="/software"
//         />
//       )}
//       {filteredResults.games.length > 0 && (
//         <CategoryCard
//           title="Games"
//           items={filteredResults.games}
//           baseUrl="/games"
//         />
//       )}
//       {filteredResults.websites.length > 0 && (
//         <CategoryCard
//           title="Websites"
//           items={filteredResults.websites}
//           baseUrl="/websites"
//         />
//       )}

//       {filteredResults.operatingSystems.length === 0 &&
//         filteredResults.applications.length === 0 &&
//         filteredResults.games.length === 0 &&
//         filteredResults.websites.length === 0 && (
//           <p className="text-center text-gray-500">No results found.</p>
//         )}
//     </div>
//   );
// }















// "use client";

// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { applications } from "@/data/applications";
// import { games } from "@/data/games";
// import { operatingSystems } from "@/data/operating-systems";
// import { websites } from "@/data/websites";
// import { browsers } from "@/data/browsers";

// import Link from "next/link";

// interface Item {
//   id: string;
//   name: string;
//   icon: string;
//   description: string;
//   featured?: boolean;
//   platforms?: string[];
//   groups?: any[];
// }

// interface CategoryCardProps {
//   title: string;
//   items: Item[];
//   baseUrl: string;
// }

// function CategoryCard({ title, items, baseUrl }: CategoryCardProps) {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map((item) => (
//           <Link key={item.id} href={`${baseUrl}/${item.id}`}>
//             <Card className="p-6 hover:shadow-lg transition-shadow h-[120px] flex items-center">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 shrink-0">
//                   <img
//                     src={item.icon}
//                     alt={item.name}
//                     className="w-full h-full object-contain"
//                     loading="eager"
//                     decoding="sync"
//                   />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-lg font-medium mb-1 truncate">
//                     {item.name}
//                   </h3>
//                   <p className="text-base text-muted-foreground line-clamp-2">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Convert arrays to objects first
//   const appsObject = Array.isArray(applications)
//     ? applications.reduce((acc, app) => ({ ...acc, [app.id]: app }), {})
//     : applications;

//   // Then convert objects to arrays for display
//   const operatingSystemsArray = Object.values(operatingSystems).filter(item => !item.featured);
//   const applicationsArray = Object.values(appsObject).filter(item => item.featured);
//   const gamesArray = Object.values(games).filter(item => item.featured);
//   const websitesArray = Object.values(websites).filter(item => !item.featured);
//   const browsersArray = Object.values(browsers).filter(item => item.featured);


//   const [filteredResults, setFilteredResults] = useState({
//     operatingSystems: operatingSystemsArray,
//     applications: applicationsArray,
//     games: gamesArray,
//     websites: websitesArray,
//     browsers: browsersArray, // Include browsers in filteredResults
//   });

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(lowerCaseQuery);

//     if (lowerCaseQuery) {
//       setFilteredResults({
//         operatingSystems: operatingSystemsArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery) ||
//           item.description.toLowerCase().includes(lowerCaseQuery)
//         ),
//         applications: applicationsArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery) ||
//           item.description.toLowerCase().includes(lowerCaseQuery)
//         ),
//         games: gamesArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery) ||
//           item.description.toLowerCase().includes(lowerCaseQuery)
//         ),
//         websites: websitesArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery) ||
//           item.description.toLowerCase().includes(lowerCaseQuery)
//         ),
//         browsers: browsersArray.filter((item) =>
//           item.name.toLowerCase().includes(lowerCaseQuery) ||
//           item.description.toLowerCase().includes(lowerCaseQuery)
//         ),
//       });
//     } else {
//       setFilteredResults({
//         operatingSystems: operatingSystemsArray,
//         applications: applicationsArray,
//         games: gamesArray,
//         websites: websitesArray,
//         browsers: browsersArray, 
//       });
//     }
//   };

//   return (
//     <div className="space-y-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold tracking-tight mb-4">
//           Keyboard Shortcuts Hub
//         </h1>
//         <p className="text-xl text-muted-foreground mb-8">
//           Your one-stop destination for keyboard shortcuts across different platforms
//         </p>
//         <div className="max-w-2xl mx-auto">
//           <input
//             type="text"
//             placeholder="Search applications, games, OS, websites..."
//             value={searchQuery}
//             onChange={(e) => handleSearch(e.target.value)}
//             className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>
//       </div>

//       <div className="space-y-16">
//         {operatingSystemsArray.length > 0 && (
//           <CategoryCard
//             title="Operating Systems"
//             items={filteredResults.operatingSystems}
//             baseUrl="/os"
//           />
//         )}
//         {applicationsArray.length > 0 && (
//           <CategoryCard
//             title="Software"
//             items={filteredResults.applications}
//             baseUrl="/software"
//           />
//         )}
//         {gamesArray.length > 0 && (
//           <CategoryCard
//             title="Games"
//             items={filteredResults.games}
//             baseUrl="/games"
//           />
//         )}
//         {websitesArray.length > 0 && (
//           <CategoryCard
//             title="Websites"
//             items={filteredResults.websites}
//             baseUrl="/websites"
//           />
//         )}
//         {filteredResults.browsers.length > 0 && (
//           <CategoryCard
//             title="Browsers"
//             items={filteredResults.browsers}
//             baseUrl="/browsers"
//           />
//         )}

//         {Object.values(filteredResults).every(arr => arr.length === 0) && (
//           <p className="text-center text-gray-500 py-8">No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// }










// "use client";

// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { applications } from "@/data/applications";
// import { games } from "@/data/games";
// import { operatingSystems } from "@/data/operating-systems";
// import { websites } from "@/data/websites";
// import { browsers } from "@/data/browsers";
// import Link from "next/link";
// import { BaseItem, CategoryCardProps } from "@/types/application";

// function CategoryCard({ title, items, baseUrl }: CategoryCardProps) {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map((item) => (
//           <Link key={item.id} href={`${baseUrl}/${item.id}`}>
//             <Card className="p-6 hover:shadow-lg transition-shadow h-[120px] flex items-center">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 shrink-0">
//                   <img
//                     src={item.icon}
//                     alt={item.name}
//                     className="w-full h-full object-contain"
//                     loading="eager"
//                     decoding="sync"
//                   />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-lg font-medium mb-1 truncate">
//                     {item.name}
//                   </h3>
//                   <p className="text-base text-muted-foreground line-clamp-2">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const operatingSystemsArray = Object.values(operatingSystems)
//     .filter(isBaseItem)
//     .filter((item): item is BaseItem => !item.featured);

//   const applicationsArray = Object.values(applications)
//     .filter(isBaseItem)
//     .filter((item): item is BaseItem => !!item.featured);

//   const gamesArray = Object.values(games)
//     .filter(isBaseItem)
//     .filter((item): item is BaseItem => !!item.featured);

//   const websitesArray = Object.values(websites)
//     .filter(isBaseItem)
//     .filter((item): item is BaseItem => !item.featured);

//   const browsersArray = Object.values(browsers)
//     .filter(isBaseItem)
//     .filter((item): item is BaseItem => !!item.featured);

//   // Type guard
//   function isBaseItem(item: unknown): item is BaseItem {
//     if (!item || typeof item !== 'object') return false;
//     const i = item as Partial<BaseItem>;
//     return typeof i.id === 'string' &&
//       typeof i.name === 'string' &&
//       typeof i.icon === 'string' &&
//       typeof i.description === 'string';
//   }

//   const [filteredResults, setFilteredResults] = useState({
//     operatingSystems: operatingSystemsArray,
//     applications: applicationsArray,
//     games: gamesArray,
//     websites: websitesArray,
//     browsers: browsersArray,
//   }
//   );


//   return (
//     <div className="space-y-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold tracking-tight mb-4">
//           Keyboard Shortcuts Hub
//         </h1>
//         <p className="text-xl text-muted-foreground mb-8">
//           Your one-stop destination for keyboard shortcuts across different platforms
//         </p>
//         <div className="max-w-2xl mx-auto">
//           <input
//             type="text"
//             placeholder="Search applications, games, OS, websites..."
//             value={searchQuery}
//             onChange={(e) => handleSearch(e.target.value)}
//             className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>
//       </div>

//       <div className="space-y-16">
//         {operatingSystemsArray.length > 0 && (
//           <CategoryCard
//             title="Operating Systems"
//             items={filteredResults.operatingSystems}
//             baseUrl="/os"
//           />
//         )}
//         {applicationsArray.length > 0 && (
//           <CategoryCard
//             title="Software"
//             items={filteredResults.applications}
//             baseUrl="/software"
//           />
//         )}
//         {gamesArray.length > 0 && (
//           <CategoryCard
//             title="Games"
//             items={filteredResults.games}
//             baseUrl="/games"
//           />
//         )}
//         {websitesArray.length > 0 && (
//           <CategoryCard
//             title="Websites"
//             items={filteredResults.websites}
//             baseUrl="/websites"
//           />
//         )}
//         {filteredResults.browsers.length > 0 && (
//           <CategoryCard
//             title="Browsers"
//             items={filteredResults.browsers}
//             baseUrl="/browsers"
//           />
//         )}

//         {Object.values(filteredResults).every(arr => arr.length === 0) && (
//           <p className="text-center text-gray-500 py-8">No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// }







//app/page.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { applications } from "@/data/applications";
import { games } from "@/data/games";
import { OperatingSystems } from "@/data/operating-systems";
import { websites } from "@/data/websites";
import { browsers } from "@/data/browsers";
import Link from "next/link";
import { CategoryItem, CategoryCardProps } from "@/data/types";
import Head from "next/head";


function CategoryCard({ title, items, baseUrl }: CategoryCardProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.id} href={`${baseUrl}/${item.id}`}>
            <Card className="p-6 hover:shadow-lg transition-shadow h-[120px] flex items-center">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium mb-1 truncate">
                    {item.name}
                  </h3>
                  <p className="text-base text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Type guard
  function isValidApplication(item: unknown): item is CategoryItem {
    if (!item || typeof item !== "object") return false;
    const i = item as Partial<CategoryItem>;
    return (
      typeof i.id === "string" &&
      typeof i.name === "string" &&
      typeof i.icon === "string" &&
      typeof i.description === "string"
    );
  }

  // Convert objects to arrays and filter featured items
  const operatingSystemsArray = Object.values(OperatingSystems).filter(
    isValidApplication
  );
  const applicationsArray = Object.values(applications).filter(isValidApplication);
  const gamesArray = Object.values(games).filter(isValidApplication);
  const websitesArray = Object.values(websites).filter(isValidApplication);
  const browsersArray = Object.values(browsers).filter(isValidApplication);

  const [filteredResults, setFilteredResults] = useState({
    operatingSystems: operatingSystemsArray,
    applications: applicationsArray,
    games: gamesArray,
    websites: websitesArray,
    browsers: browsersArray,
  });

  // Search handler
  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setSearchQuery(query);

    if (lowerCaseQuery) {
      setFilteredResults({
        operatingSystems: operatingSystemsArray.filter(
          (item) =>
            item.name.toLowerCase().includes(lowerCaseQuery) 
        ),
        applications: applicationsArray.filter(
          (item) =>
            item.name.toLowerCase().includes(lowerCaseQuery) 
        ),
        games: gamesArray.filter(
          (item) =>
            item.name.toLowerCase().includes(lowerCaseQuery)
        ),
        websites: websitesArray.filter(
          (item) =>
            item.name.toLowerCase().includes(lowerCaseQuery) 
        ),
        browsers: browsersArray.filter(
          (item) =>
            item.name.toLowerCase().includes(lowerCaseQuery) 
        ),
      });
    } else {
      setFilteredResults({
        operatingSystems: operatingSystemsArray,
        applications: applicationsArray,
        games: gamesArray,
        websites: websitesArray,
        browsers: browsersArray,
      });
    }
  };

  return (
    <>
      {/* Meta Information for SEO */}
      <Head>
        <title>Boost My Key - Your Keyboard Shortcuts Directory</title>
        <meta
          name="description"
          content="Discover keyboard shortcuts for software, games, operating systems, websites, and browsers."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://boostmykey.com/" />
      </Head>

      {/* Main Page Content */}
      <div className="space-y-12">
        {/* Search Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Keyboard Shortcuts Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your one-stop destination for keyboard shortcuts across different platforms
          </p>
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search applications, games, OS, websites..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {filteredResults.operatingSystems.length > 0 && (
            <CategoryCard
              title="Operating Systems"
              items={filteredResults.operatingSystems}
              baseUrl="/os"
            />
          )}
          {filteredResults.applications.length > 0 && (
            <CategoryCard
              title="Software"
              items={filteredResults.applications}
              baseUrl="/software"
            />
          )}
          {filteredResults.games.length > 0 && (
            <CategoryCard
              title="Games"
              items={filteredResults.games}
              baseUrl="/games"
            />
          )}
          {filteredResults.websites.length > 0 && (
            <CategoryCard
              title="Websites"
              items={filteredResults.websites}
              baseUrl="/websites"
            />
          )}
          {filteredResults.browsers.length > 0 && (
            <CategoryCard
              title="Browsers"
              items={filteredResults.browsers}
              baseUrl="/browsers"
            />
          )}

          {/* No Results */}
          {Object.values(filteredResults).every((arr) => arr.length === 0) && (
            <p className="text-center text-gray-500 py-8">No results found.</p>
          )}
        </div>
      </div>
    </>
  );
}
