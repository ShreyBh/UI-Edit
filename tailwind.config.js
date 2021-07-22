const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      zIndex:
      {
        '100' : '100',
      },

      aspectRatio: {
        '3363': '3363',
        '500': '500',
      },
      maxWidth: {
        '115' : '115',
        '800' : '800px'
      }, 
      fontSize: {
         '4xl':'2.4rem'
      },
      
      height: {
        'screen/2' : '50vh'
      },
     // colors: {
       // inherit: 'inherit',
      //},
      fontFamily: {
        'raleway' : ['raleway']
      },
      gridColumn:{
        'span-16': 'span 2 / span 3'
      },
      gridRow: {
        'span-7' : 'span 1 / span 4'
      },
      minWidth: {
         '90': '90px'   
      },
      fontSize: {
        'smaller-10' : '0.9em' //10% smaller
      }
    },
  }, 
  variants: {},
  plugins: [ 
    require('@tailwindcss/aspect-ratio'),

    require('tailwindcss-bg-alpha'),

    require('@tailwindcss/forms'),
    
    require('tailwindcss-transitions'),

plugin(function({addBase, theme})  {
  addBase({
    'h1':{ fontSize: theme('fontSize.6xl')},
    'h1':{ lineHeight: theme('lineHeight.leading-5')},
    'h4':{ fontSize: theme('fontSize.4xl')},
    'h4':{fontWeight: theme('fontWeight.medium')},
    'html':{fontSize: theme('fontSize.xs')},
    'ul' : {display: theme('display.block')},
    'li' : {display: theme('display.block')}
  })
  
})
  ]
}

