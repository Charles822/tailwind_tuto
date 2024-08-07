/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        BlueCharles: {
          900: "#0557f0",
          600: "#6b9dfa"
        },
      },
    },
  },
  plugins: [],
}

