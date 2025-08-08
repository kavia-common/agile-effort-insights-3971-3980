import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Effort Tracker",
  description: "AI-powered agile sprint analytics & effort reporting frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-background" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
