// app/os/[id]/page.tsx

// import { operatingSystems } from "@/data/operating-systems";
// import OSPageClient from "./client";
// import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   return Object.keys(operatingSystems).map((id) => ({ id }));
// }

// export default function OSPage({ params }: { params: { id: string } }) {
//   const os = operatingSystems[params.id];

//   if (!os) {
//     notFound();
//   }

//   return <OSPageClient os={os} />;
// }

















// // app/os/[id]/page.tsx

// import { operatingSystems } from "@/data/operating-systems";
// import { OSPageClient } from "./client";
// import { UnifiedSidebar } from "@/components/unified-sidebar";
// import { notFound } from "next/navigation";

// export const dynamic = 'force-static';
// export const revalidate = false;

// export async function generateStaticParams() {
//   return Object.keys(operatingSystems).map((key) => ({
//     id: key,
//   }));
// }

// export default function OSPage({ params }: { params: { id: string } }) {
//   const os = operatingSystems[params.id];

//   if (!os) {
//     notFound();
//   }

//   // Generate sections from OS groups
//   const sections = os.groups?.map((group: any) => ({
//     id: group.title.toLowerCase().replace(/\s+/g, "-"),
//     title: group.title,
//   })) || [];

//   return (
//     <div className="container flex gap-8">
//       <div className="flex-1">
//         <OSPageClient os={os} />
//       </div>
//       <UnifiedSidebar sections={sections} />
//     </div>
//   );
// }









// import { operatingSystems } from "@/data/operating-systems";
// import { OSPageClient } from "./client";
// import { UnifiedSidebar } from "@/components/unified-sidebar";
// import { notFound } from "next/navigation";

// export const dynamic = "force-static"; // Forces static generation
// export const revalidate = false; // Prevents ISR for static export

// // Generate static paths for all OS items
// export async function generateStaticParams() {
//   return Object.keys(operatingSystems).map((id) => ({ id }));
// }

// export default function OSPage({ params }: { params: { id: string } }) {
//   // Retrieve the OS data based on the route parameter
//   const os = operatingSystems[params.id];

//   // If OS data doesn't exist, show a 404 page
//   if (!os) {
//     return notFound();
//   }

//   // Create sections for the UnifiedSidebar component
//   const sections =
//     os.groups?.map((group) => ({
//       id: group.title.toLowerCase().replace(/\s+/g, "-"),
//       title: group.title,
//     })) || [];

//   return (
//     <div className="container flex flex-col lg:flex-row gap-8">
//       {/* Main OS content */}
//       <div className="flex-1">
//         <OSPageClient os={os} />
//       </div>

//       {/* Sidebar for navigating within the page */}
//       {sections.length > 0 && <UnifiedSidebar sections={sections} />}
//     </div>
//   );
// }







import { OperatingSystems } from "@/data/operating-systems";
import { OSShortcutPageClient } from "./client";
import { UnifiedSidebar } from "@/components/unified-sidebar";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

// Base URL configuration
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://boostmykey.com' 
    : 'http://localhost:3000');

type OSId = keyof typeof OperatingSystems;


const validIds = Object.keys(OperatingSystems);


// Generate static paths for all OS items
export async function generateStaticParams() {
  return Object.keys(OperatingSystems).map((id) => ({ id }));
}

// Generate metadata for each OS page
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const os = OperatingSystems[params.id as OSId];

  if (!os) {
    return {
      title: "Operating System Not Found",
      description: "The requested operating system shortcuts could not be found.",
      metadataBase: new URL(baseUrl),
    };
  }

  return {
    metadataBase: new URL(baseUrl),
    title: `${os.shortcutpageName} - Boost My Key`,
    description: `${os.metadescription}`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/os/${os.id}`,
    },
  };
}


// Main page component
export default function OSPage({ params }: { params: { id: string } }) {
  const os = OperatingSystems[params.id as OSId];

  // Check for valid IDs and applications
  if (!validIds.includes(params.id) || !os) {
    notFound(); // Redirect to 404 if ID is not valid
  }

  return (
    <div className="container">
      <OSShortcutPageClient initialData={JSON.stringify(os)} />
    </div>
  );
}





// export default function OSPage({ params }: { params: { id: string } }) {
//   const os = OperatingSystems[params.id as OSId];

//   if (!os) {
//     return notFound();
//   }

//   const sections = os.groups?.map((group) => ({
//     id: group.title.toLowerCase().replace(/\s+/g, "-"),
//     title: group.title,
//   })) || [];

//   return (
//     <div className="container flex flex-col lg:flex-row gap-8">
//       <div className="flex-1">
//         <OSShortcutPageClient os={os} />
//       </div>
//       {sections.length > 0 && <UnifiedSidebar sections={sections} />}
//     </div>
//   );
// }