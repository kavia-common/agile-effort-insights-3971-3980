import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary" | "accent";
  loading?: boolean;
  children: React.ReactNode;
};

// PUBLIC_INTERFACE
export default function Button({
  color = "primary",
  loading,
  children,
  ...props
}: ButtonProps) {
  let colorClass = "";
  if (color === "primary")
    colorClass = "bg-primary text-white hover:bg-accent";
  else if (color === "secondary")
    colorClass = "bg-secondary text-white hover:bg-accent";
  else if (color === "accent")
    colorClass = "bg-accent text-black hover:bg-primary";
  return (
    <button
      className={`py-2 px-6 rounded-md font-semibold text-base transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${colorClass}`}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? <span>...</span> : children}
    </button>
  );
}
