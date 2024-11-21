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



// app/os/[id]/client.tsx
"use client";

import { useState } from "react";
import { ShortcutGroup } from "@/components/shortcut-group";
import { Search } from "lucide-react";

interface OSPageClientProps {
  os: any;
}

export function OSPageClient({ os }: OSPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGroups, setFilteredGroups] = useState(os.groups);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setSearchQuery(query);

    const newFilteredGroups = os.groups
      .map((group: any) => ({
        ...group,
        shortcuts: group.shortcuts.filter(
          (shortcut: any) =>
            shortcut.description.toLowerCase().includes(lowerCaseQuery) ||
            shortcut.keys.join(" ").toLowerCase().includes(lowerCaseQuery)
        ),
      }))
      .filter((group: any) => group.shortcuts.length > 0);

    setFilteredGroups(newFilteredGroups);
  };

  return (
    <div className="py-5">
      {/* Header Section */}
      <div className="flex items-start gap-6 mb-8">
        {/* Icon */}
        <div className="relative w-16 h-16 shrink-0 bg-gray-100 rounded-lg p-1.5">
          <img
            src={os.icon}
            alt={os.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title and Description */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight mb-1">{os.name}</h1>
          <p className="text-gray-500">{os.description}</p>
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
          filteredGroups.map((group: any) => (
            <section key={group.title}>
              <h2 
                id={group.title.toLowerCase().replace(/\s+/g, "-")} 
                className="text-2xl font-bold mb-4"
              >
                {group.title}
              </h2>
              <ShortcutGroup
                group={group}
              />
            </section>
          ))
        ) : (
          <p className="text-gray-500">No shortcuts match your search.</p>
        )}
      </div>
    </div>
  );
}