module.exports = {
  // mode: 'jit',
  // purge: [
  //   './public/index.html',
  //   './src/**/*.html',
  //   './src/**/*.vue',
  //   './src/**/*.jsx',
  // ],
  theme: {
    extend: {
      fontFamily: {
        'no2roman': ['FranklinGothicStdNo2Roman']
      },
      spacing: {
        '29': '6.95rem',
        '80': '20rem',
        '108': '27rem',
        '160': '40rem',
        'half' :'50vh',
        'mega' :'150vh',
        '50%': '50%'
      },
      inset: {
        '-16': '-4rem',
      },
      fontSize: {
        xxs: '0.625rem'
      },
      boxShadow: {
        'outline-green': '0 0 0 3px rgba(5,202,160, 0.8)',
      },
      zIndex: {
        '-5': '-5',
        '-10': '-10',
      },
      colors: {
        'lsf-red': '#ed1c24',
        dotred: '#f16667',
        dotyellow: '#ffce34',
        dotgreen: '#50b648',
      },
      borderWidth: {
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
      },
      animation: {
        blob: "blob 7s infinite",
        scroll: "scroll ease 2s infinite",
        wiggle: 'wiggle 7s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.2)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(60px)" }
        }
      },

    },
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
        'curious': ['#FF0099', '#4CB7EB'],
      },
    },
    repeatingLinearBorderGradients: theme => ({
      directions: theme('linearBorderGradients.directions'), // defaults to the same values as linearBorderGradients’ directions
      colors: theme('linearBorderGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd'],
    linearBorderGradients: ['responsive'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
  ]
}
