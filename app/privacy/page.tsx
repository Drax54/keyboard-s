// app/privacy/page.tsx
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="flex items-center gap-4 mb-8">
        <Shield className="h-10 w-10 text-blue-500" />
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect basic usage data to improve our service, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and interactions</li>
            <li>Device information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
          <p className="text-gray-600 mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Improve our keyboard shortcuts database</li>
            <li>Enhance user experience</li>
            <li>Fix bugs and technical issues</li>
            <li>Analyze usage patterns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="text-gray-600">
            We implement various security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Secure HTTPS encryption</li>
            <li>Regular security audits</li>
            <li>Limited data retention</li>
            <li>Access controls</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about our privacy policy, please contact us at{" "}
            <a href="mailto:privacy@keymaster.com" className="text-blue-500 hover:text-blue-600">
              privacy@keymaster.com
            </a>
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t text-sm text-gray-500">
        Last updated: November 2024
      </div>
    </div>
  );
}