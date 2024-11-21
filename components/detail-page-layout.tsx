//components/detail-page-layout.tsx

// components/detail-page-layout.tsx
"use client";

import { useState, useEffect } from "react";
import { SoftwarePageClient } from "@/app/software/[id]/client";
import { UnifiedSidebar } from "@/components/unified-sidebar";

interface DetailPageLayoutProps {
  app: any; // You might want to type this properly based on your data structure
}

export function DetailPageLayout({ app }: DetailPageLayoutProps) {
  const [sections, setSections] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    if (app?.groups) {
      const groupSections = app.groups.map((group: any) => ({
        id: group.title.toLowerCase().replace(/\s+/g, "-"),
        title: group.title,
      }));
      setSections(groupSections);
    }
  }, [app]);

  return (
    <div className="container flex gap-8">
      <div className="flex-1">
        <SoftwarePageClient app={app} sections={sections} />
      </div>
      <UnifiedSidebar initialSections={sections} />
    </div>
  );
}