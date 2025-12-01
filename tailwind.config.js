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
        // Urban Concrete Base
        'concrete': '#e8e4df',
        'concrete-dark': '#2a2a2a',
        'concrete-light': '#f5f3f0',
        
        // Graffiti Spray Paint
        'spray-pink': '#ff0080',
        'spray-orange': '#ff6b35',
        'spray-green': '#00ff9f',
        'spray-purple': '#b744ff',
        
        // Yeezy Earth Tones
        'sand': '#d4cfc9',
        'clay': '#a89f91',
        'stone': '#565654',
        
        // Futurism Glow
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#9d4edd',
      },
      fontFamily: {
        'display': ['Arial Black', 'sans-serif'], // Graffiti-style bold
        'body': ['Helvetica Neue', 'Arial', 'sans-serif'], // Clean Yeezy
        'pixel': ['"Press Start 2P"', 'monospace'], // Retro accent only
      },
      backgroundImage: {
        'concrete-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03' /%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 20% 30%, rgba(255,0,128,0.15) 0, transparent 50%), radial-gradient(at 80% 70%, rgba(0,255,159,0.15) 0, transparent 50%), radial-gradient(at 50% 50%, rgba(0,212,255,0.1) 0, transparent 50%)',
      },
      boxShadow: {
        'graffiti': '4px 4px 0px 0px rgba(0,0,0,0.8)',
        'spray': '0 0 30px rgba(255,0,128,0.4)',
        'float': '0 20px 60px rgba(0,0,0,0.3)',
        'glass': '0 8px 32px 0 rgba(0,0,0,0.1)',
      },
      backdropBlur: {
        'glass': '12px',
      },
    },
  },
  plugins: [],
}
