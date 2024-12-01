// components/footer.tsx

// components/Footer.tsx
"use client";

import { Github, Twitter, Command, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Command className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Boost My Key
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            Discover keyboard shortcuts for software, games, and operating systems. KeyMaster is your ultimate guide to mastering productivity.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/software"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Software
                </Link>
              </li>
              <li>
                <Link
                  href="/os"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Operating Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/websites"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/browsers"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Browsers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <span>© {currentYear} Boost My Key. Made with</span>
              <Heart className="h-4 w-4 text-red-500 inline" />
              <span>by Veronica</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
