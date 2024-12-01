// app/cookies/page.tsx
import { Cookie } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://boostmykey.com" // Your production domain
      : "http://localhost:3000"  // Local development domain
  ),

  title: "Cookie Policy - Boost My Key",
  description: "Understand how Boost My Key uses cookies to enhance your experience. Learn about Google Analytics, Ads, and managing cookies for optimal browsing.",
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/cookies",
  },
};


export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-8">
        <Cookie className="h-12 w-12 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Cookie Policy
        </h1>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What Are Cookies?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Cookies are small text files stored on your device to enhance your browsing experience. They help us understand user behavior and improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            How We Use Cookies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            On our website, we only use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Google Analytics:</strong> To gather anonymized data about user behavior, such as pages visited and time spent on the site, helping us improve content and performance.
            </li>
            <li>
              <strong>Google Ads:</strong> To display relevant advertisements based on user interests and activity.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Managing Cookies
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You can manage or delete cookies through your browser settings. Disabling cookies may impact certain functionalities on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Third-Party Cookies
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We do not use any third-party cookies other than Google Analytics and Google Ads. These services may place cookies to track interactions and optimize their features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Updates to This Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            This cookie policy may be updated periodically to reflect changes in our practices or relevant regulations. Please check back for updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about our cookie policy, please contact us at{" "}
            <a
              href="mailto:privacy@alanxpela@protonmail.com"
              className="text-blue-500 underline hover:text-blue-600 transition-all"
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
