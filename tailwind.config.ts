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
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B9DDFF',
          300: '#7CC2FF',
          400: '#36A2FF',
          500: '#0C83EB',
          600: '#0066CC',
          700: '#0051A6',
          800: '#054486',
          900: '#0A3A6E',
          950: '#072448', // Deep Navy
        },
        medical: {
          teal: '#0D9488',
          cyan: '#0284C7',
          sky: '#0EA5E9',
          navy: '#0F2744',
          slate: '#1E293B',
          emerald: '#059669',
        },
        surface: {
          base: '#F8FAFC',
          card: '#FFFFFF',
          subtle: '#F1F5F9',
          border: '#E2E8F0',
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
        'elevated': '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          '"DM Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        display: [
          'var(--font-display)',
          '"Outfit"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
