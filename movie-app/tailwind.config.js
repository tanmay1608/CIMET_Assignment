/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0d0e10", // Define your custom color
        yellow:"#ffeb01",
        lightDarker:"#191e24"
      },
    },
  },
  plugins: [],
};
