
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


"use client";

import { useState } from "react";
import { ShortcutGroup } from "@/components/shortcut-group";
import { Search } from "lucide-react";
import { UnifiedSidebar } from "@/components/unified-sidebar";
import { Application, ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";

interface SoftwarePageClientProps {
  initialData: string;
}

export function SoftwarePageClient({ initialData }: SoftwarePageClientProps) {
  const app = JSON.parse(initialData) as Application;

  // Ensure `platforms` is a valid array to prevent runtime issues
  const platforms: string[] = [...app.platforms];

  // Determine platform availability
  const isWindowsAvailable = platforms.includes("windows");
  const isMacAvailable = platforms.includes("macos");

  const [platform, setPlatform] = useState<"windows" | "mac">(() =>
    isMacAvailable ? "mac" : "windows"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGroups, setFilteredGroups] = useState<ShortcutGroupType[]>(() => [...app.groups]);

  const sections = app.groups?.map((group: ShortcutGroupType) => ({
    id: group.title.toLowerCase().replace(/\s+/g, "-"),
    title: group.title,
  })) || [];

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredGroups([...app.groups]); // Use a mutable copy here
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

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="py-5">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-8">
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
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-center sm:text-left">
                  {app.name}
                </h1>
                <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-start">
                  {/* Windows Button */}
                  <button
                    onClick={() => isWindowsAvailable && setPlatform("windows")}
                    disabled={!isWindowsAvailable}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
                      platform === "windows"
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
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
                      platform === "mac"
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
        </div>
      </div>
      <UnifiedSidebar sections={sections} />
    </div>
  );
}
