/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      width: {
        'maxx': '100vw',
        'xl-container': '400px',
        'xl-item': '300px',
        'xl-img-container': '170px',
        'xl-text': '210px',
        'xl-div': '90%',
      },
      maxWidth: {
        'custom': '1200px',
      },
      height: {
        'na100': '100%',
        'xl-container': '200px',
        'xl-img-container': '170px',
      },
      padding:{
        'xl-img-container': '5px',
      },
      theme: {
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      },
    },
  },
  plugins: [],
}

