// "use client";

// import { Command, Keyboard, Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// export default function Navbar() {
//   const { setTheme, theme } = useTheme();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 items-center">
//         <div className="mr-4 flex">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <Keyboard className="h-6 w-6" />
//             <span className="font-bold">KeyMaster</span>
//           </Link>
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <Link href="/software" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Software
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link href="/os" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Operating Systems
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link href="/games" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Games
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link href="/websites" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Websites
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//           >
//             <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }


//components/nabvbar.tsx

// "use client";

// import { Command, Keyboard, Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// export default function Navbar() {
//   const { setTheme, theme } = useTheme();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between px-4 ml-16">
//         <div className="flex items-center gap-8">
//           <Link href="/" replace className="flex items-center gap-2 hover:opacity-90">
//             <Keyboard className="h-6 w-6" />
//             <span className="font-bold text-lg">KeyMaster</span>
//           </Link>
//           <NavigationMenu>
//             <NavigationMenuList className="gap-2">
//               <NavigationMenuItem>
//                 <Link href="/software" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Software
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link href="/os" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Operating Systems
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link href="/games" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Games
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link href="/websites" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Websites
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <div>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="h-10 w-10"
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//           >
//             <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }





"use client";

import { Command, Keyboard, Moon, Sun, Search } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const { setTheme, theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    onSearch?.(query); // Call the search callback passed from the parent
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" replace className="flex items-center gap-2 hover:opacity-90">
            <Keyboard className="h-6 w-6" />
            <span className="font-bold text-lg">KeyMaster</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/software" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Software
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/os" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Operating Systems
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/games" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Games
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/websites" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Websites
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/browsers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Browsers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/submit-shortcut" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Submit a Shortcut
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search Bar */}
        {/* <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-72 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div> */}

        {/* Theme Toggle */}
        {/* <div>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div> */}
      </div>
    </header>
  );
}
