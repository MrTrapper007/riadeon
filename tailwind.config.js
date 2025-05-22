/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure files to scan for Tailwind classes (for purging)
  content: [
    "./content/**/*.md",
    "./layouts/**/*.html",
    "./static/**/*.html", // If you have static HTML files with Tailwind classes
  ],
  theme: {
    extend: {
      // Define your retro color palette here
      colors: {
        'geocities-blue': '#0000CC',
        'geocities-red': '#CC0000',
        'geocities-green': '#006600',
        'geocities-yellow': '#FFFF00',
        'youtube-mid-gray': '#F0F0F0', // Example for mid-2010s YouTube
        'youtube-dark-gray': '#282828',
        'youtube-red': '#CC0000',
        // Add more custom colors as needed
      },
      // Define your retro font families
      fontFamily: {
        'web-safe': ['Arial', 'Verdana', 'sans-serif'],
        'times-new-roman': ['"Times New Roman"', 'serif'],
        'comic-sans': ['"Comic Sans MS"', 'cursive'], // If you dare!
      },
      // Add custom spacing, border styles, etc.
      borderWidth: {
        '3': '3px', // For thicker, hard borders
        '4': '4px',
      },
      boxShadow: {
        'inset-hard': 'inset 2px 2px 0px 0px rgba(0,0,0,0.5)', // For old-school inset look
        'hard': '3px 3px 0px 0px rgba(0,0,0,0.8)', // For hard-edged shadows
      },
    },
  },
  plugins: [],
}
