/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#142E4B",
        secondary: "#8DA59D",
        gray: "rgba(255, 255, 255, 0.75)",
        lightGray: "#173329",
      },
    },
  },
  plugins: [],
};
