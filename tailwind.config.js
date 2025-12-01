/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'monet-blue': '#a8c0d9',
        'monet-lavender': '#c8b5d9',
        'monet-cream': '#f5f0e8',
        'monet-rose': '#f2d7d5',
        'monet-mint': '#d4e8d4',
        'monet-sand': '#e8dcc8',
      },
    },
  },
  plugins: [],
}