/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      dropShadow: {
        'custom-blue': '0 0 2em #646cffaa',
        'custom-react': '0 0 2em #61dafbaa',
      },
    },
  },
  plugins: [],
};
