// // app/websites/[id]/page.tsx
// import { websites } from "@/data/websites";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   return Object.keys(websites).map((id) => ({ id }));
// }

// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const website = websites[params.id];

//   if (!website) {
//     notFound();
//   }

//   return (
//     <div className="container py-10 ml-16">
//       <div className="flex items-center gap-4 mb-8">
//         <img src={website.icon} alt={website.name} className="w-12 h-12" />
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">{website.name}</h1>
//           <p className="text-muted-foreground">{website.description}</p>
//         </div>
//       </div>

//       <div className="space-y-12">
//         {website.groups.map((group) => (
//           <ShortcutGroup key={group.title} group={group} />
//         ))}
//       </div>
//     </div>
//   );
// }


// app/websites/[id]/page.tsx


// "use client";

// import { useState } from "react";
// import { websites } from "@/data/websites";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { PlatformToggle } from "@/components/platform-toggle";
// import { notFound } from "next/navigation";

// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const [platform, setPlatform] = useState<"windows" | "mac">("windows");
//   const website = websites[params.id];

//   if (!website) {
//     notFound();
//   }

//   return (
//     <div className="container py-10">
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center gap-4">
//           <img src={website.icon} alt={website.name} className="w-12 h-12" />
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight">{website.name}</h1>
//             <p className="text-muted-foreground">{website.description}</p>
//           </div>
//         </div>
//         <PlatformToggle platform={platform} onPlatformChange={setPlatform} />
//       </div>

//       <div className="space-y-12">
//         {website.groups.map((group) => (
//           <ShortcutGroup 
//             key={group.title} 
//             group={group} 
//             platform={platform}
//             onPlatformChange={setPlatform}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// app/websites/[id]/page.tsx


// import { websites } from "@/data/websites";
// import { WebsitePageClient } from "./client";
// import { notFound } from "next/navigation";

// // Add generateStaticParams function
// export async function generateStaticParams() {
//   return Object.keys(websites).map((id) => ({
//     id,
//   }));
// }

// // Keep the page component as a server component
// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const website = websites[params.id];

//   if (!website) {
//     notFound();
//   }

//   return <WebsitePageClient website={website} />;
// }


// app/websites/[id]/page.tsx



// import { websites } from "@/data/websites";
// import { notFound } from "next/navigation";
// import { WebsitePageClient } from "./client";

// export function generateStaticParams() {
//   return Object.keys(websites).map((id) => ({ id }));
// }

// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const website = websites[params.id];

//   if (!website) {
//     notFound();
//     return null;
//   }

//   // Pre-generate sections for the sidebar
//   const sections = website.groups.map(group => ({
//     id: group.title.toLowerCase().replace(/\s+/g, '-'),
//     title: group.title
//   }));

//   return <WebsitePageClient website={website} initialSections={sections} />;
// }








// app/websites/[id]/page.tsx


// import { websites } from "@/data/websites"; // or wherever your data resides
// import { notFound } from "next/navigation";
// import { WebsitePageClient } from "./client"; // This is where you're importing your client component

// export function generateStaticParams() {
//   return Object.keys(websites).map((id) => ({ id }));
// }

// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const website = websites[params.id];

//   if (!website) {
//     notFound();
//     return null;
//   }

//   return <WebsitePageClient website={website} />;
// }






// // app/websites/[id]/page.tsx
// import { websites } from "@/data/websites";
// import { notFound } from "next/navigation";
// import { WebsitePageClient } from "./client";
// import { UnifiedSidebar } from "@/components/unified-sidebar";

// export function generateStaticParams() {
//   return Object.keys(websites).map((id) => ({ id }));
// }

// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const website = websites[params.id];

//   if (!website) {
//     notFound();
//   }

//   // Generate sections from website groups
//   const sections = website.groups?.map((group: any) => ({
//     id: group.title.toLowerCase().replace(/\s+/g, "-"),
//     title: group.title,
//   })) || [];

//   return (
//     <div className="container flex gap-8">
//       <div className="flex-1">
//         {/* Pass serialized JSON to the client */}
//         <WebsitePageClient initialData={JSON.stringify(website)} />
//       </div>
//       {/* <UnifiedSidebar sections={sections} /> */}
//     </div>
//   );
// }



// app/websites/[id]/page.tsx



// import { websites } from "@/data/websites";
// import { notFound } from "next/navigation";
// import { WebsitePageClient } from "./client";
// import { UnifiedSidebar } from "@/components/unified-sidebar";

// // Add TypeScript type for params
// type StaticParam = {
//   id: string;
// };

// // Enhanced generateStaticParams with logging
// export function generateStaticParams(): StaticParam[] {
//   const websiteIds = Object.keys(websites);

//   // Log the generated params for debugging
//   console.log("Generating static params for websites:", websiteIds);

//   return websiteIds.map((id) => ({ id }));
// }

// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const website = websites[params.id];

//   if (!website) {
//     notFound();
//   }

//   // Generate sections from website groups
//   const sections = website.groups?.map((group: any) => ({
//     id: group.title.toLowerCase().replace(/\s+/g, "-"),
//     title: group.title,
//   })) || [];

//   return (
//     <div className="container flex gap-8">
//       <div className="flex-1">
//         {/* Pass serialized JSON to the client */}
//         <WebsitePageClient initialData={JSON.stringify(website)} />
//       </div>
//       {/* <UnifiedSidebar sections={sections} /> */}
//     </div>
//   );
// }







// import { websites } from "@/data/websites";
// import { notFound } from "next/navigation";
// import { WebsitePageClient } from "./client";
// import type { Metadata } from "next";

// export const dynamic = "force-static";
// export const revalidate = false;

// // Base URL configuration
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
//   (process.env.NODE_ENV === 'production' 
//     ? 'https://boostmykey.com' 
//     : 'http://localhost:3000');

// type WebsiteId = keyof typeof websites;
// type StaticParam = {
//   id: string;
// };

// // Generate static params for all websites
// export function generateStaticParams(): StaticParam[] {
//   if (typeof websites !== "object") {
//     throw new Error("websites must be an object");
//   }
//   const websiteIds = Object.keys(websites);
//   console.log("Generating static params for websites:", websiteIds);
//   return websiteIds.map((id) => ({ id }));
// }

// // Generate metadata for each website page
// export function generateMetadata({ params }: { params: { id: string } }): Metadata {
//   const website = websites[params.id as WebsiteId];

//   if (!website) {
//     return {
//       title: "Website Not Found",
//       description: "The requested website shortcuts could not be found.",
//       metadataBase: new URL(baseUrl),
//     };
//   }

//   return {
//     metadataBase: new URL(baseUrl),
//     title: `${website.name} Keyboard Shortcuts - Boost My Key`,
//     description: `Master ${website.name} with our comprehensive keyboard shortcuts guide. Learn essential shortcuts and hotkeys to use ${website.name}.`,
//     keywords: [
//       `${website.name} shortcuts`,
//       `${website.name} keyboard shortcuts`,
//       `${website.name} hotkeys`,
//       'website shortcuts',
//       'web shortcuts',
//       'keyboard shortcuts',
//       'productivity shortcuts',
//       website.platforms?.map(platform => `${platform} ${website.name} shortcuts`),
//     ].flat(),
//     openGraph: {
//       title: `${website.name} Keyboard Shortcuts Guide`,
//       description: `Complete keyboard shortcuts guide for ${website.name}. Master the website with our comprehensive hotkey reference.`,
//       type: 'article',
//       url: `/websites/${website.id}`,
//       siteName: "Boost My Key",
//       images: [
//         {
//           url: website.icon,
//           width: 1200,
//           height: 630,
//           alt: `${website.name} Shortcuts Guide`,
//         }
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${website.name} Keyboard Shortcuts`,
//       description: `Master ${website.name} with our complete shortcuts guide.`,
//       images: [`${baseUrl}${website.icon}`],
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },
//     alternates: {
//       canonical: `${baseUrl}/websites/${website.id}`,
//     },
//   };
// }

// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const website = websites[params.id as WebsiteId];

//   if (!website) {
//     notFound();
//   }

//   return (
//     <div className="container">
//       <WebsitePageClient initialData={JSON.stringify(website)} />
//     </div>
//   );
// }



















// import { notFound } from "next/navigation";
// import { websites } from "@/data/websites";
// import type { Metadata } from "next";

// export const dynamic = "force-static"; // Ensure static generation
// export const revalidate = false; // Disable revalidation

// // Generate static paths for all valid website IDs
// export function generateStaticParams() {
//   const validIds = Object.keys(websites); // Only include valid IDs
//   console.log("Generating static params for websites:", validIds);
//   return validIds.map((id) => ({ id }));
// }

// // Metadata generation
// export function generateMetadata({ params }: { params: { id: string } }): Metadata {
//   const website = websites[params.id];

//   // Return default metadata for invalid pages
//   if (!website) {
//     return {
//       title: "Page Not Found",
//       description: "The requested page does not exist.",
//     };
//   }

//   return {
//     title: ${website.name} - Keyboard Shortcuts | Boost My Key,
//     description: Discover essential keyboard shortcuts for ${website.name} to enhance your productivity.,
//   };
// }

// // Page Component
// export default function WebsitePage({ params }: { params: { id: string } }) {
//   const website = websites[params.id];

//   // Redirect invalid paths to 404
//   if (!website) {
//     notFound(); // Triggers the 404 page
//   }

//   return (
//     <div className="container">
//       <h1 className="text-2xl font-bold">{website.name}</h1>
//       <p>{website.description}</p>
//     </div>
//   );
// }










import { notFound } from "next/navigation";
import { websites } from "@/data/websites";
import { WebsitePageClient } from "./client";
import type { Metadata } from "next";

// Ensure static generation and disable revalidation
export const dynamic = "force-static";
export const revalidate = false;

// Base URL configuration
const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://boostmykey.com"
    : "http://localhost:3000");

// Type definitions for website data
type WebsiteId = keyof typeof websites;
type StaticParam = {
  id: string;
};

// Generate static paths for all valid website IDs
export function generateStaticParams(): StaticParam[] {
  if (typeof websites !== "object") {
    throw new Error("websites must be an object");
  }

  const websiteIds = Object.keys(websites); // Extract valid IDs
  console.log("Generating static params for websites:", websiteIds);

  return websiteIds.map((id) => ({ id })); // Pre-generate paths for valid IDs
}

// Metadata generation for valid pages
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const website = websites[params.id as WebsiteId];

  // Fallback metadata for invalid pages (e.g., 404)
  if (!website) {
    return {
      title: "Page Not Found",
      description: "The requested page does not exist.",
    };
  }

  return {
    metadataBase: new URL(baseUrl),
    title: `${website.shortcutpageName} - Boost My Key`,
    description: `${website.metadescription}`,
    alternates: {
      canonical: `${baseUrl}/websites/${params.id}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

// Page component
export default function WebsitePage({ params }: { params: { id: string } }) {
  const website = websites[params.id as WebsiteId];

  // Handle invalid IDs by redirecting to the 404 page
  if (!website) {
    notFound(); // Next.js will trigger the 404 page
  }

  return (
    <div className="container">
      <WebsitePageClient initialData={JSON.stringify(website)} />
    </div>
  );
}
