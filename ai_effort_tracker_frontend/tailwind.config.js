module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#475569",
        accent: "#fbbf24",
        heading: "#1e293b",
        background: "#f8fafc",
      },
    },
  },
  plugins: [],
};
