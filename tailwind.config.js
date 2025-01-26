/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d10580",
        dark: "#000",
        light: "#fff",
      },
      boxShadow: {
        "shadow-light": "0px 4px 6px rgba(255, 255, 255, 0.1)",
        "shadow-dark": "0px 0px 15px 5px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
