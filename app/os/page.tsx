// app/os/page.tsx

// import { Monitor } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

// const operatingSystems = [
//   {
//     id: "windows",
//     name: "Windows",
//     icon: "/icons/os/windows.svg",
//     description: "Windows keyboard shortcuts",
//   },
//   {
//     id: "macos",
//     name: "macOS",
//     icon: "/icons/os/macos.svg",
//     description: "macOS keyboard shortcuts",
//   },
//   {
//     id: "linux",
//     name: "Linux",
//     icon: "/icons/os/linux.svg",
//     description: "Linux keyboard shortcuts",
//   },
//   {
//     id: "chromeos",
//     name: "ChromeOS",
//     icon: "/icons/os/chromeos.svg",
//     description: "Essential ChromeOS shortcuts for Chromebooks",
//   },
//   {
//     id: "unix",
//     name: "Unix",
//     icon: "/icons/os/unix.png",
//     description: "Comprehensive Unix shortcuts for terminal-based systems",
//   },
// ];

// export default function OSPage() {
//   return (
//     <div className="py-10">
//       {/* Header Section */}
//       <div className="flex items-start gap-4 mb-12">
//         <Monitor className="h-12 w-12" />
//         <div>
//           <h1 className="text-3xl font-bold">Operating System Shortcuts</h1>
//           <p className="text-gray-500 text-lg">
//             Essential keyboard shortcuts for different operating systems
//           </p>
//         </div>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {operatingSystems.map((os) => (
//           <Link key={os.id} href={`/os/${os.id}`}>
//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={os.icon}
//                   alt={os.name}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h2 className="font-semibold">{os.name}</h2>
//                   <p className="text-sm text-muted-foreground">
//                     {os.description}
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





// app/os/page.tsx
"use client";

import { useState } from "react";
import { Search, Monitor, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { operatingSystems as osData } from "@/data/operating-systems";

// Pre-compute the OS array
const operatingSystemsArray = Object.values(osData);

export default function OSPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredOS = searchQuery
    ? operatingSystemsArray.filter(os => 
        os.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        os.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : operatingSystemsArray;

  return (
    <div className="py-10">
      {/* Header Section with Search */}
      <div className="flex justify-between items-start mb-12">
        {/* Title and Description */}
        <div className="flex items-start gap-4">
          <Monitor className="h-12 w-12" />
          <div>
            <h1 className="text-3xl font-bold">Operating System Shortcuts</h1>
            <p className="text-gray-500 text-lg">
              Essential keyboard shortcuts for different operating systems
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
              placeholder="Search OS..."
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
              {filteredOS.length} result{filteredOS.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOS.length > 0 ? (
          filteredOS.map((os) => (
            <Link key={os.id} href={`/os/${os.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0">
                    <img
                      src={os.icon}
                      alt={os.name}
                      className="w-full h-full rounded object-contain"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold">{os.name}</h2>
                    <p className="text-base text-muted-foreground">
                      {os.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No operating systems found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}