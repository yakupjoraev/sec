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
        'accent': '#eb4226',
        'dark': '#262925',
        'text-primary': '#262925',
      },
      textColor: {
        'primary': '#262925',
        'accent': '#eb4226',
        'dark': '#262925',
        'text-primary': '#262925',
      }
    },
  },
  plugins: [],
}

