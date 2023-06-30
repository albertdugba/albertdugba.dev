/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primaryColor)",
        green: "var(--greenColor)",
        red: "var(--redColor)",
        lightPurple: "var(--lightPurple)",
        grayColor: "var(--grayColor)",
      },
    },
  },
  plugins: [],
};
