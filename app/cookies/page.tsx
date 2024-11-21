// app/cookies/page.tsx
import { Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="flex items-center gap-4 mb-8">
        <Cookie className="h-10 w-10 text-blue-500" />
        <h1 className="text-3xl font-bold">Cookie Policy</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
          <p className="text-gray-600">
            Cookies are small text files stored on your device to enhance your browsing
            experience on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Essential cookies for site functionality</li>
            <li>Analytics cookies to improve our service</li>
            <li>Preference cookies to remember your settings</li>
            <li>Performance cookies for better user experience</li>
          </ul>
        </section>

        {/* Additional sections as needed */}
      </div>

      <div className="mt-12 pt-8 border-t text-sm text-gray-500">
        Last updated: November 2024
      </div>
    </div>
  );
}