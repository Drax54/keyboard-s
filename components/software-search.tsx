// components/software-search.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SoftwareSearchProps {
  applications: any[];
}

export function SoftwareSearch({ applications }: SoftwareSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = applications.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search software..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {filteredApps.map((app) => (
          <Link
            key={app.id}
            href={`/software/${app.id}`}
            prefetch={false}
            className="block p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0">
                <img
                  src={app.icon}
                  alt={app.name}
                  width={40}
                  height={40}
                  className="rounded w-full h-full"
                  loading="eager"
                  decoding="sync"
                />
              </div>
              <div>
                <h2 className="font-medium text-gray-900">{app.name}</h2>
                <p className="text-sm text-gray-500">
                  {app.description.length > 60
                    ? `${app.description.slice(0, 60)}...`
                    : app.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}