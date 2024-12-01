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

import Image from "next/image"; // Import Next.js Image component

import { Command, Keyboard, Moon, Sun, Search, Menu } from "lucide-react";
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
import { cn } from "@/lib/utils";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const { setTheme, theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    onSearch?.(query); // Call the search callback passed from the parent
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          replace
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault(); // Prevent the default navigation
              window.location.reload(); // Reload the page
            }
          }}
          className="flex items-center gap-2 hover:opacity-90"
        >
          {/* Set the logo image */}
          <Image
            src="/BoostMyKey.png" // Path relative to the public folder
            alt="Boost My Key Logo"
            width={220} // Adjust width as needed
            height={600} // Adjust height as needed
            className="h-120 w-150 object-contain" // Optional styling
          />
          {/* <span className="font-bold text-lg">Boost My Key</span> */}
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
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
                {/* <Link href="/submit-shortcut" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Submit a Shortcut
                  </NavigationMenuLink>
                </Link> */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle */}
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
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-4">
            <Link href="/software" className="text-gray-700 hover:text-blue-600">
              Software
            </Link>
            <Link href="/os" className="text-gray-700 hover:text-blue-600">
              Operating Systems
            </Link>
            <Link href="/games" className="text-gray-700 hover:text-blue-600">
              Games
            </Link>
            <Link href="/websites" className="text-gray-700 hover:text-blue-600">
              Websites
            </Link>
            <Link href="/browsers" className="text-gray-700 hover:text-blue-600">
              Browsers
            </Link>
            {/* <Link href="/submit-shortcut" className="text-gray-700 hover:text-blue-600">
              Submit a Shortcut
            </Link> */}
            <button
              className="flex items-center gap-2 mt-4 text-gray-700 hover:text-blue-600"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <span>Toggle Theme</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
