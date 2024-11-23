

//app/games/[id]/client.tsx

// "use client";

// import { useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";

// export default function GamePageClient({ game }: any) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(game.groups);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = game.groups
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
//       {/* Header Section */}
//       <div className="flex items-start gap-6 mb-8">
//         {/* Icon */}
//         <div className="relative w-16 h-16 shrink-0 bg-gray-100 rounded-lg p-1.5">
//           <img
//             src={game.icon}
//             alt={game.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title and Description */}
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-2">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               {game.name}
//             </h1>
//           </div>
//           <p className="text-gray-500">{game.description}</p>
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







// "use client";

// import { useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";

// interface GamePageClientProps {
//   game: any;
// }

// export function GamePageClient({ game }: GamePageClientProps) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(game.groups);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = game.groups
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
//             src={game.icon}
//             alt={game.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title and Description */}
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-2">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               {game.name}
//             </h1>
//           </div>
//           <p className="text-gray-500">{game.description}</p>
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





// "use client";

// import { useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";
// import { UnifiedSidebar } from "@/components/unified-sidebar";

// interface GamePageClientProps {
//   initialData: string;
// }

// export function GamePageClient({ initialData }: GamePageClientProps) {
//   const game = JSON.parse(initialData);

//   // Global platform state
//   const [globalPlatform, setGlobalPlatform] = useState<"windows" | "mac">(() =>
//     game.platforms.includes("macos") ? "mac" : "windows"
//   );

//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(() => game.groups);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     if (!query) {
//       setFilteredGroups(game.groups);
//       return;
//     }

//     const newFilteredGroups = game.groups
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
//     <div className="flex gap-8">
//       <div className="flex-1">
//         <div className="py-5">
//           {/* Header Section */}
//           <div className="flex items-start gap-10 mb-8">
//             <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg p-2">
//               <img
//                 src={game.icon}
//                 alt={game.name}
//                 className="w-full h-full object-contain"
//                 loading="eager"
//                 decoding="sync"
//               />
//             </div>

//             <div className="flex-1">
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-4xl font-bold tracking-tight">{game.name}</h1>
//                 <div className="flex gap-2">
//                   {game.platforms?.includes("windows") && (
//                     <button
//                       onClick={() => setGlobalPlatform("windows")}
//                       className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
//                         globalPlatform === "windows"
//                           ? "bg-blue-600 text-white"
//                           : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//                       }`}
//                     >
//                       <img
//                         src={
//                           globalPlatform === "windows"
//                             ? "https://api.iconify.design/bi:windows.svg?color=white"
//                             : "https://api.iconify.design/bi:windows.svg"
//                         }
//                         alt="Windows"
//                         className="w-5 h-5"
//                         loading="eager"
//                       />
//                       <span>Windows</span>
//                     </button>
//                   )}
//                   {game.platforms?.includes("macos") && (
//                     <button
//                       onClick={() => setGlobalPlatform("mac")}
//                       className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
//                         globalPlatform === "mac"
//                           ? "bg-gray-500 text-white"
//                           : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                       }`}
//                     >
//                       <img
//                         src={
//                           globalPlatform === "mac"
//                             ? "https://api.iconify.design/bi:apple.svg?color=white"
//                             : "https://api.iconify.design/bi:apple.svg"
//                         }
//                         alt="macOS"
//                         className="w-5 h-5"
//                         loading="eager"
//                       />
//                       <span>macOS</span>
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <p className="text-gray-500">{game.description}</p>
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
//               filteredGroups.map((group: any) => (
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
//                     platform={globalPlatform}
//                     setPlatform={setGlobalPlatform}
//                   />
//                 </section>
//               ))
//             ) : (
//               <p className="text-gray-500">No shortcuts match your search.</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <UnifiedSidebar sections={game.groups.map((group: any) => ({
//         id: group.title.toLowerCase().replace(/\s+/g, "-"),
//         title: group.title,
//       }))} />
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";
// import { UnifiedSidebar } from "@/components/unified-sidebar";

// interface GamePageClientProps {
//   initialData: string;
// }

// export function GamePageClient({ initialData }: GamePageClientProps) {
//   const game = JSON.parse(initialData);

//   // Global platform state
//   const [globalPlatform, setGlobalPlatform] = useState<"windows" | "mac">(() =>
//     game.platforms.includes("macos") ? "mac" : "windows"
//   );

//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(() => game.groups);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     if (!query) {
//       setFilteredGroups(game.groups);
//       return;
//     }

//     const newFilteredGroups = game.groups
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
//     <div className="flex gap-8">
//       <div className="flex-1">
//         <div className="py-5">
//           {/* Header Section */}
//           <div className="flex items-start gap-10 mb-8">
//             <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg p-2">
//               <img
//                 src={game.icon}
//                 alt={game.name}
//                 className="w-full h-full object-contain"
//                 loading="eager"
//                 decoding="sync"
//               />
//             </div>

//             <div className="flex-1">
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-4xl font-bold tracking-tight">{game.name}</h1>
//                 <div className="flex gap-2">
//                   {game.platforms?.includes("windows") ? (
//                     <button
//                       onClick={() => setGlobalPlatform("windows")}
//                       className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
//                         globalPlatform === "windows"
//                           ? "bg-blue-600 text-white"
//                           : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//                       }`}
//                     >
//                       <img
//                         src={
//                           globalPlatform === "windows"
//                             ? "https://api.iconify.design/bi:windows.svg?color=white"
//                             : "https://api.iconify.design/bi:windows.svg"
//                         }
//                         alt="Windows"
//                         className="w-5 h-5"
//                         loading="eager"
//                       />
//                       <span>Windows</span>
//                     </button>
//                   ) : (
//                     <button
//                       disabled
//                       className="px-4 py-2 rounded-lg flex items-center gap-2 bg-gray-200 text-gray-400 cursor-not-allowed"
//                     >
//                       <img
//                         src="https://api.iconify.design/bi:windows.svg"
//                         alt="Windows"
//                         className="w-5 h-5"
//                         loading="eager"
//                       />
//                       <span>Windows</span>
//                     </button>
//                   )}
//                   {game.platforms?.includes("macos") ? (
//                     <button
//                       onClick={() => setGlobalPlatform("mac")}
//                       className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
//                         globalPlatform === "mac"
//                           ? "bg-gray-500 text-white"
//                           : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                       }`}
//                     >
//                       <img
//                         src={
//                           globalPlatform === "mac"
//                             ? "https://api.iconify.design/bi:apple.svg?color=white"
//                             : "https://api.iconify.design/bi:apple.svg"
//                         }
//                         alt="macOS"
//                         className="w-5 h-5"
//                         loading="eager"
//                       />
//                       <span>macOS</span>
//                     </button>
//                   ) : (
//                     <button
//                       disabled
//                       className="px-4 py-2 rounded-lg flex items-center gap-2 bg-gray-200 text-gray-400 cursor-not-allowed"
//                     >
//                       <img
//                         src="https://api.iconify.design/bi:apple.svg"
//                         alt="macOS"
//                         className="w-5 h-5"
//                         loading="eager"
//                       />
//                       <span>macOS</span>
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <p className="text-gray-500">{game.description}</p>
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
//               filteredGroups.map((group: any) => (
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
//                     platform={globalPlatform}
//                     setPlatform={setGlobalPlatform}
//                   />
//                 </section>
//               ))
//             ) : (
//               <p className="text-gray-500">No shortcuts match your search.</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <UnifiedSidebar
//         sections={game.groups.map((group: any) => ({
//           id: group.title.toLowerCase().replace(/\s+/g, "-"),
//           title: group.title,
//         }))}
//       />
//     </div>
//   );
// }

//app/games/[id]/client.tsx
// app/games/[id]/client.tsx
"use client";

import { useState } from "react";
import { ShortcutGroup } from "@/components/shortcut-group";
import { Search } from "lucide-react";
import { UnifiedSidebar } from "@/components/unified-sidebar";
import { ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";

interface GamePageClientProps {
  initialData: string;
}

export function GamePageClient({ initialData }: GamePageClientProps) {
  const game = JSON.parse(initialData);

  // Ensure `platforms` is a valid array to prevent runtime issues
  const platforms: string[] = game.platforms || [];

  // Determine platform availability
  const isWindowsAvailable = platforms.includes("windows");
  const isMacAvailable = platforms.includes("macos");

  // Global platform state
  const [globalPlatform, setGlobalPlatform] = useState<"windows" | "mac">(() =>
    isMacAvailable ? "mac" : "windows"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGroups, setFilteredGroups] = useState<ShortcutGroupType[]>(() => game.groups || []);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredGroups(game.groups);
      return;
    }

    const newFilteredGroups = game.groups
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

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <div className="py-5">
          {/* Header Section */}
          <div className="flex items-start gap-10 mb-8">
            <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg p-2">
              <img
                src={game.icon}
                alt={game.name}
                className="w-full h-full object-contain"
                loading="eager"
                decoding="sync"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold tracking-tight">{game.name}</h1>
                <div className="flex gap-2">
                  {/* Windows Button */}
                  <button
                    onClick={() => isWindowsAvailable && setGlobalPlatform("windows")}
                    disabled={!isWindowsAvailable}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
                      globalPlatform === "windows"
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
                    onClick={() => isMacAvailable && setGlobalPlatform("mac")}
                    disabled={!isMacAvailable}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
                      globalPlatform === "mac"
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
              <p className="text-gray-500">{game.description}</p>
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
                    platform={globalPlatform}
                    setPlatform={setGlobalPlatform}
                    isWindowsAvailable={isWindowsAvailable}
                    isMacAvailable={isMacAvailable}
                  />
                </section>
              ))
            ) : (
              <p className="text-gray-500">No shortcuts match your search.</p>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <UnifiedSidebar
        sections={game.groups.map((group: ShortcutGroupType) => ({
          id: group.title.toLowerCase().replace(/\s+/g, "-"),
          title: group.title,
        }))}
      />
    </div>
  );
}
