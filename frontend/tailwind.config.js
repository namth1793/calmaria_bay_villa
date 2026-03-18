/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ede4d3',
          300: '#e0d0b8',
          400: '#c9a96e',
          500: '#b8935a',
          600: '#9a7a48',
        },
        ocean: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          400: '#38a3d4',
          500: '#1a7fa8',
          600: '#0e6a90',
          700: '#0a5270',
        },
      },
      fontFamily: {
        serif: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
