
// // components/shortcut-group.tsx
// "use client";

// import { ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";
// import { ShortcutCard } from "./shortcut-card";

// interface ShortcutGroupProps {
//   group: ShortcutGroupType;
//   platform: "windows" | "mac";
//   onPlatformChange: (platform: "windows" | "mac") => void;
// }

// export function ShortcutGroup({ group, platform, onPlatformChange }: ShortcutGroupProps) {
//   // Convert title to kebab-case for the ID
//   const sectionId = group.title.toLowerCase().replace(/\s+/g, '-');

//   return (
//     <div className="space-y-4" id={sectionId}>
//       <h2 className="text-2xl font-semibold tracking-tight scroll-m-20">
//         {group.title}
//       </h2>
//       <div className="grid gap-4">
//         {group.shortcuts.map((shortcut) => (
//           <ShortcutCard 
//             key={shortcut.id} 
//             shortcut={shortcut}
//             platform={platform}
//             onPlatformChange={onPlatformChange}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }







// components/shortcut-group.tsx


"use client";

import { ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";
import { ShortcutCard } from "./shortcut-card";

interface ShortcutGroupProps {
  group: ShortcutGroupType;
  platform: "windows" | "mac";
  onPlatformChange: (platform: "windows" | "mac") => void;
}

export function ShortcutGroup({ group, platform, setPlatform  }: ShortcutGroupProps) {
  const sectionId = group.title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      {/* <h2 className="text-xl font-bold mb-4">{group.title}</h2> */}
      <div className="grid gap-4">
        {group.shortcuts.map((shortcut: any) => (
          <ShortcutCard
            key={shortcut.id}
            shortcut={shortcut}
            platform={platform}
            setPlatform={setPlatform} // Pass it here
          />
        ))}
      </div>
    </div>
  );
}





