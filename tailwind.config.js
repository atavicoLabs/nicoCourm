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
        // Palette premium, invernale e naturale
        'snow-white': '#F7F6F4', // soft snow
        'stone-gray': '#7B7B7B', // elegant stone
        'forest-green': '#103D2E', // deep forest
        'wood-beige': '#C9B79A', // warm wood/beige
        'soft-gold': '#BFA061', // muted soft gold
        'charcoal': '#111827', // dark text
        'cream': '#FBF8F3',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
