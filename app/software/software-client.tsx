
// // app/software/software-client.tsx

"use client";

import { useState } from "react";
import { Search, Command, X } from "lucide-react";
import Link from "next/link";
import { applications } from "@/data/applications";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Pre-compute the applications array
const applicationsArray = Object.values(applications);

export function SoftwareClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const filteredApps = searchQuery
        ? applicationsArray.filter(app =>
            app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : applicationsArray;


    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            {/* Header Section with Search */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 sm:mb-12">
                {/* Title and Description */}
                <div className="flex items-start gap-4">
                    <Command className="h-12 w-12" />
                    <div>
                        <h1 className="text-3xl font-bold">Software Shortcuts</h1>
                        <p className="text-gray-500 text-lg">
                            Essential keyboard shortcuts for your favorite applications
                        </p>
                    </div>
                </div>

                {/* Enhanced Search Bar */}
                <div className="relative w-72 group">
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
                            placeholder="Search software..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className={cn(
                                "w-full pl-10 pr-4 py-2.5 border rounded-lg",
                                "bg-white/80 backdrop-blur-sm",
                                "transition-all duration-300 ease-in-out",
                                "placeholder:text-gray-400 placeholder:transition-opacity",
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
                        <div className="absolute -bottom-6 left-0 text-sm text-gray-500 transition-opacity">
                            {filteredApps.length} result{filteredApps.length !== 1 ? 's' : ''}
                        </div>
                    )}
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredApps.length > 0 ? (
                    filteredApps.map((app) => (
                        <Link key={app.id} href={`/software/${app.id}`}>
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0">
                                        <img
                                            src={app.icon}
                                            alt={app.name}
                                            className="w-full h-full rounded object-contain"
                                            loading="eager"
                                            decoding="sync"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-base sm:text-lg truncate">{app.name}</h2>
                                        <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                                            {app.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No software found matching your search.
                    </p>
                )}
            </div>
        </div>
    );
}
