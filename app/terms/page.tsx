// app/terms/page.tsx
import { ScrollText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://boostmykey.com" // Your production domain
      : "http://localhost:3000"  // Local development domain
  ),

  title: "Terms of Service - Boost My Key",
  description: "Review the Terms of Service for Boost My Key. Learn your rights, usage policies, and obligations.",
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/terms",
  },
};


export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-8">
        <ScrollText className="h-12 w-12 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Terms of Service
        </h1>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            By accessing and using Boost My Key, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Use License
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We grant you a personal, non-exclusive, non-transferable license to access and use Boost My Key, subject to the following conditions:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>For personal and non-commercial use only.</li>
            <li>You may not reproduce, distribute, or publicly display any content without prior written permission.</li>
            <li>No modification or creation of derivative works based on the content.</li>
            <li>Commercial use is strictly prohibited unless explicitly authorized by us in writing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Disclaimer
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Boost My Key provides content "as is" and makes no warranties, expressed or implied, regarding the accuracy or reliability of the information. We are not liable for any damages resulting from the use or inability to use the content provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Changes to Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We reserve the right to modify these Terms of Service at any time. Your continued use of Boost My Key after changes are posted constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have questions about these Terms of Service, please contact us at{" "}
            <a
              href="mailto:alanxpela@protonmail.com"
              className="text-blue-500 hover:text-blue-600 transition-all"
            >
              alanxpela@protonmail.com
            </a>.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
        Last updated: 27 November 2024
      </div>
    </div>
  );
}
