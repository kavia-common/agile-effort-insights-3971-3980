"use client";

import React, { useState } from "react";
import ProtectedLayout from "@/components/ProtectedLayout";
import Navbar from "@/components/Navbar";
import ExcelUpload from "@/components/ExcelUpload";

export default function DashboardPage() {
  const [lastUploadRes, setLastUploadRes] = useState<Record<string, unknown> | null>(null);

  return (
    <ProtectedLayout>
      <Navbar />
      <main className="max-w-5xl mx-auto px-2 xs:px-4 sm:px-8 py-6 mt-3 sm:mt-6 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3 text-center sm:text-left">
          Analytics Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          <section className="md:col-span-1 flex flex-col">
            <ExcelUpload onUpload={setLastUploadRes} />
            {lastUploadRes && (
              <div className="mt-4 text-green-700 text-xs">
                Upload successful! Data ready for analysis.
              </div>
            )}
          </section>
          <section className="md:col-span-2 mt-3 md:mt-0">
            <div className="mb-4">
              <h2 className="font-semibold mb-2 text-secondary text-[1.06rem] sm:text-lg">
                Reports &amp; Charts
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {/* Placeholders for now, integrate with REST for real data */}
                <div className="p-3 sm:p-4 border rounded bg-gray-50">
                  <span className="text-secondary text-xs sm:text-sm">
                    Automated Sprint Insights and Markdown Reports (COMING SOON)
                  </span>
                </div>
                <div className="p-3 sm:p-4 border rounded bg-gray-50">
                  <span className="text-secondary text-xs sm:text-sm">
                    Burndown/Variance Visualizations/Charts (COMING SOON)
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </ProtectedLayout>
  );
}
