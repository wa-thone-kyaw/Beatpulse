module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1A202C",
        "dark-card": "#2D3748",
        "dark-text": "#A0AEC0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
