/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#75D3CF',
        'secondary': '#2D9596',
        'accent': '#FF6B6B',
        'accent-light': '#FFE1E1',
        'dark': '#2D3436',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
      },
        animation: {
          'fade-in': 'fadeIn 0.3s ease-in',
          'slide-up': 'slideUp 0.3s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          slideUp: {
            '0%': { transform: 'translateY(10px)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          }
      }
    },
  },
  plugins: [],
}