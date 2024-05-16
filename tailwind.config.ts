import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      },
    },
  },
  plugins: [],
};
export default config;
