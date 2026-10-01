/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#0052FF',
        brandLime: '#D2FF00',
        brandDark: '#0B0F19',
      }
    },
  },
  plugins: [],
}