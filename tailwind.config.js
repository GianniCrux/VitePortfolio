/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      carousel: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(calc(-50%))' },
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      }
    },
    animation: {
      carousel: 'carousel var(--animation-duration, 40s) linear infinite',
    },
  },
  plugins: [],
}

