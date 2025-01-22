module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // If you'd like a custom color overall
            color: 'inherit', 
            
            // Ensure bullet lists match
            'ul li': {
              color: 'inherit',
            },
            'ol li': {
              color: 'inherit',
            },
            // If you need the bullet (marker) itself to match
            'ul > li::marker': {
              color: 'inherit',
            },
            // Optionally for numbered lists
            'ol > li::marker': {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};