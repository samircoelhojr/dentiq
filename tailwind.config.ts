import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1D9E75",
          "green-dim": "#17805e",
          "green-faint": "#1D9E7520",
          bg: "#0a0f0a",
          surface: "#111611",
          border: "#1e2a1e",
          muted: "#4a5a4a",
          text: "#e8f0e8",
          "text-dim": "#8a9e8a",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderWidth: { "05": "0.5px" },
    },
  },
  plugins: [],
};

export default config;
