/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
        'primary': ['Gilroy', 'sans-serif'],
      },
      colors: {
        'text-primary': '#262925',
      },
      textColor: {
        'primary': '#262925',
      }
    },
  },
  plugins: [],
}

