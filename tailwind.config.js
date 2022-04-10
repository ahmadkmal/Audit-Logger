module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        // boxShadow:({ theme }) => ({
        //     default: '0 0px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        //     // ...theme('boxShadow'),
        //   }),
        extend: {
            boxShadow:({ theme }) => ({
                default: '0 0px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                // ...theme('boxShadow'),
              }),
        //   boxShadow: {
        //       'shadow': '0 0px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        //     },
        // --tw-shadow: 0 0px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      },
    },
    plugins: [],
  }