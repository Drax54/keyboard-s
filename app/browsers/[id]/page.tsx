// // app/browsers/[id]/page.tsx

// import { browsers } from "@/data/browsers";
// import { notFound } from "next/navigation";
// import { BrowserPageClient } from "./client";

// export const dynamic = "force-static";
// export const revalidate = false;

// export async function generateStaticParams() {
//   return Object.keys(browsers).map((key) => ({
//     id: browsers[key].id,
//   }));
// }

// export default function BrowserPage({ params }: { params: { id: string } }) {
//   const browser = browsers[params.id];

//   if (!browser) {
//     notFound();
//   }

//   return (
//     <div className="container">
//       <BrowserPageClient initialData={JSON.stringify(browser)} />
//     </div>
//   );
// }







// import { browsers } from "@/data/browsers";
// import { notFound } from "next/navigation";
// import { BrowserShortcutPageClient } from "./client";
// import { UnifiedSidebar } from "@/components/unified-sidebar";

// // Add TypeScript type for params
// type StaticParam = {
//     id: string;
// };

// export const dynamic = "force-static";
// export const revalidate = false;

// // export async function generateStaticParams() {
// //   return Object.keys(browsers).map((key) => ({
// //     id: browsers[key].id,
// //   }));
// // }

// // Enhanced generateStaticParams with logging
// export function generateStaticParams(): StaticParam[] {
//     // Ensure `browsers` is an object
//     if (typeof browsers !== "object") {
//         throw new Error("browsers must be an object");
//     }

//     // Get keys from the browsers object
//     const browserIds = Object.keys(browsers);

//     // Log the generated params for debugging
//     console.log("Generating static params for browsers:", browserIds);

//     // Map each key into a static param object
//     return browserIds.map((id) => ({ id }));
// }



// export default function BrowserShortcutPage({ params }: { params: { id: string } }) {
//     const browser = browsers[params.id];

//     if (!browser) {
//         notFound();
//     }

//     return (
//         <div className="container flex gap-8">
//             <div className="flex-1">
//                 {/* Pass serialized JSON to the client */}
//                 <BrowserShortcutPageClient initialData={JSON.stringify(browser)} />
//             </div>
//             {/* <UnifiedSidebar sections={sections} /> */}
//         </div>
//     );
// }



// import { browsers } from "@/data/browsers";
// import { notFound } from "next/navigation";
// import { BrowserShortcutPageClient } from "./client";
// import { UnifiedSidebar } from "@/components/unified-sidebar";

// type StaticParam = {
//     id: string;
// };

// // Add type for browsers
// type BrowsersType = typeof browsers;
// type BrowserId = keyof typeof browsers;

// export const dynamic = "force-static";
// export const revalidate = false;

// export function generateStaticParams(): StaticParam[] {
//     if (typeof browsers !== "object") {
//         throw new Error("browsers must be an object");
//     }

//     const browserIds = Object.keys(browsers);
//     console.log("Generating static params for browsers:", browserIds);
//     return browserIds.map((id) => ({ id }));
// }

// export default function BrowserShortcutPage({ params }: { params: { id: string } }) {
//     // Add type check for the id
//     if (!browsers.hasOwnProperty(params.id)) {
//         notFound();
//     }

//     const browser = browsers[params.id as BrowserId];

//     return (
//         <div className="container flex gap-8">
//             <div className="flex-1">
//                 <BrowserShortcutPageClient initialData={JSON.stringify(browser)} />
//             </div>
//         </div>
//     );
// }







// // app/browsers/[id]/page.tsx
// app/browsers/[id]/page.tsx
// app/browsers/[id]/page.tsx
// app/browsers/[id]/page.tsx
// app/browsers/[id]/page.tsx





import { browsers } from "@/data/browsers";
import { notFound } from "next/navigation";
import { BrowserShortcutPageClient } from "./client";
import type { Metadata } from "next";


export const dynamic = "force-static";
export const revalidate = false;

// Base URL configuration
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://boostmykey.com'
    : 'http://localhost:3000');

type BrowserId = keyof typeof browsers;
type StaticParam = {
  id: string;
};

// Generate static params for all browsers
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  if (typeof browsers !== "object") {
    throw new Error("browsers must be an object");
  }
  const browserIds = Object.keys(browsers);
  console.log("Generating static params for browsers:", browserIds);
  return browserIds.map((id) => ({ id })); // Adjusted to return the correct structure
}

// Generate metadata for each browser page
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const browser = browsers[params.id as BrowserId];

  if (!browser) {
    return {
      title: "Browser Not Found",
      description: "The requested browser shortcuts could not be found.",
      metadataBase: new URL(baseUrl),
    };
  }

  return {
    metadataBase: new URL(baseUrl),
    title: `${browser.shortcutpageName} - Boost My Key`,
    description: `${browser.metadescription}`,
    
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/browsers/${browser.id}`,
    },
  };
}

export default function BrowserShortcutPage({ params }: { params: { id: string } }) {
  const browser = browsers[params.id as keyof typeof browsers];

  if (!browser) {
    notFound();
  }

  // Generate random related browsers (excluding the current one)
  const relatedBrowsers = Object.values(browsers)
    .filter((b) => b.id !== browser.id) // Exclude the current browser
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 3); // Select the top 3

  return (
    <div className="container">
      <BrowserShortcutPageClient
        initialData={JSON.stringify(browser)} // Stringify only the initialData
        relatedBrowsers={relatedBrowsers} // Pass relatedBrowsers directly as an array
      />
    </div>
  );
}
