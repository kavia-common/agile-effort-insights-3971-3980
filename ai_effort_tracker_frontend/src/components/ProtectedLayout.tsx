"use client";

import { useEffect } from "react";
import { isAuthenticated } from "@/utils/auth";

/**
 * Wraps protected content; redirects to /auth if not authenticated.
 */
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = "/auth";
    }
  }, []);
  return <>{children}</>;
}
