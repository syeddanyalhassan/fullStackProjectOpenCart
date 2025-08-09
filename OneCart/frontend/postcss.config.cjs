// C:\MERNAI\OneCart\frontend\postcss.config.cjs

// Explicitly require the plugins
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer'); // This should now be found

module.exports = {
  plugins: [ // <--- Change from object to array of plugins
    // Pass the plugin function directly, and its options as the second element in the array
    tailwindcss({ // <--- Corrected: Pass options directly to the plugin function
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      theme: {
        extend: {},
      },
      // You might also need to explicitly list other Tailwind plugins here if you use them,
      // e.g., plugins: [require('@tailwindcss/forms')],
    }),
    autoprefixer, // <--- Corrected: Pass the plugin function directly without an empty object
  ],
};