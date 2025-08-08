"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Chat", href: "/chat" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-lg px-2 sm:px-4 py-2 sm:py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between z-40 gap-2 sm:gap-0">
      <div className="flex items-center gap-2 justify-between">
        <span className="block text-lg xs:text-xl font-bold text-primary tracking-tight">
          <span className="text-accent">AI</span>Effort Tracker
        </span>
      </div>
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`px-2 sm:px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
              pathname === l.href
                ? "bg-primary text-white"
                : "text-secondary hover:text-primary"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/"
          onClick={() => {
            localStorage.removeItem("efforttracker_token");
          }}
          className="text-xs text-accent underline hover:text-primary whitespace-nowrap ml-1 sm:ml-2"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}
