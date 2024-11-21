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
import { websites } from "@/data/websites";
import { notFound } from "next/navigation";
import { WebsitePageClient } from "./client";
import { UnifiedSidebar } from "@/components/unified-sidebar";

// Add TypeScript type for params
type StaticParam = {
  id: string;
};

// Enhanced generateStaticParams with logging
export function generateStaticParams(): StaticParam[] {
  const websiteIds = Object.keys(websites);

  // Log the generated params for debugging
  console.log("Generating static params for websites:", websiteIds);

  return websiteIds.map((id) => ({ id }));
}

export default function WebsitePage({ params }: { params: { id: string } }) {
  const website = websites[params.id];

  if (!website) {
    notFound();
  }

  // Generate sections from website groups
  const sections = website.groups?.map((group: any) => ({
    id: group.title.toLowerCase().replace(/\s+/g, "-"),
    title: group.title,
  })) || [];

  return (
    <div className="container flex gap-8">
      <div className="flex-1">
        {/* Pass serialized JSON to the client */}
        <WebsitePageClient initialData={JSON.stringify(website)} />
      </div>
      {/* <UnifiedSidebar sections={sections} /> */}
    </div>
  );
}
