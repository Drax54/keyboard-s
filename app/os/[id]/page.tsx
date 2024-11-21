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



// app/os/[id]/page.tsx
import { operatingSystems } from "@/data/operating-systems";
import { OSPageClient } from "./client";
import { UnifiedSidebar } from "@/components/unified-sidebar";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(operatingSystems).map((id) => ({ id }));
}

export default function OSPage({ params }: { params: { id: string } }) {
  const os = operatingSystems[params.id];

  if (!os) {
    notFound();
  }

  // Generate sections from OS groups
  const sections = os.groups?.map((group: any) => ({
    id: group.title.toLowerCase().replace(/\s+/g, "-"),
    title: group.title,
  })) || [];

  return (
    <div className="container flex gap-8">
      <div className="flex-1">
        <OSPageClient os={os} />
      </div>
      <UnifiedSidebar sections={sections} />
    </div>
  );
}