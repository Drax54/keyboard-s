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









import { operatingSystems } from "@/data/operating-systems";
import { OSPageClient } from "./client";
import { UnifiedSidebar } from "@/components/unified-sidebar";
import { notFound } from "next/navigation";

export const dynamic = "force-static"; // Forces static generation
export const revalidate = false; // Prevents ISR for static export

// Generate static paths for all OS items
export async function generateStaticParams() {
  return Object.keys(operatingSystems).map((id) => ({ id }));
}

export default function OSPage({ params }: { params: { id: string } }) {
  // Retrieve the OS data based on the route parameter
  const os = operatingSystems[params.id];

  // If OS data doesn't exist, show a 404 page
  if (!os) {
    return notFound();
  }

  // Create sections for the UnifiedSidebar component
  const sections =
    os.groups?.map((group) => ({
      id: group.title.toLowerCase().replace(/\s+/g, "-"),
      title: group.title,
    })) || [];

  return (
    <div className="container flex flex-col lg:flex-row gap-8">
      {/* Main OS content */}
      <div className="flex-1">
        <OSPageClient os={os} />
      </div>

      {/* Sidebar for navigating within the page */}
      {sections.length > 0 && <UnifiedSidebar sections={sections} />}
    </div>
  );
}
