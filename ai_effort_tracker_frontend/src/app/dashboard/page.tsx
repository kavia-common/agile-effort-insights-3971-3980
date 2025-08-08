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
      <main className="max-w-5xl mx-auto p-6 mt-6">
        <h1 className="text-3xl font-bold text-primary mb-3">
          Analytics Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-1">
            <ExcelUpload onUpload={setLastUploadRes} />
            {lastUploadRes && (
              <div className="mt-4 text-green-700 text-xs">
                Upload successful! Data ready for analysis.
              </div>
            )}
          </section>
          <section className="md:col-span-2">
            <div className="mb-4">
              <h2 className="font-semibold mb-2 text-secondary text-lg">
                Reports &amp; Charts
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {/* Placeholders for now, integrate with REST for real data */}
                <div className="p-4 border rounded bg-gray-50">
                  <span className="text-secondary text-sm">
                    Automated Sprint Insights and Markdown Reports (COMING SOON)
                  </span>
                </div>
                <div className="p-4 border rounded bg-gray-50">
                  <span className="text-secondary text-sm">
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
