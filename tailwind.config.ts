import type { Config } from "tailwindcss";
const defaulTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--darkGreen)",
        secondary: "var(--lemonColor)",
        green: "var(--greenColor)",
        lightGreen: "var(--lightGreen)",
        grayColor: "var(--grayColor)",
        linkColor: "var(---link-color)",
        stripeColor: "var(--stripe-color)",
        "lighter-gray": "var(--lighter-gray)",
        "lightest-gray": "var(--lightest-gray)",
        "article-color": "var(--article-color)",
        bg: "var(--bg)",
        fg: "var(--fg)",
      },
      fontFamily: {
        mono: ["Mono Lisa", ...defaulTheme.fontFamily.mono],
      },
      fontSize: {
        sm: "14px",
      },
      maxWidth: {
        "4xl": "58.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
