var tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('./assets/css/tailwind.config.js'),
    require('autoprefixer')(),
  ]
};
