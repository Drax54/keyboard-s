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







import { browsers } from "@/data/browsers";
import { notFound } from "next/navigation";
import { BrowserShortcutPageClient } from "./client";
import { UnifiedSidebar } from "@/components/unified-sidebar";

// Add TypeScript type for params
type StaticParam = {
    id: string;
};

export const dynamic = "force-static";
export const revalidate = false;

// export async function generateStaticParams() {
//   return Object.keys(browsers).map((key) => ({
//     id: browsers[key].id,
//   }));
// }

// Enhanced generateStaticParams with logging
export function generateStaticParams(): StaticParam[] {
    // Ensure `browsers` is an object
    if (typeof browsers !== "object") {
        throw new Error("browsers must be an object");
    }

    // Get keys from the browsers object
    const browserIds = Object.keys(browsers);

    // Log the generated params for debugging
    console.log("Generating static params for browsers:", browserIds);

    // Map each key into a static param object
    return browserIds.map((id) => ({ id }));
}



export default function BrowserShortcutPage({ params }: { params: { id: string } }) {
    const browser = browsers[params.id];

    if (!browser) {
        notFound();
    }

    return (
        <div className="container flex gap-8">
            <div className="flex-1">
                {/* Pass serialized JSON to the client */}
                <BrowserShortcutPageClient initialData={JSON.stringify(browser)} />
            </div>
            {/* <UnifiedSidebar sections={sections} /> */}
        </div>
    );
}


