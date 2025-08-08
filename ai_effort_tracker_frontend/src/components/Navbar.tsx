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
    <nav className="w-full bg-white border-b border-gray-100 shadow-lg px-4 py-3 flex items-center justify-between z-40">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-primary tracking-tight">
          <span className="text-accent">AI</span>
          Effort Tracker
        </span>
      </div>
      <div className="flex gap-3">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
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
          className="ml-2 text-xs text-accent underline hover:text-primary"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}
