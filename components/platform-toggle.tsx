// components/platform-toggle.tsx

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PlatformToggleProps {
  platform: "windows" | "mac";
  onChange: (platform: "windows" | "mac") => void;  // Changed from onPlatformChange to onChange
}

export function PlatformToggle({ platform, onChange }: PlatformToggleProps) {
  return (
    <div className="inline-flex rounded-lg bg-muted p-1">
      <button
        onClick={() => onChange("windows")}
        className={cn(
          "flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
          platform === "windows" 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-muted-foreground/10"
        )}
      >
        Windows
      </button>
      <button
        onClick={() => onChange("mac")}
        className={cn(
          "flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
          platform === "mac" 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-muted-foreground/10"
        )}
      >
        macOS
      </button>
    </div>
  );
}