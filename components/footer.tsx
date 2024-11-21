// components/footer.tsx

// components/Footer.tsx
"use client";

import { Github, Twitter, Command, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Command className="h-6 w-6" />
              <span className="text-xl font-bold">KeyMaster</span>
            </div>
            <p className="text-sm text-gray-500">
              Your ultimate guide to keyboard shortcuts for software, operating systems, games, and more
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/software" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/os" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Operating Systems
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/websites" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Websites
                </Link>
              </li>
              <li>
                <Link href="/browsers" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Browsers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>© {currentYear} KeyMaster. Made with</span>
              <Heart className="h-4 w-4 text-red-500 inline" />
              <span>by Veronica</span>
            </div>
            {/* <div className="flex items-center gap-6">
              <button className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Dark Mode
              </button>
              <select className="text-sm text-gray-500 bg-transparent border-none focus:ring-0">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}