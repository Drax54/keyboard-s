// // components/category-header.tsx
// "use client";

// import { PlatformToggle } from "./platform-toggle";
// import { useState } from "react";

// interface CategoryHeaderProps {
//   title: string;
//   platform: "windows" | "mac";
//   onPlatformChange: (platform: "windows" | "mac") => void;
// }

// export function CategoryHeader({ title, onPlatformChange }: CategoryHeaderProps) {
//   const [platform, setPlatform] = useState<"windows" | "mac">("windows");

//   const handlePlatformChange = (newPlatform: "windows" | "mac") => {
//     setPlatform(newPlatform);
//     onPlatformChange(newPlatform);
//   };

//   return (
//     <div className="flex items-center justify-between mb-6">
//       <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
//       <PlatformToggle platform={platform} onChange={handlePlatformChange} />
//     </div>
//   );
// }







// components/category-header.tsx
"use client";

import { PlatformToggle } from "./platform-toggle";
import { useState } from "react";

interface CategoryHeaderProps {
  title: string;
  onPlatformChange: (platform: "windows" | "mac") => void;
}

export function CategoryHeader({ title, onPlatformChange }: CategoryHeaderProps) {
  const [platform, setPlatform] = useState<"windows" | "mac">("windows");

  const handlePlatformChange = (newPlatform: "windows" | "mac") => {
    setPlatform(newPlatform);
    onPlatformChange(newPlatform);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <PlatformToggle platform={platform} onChange={handlePlatformChange} />
    </div>
  );
}
