import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

// PUBLIC_INTERFACE
export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label ? (
        <label className="block font-medium text-secondary mb-1">{label}</label>
      ) : null}
      <input
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
        {...props}
      />
      {error ? (
        <span className="text-xs text-red-500 pt-0.5">{error}</span>
      ) : null}
    </div>
  );
}
