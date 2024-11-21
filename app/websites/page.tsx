// import { Globe } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

// const websites = [
//   {
//     id: "github",
//     name: "GitHub",
//     icon: "/icons/websites/github.svg",
//     description: "GitHub keyboard shortcuts",
//   },
//   {
//     id: "gmail",
//     name: "Gmail",
//     icon: "/icons/websites/gmail.svg",
//     description: "Gmail keyboard shortcuts",
//   },
//   {
//     id: "youtube",
//     name: "Youtube",
//     icon: "/icons/websites/youtube.svg",
//     description: "Gmail keyboard shortcuts",
//   },
// ];

// export default function WebsitesPage() {
//   return (
//     <div className="container py-10 ml-16">
//       <div className="flex items-center gap-4 mb-8">
//         <Globe className="h-10 w-10" />
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">Website Shortcuts</h1>
//           <p className="text-muted-foreground">
//             Keyboard shortcuts for popular websites and web applications
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {websites.map((site) => (
//           <Link key={site.id} href={`/websites/${site.id}`}>
//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={site.icon}
//                   alt={site.name}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h2 className="font-semibold">{site.name}</h2>
//                   <p className="text-sm text-muted-foreground">
//                     {site.description}
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












// // app/websites/page.tsx/

// import { Globe } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

// const websites = [
//   {
//     id: "github",
//     name: "GitHub",
//     icon: "/icons/websites/github.svg",
//     description: "GitHub keyboard shortcuts",
//   },
//   {
//     id: "gmail",
//     name: "Gmail",
//     icon: "/icons/websites/gmail.svg",
//     description: "Gmail keyboard shortcuts",
//   },
//   {
//     id: "youtube",
//     name: "Youtube",
//     icon: "/icons/websites/youtube.svg",
//     description: "YouTube keyboard shortcuts", // Fixed typo in description
//   },
//   {
//     id: "notion",
//     name: "Notion",
//     icon: "/icons/websites/notion.svg",
//     description: "Notion keyboard shortcuts",
//   },
//   {
//     id: "figma",
//     name: "Figma",
//     icon: "/icons/websites/figma.svg",
//     description: "Figma keyboard shortcuts",
//   },
//   // Add more websites if needed
// ];

// export default function WebsitesPage() {
//   return (
//     <div className="py-10">
//       {/* Header Section */}
//       <div className="flex items-start gap-4 mb-12">
//         <Globe className="h-12 w-12" />
//         <div>
//           <h1 className="text-3xl font-bold">Website Shortcuts</h1>
//           <p className="text-gray-500 text-lg">
//             Keyboard shortcuts for popular websites and web applications
//           </p>
//         </div>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {websites.map((site) => (
//           <Link key={site.id} href={`/websites/${site.id}`}>
//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={site.icon}
//                   alt={site.name}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h2 className="font-semibold">{site.name}</h2>
//                   <p className="text-sm text-muted-foreground">
//                     {site.description}
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

// app/websites/page.tsx

"use client";

import { useState } from "react";
import { Search, Globe, X } from "lucide-react";
import Link from "next/link";
import { websites as websitesData } from "@/data/websites";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Pre-compute the websites array
const websitesArray = Array.isArray(websitesData)
  ? websitesData
  : Object.values(websitesData);

export default function WebsitesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredWebsites = searchQuery
    ? websitesArray.filter(site =>
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : websitesArray;

  return (
    <div className="py-10">
      {/* Header Section with Search */}
      <div className="flex justify-between items-start mb-12">
        {/* Title and Description */}
        <div className="flex items-start gap-4">
          <Globe className="h-12 w-12 text-500" />
          <div>
            <h1 className="text-3xl font-bold">Website Shortcuts</h1>
            <p className="text-gray-500 text-lg">
              Keyboard shortcuts for popular websites and web applications
            </p>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="relative w-72 group">
          <div
            className={cn(
              "relative flex items-center transition-all duration-300",
              isFocused && "scale-105"
            )}
          >
            <Search
              className={cn(
                "absolute left-3 w-5 h-5 transition-all duration-300",
                isFocused ? "text-blue-500" : "text-gray-400"
              )}
            />
            <input
              type="text"
              placeholder="Search websites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                "w-full pl-10 pr-4 py-2.5 border rounded-lg",
                "bg-white/80 backdrop-blur-sm",
                "transition-all duration-300 ease-in-out",
                "placeholder:text-gray-400 placeholder:transition-opacity",
                "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500",
                isFocused ? "shadow-lg border-blue-500" : "border-gray-200 shadow-sm",
                "hover:border-gray-300"
              )}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={cn(
                  "absolute right-3 p-1 rounded-full",
                  "text-gray-400 hover:text-gray-600",
                  "hover:bg-gray-100 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                )}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Results Count */}
          {searchQuery && (
            <div className="absolute -bottom-6 left-0 text-sm text-gray-500 transition-opacity">
              {filteredWebsites.length} result{filteredWebsites.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWebsites.length > 0 ? (
          filteredWebsites.map((site) => (
            <Link key={site.id} href={`/websites/${site.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0">
                    <img
                      src={site.icon}
                      alt={site.name}
                      className="w-full h-full rounded object-contain"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold">{site.name}</h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      {site.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No websites found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}