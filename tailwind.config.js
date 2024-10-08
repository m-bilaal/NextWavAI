/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-purple": "rgb(136 80 255)",
        "light-purple": "rgb(235 225 255)",
      },
      keyframes: {
        waves: {
          '0%': { boxShadow: '0 0 0 0px rgb(136 80 255)' },
          '100%': { boxShadow: '0 0 0 15px transparent' },
        },
        underline: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        waves: 'waves 2s infinite',
        underline: 'underline 0.3s linear',
      },
    },
  },
  plugins: [],
};
