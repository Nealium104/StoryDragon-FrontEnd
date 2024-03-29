/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        "background-secondary": "#333333",
      },
    },
  },
  plugins: [],
};
