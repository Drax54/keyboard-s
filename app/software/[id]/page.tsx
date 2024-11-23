// import { applications } from "@/data/applications";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   return Object.keys(applications).map((id) => ({ id }));
// }

// export default function ApplicationPage({ params }: { params: { id: string } }) {
//   const app = applications[params.id];

//   if (!app) {
//     notFound();
//   }

//   return (
//     <div className="container py-10 ml-16">
//       <div className="flex items-center gap-4 mb-8">
//         <img src={app.icon} alt={app.name} className="w-12 h-12" />
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">{app.name}</h1>
//           <p className="text-muted-foreground">{app.description}</p>
//         </div>
//       </div>

//       <div className="space-y-12">
//         {app.groups.map((group) => (
//           <ShortcutGroup key={group.title} group={group} />
//         ))}
//       </div>
//     </div>
//   );
// }



// app/software/[id]/page.tsx// app/software/[id]/page.tsx

// app/software/[id]/page.tsx

// import { applications } from "@/data/applications";
// import { SoftwarePageClient } from "./client";
// import { notFound } from "next/navigation";

// // Generate static params for all applications
// export async function generateStaticParams() {
//   return Object.keys(applications).map((id) => ({
    
//     id: applications[id].id, // Use the correct `id` property from the application object
    
//   }));
// }

// export default function SoftwarePage({ params }: { params: { id: string } }) {
//   const app = applications[params.id];

//   if (!app) {
//     notFound();
//   }

//   return <SoftwarePageClient app={app} />;
// }

// app/software/[id]/page.tsx


// import { applications } from "@/data/applications";
// import { SoftwarePageClient } from "./client";
// import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   return Object.keys(applications).map((key) => ({
//     id: applications[key].id, // Ensure this maps the correct `id` values
//   }));
// }

// export default function SoftwarePage({ params }: { params: { id: string } }) {
//   const app = applications[params.id];

//   if (!app) {
//     notFound();
//   }

//   return <SoftwarePageClient app={app} />;
// }





// import { applications } from "@/data/applications";
// import { DetailPageLayout } from "@/components/detail-page-layout";
// import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   return Object.keys(applications).map((key) => ({
//     id: applications[key].id,
//   }));
// }

// export default function SoftwarePage({ params }: { params: { id: string } }) {
//   const app = applications[params.id];

//   if (!app) {
//     notFound();
//   }

//   return <DetailPageLayout app={app} />;
// }








// // app/software/[id]/page.tsx
// import { applications } from "@/data/applications";
// import { notFound } from "next/navigation";
// import { SoftwarePageClient } from "./client";
// import { UnifiedSidebar } from "@/components/unified-sidebar";

// export async function generateStaticParams() {
//   return Object.keys(applications).map((key) => ({
//     id: applications[key].id,
//   }));
// }

// export default function SoftwarePage({ params }: { params: { id: string } }) {
//   const app = applications[params.id];

//   if (!app) {
//     notFound();
//   }

//   // Generate sections from app groups
//   const sections = app.groups?.map((group: any) => ({
//     id: group.title.toLowerCase().replace(/\s+/g, "-"),
//     title: group.title,
//   })) || [];

//   return (
//     <div className="container flex gap-8">
//       <div className="flex-1">
//         <SoftwarePageClient app={app} />
//       </div>
//       <UnifiedSidebar sections={sections} />
//     </div>
//   );
// }





// app/software/[id]/page.tsx
import { applications } from "@/data/applications";
import { notFound } from "next/navigation";
import { SoftwarePageClient } from "./client";

export const dynamic = 'force-static';
export const revalidate = false;

// Ensure the type of keys in applications
type ApplicationId = keyof typeof applications;

export async function generateStaticParams() {
  return Object.keys(applications).map((key) => ({
    id: key, // Use the key directly
  }));
}

export default function SoftwarePage({ params }: { params: { id: string } }) {
  // Assert that params.id is one of the known keys
  const app = applications[params.id as ApplicationId];

  if (!app) {
    notFound();
  }

  return (
    <div className="container">
      <SoftwarePageClient initialData={JSON.stringify(app)} />
    </div>
  );
}
