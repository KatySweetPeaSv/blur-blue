/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'GrayishBlack': '#212121',
        'Blue': '#0288D1',
        'PaleBlue': '#B3E5FC',
        'LightBlue': '#03A9F4',
        'Beige': '#FFFFFF',
        'Reddish': '#FF5252',
        'DeepGray': '#757575',
        'LightGray': '#BDBDBD',
      },

      screens: {
          sm : '640px',
          // @media ( min - width : 640px ) { ... )
          md : '768px',
          // @media ( min - width : 768px ) { ... )
          lg : '1024px',
          // @media ( min - width : 1024px ) ( ...
          xl : '1280px',
          // @media ( min - width : 1280px ) { ... }
          '2xl': '1536px'
          // @media ( min - width : 1536px ) { ... }
      },

      fontFamily: {
        'luckiest': "'Luckiest Guy', serif",
        'anton': "'Anton', sans-serif",
        'bitter': "'Bitter', sans-serif",
        'lato': "'Lato', sans-serif",
        'basker': "'Libre Baskerville', serif",
        'oswald': "'Oswald', sans-serif",
        'raleway': "'Raleway', sans-serif",
        'ubuntu': "'Ubuntu', sans-serif",
      }
    },
  },
  plugins: [],
}
