/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      desktop: "1200px",
      tablet: "720px",
    },
    colors: {
      black: "#000",
      "light-grey": "#DFDFDF",
      white: "#FFF",
    },
    fontSize: {
      h1: [
        "2.5rem",
        { lineHeight: "3rem", fontWeight: 700, letterSpacing: "4.17px" },
      ],
      h2: ["1.5rem", { lineHeight: "1.56rem", fontWeight: 700 }],
      h3: [
        "1.125rem",
        { lineHeight: "1rem", fontWeight: 700, letterSpacing: "2px" },
      ],
      body: ["0.9375rem", { lineHeight: "1.5625rem" }],
    },
    extend: {
      backgroundImage: {
        "main-accent":
          "linear-gradient(26.57deg, #FFC593 0.42%, #BC7198 43.46%, #5A77FF 83.33%)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
