/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-red":"#E83A3E"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
  // "plugins": ["prettier-plugin-tailwindcss"]
}