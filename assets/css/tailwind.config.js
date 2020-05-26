module.exports = {
  variants: {
    borderWidth: ['responsive', 'first', 'hover', 'focus'],
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
