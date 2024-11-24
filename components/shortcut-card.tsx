// // // components/shortcut-card.tsx

// "use client";

// import { Shortcut } from "@/types/shortcut";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { Apple } from "lucide-react";

// interface ShortcutCardProps {
//   shortcut: Shortcut;
//   platform: "windows" | "mac";
//   onPlatformChange?: (platform: "windows" | "mac") => void;
// }

// export function ShortcutCard({ shortcut, platform, onPlatformChange }: ShortcutCardProps) {
//   // Determine which keys to display based on platform or if universal
//   const isUniversal = shortcut.platforms && shortcut.platforms.universal;
//   const displayKeys = isUniversal
//     ? shortcut.platforms.universal
//     : shortcut.platforms && shortcut.platforms[platform]
//     ? shortcut.platforms[platform]
//     : shortcut.keys || [];  // Default to an empty array if `keys` is undefined

//   return (
//     <Card className="p-6 transition-shadow hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
//       <div className="flex items-center justify-between gap-6">

//         {/* Description on the left side with updated styling */}
//         <p className="text-lg font-bold text-gray-700 dark:text-gray-300 flex-1">
//           {shortcut.description}
//         </p>

//         {/* Shortcuts on the right side */}
//         <div className="flex items-center gap-4">
//           <div className="flex gap-2">
//             {displayKeys.length > 0 ? (
//               displayKeys.map((key, index) => (
//                 <kbd
//                   key={index}
//                   className="px-2.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-200 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
//                 >
//                   {key}
//                 </kbd>
//               ))
//             ) : (
//               <p className="text-gray-500 dark:text-gray-400">No shortcut keys available</p>
//             )}
//           </div>

//           {/* Display "Universal" label instead of platform buttons if the shortcut is universal */}
//           {isUniversal ? (
//             <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
//               Universal
//             </span>
//           ) : (
//             shortcut.platforms && (
//               <div className="flex gap-1 bg-gray-200 dark:bg-gray-700 rounded-md p-0.5">
//                 <button
//                   type="button"
//                   onClick={() => onPlatformChange?.("windows")}
//                   className={cn(
//                     "p-2 rounded-md transition-colors",
//                     platform === "windows"
//                       ? "bg-blue-500 text-white"
//                       : "text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600"
//                   )}
//                   title="Windows shortcuts"
//                 >
//                   <img src="/icons/os/windows.svg" alt="Windows" className="h-4 w-4" />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => onPlatformChange?.("mac")}
//                   className={cn(
//                     "p-2 rounded-md transition-colors",
//                     platform === "mac"
//                       ? "bg-blue-500 text-white"
//                       : "text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600"
//                   )}
//                   title="macOS shortcuts"
//                 >
//                   <Apple className="h-4 w-4" />
//                 </button>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// }











// // components/shortcut-card.tsx
// "use client";

// import { Shortcut } from "@/types/shortcut";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { Apple } from "lucide-react";

// interface ShortcutCardProps {
//   shortcut: Shortcut;
//   platform: "windows" | "mac";
//   onPlatformChange?: (platform: "windows" | "mac") => void;
// }

// export function ShortcutCard({ shortcut, platform, onPlatformChange }: ShortcutCardProps) {
//   const isUniversal = shortcut.platforms?.universal;
//   const displayKeys = isUniversal
//     ? shortcut.platforms.universal
//     : shortcut.platforms?.[platform]
//     ? shortcut.platforms[platform]
//     : shortcut.keys || [];

//   return (
//     <Card className="p-6 transition-shadow hover:shadow-md hover:bg-accent rounded-lg">
//       <div className="flex items-center justify-between gap-6">
//         <p className="text-lg font-bold flex-1">
//           {shortcut.description}
//         </p>

//         <div className="flex items-center gap-4">
//           <div className="flex gap-2">
//             {displayKeys.map((key, index) => (
//               <kbd
//                 key={index}
//                 className="px-2.5 py-1.5 text-sm font-semibold bg-secondary border rounded-md transition-colors"
//               >
//                 {key}
//               </kbd>
//             ))}
//           </div>

//           {isUniversal ? (
//             <span className="text-sm font-semibold text-muted-foreground">
//               Universal
//             </span>
//           ) : (
//             shortcut.platforms && (
//               <div className="flex gap-1 bg-secondary rounded-md p-0.5">
//                 <button
//                   type="button"
//                   onClick={() => onPlatformChange?.("windows")}
//                   className={cn(
//                     "p-2 rounded-md transition-colors",
//                     platform === "windows"
//                       ? "bg-primary text-primary-foreground"
//                       : "text-muted-foreground hover:bg-accent"
//                   )}
//                   title="Windows shortcuts"
//                 >
//                   <svg className="h-4 w-4" viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15Z"/>
//                   </svg>
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => onPlatformChange?.("mac")}
//                   className={cn(
//                     "p-2 rounded-md transition-colors",
//                     platform === "mac"
//                       ? "bg-primary text-primary-foreground"
//                       : "text-muted-foreground hover:bg-accent"
//                   )}
//                   title="macOS shortcuts"
//                 >
//                   <Apple className="h-4 w-4" />
//                 </button>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// }





// import { Shortcut } from "@/types/shortcut";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { Apple } from "lucide-react";

// interface ShortcutCardProps {
//   shortcut: Shortcut;
//   platform: "windows" | "mac";
//   onPlatformChange?: (platform: "windows" | "mac") => void;
// }

// export function ShortcutCard({ shortcut, platform, onPlatformChange }: ShortcutCardProps) {
//   const isUniversal = shortcut.platforms?.universal;
//   const displayKeys = isUniversal
//     ? shortcut.platforms.universal
//     : shortcut.platforms?.[platform]
//     ? shortcut.platforms[platform]
//     : shortcut.keys || [];

//   return (
//     <Card className="p-6 transition-shadow hover:shadow-md hover:bg-accent rounded-lg">
//       <div className="flex items-center justify-between gap-6">
//         {/* Shortcut Description */}
//         <p className="text-lg font-semi-bold flex-1">{shortcut.description}</p>

//         {/* Shortcut Keys & Platform Buttons */}
//         <div className="flex items-center gap-4">
//           {/* Render Shortcut Keys */}
//           <div className="flex gap-2">
//             {displayKeys.map((key, index) => (
//               <kbd
//                 key={index}
//                 className="px-2.5 py-1.5 text-sm font-semibold bg-secondary border rounded-md transition-colors"
//               >
//                 {key}
//               </kbd>
//             ))}
//           </div>

//           {/* Platform Buttons */}
//           {isUniversal ? (
//             <span className="text-sm font-semibold text-muted-foreground">
//               Universal
//             </span>
//           ) : (
//             shortcut.platforms && (
//               <div className="flex gap-1 bg-secondary rounded-md p-0.5">
//                 {/* Windows Button */}
//                 <button
//                   type="button"
//                   onClick={() => onPlatformChange?.("windows")}
//                   className={cn(
//                     "p-2 rounded-md transition-colors",
//                     platform === "windows"
//                       ? "bg-blue-600 text-white" // Blue for selected Windows
//                       : "text-gray-500 hover:bg-blue-100 hover:text-blue-600"
//                   )}
//                   title="Windows shortcuts"
//                 >
//                   <svg className="h-4 w-4" viewBox="0 0 24 24">
//                     <path
//                       fill="currentColor"
//                       d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15Z"
//                     />
//                   </svg>
//                 </button>

//                 {/* macOS Button */}
//                 <button
//                   type="button"
//                   onClick={() => onPlatformChange?.("mac")}
//                   className={cn(
//                     "p-2 rounded-md transition-colors",
//                     platform === "mac"
//                       ? "bg-gray-500 text-white" // Grey for selected macOS
//                       : "text-gray-500 hover:bg-gray-300 hover:text-gray-700"
//                   )}
//                   title="macOS shortcuts"
//                 >
//                   <Apple className="h-4 w-4" />
//                 </button>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// }




// // // components/shortcut-card.tsx
// "use client";

// import { Shortcut } from "@/types/shortcut";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { Apple } from "lucide-react";
// import { ShortcutCardProps } from "@/types/shortcut";


// interface ShortcutCardProps {
//   shortcut: Shortcut;
//   platform: "windows" | "mac";
//   setPlatform: (platform: "windows" | "mac") => void;
// }

// export function ShortcutCard({
//   shortcut,
//   platform,
//   setPlatform,
// }: ShortcutCardProps) {
//   const isUniversal = shortcut.platforms?.universal;
//   const displayKeys = isUniversal
//     ? shortcut.platforms.universal
//     : shortcut.platforms?.[platform]
//     ? shortcut.platforms[platform]
//     : shortcut.keys || [];

//   const isWindowsAvailable = !!shortcut.platforms?.windows;
//   const isMacAvailable = !!shortcut.platforms?.mac;

//   return (
//     <Card className="p-6 transition-shadow hover:shadow-md hover:bg-accent rounded-lg">
//       <div className="flex items-center justify-between gap-6">
//         {/* Shortcut Description */}
//         <p className="text-lg font-light flex-1">{shortcut.description}</p>

//         {/* Shortcut Keys & Platform Buttons */}
//         <div className="flex items-center gap-4">
//           {/* Render Shortcut Keys */}
//           <div className="flex gap-2">
//             {displayKeys.map((key, index) => (
//               <kbd
//                 key={index}
//                 className="px-2.5 py-1.5 text-sm font-semibold bg-secondary border rounded-md transition-colors"
//               >
//                 {key}
//               </kbd>
//             ))}
//           </div>

//           {/* Platform Buttons */}
//           {isUniversal ? (
//             <span className="text-sm font-semibold text-muted-foreground">
//               Universal
//             </span>
//           ) : (
//             shortcut.platforms && (
//               <div className="flex gap-1 bg-secondary rounded-md p-0.5">
//                 {/* Render Windows Icon only if available */}
//                 {isWindowsAvailable && (
//                   <button
//                     type="button"
//                     onClick={() => setPlatform("windows")}
//                     className={cn(
//                       "p-2 rounded-md transition-colors",
//                       platform === "windows"
//                         ? "bg-blue-600 text-white" // Blue background with white icon
//                         : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
//                     )}
//                     title="Windows shortcuts"
//                   >
//                     <svg className="h-4 w-4" viewBox="0 0 24 24">
//                       <path
//                         fill="currentColor" /* Windows icon remains white */
//                         d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15Z"
//                       />
//                     </svg>
//                   </button>
//                 )}

//                 {/* Render macOS Icon only if available */}
//                 {isMacAvailable && (
//                   <button
//                     type="button"
//                     onClick={() => setPlatform("mac")}
//                     className={cn(
//                       "p-2 rounded-md transition-colors",
//                       platform === "mac"
//                         ? "bg-gray-500 text-white" // Gray background with white icon for macOS
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
//                     )}
//                     title="macOS shortcuts"
//                   >
//                     <Apple className="h-4 w-4" />
//                   </button>
//                 )}
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// }





// // // components/shortcut-card.tsx

"use client";

import { ShortcutCardProps } from "@/types/shortcut";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Apple } from "lucide-react";

export function ShortcutCard({
  shortcut,
  platform,
  setPlatform,
  isWindowsAvailable,
  isMacAvailable,
}: ShortcutCardProps) {
  const isUniversal = shortcut.platforms?.universal;
  const displayKeys = isUniversal
    ? shortcut.platforms.universal
    : shortcut.platforms?.[platform]
    ? shortcut.platforms[platform]
    : shortcut.keys || [];

  return (
    <Card className="p-4 sm:p-6 transition-shadow hover:shadow-md hover:bg-accent rounded-lg">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Shortcut Description */}
        <p className="text-base sm:text-lg font-light flex-1">
          {shortcut.description}
        </p>

        {/* Shortcut Keys & Platform Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Render Shortcut Keys */}
          <div className="flex flex-wrap gap-2">
            {displayKeys &&
              displayKeys.map((key, index) => (
                <kbd
                  key={index}
                  className="px-2 py-1 sm:px-2.5 sm:py-1.5 text-sm sm:text-base font-semibold bg-secondary border rounded-md transition-colors"
                >
                  {key}
                </kbd>
              ))}
          </div>

          {/* Platform Buttons */}
          {isUniversal ? (
            <span className="text-sm sm:text-base font-semibold text-muted-foreground">
              Universal
            </span>
          ) : (
            shortcut.platforms && (
              <div className="flex gap-1 bg-secondary rounded-md p-0.5">
                {/* Render Windows Icon only if available */}
                {isWindowsAvailable && (
                  <button
                    type="button"
                    onClick={() => setPlatform("windows")}
                    className={cn(
                      "p-2 sm:p-3 rounded-md transition-colors",
                      platform === "windows"
                        ? "bg-blue-600 text-white" // Blue background with white icon
                        : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                    )}
                    title="Windows shortcuts"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15Z"
                      />
                    </svg>
                  </button>
                )}

                {/* Render macOS Icon only if available */}
                {isMacAvailable && (
                  <button
                    type="button"
                    onClick={() => setPlatform("mac")}
                    className={cn(
                      "p-2 sm:p-3 rounded-md transition-colors",
                      platform === "mac"
                        ? "bg-gray-500 text-white" // Gray background with white icon for macOS
                        : "bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
                    )}
                    title="macOS shortcuts"
                  >
                    <Apple className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </Card>
  );
}
