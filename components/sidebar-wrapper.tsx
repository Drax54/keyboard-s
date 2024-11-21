//components/sidebarwrapper.tsx

"use client";

import { usePathname } from "next/navigation";
import { UnifiedSidebar } from "@/components/unified-sidebar";

export default function SidebarWrapper() {
  const pathname = usePathname();

  // Determine if we are on a detail page
  const isDetailPage =
    pathname.split("/").length > 2 &&
    (pathname.startsWith("/software/") ||
      pathname.startsWith("/os/") ||
      pathname.startsWith("/games/") ||
      pathname.startsWith("/browsers/") ||
      pathname.startsWith("/websites/"));

  if (!isDetailPage) {
    return null;
  }

  return <UnifiedSidebar />;
}
