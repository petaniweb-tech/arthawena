import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "aeonik-regular": ["var(--font-aeonik-regular)", "sans-serif"],
        "aeonik-medium": ["var(--font-aeonik-medium)", "sans-serif"],
      },
      padding: {
        "content-padding-sm": "30px",
        "content-padding-lg": "100px",
        "content-padding-2xl": "140px",
      },
      colors: {
        background: "#F4F4F4",
        primary: "#E04C1C",
        secondary: "#DA6916",
        auxiliary: "#E2A324",
        arsenic: "#494949",
        charcoal: "#2D2C2C",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #F0872E, #E25E1A)",
        "green-gradient": "linear-gradient(to right, #A3CF44, #6ABF31)",
        "blue-gradient": "linear-gradient(to right, #2B55B2, #7D7FB8)",
        "yellow-gradient": "linear-gradient(to right, #E3B524, #E6D624)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
