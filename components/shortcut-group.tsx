
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


// "use client";

// import { ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";
// import { ShortcutCard } from "./shortcut-card";

// interface ShortcutGroupProps {
//   group: ShortcutGroupType;
//   platform: "windows" | "mac";
//   onPlatformChange: (platform: "windows" | "mac") => void;
//   setPlatform?: React.Dispatch<React.SetStateAction<"windows" | "mac">>;
//   isWindowsAvailable?: boolean; // Add these properties if needed
//   isMacAvailable?: boolean;
// }

// export function ShortcutGroup({
//   group,
//   platform,
//   setPlatform,
//   isWindowsAvailable,
//   isMacAvailable,
// }: ShortcutGroupProps) {
//   const sectionId = group.title.toLowerCase().replace(/\s+/g, "-");

//   return (
//     <div>
//       {/* <h2 className="text-xl font-bold mb-4">{group.title}</h2> */}
//       <div className="grid gap-4">
//         {group.shortcuts.map((shortcut: any) => (
//           <ShortcutCard
//             key={shortcut.id}
//             shortcut={shortcut}
//             platform={platform}
//             setPlatform={setPlatform} // Pass it here
//           />
//         ))}
//       </div>
//     </div>
//   );
// }






// "use client";

// import { ShortcutGroup as ShortcutGroupType } from "@/types/shortcut";
// import { ShortcutCard } from "./shortcut-card";

// interface ShortcutGroupProps {
//   group: ShortcutGroupType;
//   platform: "windows" | "mac";
//   setPlatform: (platform: "windows" | "mac") => void;
// }

// export function ShortcutGroup({
//   group,
//   platform,
//   setPlatform,
// }: ShortcutGroupProps) {
//   const sectionId = group.title.toLowerCase().replace(/\s+/g, "-");

//   return (
//     <div>
//       <div className="grid gap-4">
//         {group.shortcuts.map((shortcut) => (
//           <ShortcutCard
//             key={shortcut.id}
//             shortcut={shortcut}
//             platform={platform}
//             setPlatform={setPlatform}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




// components/shortcut-group.tsx
"use client";

import { ShortcutGroup as ShortcutGroupType } from "@/data/types";
import { ShortcutCard } from "./shortcut-card";

interface ShortcutGroupProps {
  group: ShortcutGroupType;
  platform: "windows" | "mac";
  setPlatform: (platform: "windows" | "mac") => void;
  isWindowsAvailable?: boolean; // Optional
  isMacAvailable?: boolean; // Optional
}

export function ShortcutGroup({
  group,
  platform,
  setPlatform,
  isWindowsAvailable = false, // Default false
  isMacAvailable = false, // Default false
}: ShortcutGroupProps) {
  return (
    <div>
      <div className="grid gap-4">
        {group.shortcuts.map((shortcut) => (
          <ShortcutCard
            key={shortcut.id}
            shortcut={shortcut}
            platform={platform}
            setPlatform={setPlatform}
            isWindowsAvailable={isWindowsAvailable}
            isMacAvailable={isMacAvailable}
          />
        ))}
      </div>
    </div>
  );
}
