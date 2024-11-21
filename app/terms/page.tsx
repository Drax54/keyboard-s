// app/terms/page.tsx
import { ScrollText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="flex items-center gap-4 mb-8">
        <ScrollText className="h-10 w-10 text-blue-500" />
        <h1 className="text-3xl font-bold">Terms of Service</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using KeyMaster, you agree to be bound by these Terms of Service
            and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="text-gray-600 mb-4">
            We grant you a personal, non-exclusive, non-transferable license to use KeyMaster
            subject to these terms:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Personal and non-commercial use only</li>
            <li>No reproduction or distribution without permission</li>
            <li>No modification or derivative works</li>
            <li>No commercial use without written consent</li>
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