/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Poppins'],
        body: ['"Open Sans"'],
      },
      backgroundImage: {
        prof: "url('./images/background-rpof.png')",
      },
    },
  },
  plugins: [],
};
