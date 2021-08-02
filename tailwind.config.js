module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      height: {
        captureDesktop: "90vh",
        captureMobile: "50vh",
      },
      colors: {
        primary: "#22C680",
        secondary: "#B4E4CE",
        cogengreen: "#22C680",
      },
      fontFamily: {
        manrope: ["Manrope"],
        poppins: ["Poppins"],
        playfair: ["Playfair Display"],
      },
      screens: {
        xxs: { max: "639px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
