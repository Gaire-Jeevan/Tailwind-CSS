// npx tailwindcss init confJeevan init --full

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["*"],
  theme: {
    screens: {
      xsm: '340px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing:{
        13: '3.5rem'
      },
      fontSize: {
        '10xl' : ['9rem', { lineHeight: '1.2'}]
      },
    },
  },
  
  plugins: [],
}

