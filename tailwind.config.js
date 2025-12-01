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
        'win95-gray': '#c0c0c0',
        'win95-blue': '#000080',
        'win95-teal': '#008080',
        'neon-pink': '#ff00ff',
        'neon-cyan': '#00ffff',
        'neon-green': '#00ff00',
      },
      fontFamily: {
        'ms-sans': ['MS Sans Serif', 'Arial', 'sans-serif'],
        'pixel': ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  plugins: [],
}