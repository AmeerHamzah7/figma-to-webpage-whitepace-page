import { Montserrat_Alternates } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dmSans: ["'DM Sans'", "sans-serif"],
        montserrat: ["'Montserrat", "sans-serif"],
        inter: ["'Inter", "sans-serif"], // Add DM Sans as a font family
      },
    },
  },
  plugins: [],
} satisfies Config;