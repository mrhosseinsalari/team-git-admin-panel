import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./domain/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: "var(--font-vazirmatn)",
      },
      colors: {
        customGray: {
          100: "#eee",
          200: "#aaa",
          300: "#888",
          400: "#666",
          500: "#222",
        },
        customBlue: {
          500: "#0855df",
        },
      },
      maxWidth: {
        containerWidth: "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
