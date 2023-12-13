/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,html,scss}"],
  theme: {
    extend: {
      colors: {
        white: {
          900: '#fcfcfc'
        }
      }
    },
  },
  plugins: []
}

