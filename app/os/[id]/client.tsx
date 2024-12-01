// app/os/[id]/client.tsx

// "use client";

// import { useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";

// export default function OSPageClient({ os }: any) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(os.groups);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = os.groups
//       .map((group: any) => ({
//         ...group,
//         shortcuts: group.shortcuts.filter(
//           (shortcut: any) =>
//             shortcut.description.toLowerCase().includes(lowerCaseQuery) ||
//             shortcut.keys.join(" ").toLowerCase().includes(lowerCaseQuery)
//         ),
//       }))
//       .filter((group: any) => group.shortcuts.length > 0);

//     setFilteredGroups(newFilteredGroups);
//   };

//   return (
//     <div className="container py-5">
//       {/* Header Section - Reduced gap from 10 to 6 */}
//       <div className="flex items-start gap-6 mb-8">
//         {/* Icon with reduced padding */}
//         <div className="relative w-16 h-16 shrink-0 bg-gray-100 rounded-lg p-1.5">
//           <img
//             src={os.icon}
//             alt={os.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title and Description with adjusted spacing */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold tracking-tight mb-1">{os.name}</h1>
//           <p className="text-gray-500">{os.description}</p>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="relative mb-6">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-5 w-5 text-gray-400" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search shortcuts..."
//           value={searchQuery}
//           onChange={(e) => handleSearch(e.target.value)}
//           className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         />
//       </div>

//       {/* Shortcuts Groups */}
//       <div className="space-y-12">
//         {filteredGroups.length > 0 ? (
//           filteredGroups.map((group: any) => (
//             <ShortcutGroup key={group.title} group={group} />
//           ))
//         ) : (
//           <p className="text-gray-500">No shortcuts match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// }



// // app/os/[id]/client.tsx
// "use client";

// import { useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";

// interface OSPageClientProps {
//   os: any;
// }

// export function OSPageClient({ os }: OSPageClientProps) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(os.groups);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = os.groups
//       .map((group: any) => ({
//         ...group,
//         shortcuts: group.shortcuts.filter(
//           (shortcut: any) =>
//             shortcut.description.toLowerCase().includes(lowerCaseQuery) ||
//             shortcut.keys.join(" ").toLowerCase().includes(lowerCaseQuery)
//         ),
//       }))
//       .filter((group: any) => group.shortcuts.length > 0);

//     setFilteredGroups(newFilteredGroups);
//   };

//   return (
//     <div className="py-5">
//       {/* Header Section */}
//       <div className="flex items-start gap-6 mb-8">
//         {/* Icon */}
//         <div className="relative w-16 h-16 shrink-0 bg-gray-100 rounded-lg p-1.5">
//           <img
//             src={os.icon}
//             alt={os.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title and Description */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold tracking-tight mb-1">{os.name}</h1>
//           <p className="text-gray-500">{os.description}</p>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="relative mb-6">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-5 w-5 text-gray-400" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search shortcuts..."
//           value={searchQuery}
//           onChange={(e) => handleSearch(e.target.value)}
//           className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         />
//       </div>

//       {/* Shortcuts Groups */}
//       <div className="space-y-12">
//         {filteredGroups.length > 0 ? (
//           filteredGroups.map((group: any) => (
//             <section key={group.title}>
//               <h2 
//                 id={group.title.toLowerCase().replace(/\s+/g, "-")} 
//                 className="text-2xl font-bold mb-4"
//               >
//                 {group.title}
//               </h2>
//               <ShortcutGroup
//                 group={group}
//               />
//             </section>
//           ))
//         ) : (
//           <p className="text-gray-500">No shortcuts match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// }









//app/os/[id]/client.tsx

"use client";

import { useState, useEffect } from "react"; // Add useEffect to the import
import { ShortcutGroup } from "@/components/shortcut-group";
import { Search } from "lucide-react";
import { ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";
import { OperatingSystems } from "@/data/operating-systems"; // Import browsers data
import Link from "next/link";
import { UnifiedSidebar } from "@/components/unified-sidebar";



// interface OSPageClientProps {
//   os: {
//     icon: string;
//     name: string;
//     description: string;
//     platforms: readonly string[]; // Updated to readonly
//     groups: readonly ShortcutGroupType[];
//   };
// }


interface OSPageClientProps {
  initialData: string;
}

export function OSShortcutPageClient({ initialData }: OSPageClientProps) {

  const operatingSys = JSON.parse(initialData);

  const [platform, setPlatform] = useState<"windows" | "mac">("windows");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredGroups, setFilteredGroups] = useState<readonly ShortcutGroupType[]>(operatingSys.groups);

  useEffect(() => {
    if (operatingSys.platforms.includes("macos")) {
      setPlatform("mac");
    }
  }, [operatingSys.platforms]);



  const sections = operatingSys.groups?.map((group: ShortcutGroupType) => ({
    id: group.title.toLowerCase().replace(/\s+/g, "-"),
    title: group.title,
  })) || [];


  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setSearchQuery(query);

    const newFilteredGroups = operatingSys.groups
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

  // Ensure platform availability checks
  const isWindowsAvailable = operatingSys.platforms.includes("windows");
  const isMacAvailable = operatingSys.platforms.includes("macos");


  // Generate random related browsers (excluding the current one)
  const relatedOs = Object.values(OperatingSystems)
    .filter((b) => b.id !== operatingSys.id) // Exclude the current browser
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 3); // Select the top 3

  return (

    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 px-4 sm:px-6 lg:px-8">


        <div className="py-5">
          {/* Header Section */}
          <div className="flex items-start gap-6 mb-8">
            <div className="relative w-16 h-16 shrink-0 bg-gray-100 rounded-lg p-1.5">
              <img src={operatingSys.icon} alt={operatingSys.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight mb-1">{operatingSys.shortcutpageName}</h1>
              <p className="text-gray-500">{operatingSys.description}</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
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
              filteredGroups.map((group) => (
                <section key={group.title}>
                  <h2
                    id={group.title.toLowerCase().replace(/\s+/g, "-")}
                    className="text-2xl font-bold mb-4"
                  >
                    {group.title}
                  </h2>
                  <ShortcutGroup
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


          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">More Operating Systems</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedOs.map((relatedOs) => (
                <Link
                  key={relatedOs.id}
                  href={`/os/${relatedOs.id}`}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <div className="cursor-pointer">
                    <img
                      src={relatedOs.icon}
                      alt={relatedOs.name}
                      className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-center">
                      {relatedOs.name}
                    </h3>
                    <p className="text-gray-500 text-sm text-center">
                      {relatedOs.description}
                    </p>
                  </div>
                </Link>
              ))}


            </div>


          </div>

        </div>

      </div>
      <UnifiedSidebar sections={sections} />
    </div>
  );
}
