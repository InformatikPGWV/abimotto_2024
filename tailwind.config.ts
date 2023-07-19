export default {
  content: [
    "/components/**/*.{vue,js,ts}",
    "/layouts/**/*.vue",
    "/pages/**/*.vue",
    "/composables/**/*.{js,ts}",
    "/plugins/**/*.{js,ts}",
    "/utils/**/*.{js,ts}",
    "/App.{js,ts,vue}",
    "/app.{js,ts,vue}",
    "/Error.{js,ts,vue}",
    "/error.{js,ts,vue}",
    "/app.config.{js,ts}",
  ],
  daisyui: {
    themes: ["black"],
    darkTheme: "black",
  },
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
