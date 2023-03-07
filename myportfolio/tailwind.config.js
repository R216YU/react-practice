/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        notoSans: ['Noto Sans JP', 'sans-serif']
      },
      colors: {
        "wallpaper": "#23282F",
        "header": "#141920",
        "theme": "#16DB93",
        "accent": "#094D92",
        "text": "#E6E6E6",
      },
    },
  },
  plugins: [],
}
