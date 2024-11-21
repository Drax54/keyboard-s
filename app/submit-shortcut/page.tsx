"use client";

import { useState } from "react";

export default function SubmitShortcutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shortcut: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newShortcut = {
      name: formData.name,
      email: formData.email,
      shortcut: formData.shortcut,
    };

    // Save JSON file
    const fileData = new Blob([JSON.stringify(newShortcut, null, 2)], { type: "application/json" });
    const fileName = `${formData.name.replace(/ /g, "_")}_shortcut.json`;

    // Simulate file download
    const fileUrl = URL.createObjectURL(fileData);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();

    // Display success message
    setSuccessMessage("Shortcut submitted successfully!");
    setFormData({ name: "", email: "", shortcut: "" });
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Submit a Shortcut</h1>
      <p className="text-gray-500 mb-6">
        Submit your favorite keyboard shortcut, and we'll add it to the collection!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="shortcut" className="block text-sm font-medium text-gray-700">
            Shortcut Description
          </label>
          <textarea
            id="shortcut"
            name="shortcut"
            value={formData.shortcut}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
    </div>
  );
}
