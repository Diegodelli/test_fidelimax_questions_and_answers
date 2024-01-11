import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-900": "#19202D",
        "yellow-500": "#FFB800",
        "red-800": "#CD2B31",
        "green-900": "#18794E",
        "gray-100": "#FFFF",
        "gray-200": "#f2f4f8",
        "state-500-opacity": "#64748b5e",
      },
      fontFamily: {
        customFont: ["Poppins", "Inter", "sans-seirf"],
      },
    },
  },
  plugins: [],
};

export default config;
