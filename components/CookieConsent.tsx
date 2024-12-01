"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the cookie exists on component mount
  useEffect(() => {
    const cookieConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));
    if (!cookieConsent) {
      setIsVisible(true); // Show the banner if no cookie is set
    }
  }, []);

  const handleAccept = () => {
    // Set a cookie for consent
    document.cookie = "cookieConsent=accepted; path=/; max-age=31536000"; // 1 year expiration
    setIsVisible(false); // Hide the banner
  };

  const handleReject = () => {
    // Set a cookie for rejection
    document.cookie = "cookieConsent=rejected; path=/; max-age=31536000"; // 1 year expiration
    setIsVisible(false); // Hide the banner
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700 z-50">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="Close"
      >
        <X size={20} />
      </button>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">We use cookies</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleAccept}
          className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-150 ease-in-out"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition duration-150 ease-in-out dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
