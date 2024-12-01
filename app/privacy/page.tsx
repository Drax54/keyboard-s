// app/privacy/page.tsx
import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://boostmykey.com" // Your production domain
      : "http://localhost:3000"  // Local development domain
  ),

  title: "Privacy & Policy - Boost My Key",
  description: "Learn how Boost My Key protects your data. Our Privacy Policy covers cookies, analytics, ads, and your choices for managing personal information",
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/privacy",
  },
};



export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-8">
        <Shield className="h-12 w-12 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We do not collect any personal data directly. The only information we process is via third-party tools for analytics and advertisements:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Google Analytics: Tracks anonymized website usage data.</li>
            <li>Google Ads: Displays relevant advertisements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            How We Use Your Data
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The data collected via third-party tools is used to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Monitor and analyze website performance.</li>
            <li>Enhance user experience and content delivery.</li>
            <li>Display relevant ads to support website operations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Cookies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Google Analytics and Google Ads may use cookies to collect non-personalized data. You can manage your cookie preferences via your browser settings or through Google’s ad preferences tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Data Protection
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We ensure your browsing activity is protected through:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Secure HTTPS connections.</li>
            <li>Usage of anonymized data through third-party tools.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Your Choices
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You have control over:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Managing cookies via browser settings.</li>
            <li>Opting out of personalized ads via Google’s tools at <a href="https://adssettings.google.com/" className="text-blue-500 hover:text-blue-600 transition-colors">Google Ads Settings</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have questions about this policy or how your data is handled, please contact us at:{" "}
            <a href="mailto:alanxpela@protonmail.com" className="text-blue-500 hover:text-blue-600 transition-colors">
            alanxpela@protonmail.com
            </a>
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
        Last updated: 27 November 2024
      </div>
    </div>
  );
}
