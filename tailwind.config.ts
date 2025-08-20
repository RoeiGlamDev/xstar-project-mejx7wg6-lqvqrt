import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify the paths to all of the template files
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#f8d3e2', // Light pink for accents
          DEFAULT: '#ff6f91', // Main pink color
          dark: '#c2185b', // Darker pink for contrasts
        },
        white: '#ffffff', // White for backgrounds and text
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Elegant serif font for headings
        sans: ['Helvetica Neue', 'sans-serif'], // Clean sans-serif for body text
      },
    },
  },
  plugins: [],
};

export default config;