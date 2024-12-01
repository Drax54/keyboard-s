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



// import { applications } from "@/data/applications";
// import { notFound } from "next/navigation";
// import { SoftwarePageClient } from "./client";

// export const dynamic = 'force-static';
// export const revalidate = false;

// // Ensure the type of keys in applications
// type ApplicationId = keyof typeof applications;

// type StaticParam = {
//   id: string;
// };

// // export async function generateStaticParams() {
// //   return Object.keys(applications).map((key) => ({
// //     id: key, // Use the key directly
// //   }));
// // }


// export function generateStaticParams(): StaticParam[] {
//   if (typeof applications !== "object") {
//       throw new Error("browsers must be an object");
//   }

//   const ApplicationId = Object.keys(applications);
//   console.log("Generating static params for applications:", ApplicationId);
//   return ApplicationId.map((id) => ({ id }));
// }


// export default function SoftwarePage({ params }: { params: { id: string } }) {
//   // Assert that params.id is one of the known keys
//   const app = applications[params.id as ApplicationId];

//   if (!app) {
//     notFound();
//   }

//   return (
//     <div className="container">
//       <SoftwarePageClient initialData={JSON.stringify(app)} />
//     </div>
//   );
// }







// import { applications } from "@/data/applications";
// import { notFound } from "next/navigation";
// import { SoftwarePageClient } from "./client";
// import type { Metadata } from "next";

// export const dynamic = 'force-static';
// export const revalidate = false;



// const validIds = ["id1", "id2", "id3"]; // Example valid IDs



// type ApplicationId = keyof typeof applications;

// type StaticParam = {
//   id: string;
// };

// // Base URL configuration
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
//   (process.env.NODE_ENV === 'production' 
//     ? 'https://boostmykey.com' 
//     : 'http://localhost:3000');

// export function generateStaticParams(): StaticParam[] {
//   if (typeof applications !== "object") {
//     throw new Error("applications must be an object");
//   }
//   const applicationIds = Object.keys(applications);
//   return applicationIds.map((id) => ({ id }));
// }

// export function generateMetadata({ params }: { params: { id: string } }): Metadata {
//   const app = applications[params.id as ApplicationId];

//   if (!app) {
//     return {
//       title: "Software Not Found",
//       description: "The requested software shortcuts could not be found.",
//       metadataBase: new URL(baseUrl),
//     };
//   }

//   return {
//     metadataBase: new URL(baseUrl),
//     title: `${app.name} Keyboard Shortcuts - Boost My Key`,
//     description: `Master ${app.name} with our comprehensive keyboard shortcuts guide. Learn essential hotkeys and commands to boost your productivity with ${app.name}.`,
//     keywords: [
//       `${app.name} shortcuts`,
//       `${app.name} keyboard shortcuts`,
//       `${app.name} hotkeys`,
//       `${app.name} keyboard commands`,
//       'productivity shortcuts',
//       'keyboard shortcuts',
//       ...(app.platforms?.map(platform => `${platform} shortcuts`) || []),
//     ],
//     openGraph: {
//       title: `${app.name} Keyboard Shortcuts Guide`,
//       description: `Complete keyboard shortcuts guide for ${app.name}. Master the software with our comprehensive hotkey reference.`,
//       type: 'article',
//       url: `/software/${app.id}`,
//       siteName: "Boost My Key",
//       images: [
//         {
//           url: app.icon,
//           width: 1200,
//           height: 630,
//           alt: `${app.name} Shortcuts Guide`,
//         }
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${app.name} Keyboard Shortcuts`,
//       description: `Master ${app.name} with our complete shortcuts guide.`,
//       images: [`${baseUrl}${app.icon}`],
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
//       canonical: `${baseUrl}/software/${app.id}`,
//     },
//   };
// }

// export default function SoftwarePage({ params }: { params: { id: string } }) {
//   const app = applications[params.id as ApplicationId];

//   if (!app) {
//     notFound();
//   }

//   return (
//     <div className="container">
//       <SoftwarePageClient initialData={JSON.stringify(app)} />
//     </div>
//   );
// }









import { applications } from "@/data/applications";
import { notFound } from "next/navigation";
import { SoftwarePageClient } from "./client";
import type { Metadata } from "next";

// Enforce static generation and disable revalidation
export const dynamic = "force-static";
export const revalidate = false;

// Replace with your actual data source (static valid IDs for fallback)
const validIds = Object.keys(applications);

type ApplicationId = keyof typeof applications;

type StaticParam = {
  id: string;
};

// Base URL configuration
const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://boostmykey.com"
    : "http://localhost:3000");

// Generate static parameters for valid application IDs
export function generateStaticParams(): StaticParam[] {
  if (typeof applications !== "object") {
    throw new Error("applications must be an object");
  }
  const applicationIds = Object.keys(applications);
  return applicationIds.map((id) => ({ id }));
}

// Generate metadata for each application
export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const app = applications[params.id as ApplicationId];

  if (!app) {
    return {
      title: "Software Not Found",
      description: "The requested software shortcuts could not be found.",
      metadataBase: new URL(baseUrl),
      robots: {
        index: false, // Prevent indexing of invalid pages
        follow: false,
      },
    };
  }

  return {
    metadataBase: new URL(baseUrl),
    title: `${app.shortcutpageName} - Boost My Key`,
    description: `${app.metadescription}`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/software/${params.id}`,
    },
  };
}

// Main page component
export default function SoftwarePage({ params }: { params: { id: string } }) {
  const app = applications[params.id as ApplicationId];

  // Check for valid IDs and applications
  if (!validIds.includes(params.id) || !app) {
    notFound(); // Redirect to 404 if ID is not valid
  }

  return (
    <div className="container">
      <SoftwarePageClient initialData={JSON.stringify(app)} />
    </div>
  );
}
