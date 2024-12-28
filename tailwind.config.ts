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
        primary: "var(--primaryColor)",
        secondary: "var(--secondaryColor)",
        green: "var(--greenColor)",
        lightGreen: "#d3f4c333",
        red: "var(--redColor)",
        lightPurple: "var(--lightPurple)",
        grayColor: "var(--grayColor)",
        linkColor: "var(---link-color)",
        "lighter-gray": "var(--lighter-gray)",
        "lightest-gray": "var(--lightest-gray)",
        "article-color": "var(--article-color)",
        bg: "var(--bg)",
        fg: "var(--fg)",
      },
      fontFamily: {
        mono: ["Mono Lisa", ...defaulTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
export default config;
