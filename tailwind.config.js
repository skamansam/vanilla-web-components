/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Montserrat",
        "Romman",
        "Roboto",
        "Feeling Passionate",
        "sans-serif",
      ],
      serif: ["Merriweather", "serif"],
      cursive: ["Dancing Script", "Apple Chancery", "Bradley Hand", "Brush Script MT", "Brush Script Std", "Snell Roundhand", "URW Chancery L", "cursive"],
    },
    extend: {
      colors: {
        primary: {
          light: "#FFD700",
          DEFAULT: "#FFD700",
          dark: "#FFD700",
        },
        secondary: {
          light: "#FFD700",
          DEFAULT: "#FFD700",
          dark: "#FFD700",
        },
        white: "rgba(255, 255, 255, 0.87)",
        black: "#242424",
        gray: {
          light: "#D3D3D3",
          DEFAULT: "#D3D3D3",
          dark: "#D3D3D3",
        },
      },
    },
  },
  plugins: [],
};
