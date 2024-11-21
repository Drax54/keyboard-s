// // components/unified-sidebar.tsx

// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// export function UnifiedSidebar() {
//   const pathname = usePathname();
//   const [pageInfo, setPageInfo] = useState<{ sections: { id: string; title: string }[] }>({ sections: [] });

//   // Function to get current page info
//   const getCurrentPageInfo = async () => {
//     try {
//       // Fetch the current page content
//       const response = await fetch(pathname);
//       const html = await response.text();

//       // Parse the HTML using DOMParser
//       const parser = new DOMParser();
//       const document = parser.parseFromString(html, "text/html");

//       // Extract all the h2 elements and their IDs for main shortcut headings
//       const sections = Array.from(document.querySelectorAll("h2")).map((h2) => ({
//         id: h2.id || h2.textContent!.toLowerCase().replace(/\s+/g, "-"),
//         title: h2.textContent!,
//       }));

//       setPageInfo({ sections });
//     } catch (error) {
//       console.error("Error fetching page info:", error);
//       setPageInfo({ sections: [] });
//     }
//   };

//   useEffect(() => {
//     getCurrentPageInfo();
//   }, [pathname]);

//   const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
//     e.preventDefault();
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="w-64 border-l bg-background">
//       <div className="sticky top-14 px-6 py-8">
//         {pageInfo.sections.length > 0 && (
//           <>
//             <h2 className="font-semibold mb-4">On This Page</h2>
//             <nav className="space-y-2">
//               {pageInfo.sections.map((section) => (
//                 <a
//                   key={section.id}
//                   href={`#${section.id}`}
//                   onClick={handleSectionClick(section.id)}
//                   className={cn(
//                     "block px-3 py-2 text-sm rounded-md transition-colors",
//                     "hover:bg-accent hover:text-accent-foreground"
//                   )}
//                 >
//                   {section.title}
//                 </a>
//               ))}
//             </nav>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


//version final
// components/unified-sidebar.tsx

// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";


// export function UnifiedSidebar() {
//   const pathname = usePathname();
//   const [pageInfo, setPageInfo] = useState<{ sections: { id: string; title: string }[] }>({ sections: [] });
//   const [activeSection, setActiveSection] = useState<string | null>(null);


//   useEffect(() => {
//     const handleSectionsReady = (event: CustomEvent) => {
//       setPageInfo({ sections: event.detail.sections });
//     };

//     window.addEventListener('sectionsReady', handleSectionsReady as EventListener);

//     return () => {
//       window.removeEventListener('sectionsReady', handleSectionsReady as EventListener);
//     };
//   }, []);

//   useEffect(() => {
//     // Ensure the sidebar only shows on detail pages
//     const isDetailPage =
//       pathname.split("/").length > 2 &&
//       (pathname.startsWith("/software/") ||
//         pathname.startsWith("/os/") ||
//         pathname.startsWith("/games/") ||
//         pathname.startsWith("/websites/"));

//     if (!isDetailPage) {
//       setPageInfo({ sections: [] });
//       return;
//     }

//     const sections = Array.from(document.querySelectorAll("h2")).map((h2) => ({
//       id: h2.id || h2.textContent!.toLowerCase().replace(/\s+/g, "-"),
//       title: h2.textContent!,
//     }));

//     setPageInfo({ sections });
//   }, [pathname]);

//   useEffect(() => {
//     const handleObserver = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleObserver, {
//       root: null,
//       rootMargin: "0px 0px -70% 0px", // Trigger highlight when section reaches 70% from the top
//       threshold: 0.1, // At least 10% of the section visible
//     });

//     const sections = document.querySelectorAll("h2");
//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   const handleScrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       const offset = 80; // Adjust offset for fixed header height
//       const top = section.getBoundingClientRect().top + window.scrollY - offset;
//       window.scrollTo({
//         top,
//         behavior: "smooth",
//       });
//     }
//   };

//   if (!pageInfo.sections.length) {
//     return null;
//   }

//   return (
//     <div className="w-64 bg-background">
//       {/* Removed the border-l class from the container */}
//       <div className="sticky top-14 px-4 py-6">
//         <h3 className="font-semibold mb-4">On This Page</h3>
//         <nav className="space-y-2">
//           {pageInfo.sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => handleScrollToSection(section.id)}
//               className={cn(
//                 "block py-2 px-3 rounded-lg transition-colors text-sm w-full text-left",
//                 activeSection === section.id
//                   ? "bg-gray-200 text-gray-900 font-semibold"
//                   : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
//               )}
//             >
//               {section.title}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// }

// components/unified-sidebar.tsx

// // components/unified-sidebar.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// interface UnifiedSidebarProps {
//   sections?: { id: string; title: string }[];
// }

// export function UnifiedSidebar({ sections = [] }: UnifiedSidebarProps) {
//   const pathname = usePathname();
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   useEffect(() => {
//     const handleObserver = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleObserver, {
//       root: null,
//       rootMargin: "-100px 0px 0px 0px", // Adjust for sticky header height
//       threshold: 0.1,
//     });

//     const sectionElements = document.querySelectorAll("h2");
//     sectionElements.forEach((section) => observer.observe(section));

//     return () => {
//       sectionElements.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   const handleScrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       const offset = 80;
//       const top = section.getBoundingClientRect().top + window.scrollY - offset;
//       window.scrollTo({
//         top,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Check if we're on a detail page
//   const isDetailPage =
//     pathname.split("/").length > 2 &&
//     (pathname.startsWith("/software/") ||
//       pathname.startsWith("/os/") ||
//       pathname.startsWith("/games/") ||
//       pathname.startsWith("/websites/"));

//   if (!isDetailPage || !sections?.length) {
//     return null;
//   }

//   return (
//     <div className="w-64 bg-background">
//       <div className="sticky top-14 px-4 py-6">
//         <h3 className="font-semibold mb-4">On This Page</h3>
//         <nav className="space-y-2">
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => handleScrollToSection(section.id)}
//               className={cn(
//                 "block py-2 px-3 rounded-lg transition-colors text-sm w-full text-left",
//                 activeSection === section.id
//                   ? "bg-gray-200 text-gray-900 font-semibold"
//                   : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
//               )}
//             >
//               {section.title}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// }















// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// interface UnifiedSidebarProps {
//   sections?: { id: string; title: string }[];
// }

// export function UnifiedSidebar({ sections = [] }: UnifiedSidebarProps) {
//   const pathname = usePathname();
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   useEffect(() => {
//     const headerHeight = document.querySelector("header")?.offsetHeight || 0; // Dynamically get header height

//     const handleObserver = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleObserver, {
//       root: null,
//       rootMargin: `-${headerHeight}px 0px 0px 0px`, // Dynamically adjust based on header height
//       threshold: 0.1,
//     });

//     const sectionElements = document.querySelectorAll("h2");
//     sectionElements.forEach((section) => observer.observe(section));

//     return () => {
//       sectionElements.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   const handleScrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     const headerHeight = document.querySelector("header")?.offsetHeight || 0; // Dynamically get header height

//     if (section) {
//       const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 10; // Add small padding for visibility
//       window.scrollTo({
//         top,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Check if we're on a detail page
//   const isDetailPage =
//     pathname.split("/").length > 2 &&
//     (pathname.startsWith("/software/") ||
//       pathname.startsWith("/os/") ||
//       pathname.startsWith("/games/") ||
//       pathname.startsWith("/websites/"));

//   if (!isDetailPage || !sections?.length) {
//     return null;
//   }

//   return (
//     <div className="w-64 bg-background">
//       <div
//         className="sticky"
//         style={{
//           top: document.querySelector("header")?.offsetHeight || 0, // Align perfectly with the header
//           zIndex: 50, // Ensure it stays on top of other content
//         }}
//       >
//         <div className="px-4 py-6">
//           <h3 className="font-semibold mb-4">On This Page</h3>
//           <nav className="space-y-2">
//             {sections.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => handleScrollToSection(section.id)}
//                 className={cn(
//                   "block py-2 px-3 rounded-lg transition-colors text-sm w-full text-left",
//                   activeSection === section.id
//                     ? "bg-gray-200 text-gray-900 font-semibold"
//                     : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
//                 )}
//               >
//                 {section.title}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }












"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface UnifiedSidebarProps {
  sections?: { id: string; title: string }[];
}

export function UnifiedSidebar({ sections = [] }: UnifiedSidebarProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      const header = document.querySelector("header");
      setHeaderHeight(header?.offsetHeight || 80);

      const handleObserver = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: `-${header?.offsetHeight || 80}px 0px 0px 0px`,
        threshold: 0.1,
      });

      const sectionElements = document.querySelectorAll("h2");
      sectionElements.forEach((section) => observer.observe(section));

      return () => {
        sectionElements.forEach((section) => observer.unobserve(section));
      };
    }
  }, []);

  const handleScrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(id);
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  // Check if we're on a detail page
  const isDetailPage =
    pathname.split("/").length > 2 &&
    (pathname.startsWith("/software/") ||
      pathname.startsWith("/os/") ||
      pathname.startsWith("/games/") ||
      pathname.startsWith("/browsers/") ||
      pathname.startsWith("/websites/"));

  if (!isDetailPage || !sections?.length) {
    return null;
  }

  return (
    <div className="w-64 bg-background">
      <div
        className="sticky"
        style={{
          top: headerHeight, // Dynamically align with the header
          zIndex: 50, // Ensure it stays on top of other content
        }}
      >
        <div className="px-4 py-6">
          <h3 className="font-semibold mb-4">On This Page</h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScrollToSection(section.id)}
                className={cn(
                  "block py-2 px-3 rounded-lg transition-colors text-sm w-full text-left",
                  activeSection === section.id
                    ? "bg-gray-200 text-gray-900 font-semibold"
                    : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
