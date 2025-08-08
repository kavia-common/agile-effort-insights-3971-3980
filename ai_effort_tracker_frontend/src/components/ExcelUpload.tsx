"use client";

import React, { useState } from "react";
import Button from "@/components/Button";

type Props = {
  onUpload: (result: Record<string, unknown>) => void;
};

export default function ExcelUpload({ onUpload }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // PUBLIC_INTERFACE
  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!file) {
      setError("Please select an Excel file");
      return;
    }
    setUploading(true);
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      const result = await res.json();
      onUpload(result as Record<string, unknown>);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Upload error");
      }
    } finally {
      setUploading(false);
    }
  }

  return (
    <form
      className="border border-gray-200 rounded-lg p-6 bg-gray-50 flex flex-col gap-2 md:gap-4"
      onSubmit={handleUpload}
    >
      <label className="font-semibold mb-1">
        Upload Sprint Excel Data (.xlsx)
      </label>
      <input
        type="file"
        accept=".xls,.xlsx"
        disabled={uploading}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="file:mr-2 file:py-2 file:px-4 file:rounded file:border-0 file:bg-primary file:text-white"
      />
      {error && <div className="text-sm text-red-500">{error}</div>}
      <Button type="submit" loading={uploading} color="accent">
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </form>
  );
}
