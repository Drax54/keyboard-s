
// // app/software/[id]/client.tsx
// "use client";

// import { useState } from "react";
// import { Application } from "@/types/shortcut";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Apple, Monitor } from "lucide-react";

// interface SoftwarePageClientProps {
//   app: Application;
// }

// export function SoftwarePageClient({ app }: SoftwarePageClientProps) {
//   const [platform, setPlatform] = useState<"windows" | "mac">(
//     app.platforms.includes("macos") ? "mac" : "windows"
//   );

//   return (
//     <div className="container py-10">
//       <div className="flex items-center gap-6 mb-10">
//         <img src={app.icon} alt={app.name} className="w-16 h-16" />
//         <div className="flex-1">
//           <h1 className="text-4xl font-bold tracking-tight mb-2">{app.name}</h1>
//           <p className="text-xl text-muted-foreground">{app.description}</p>
//           <div className="flex gap-2 mt-4">
//             {app.platforms?.includes("windows") && (
//               <button
//                 onClick={() => setPlatform("windows")}
//                 className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${
//                   platform === "windows" ? "bg-primary text-primary-foreground" : "bg-secondary"
//                 }`}
//               >
//                 <Monitor className="h-4 w-4" />
//                 <span>Windows</span>
//               </button>
//             )}
//             {app.platforms?.includes("macos") && (
//               <button
//                 onClick={() => setPlatform("mac")}
//                 className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${
//                   platform === "mac" ? "bg-primary text-primary-foreground" : "bg-secondary"
//                 }`}
//               >
//                 <Apple className="h-4 w-4" />
//                 <span>macOS</span>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="space-y-12">
//         {app.groups.map((group) => (
//           <ShortcutGroup
//             key={group.title}
//             group={group}
//             platform={platform}
//             onPlatformChange={setPlatform}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }








// app/software/[id]/client.tsx


// "use client";

// import { Application } from "@/types/shortcut";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { useState } from "react";

// interface SoftwarePageClientProps {
//   app: Application;
// }

// export function SoftwarePageClient({ app }: SoftwarePageClientProps) {
//   const [platform, setPlatform] = useState<"windows" | "mac">(
//     app.platforms.includes("macos") ? "mac" : "windows"
//   );

//   return (
//     <div className="container py-12">
//       {/* Header Section */}
//       <div className="flex items-start gap-10 mb-16">
//         {/* Logo Section */}
//         <div className="relative w-32 h-32 shrink-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl" />
//           <img
//             src={app.icon}
//             alt={app.name}
//             className="relative z-10 w-full h-full object-contain p-4"
//           />
//         </div>

//         {/* Title and Description */}
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//               {app.name}
//             </h1>
//             {/* Platform Toggles */}
//             <div className="flex gap-2">
//               {app.platforms?.includes("windows") && (
//                 <button
//                   onClick={() => setPlatform("windows")}
//                   className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
//                     platform === "windows"
//                       ? "bg-gray-900 text-white"
//                       : "bg-gray-100 text-gray-700"
//                   }`}
//                 >
//                   <img
//                     src="https://api.iconify.design/bi:windows.svg"
//                     alt="Windows"
//                     className="w-5 h-5"
//                   />
//                   <span>Windows</span>
//                 </button>
//               )}
//               {app.platforms?.includes("macos") && (
//                 <button
//                   onClick={() => setPlatform("mac")}
//                   className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
//                     platform === "mac"
//                       ? "bg-gray-900 text-white"
//                       : "bg-gray-100 text-gray-700"
//                   }`}
//                 >
//                   <img
//                     src="https://api.iconify.design/bi:apple.svg"
//                     alt="macOS"
//                     className="w-5 h-5"
//                   />
//                   <span>macOS</span>
//                 </button>
//               )}
//             </div>
//           </div>
//           <p className="text-xl text-gray-600 max-w-3xl">
//             {app.description}
//           </p>
//         </div>
//       </div>

//       {/* Shortcuts Groups */}
//       <div className="space-y-16">
//         {app.groups?.map((group) => (
//           <ShortcutGroup
//             key={group.title}
//             group={group}
//             platform={platform}
//             onPlatformChange={setPlatform}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



// app/software/[id]/client.tsx
// app/software/[id]/client.tsx


// "use client";

// import { useEffect, useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";
// import { UnifiedSidebar } from "@/components/unified-sidebar";
// import { Application, ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";
// import { applications } from "@/data/applications"; // Import browsers data
// import Link from "next/link";



// interface SoftwarePageClientProps {
//   initialData: string;
//   about?: string;
//   social_links?: string; // Define as a JSON string
//   supported_on?: string;


// }


// export function SoftwarePageClient({ initialData }: { initialData: string }) {

//   // export function SoftwarePageClient({ initialData }: SoftwarePageClientProps) {
//   const app = JSON.parse(initialData);
//   const [additionalData, setAdditionalData] = useState<SoftwarePageClientProps | null>(null);

//   // Fetch additional fields
//   useEffect(() => {
//     console.log(`Fetching additional details for ID: ${app.id}`);
//     fetch(`http://127.0.0.1:5000/api/get-details/${app.id}`)
//       .then((res) => {
//         console.log(`API Status on Next js : ${res.status}`);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Fetched API Data:", data);
//         setAdditionalData(data);
//       })
//       .catch((err) => console.error("Error fetching additional data:", err));
//   }, [app.id]);


//   const platforms: string[] = app.platforms || [];
//   const isWindowsAvailable = platforms.includes("windows");
//   const isMacAvailable = platforms.includes("macos");


//   // // Ensure `platforms` is a valid array to prevent runtime issues
//   // const platforms: string[] = [...app.platforms];

//   // // Determine platform availability
//   // const isWindowsAvailable = platforms.includes("windows");
//   // const isMacAvailable = platforms.includes("macos");

//   const [platform, setPlatform] = useState<"windows" | "mac">(() =>
//     isMacAvailable ? "mac" : "windows"
//   );

//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState<ShortcutGroupType[]>(() => app.groups || []);

//   const sections = app.groups?.map((group: ShortcutGroupType) => ({
//     id: group.title.toLowerCase().replace(/\s+/g, "-"),
//     title: group.title,
//   })) || [];

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     if (!query) {
//       setFilteredGroups([...app.groups]); // Use a mutable copy here
//       return;
//     }

//     const newFilteredGroups = app.groups
//       .map((group: ShortcutGroupType) => ({
//         ...group,
//         shortcuts: group.shortcuts.filter(
//           (shortcut) =>
//             shortcut.description.toLowerCase().includes(lowerCaseQuery) ||
//             shortcut.keys.join(" ").toLowerCase().includes(lowerCaseQuery)
//         ),
//       }))
//       .filter((group: ShortcutGroupType) => group.shortcuts.length > 0);

//     setFilteredGroups(newFilteredGroups);
//   };

//   function safeJSONParse<T>(jsonString: string | undefined): T | null {
//     try {
//       return jsonString ? JSON.parse(jsonString) : null;
//     } catch {
//       console.error("Error parsing JSON:", jsonString);
//       return null;
//     }
//   }

//   // Generate random related browsers (excluding the current one)
//   const relatedApps = Object.values(applications)
//     .filter((b) => b.id !== app.id) // Exclude the current browser
//     .sort(() => 0.5 - Math.random()) // Shuffle the array
//     .slice(0, 3); // Select the top 3

//   return (
//     <div className="flex flex-col lg:flex-row gap-8">
//       <div className="flex-1 px-4 sm:px-6 lg:px-8">
//         <div className="py-5">
//           {/* Header Section */}
//           <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-6 mb-8">
//             <div className="relative w-24 h-24 sm:w-20 sm:h-20 shrink-0 bg-gray-100 rounded-lg p-2 mx-auto sm:mx-0">
//               <img
//                 src={app.icon}
//                 alt={app.name}
//                 className="w-full h-full object-contain"
//                 loading="eager"
//                 decoding="sync"
//               />
//             </div>
//             <div className="flex-1">
//               <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 mb-4">
//                 <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center sm:text-left">
//                   {app.shortcutpageName}
//                 </h1>
//                 <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-start">
//                   {/* Windows Button */}
//                   <button
//                     onClick={() => isWindowsAvailable && setPlatform("windows")}
//                     disabled={!isWindowsAvailable}
//                     className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${platform === "windows"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//                       } ${!isWindowsAvailable && "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
//                   >
//                     <img
//                       src="https://api.iconify.design/bi:windows.svg"
//                       alt="Windows"
//                       className="w-5 h-5"
//                     />
//                     <span>Windows</span>
//                   </button>

//                   {/* macOS Button */}
//                   <button
//                     onClick={() => isMacAvailable && setPlatform("mac")}
//                     disabled={!isMacAvailable}
//                     className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${platform === "mac"
//                       ? "bg-gray-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                       } ${!isMacAvailable && "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
//                   >
//                     <img
//                       src="https://api.iconify.design/bi:apple.svg"
//                       alt="macOS"
//                       className="w-5 h-5"
//                     />
//                     <span>macOS</span>
//                   </button>
//                 </div>
//               </div>
//               <p className="text-gray-500 text-sm sm:text-base text-center sm:text-left">
//                 {app.description}
//               </p>


//               {/* Official URL Section */}
//               {app.officialURL && (
//                 <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left mt-2">
//                   Official URL:{" "}
//                   <a
//                     href={app.officialURL}
//                     target="_blank"
//                     rel="nofollow noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     {app.officialURL}
//                   </a>
//                 </p>
//               )}

//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search shortcuts..."
//               value={searchQuery}
//               onChange={(e) => handleSearch(e.target.value)}
//               className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           {/* Shortcuts Groups */}
//           <div className="space-y-12">
//             {filteredGroups.length > 0 ? (
//               filteredGroups.map((group: ShortcutGroupType) => (
//                 <section key={group.title}>
//                   <h2
//                     id={group.title.toLowerCase().replace(/\s+/g, "-")}
//                     className="text-2xl font-bold mb-4"
//                   >
//                     {group.title}
//                   </h2>
//                   <ShortcutGroup
//                     key={group.title}
//                     group={group}
//                     platform={platform}
//                     setPlatform={setPlatform}
//                     isWindowsAvailable={isWindowsAvailable}
//                     isMacAvailable={isMacAvailable}
//                   />
//                 </section>
//               ))
//             ) : (
//               <p className="text-gray-500">No shortcuts match your search.</p>
//             )}
//           </div>


//           <div className="mt-12">
//             <h2 className="text-2xl font-bold mb-6">Related Softwares</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {relatedApps.map((relatedApps) => (
//                 <Link
//                   key={relatedApps.id}
//                   href={`/software/${relatedApps.id}`}
//                   className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
//                 >
//                   <div className="cursor-pointer">
//                     <img
//                       src={relatedApps.icon}
//                       alt={relatedApps.name}
//                       className="w-16 h-16 mx-auto mb-4"
//                     />
//                     <h3 className="text-lg font-semibold text-center">
//                       {relatedApps.name}
//                     </h3>
//                     <p className="text-gray-500 text-sm text-center">
//                       {relatedApps.description}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col gap-4">
//             <h1 className="text-2xl font-bold">{app.name}</h1>
//             {/* <p>{app.description}</p> */}

//             {additionalData && (
//               <>
//                 {additionalData.about && (
//                   <div>
//                     <h2 className="text-lg font-semibold">About</h2>
//                     <p>{additionalData.about}</p>
//                   </div>
//                 )}
//                 {additionalData.social_links && (
//                   <div>
//                     <h2 className="text-lg font-semibold">Social Links</h2>
//                     <ul>
//                       {Object.entries(safeJSONParse<{ [key: string]: string }>(additionalData.social_links) || {}).map(
//                         ([key, value]) => (
//                           <li key={key}>
//                             <a
//                               href={value as string} // Type assertion here
//                               className="text-blue-600 hover:underline"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               {key}
//                             </a>
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   </div>
//                 )}
//                 {additionalData && additionalData.supported_on && (
//                   <div>
//                     <h2 className="text-lg font-semibold">Supported On</h2>
//                     <p>
//                       {/* Check if parsing is necessary */}
//                       {additionalData.supported_on.startsWith("[") // If it's JSON, parse it
//                         ? JSON.parse(additionalData.supported_on).join(", ")
//                         : additionalData.supported_on // Otherwise, use as-is
//                       }
//                     </p>
//                   </div>
//                 )}

//               </>
//             )}
//           </div>

//         </div>
//       </div>
//       <UnifiedSidebar
//         sections={sections}
//         details={{
//           name: app.name, // Dynamically add browser name
//           description: app.description, // Dynamically add browser description
//         }}
//         popularItems={Object.values(applications)
//           .filter((b) => b.id !== app.id) // Exclude the current browser
//           .sort(() => 0.5 - Math.random()) // Shuffle the array
//           .slice(0, 5) // Select the top 5
//           .map((b) => ({
//             id: b.id,
//             name: b.name,
//             icon: b.icon,
//             link: `/software/${b.id}`, // Generate the link
//           }))}
//       />

//     </div>
//   );
// }






















// app/software/[id]/client.tsx

"use client";

import { useEffect, useState } from "react";
import { ShortcutGroup } from "@/components/shortcut-group";
import { Search } from "lucide-react";
import { UnifiedSidebar } from "@/components/unified-sidebar";
import { ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";
import { applications } from "@/data/applications"; // Import browsers data
import Link from "next/link";

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  [key: string]: string | undefined;
}

interface AdditionalData {
  id: string;
  about?: string;
  social_links?: SocialLinks;
  supported_on?: string[];
}

interface SoftwarePageClientProps {
  initialData: string;
}

export function SoftwarePageClient({ initialData }: SoftwarePageClientProps) {
  const app = JSON.parse(initialData);
  const [additionalData, setAdditionalData] = useState<AdditionalData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  // Fetch additional fields
  useEffect(() => {
    const fetchAdditionalData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/get-details/${app.id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: AdditionalData = await response.json();
        setAdditionalData(data);
      } catch (err: any) {
        console.error("Error fetching additional data:", err);
        setError(err.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdditionalData();
  }, [app.id, API_URL]);

  const platforms: string[] = app.platforms || [];
  const isWindowsAvailable = platforms.map(p => p.toLowerCase()).includes("windows");
  const isMacAvailable = platforms.map(p => p.toLowerCase()).includes("macos");

  const [platform, setPlatform] = useState<"windows" | "mac">(() =>
    isMacAvailable ? "mac" : "windows"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGroups, setFilteredGroups] = useState<ShortcutGroupType[]>(() => app.groups || []);

  const sections = app.groups?.map((group: ShortcutGroupType) => ({
    id: group.title.toLowerCase().replace(/\s+/g, "-"),
    title: group.title,
  })) || [];

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredGroups([...app.groups]);
      return;
    }

    const newFilteredGroups = app.groups
      .map((group: ShortcutGroupType) => ({
        ...group,
        shortcuts: group.shortcuts.filter(
          (shortcut) =>
            shortcut.description.toLowerCase().includes(lowerCaseQuery) ||
            shortcut.keys.join(" ").toLowerCase().includes(lowerCaseQuery)
        ),
      }))
      .filter((group: ShortcutGroupType) => group.shortcuts.length > 0);

    setFilteredGroups(newFilteredGroups);
  };

  // Generate random related apps (excluding the current one)
  const relatedApps = Object.values(applications)
    .filter((b) => b.id !== app.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  {/* Page Layout */ }
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="py-10"> {/* Adjusted padding for consistency */}
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-6 mb-12">
            <div className="relative w-24 h-24 sm:w-20 sm:h-20 shrink-0 bg-gray-100 rounded-lg p-2 mx-auto sm:mx-0">
              <img
                src={app.icon}
                alt={app.name}
                className="w-full h-full object-contain"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 mb-4">
                <h1 className="text-3xl font-bold tracking-tight text-center sm:text-left">
                  {app.shortcutpageName}
                </h1>
                <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-start">
                  {/* Windows Button */}
                  <button
                    onClick={() => isWindowsAvailable && setPlatform("windows")}
                    disabled={!isWindowsAvailable}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${platform === "windows"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      } ${!isWindowsAvailable && "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                  >
                    <img
                      src="https://api.iconify.design/bi:windows.svg"
                      alt="Windows"
                      className="w-5 h-5"
                    />
                    <span>Windows</span>
                  </button>

                  {/* macOS Button */}
                  <button
                    onClick={() => isMacAvailable && setPlatform("mac")}
                    disabled={!isMacAvailable}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${platform === "mac"
                      ? "bg-gray-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
                      } ${!isMacAvailable && "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                  >
                    <img
                      src="https://api.iconify.design/bi:apple.svg"
                      alt="macOS"
                      className="w-5 h-5"
                    />
                    <span>macOS</span>
                  </button>
                </div>
              </div>
              <p className="text-gray-500 text-sm sm:text-base text-center sm:text-left">
                {app.description}
              </p>

              {/* Official URL Section */}
              {app.officialURL && (
                <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left mt-2">
                  Official URL:{" "}
                  <a
                    href={app.officialURL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {app.officialURL}
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search shortcuts..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Shortcuts Groups */}
          <div className="space-y-12">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group: ShortcutGroupType) => (
                <section key={group.title}>
                  <h2
                    id={group.title.toLowerCase().replace(/\s+/g, "-")}
                    className="text-2xl font-bold mb-4"
                  >
                    {group.title}
                  </h2>
                  <ShortcutGroup
                    key={group.title}
                    group={group}
                    platform={platform}
                    setPlatform={setPlatform}
                    isWindowsAvailable={isWindowsAvailable}
                    isMacAvailable={isMacAvailable}
                  />
                </section>
              ))
            ) : (
              <p className="text-gray-500">No shortcuts match your search.</p>
            )}
          </div>

          {/* Related Software */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Software</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedApps.map((relatedApp) => (
                <Link
                  key={relatedApp.id}
                  href={`/software/${relatedApp.id}`}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <div className="cursor-pointer">
                    <img
                      src={relatedApp.icon}
                      alt={relatedApp.name}
                      className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-center">
                      {relatedApp.name}
                    </h3>
                    <p className="text-gray-500 text-sm text-center">
                      {relatedApp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Data Section */}
          <div className="flex flex-col gap-6 bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 mt-12">
            <h1 className="text-3xl font-extrabold text-gray-800">{app.name}</h1>

            {/* Loading/Error States */}
            {loading && <p className="text-gray-500 italic">Loading additional details...</p>}
            {error && <p className="text-red-500 font-semibold">Error: {error}</p>}

            {/* Render Additional Data */}
            {additionalData && (
              <>
                {additionalData.about && (
                  <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">About</h2>
                    <p className="text-gray-600 mt-2">{additionalData.about}</p>
                  </div>
                )}

                {additionalData.social_links && (
                  <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Social Links</h2>
                    <ul className="flex flex-wrap gap-4 mt-2">
                      {Object.entries(additionalData.social_links).map(([key, value]) => (
                        <li key={key}>
                          <a
                            href={value}
                            className="text-blue-600 hover:underline flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium capitalize">
                              {key}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {additionalData.supported_on && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700">Supported On</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {additionalData.supported_on.map((platform) => (
                        <li key={platform} className="capitalize">
                          {platform}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <UnifiedSidebar
        sections={sections}
        details={{
          name: app.name,
          description: app.description,
        }}
        popularItems={Object.values(applications)
          .filter((b) => b.id !== app.id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 5)
          .map((b) => ({
            id: b.id,
            name: b.name,
            icon: b.icon,
            link: `/software/${b.id}`,
          }))}
      />
    </div>
  );

}
