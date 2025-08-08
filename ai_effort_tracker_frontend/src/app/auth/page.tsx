"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { apiFetch } from "@/utils/api";
import { setToken } from "@/utils/auth";

type View = "login" | "register";

/**
 * SignIn/User Registration Page
 *
 * Simple auth form with toggle; connects to REST API `/api/auth/login` and `/api/auth/register`.
 * Token stored on login and page reloads.
 */
export default function AuthPage() {
  const [view, setView] = useState<View>("login");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(undefined);
    setLoading(true);
    try {
      const endpoint =
        view === "login" ? "/api/auth/login" : "/api/auth/register";
      const res = await apiFetch<{ token: string }>(endpoint, {
        method: "POST",
        body: JSON.stringify({ email, password: passwd }),
      });
      setToken(res.token);
      window.location.href = "/";
    } catch (err) {
      // Safe type for caught error
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-background py-6 xs:py-8 px-2 w-full">
      <div className="bg-white rounded-lg shadow-md px-4 xs:px-6 md:px-8 py-8 xs:py-10 w-full max-w-xs xs:max-w-sm border border-gray-100">
        <h1 className="text-xl xs:text-2xl font-semibold text-center mb-2 xs:mb-3 text-primary">
          {view === "login" ? "Sign In" : "Create Account"}
        </h1>

        <form className="flex flex-col gap-3 xs:gap-4" onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
            required
          />
          {error && (
            <div className="text-red-500 text-center text-xs xs:text-sm">{error}</div>
          )}
          <Button type="submit" color="primary" loading={loading} className="w-full">
            {view === "login" ? "Sign In" : "Register"}
          </Button>
        </form>
        <div className="mt-3 xs:mt-4 text-center text-xs xs:text-sm">
          {view === "login" ? (
            <>
              New?{" "}
              <button
                className="text-accent underline font-medium"
                onClick={() => setView("register")}
                type="button"
              >
                Create account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-accent underline font-medium"
                onClick={() => setView("login")}
                type="button"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
