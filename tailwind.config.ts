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
        sky: {
          50: "#E8F4FD",
          100: "#F0F8FF",
          200: "#D1E9FB",
          300: "#A8D4F5",
          400: "#7BBDE8",
          500: "#4FA3D8",
          600: "#2B87C5",
          700: "#1A6BA0",
        },
        amber: {
          400: "#F5A623",
          500: "#E8941A",
          600: "#D4830F",
        },
        navy: {
          900: "#1a2340",
          800: "#243060",
        },
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #E8F4FD 0%, #F0F8FF 40%, #ffffff 100%)",
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
