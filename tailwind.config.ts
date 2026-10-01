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
        cream: {
          DEFAULT: "#FFF4D9",
          light: "#FFFAF0",
          card: "#FFF8E7",
          dark: "#F4E3BA",
        },
        dark: {
          DEFAULT: "#151515",
          surface: "#222222",
          muted: "#4A4A4A",
          border: "#151515",
        },
        accent: {
          orange: "#FF5A1F",
          lime: "#B8FF22",
          blue: "#2F5BF0",
          pink: "#F18AA6",
          lavender: "#B7A1F4",
        },
      },
      boxShadow: {
        'hard-sm': '2px 2px 0px #151515',
        'hard': '4px 4px 0px #151515',
        'hard-md': '5px 5px 0px #151515',
        'hard-lg': '7px 7px 0px #151515',
        'hard-xl': '10px 10px 0px #151515',
        'hard-hover': '6px 6px 0px #151515',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Arial Black"',
          'sans-serif',
        ],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
