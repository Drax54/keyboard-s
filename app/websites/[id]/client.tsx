// app/websites/[id]/client.tsx


// "use client";

// import { useState } from "react";
// import { Application } from "@/types/shortcut";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { PlatformToggle } from "@/components/platform-toggle";

// interface WebsitePageClientProps {
//   website: Application;
// }

// export function WebsitePageClient({ website }: WebsitePageClientProps) {
//   const [platform, setPlatform] = useState<"windows" | "mac">("windows");

//   return (
//     <div className="container py-10">
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center gap-4">
//           <img src={website.icon} alt={website.name} className="w-12 h-12" />
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight">{website.name}</h1>
//             <p className="text-muted-foreground">{website.description}</p>
//           </div>
//         </div>
//         <PlatformToggle platform={platform} onPlatformChange={setPlatform} />
//       </div>

//       <div className="space-y-12">
//         {website.groups.map((group) => (
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



// app/websites/[id]/client.tsx

// "use client";

// import { useState, useEffect } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";

// interface Section {
//   id: string;
//   title: string;
// }

// interface WebsitePageClientProps {
//   website: any;
//   initialSections: Section[];
// }

// export function WebsitePageClient({ website, initialSections }: WebsitePageClientProps) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(website.groups);

//   // Pass initial sections to sidebar on mount
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       window.dispatchEvent(new CustomEvent('sectionsReady', { 
//         detail: { sections: initialSections }
//       }));
//     }
//   }, [initialSections]);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = website.groups
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
//       <div className="flex items-start gap-10 mb-8">
//         <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg p-2">
//           <img
//             src={website.icon}
//             alt={website.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         <div>
//           <h1 className="text-4xl font-bold tracking-tight">{website.name}</h1>
//           <p className="text-gray-500">{website.description}</p>
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
//             <div key={group.title} id={group.title.toLowerCase().replace(/\s+/g, '-')}>
//               <ShortcutGroup group={group} />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No shortcuts match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// }















// app/websites/[id]/client.tsx

// "use client";

// import { useEffect, useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";
// import { useSections } from "@/context/SectionsContext";

// export function WebsitePageClient({ website }: { website: any }) {
//   const { setSections } = useSections();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(website.groups);

//   useEffect(() => {
//     const sections = website.groups.map((group: any) => ({
//       id: group.title.toLowerCase().replace(/\s+/g, "-"),
//       title: group.title,
//     }));
//     setSections(sections);
//   }, [website.groups, setSections]);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = website.groups
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
//       <div className="flex items-start gap-10 mb-8">
//         <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg p-2">
//           <img
//             src={website.icon}
//             alt={website.name}
//             className="w-full h-full object-contain"
//           />
//         </div>
//         <div>
//           <h1 className="text-4xl font-bold tracking-tight">{website.name}</h1>
//           <p className="text-gray-500">{website.description}</p>
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
//             <div key={group.title} id={group.title.toLowerCase().replace(/\s+/g, "-")}>
//               <ShortcutGroup group={group} />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No shortcuts match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// }


// app/websites/[id]/client.tsx


// "use client";

// import { useEffect, useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";
// import { useSections } from "@/context/SectionsContext";

// export function WebsitePageClient({ website }: { website: any }) {
//   const { setSections } = useSections();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(website.groups);
//   const [globalPlatform, setGlobalPlatform] = useState<"windows" | "macos">("windows");
//   const [individualPlatformOverrides, setIndividualPlatformOverrides] = useState<Record<string, "windows" | "macos">>({});

//   useEffect(() => {
//     const sections = website.groups.map((group: any) => ({
//       id: group.title.toLowerCase().replace(/\s+/g, "-"),
//       title: group.title,
//     }));
//     setSections(sections);
//   }, [website.groups, setSections]);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = website.groups
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

//   const handleGlobalPlatformChange = (platform: "windows" | "macos") => {
//     setGlobalPlatform(platform);
//     setIndividualPlatformOverrides({});
//   };

//   const handleIndividualPlatformChange = (shortcutId: string, platform: "windows" | "macos") => {
//     setIndividualPlatformOverrides((prev) => ({
//       ...prev,
//       [shortcutId]: platform,
//     }));
//   };

//   const getPlatformForShortcut = (shortcutId: string): "windows" | "macos" => {
//     return individualPlatformOverrides[shortcutId] || globalPlatform;
//   };

//   return (
//     <div className="container py-5">
//       {/* Header Section */}
//       <div className="flex items-start gap-10 mb-8">
//         <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg p-2">
//           <img
//             src={website.icon}
//             alt={website.name}
//             className="w-full h-full object-contain"
//           />
//         </div>
//         <div>
//           <h1 className="text-4xl font-bold tracking-tight">{website.name}</h1>
//           <p className="text-gray-500">{website.description}</p>
//         </div>
//       </div>

//       {/* Platform Selection Buttons */}
//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => handleGlobalPlatformChange("windows")}
//           className={`px-4 py-2 rounded-lg ${
//             globalPlatform === "windows"
//               ? "bg-blue-600 text-white"
//               : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//           }`}
//         >
//           Windows
//         </button>
//         <button
//           onClick={() => handleGlobalPlatformChange("macos")}
//           className={`px-4 py-2 rounded-lg ${
//             globalPlatform === "macos"
//               ? "bg-blue-600 text-white"
//               : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//           }`}
//         >
//           macOS
//         </button>
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
//             <div key={group.title} id={group.title.toLowerCase().replace(/\s+/g, "-")}>
//               <ShortcutGroup
//                 group={group}
//                 getPlatformForShortcut={getPlatformForShortcut}
//                 onPlatformChange={handleIndividualPlatformChange}
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No shortcuts match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// }



// app/websites/[id]/client.tsx


// "use client";

// import { useEffect, useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";
// import { useSections } from "@/context/SectionsContext";

// export function WebsitePageClient({ website }: { website: any }) {
//   const { setSections } = useSections();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(website.groups);
//   const [platform, setPlatform] = useState<"windows" | "mac">("windows");

//   useEffect(() => {
//     const sections = website.groups.map((group: any) => ({
//       id: group.title.toLowerCase().replace(/\s+/g, "-"),
//       title: group.title,
//     }));
//     setSections(sections);
//   }, [website.groups, setSections]);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = website.groups
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
//             src={website.icon}
//             alt={website.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title and Description */}
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-2">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//               {website.name}
//             </h1>
//             {/* Platform Toggles */}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setPlatform("windows")}
//                 className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition duration-200 ${
//                   platform === "windows"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//                 }`}
//               >
//                 <img
//                   src={
//                     platform === "windows"
//                       ? "https://api.iconify.design/bi:windows.svg?color=white"
//                       : "https://api.iconify.design/bi:windows.svg"
//                   }
//                   alt="Windows"
//                   className="w-4 h-4"
//                 />
//                 <span className="text-sm">Windows</span>
//               </button>
//               <button
//                 onClick={() => setPlatform("mac")}
//                 className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition duration-200 ${
//                   platform === "mac"
//                     ? "bg-gray-500 text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                 }`}
//               >
//                 <img
//                   src={
//                     platform === "mac"
//                       ? "https://api.iconify.design/bi:apple.svg?color=white"
//                       : "https://api.iconify.design/bi:apple.svg"
//                   }
//                   alt="macOS"
//                   className="w-4 h-4"
//                 />
//                 <span className="text-sm">macOS</span>
//               </button>
//             </div>
//           </div>
//           <p className="text-gray-500">{website.description}</p>
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
//             <div key={group.title} id={group.title.toLowerCase().replace(/\s+/g, "-")}>
//               <ShortcutGroup
//                 group={group}
//                 platform={platform}
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No shortcuts match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// }







// app/websites/[id]/client.tsx

// "use client";

// import { useEffect, useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";
// import { useSections } from "@/context/SectionsContext";

// export function WebsitePageClient({ website }: { website: any }) {
//   const { setSections } = useSections();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(website.groups);
//   const [platform, setPlatform] = useState<"windows" | "mac">(
//     website.platforms.includes("macos") ? "mac" : "windows"
//   );

//   useEffect(() => {
//     const sections = website.groups.map((group: any) => ({
//       id: group.title.toLowerCase().replace(/\s+/g, "-"),
//       title: group.title,
//     }));
//     setSections(sections);
//   }, [website.groups, setSections]);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = website.groups
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
//       <div className="flex items-start gap-10 mb-8">
//         {/* Logo Section */}
//         <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg p-2">
//           <img
//             src={website.icon}
//             alt={website.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title and Description */}
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-4xl font-bold tracking-tight">{website.name}</h1>
//             {/* Platform Toggles */}
//             <div className="flex gap-2">
//               {website.platforms?.includes("windows") && (
//                 <button
//                   onClick={() => setPlatform("windows")}
//                   className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
//                     platform === "windows"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//                   }`}
//                 >
//                   <img
//                     src={
//                       platform === "windows"
//                         ? "https://api.iconify.design/bi:windows.svg?color=white"
//                         : "https://api.iconify.design/bi:windows.svg"
//                     }
//                     alt="Windows"
//                     className="w-5 h-5"
//                   />
//                   <span>Windows</span>
//                 </button>
//               )}
//               {website.platforms?.includes("macos") && (
//                 <button
//                   onClick={() => setPlatform("mac")}
//                   className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
//                     platform === "mac"
//                       ? "bg-gray-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                   }`}
//                 >
//                   <img
//                     src={
//                       platform === "mac"
//                         ? "https://api.iconify.design/bi:apple.svg?color=white"
//                         : "https://api.iconify.design/bi:apple.svg"
//                     }
//                     alt="macOS"
//                     className="w-5 h-5"
//                   />
//                   <span>macOS</span>
//                 </button>
//               )}
//             </div>
//           </div>
//           <p className="text-gray-500">{website.description}</p>
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
//             <ShortcutGroup key={group.title} group={group} platform={platform} />
//           ))
//         ) : (
//           <p className="text-gray-500">No shortcuts match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// }




// // app/websites/[id]/client.tsx
// "use client";

// import { useState } from "react";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { Search } from "lucide-react";

// interface WebsitePageClientProps {
//   website: any;
// }

// export function WebsitePageClient({ website }: WebsitePageClientProps) {
//   const [platform, setPlatform] = useState<"windows" | "mac">(
//     website.platforms.includes("macos") ? "mac" : "windows"
//   );
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredGroups, setFilteredGroups] = useState(website.groups);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);

//     const newFilteredGroups = website.groups
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
//       <div className="flex items-start gap-10 mb-8">
//         {/* Logo Section */}
//         <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg p-2">
//           <img
//             src={website.icon}
//             alt={website.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Title and Description */}
//         <div className="flex-1">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-4xl font-bold tracking-tight">{website.name}</h1>
//             {/* Platform Toggles */}
//             <div className="flex gap-2">
//               {website.platforms?.includes("windows") && (
//                 <button
//                   onClick={() => setPlatform("windows")}
//                   className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
//                     platform === "windows"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//                   }`}
//                 >
//                   <img
//                     src={
//                       platform === "windows"
//                         ? "https://api.iconify.design/bi:windows.svg?color=white"
//                         : "https://api.iconify.design/bi:windows.svg"
//                     }
//                     alt="Windows"
//                     className="w-5 h-5"
//                   />
//                   <span>Windows</span>
//                 </button>
//               )}
//               {website.platforms?.includes("macos") && (
//                 <button
//                   onClick={() => setPlatform("mac")}
//                   className={`px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200 ${
//                     platform === "mac"
//                       ? "bg-gray-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                   }`}
//                 >
//                   <img
//                     src={
//                       platform === "mac"
//                         ? "https://api.iconify.design/bi:apple.svg?color=white"
//                         : "https://api.iconify.design/bi:apple.svg"
//                     }
//                     alt="macOS"
//                     className="w-5 h-5"
//                   />
//                   <span>macOS</span>
//                 </button>
//               )}
//             </div>
//           </div>
//           <p className="text-gray-500">{website.description}</p>
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
//                 platform={platform}
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






// // app/websites/[id]/client.tsx
"use client";

import { useState } from "react";
import { ShortcutGroup } from "@/components/shortcut-group";
import { Search } from "lucide-react";
import { UnifiedSidebar } from "@/components/unified-sidebar";
import { ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";
import { websites } from "@/data/websites";
import Link from "next/link";


interface WebsitePageClientProps {
  initialData: string;
}

export function WebsitePageClient({ initialData }: WebsitePageClientProps) {
  const website = JSON.parse(initialData);

  // Ensure `platforms` is a valid array to prevent runtime issues
  const platforms: string[] = website.platforms || [];

  // Determine platform availability
  const isWindowsAvailable = platforms.includes("windows");
  const isMacAvailable = platforms.includes("macos");

  const [platform, setPlatform] = useState<"windows" | "mac">(() =>
    isMacAvailable ? "mac" : "windows"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGroups, setFilteredGroups] = useState<ShortcutGroupType[]>(() => website.groups);

  const sections = website.groups?.map((group: ShortcutGroupType) => ({
    id: group.title.toLowerCase().replace(/\s+/g, "-"),
    title: group.title,
  })) || [];

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredGroups(website.groups);
      return;
    }

    const newFilteredGroups = website.groups
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

    // Generate random related browsers (excluding the current one)
    const relatedWebsites = Object.values(websites)
    .filter((b) => b.id !== website.id) // Exclude the current browser
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 3); // Select the top 3


  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="py-5">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-6 mb-8">
            <div className="relative w-24 h-24 sm:w-20 sm:h-20 shrink-0 bg-gray-100 rounded-lg p-2 mx-auto sm:mx-0">
              <img
                src={website.icon}
                alt={website.name}
                className="w-full h-full object-contain"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center sm:text-left">
                  {website.shortcutpageName}
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
                {website.description}
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

          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Websites Keyboard Shortcuts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedWebsites.map((relatedWebsites) => (
                <Link
                  key={relatedWebsites.id}
                  href={`/websites/${relatedWebsites.id}`}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                  <div className="cursor-pointer">
                    <img
                      src={relatedWebsites.icon}
                      alt={relatedWebsites.name}
                      className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-center">
                      {relatedWebsites.name}
                    </h3>
                    <p className="text-gray-500 text-sm text-center">
                      {relatedWebsites.description}
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
