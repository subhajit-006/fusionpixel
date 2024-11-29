/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontNeue: [" Bebas Neue "],
        fontRal: [" Raleway "],
        fontProtest: [" Protest Revolution "],
        fontCin: [" Cinzel "]
      }
    },
  },
  plugins: [],
}