// app/[...404]/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home after 3 seconds, or replace with custom logic
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">Redirecting to the home page...</p>
    </div>
  );
}
