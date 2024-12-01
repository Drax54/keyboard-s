"use client";

import { useState } from "react";
import { Search, Globe, X } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function WebsitesClient({ websitesArray }: { websitesArray: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredWebsites = searchQuery
    ? websitesArray.filter((site) =>
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : websitesArray;

  return (
    <>
      {/* Header Section with Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 sm:mb-12">
        {/* Title and Description */}
        <div className="flex items-start gap-4">
          <Globe className="h-8 w-8 sm:h-12 sm:w-12 text-500 shrink-0" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold truncate">Website Shortcuts</h1>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg">
              Keyboard shortcuts for popular websites and web applications
            </p>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="w-full sm:w-72 group">
          <div
            className={cn(
              "relative flex items-center transition-all duration-300",
              isFocused && "scale-105"
            )}
          >
            <Search
              className={cn(
                "absolute left-3 w-5 h-5 transition-all duration-300",
                isFocused ? "text-blue-500" : "text-gray-400"
              )}
            />
            <input
              type="text"
              placeholder="Search websites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                "w-full pl-10 pr-4 py-2.5 border rounded-lg",
                "bg-white/80 backdrop-blur-sm",
                "transition-all duration-300 ease-in-out",
                "placeholder:text-gray-400 placeholder:transition-opacity text-sm sm:text-base",
                "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500",
                isFocused ? "shadow-lg border-blue-500" : "border-gray-200 shadow-sm",
                "hover:border-gray-300"
              )}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={cn(
                  "absolute right-3 p-1 rounded-full",
                  "text-gray-400 hover:text-gray-600",
                  "hover:bg-gray-100 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                )}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Results Count */}
          {searchQuery && (
            <div className="text-sm text-gray-500 mt-2 sm:absolute sm:-bottom-6 sm:left-0">
              {filteredWebsites.length} result
              {filteredWebsites.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredWebsites.length > 0 ? (
          filteredWebsites.map((site) => (
            <Link key={site.id} href={`/websites/${site.id}`}>
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                    <img
                      src={site.icon}
                      alt={site.name}
                      className="w-full h-full rounded object-contain"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-base sm:text-lg truncate">
                      {site.name}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                      {site.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full py-8">
            No websites found matching your search.
          </p>
        )}
      </div>
    </>
  );
}
