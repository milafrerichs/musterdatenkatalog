module.exports = {
  variants: {
    borderWidth: ['responsive', 'first', 'hover', 'focus'],
    margin: ['responsive', 'first', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    overflow: ['responsive', 'first', 'hover', 'focus'],
    position: ['responsive', 'hover', 'focus'],
    wordBreak: ['responsive', 'hover', 'focus'],
    whitespace: ['responsive', 'hover', 'focus'],
  },
  theme: {
    extend: {
      colors: {
        civic: '#2b4c7e',
        civic_accent: '#c7850c',
      },
      maxWidth: theme => {
        return {
          'screen-xl': theme('screens.xl'),
          'testimonial': '100px',
          '1/4': '25%',
          '1/3': '33%'
        }
      },
    }
  },
  plugins: [
    require("tailwind-heropatterns")({
      variants: [],
      patterns: ["topography", "signal"],
      colors: {
          default: "#fff",
          "blue-light": "#adc5ea",
          "blue-lighter": "#abc7f1"
        },
      opacity: {
          default: "0.4",
          "20": "0.2",
          "10": "0.1"
        }
    }),
  ],
};
