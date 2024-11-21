// components/platform-toggle.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PlatformToggleProps {
  platform: "windows" | "mac";
  onPlatformChange: (platform: "windows" | "mac") => void;
}

export function PlatformToggle({ platform, onPlatformChange }: PlatformToggleProps) {
  return (
    <div className="inline-flex rounded-lg bg-muted p-1">
      <button
        onClick={() => onPlatformChange("windows")}
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
        onClick={() => onPlatformChange("mac")}
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