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
        primary: {
          DEFAULT: '#D84315', // Burnt orange/deep red
          light: '#FF6E40',
          dark: '#BF360C',
        },
        secondary: {
          DEFAULT: '#1A237E', // Navy
          light: '#3949AB',
          dark: '#0D1642',
        },
        accent: {
          DEFAULT: '#FF5722', // Bright orange accent for CTAs
          light: '#FF7043',
          dark: '#E64A19',
        },
        charcoal: {
          DEFAULT: '#263238',
          light: '#37474F',
          dark: '#1C2529',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
