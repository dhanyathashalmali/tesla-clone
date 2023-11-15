/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your own classes here
      objectFit: {
        'contain': 'contain',
      },
    },
  },
  variants: {},
  plugins: [],
}

