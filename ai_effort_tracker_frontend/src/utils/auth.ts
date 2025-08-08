"use client";

/**
 * Minimalistic authentication token storage for client-side usage.
 */

const TOKEN_KEY = "efforttracker_token";

// PUBLIC_INTERFACE
export function setToken(token: string) {
  if (typeof window !== "undefined") localStorage.setItem(TOKEN_KEY, token);
}

// PUBLIC_INTERFACE
export function getToken() {
  if (typeof window !== "undefined") return localStorage.getItem(TOKEN_KEY);
  return undefined;
}

// PUBLIC_INTERFACE
export function clearToken() {
  if (typeof window !== "undefined") localStorage.removeItem(TOKEN_KEY);
}

// PUBLIC_INTERFACE
export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(TOKEN_KEY);
}
