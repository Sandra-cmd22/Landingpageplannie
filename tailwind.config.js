/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF4E00',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#D3F26A',
          foreground: '#050517',
        },
        background: '#F5F5EA',
        foreground: '#050517',
      },
    },
  },
  plugins: [],
}
