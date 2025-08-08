"use client";

/**
 * Centralized API utility for REST and WebSocket endpoints
 * For all fetch requests, includes authentication token header if present in localStorage.
 */

// PUBLIC_INTERFACE
export async function apiFetch<T>(
  url: string,
  opts: RequestInit & { multipart?: boolean } = {}
): Promise<T> {
  const headers: Record<string, string> = {};
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("efforttracker_token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }
  if (!opts.multipart) headers["Content-Type"] = "application/json";
  const res = await fetch(url, {
    ...opts,
    headers: { ...headers, ...(opts.headers || {}) },
  });
  if (!res.ok) {
    let detail = "";
    try {
      const json = await res.json();
      detail = json.detail || JSON.stringify(json);
    } catch {
      detail = await res.text();
    }
    throw new Error(
      `API error: ${res.status} ${res.statusText}${detail ? " - " + detail : ""}`
    );
  }
  return res.json();
}

// PUBLIC_INTERFACE
export function getWebSocketURL(path: string) {
  // Adapts HTTP(S) API URL to WS(S)
  let base = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
  base = base.replace(/^http/, "ws");
  return `${base}${path}`;
}
