module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#140A26",
      },
      fontFamily: {
        sans: ["Raleway"],
        display: ["Montserrat"],
      },
      height: (theme) => ({
        taskList: "calc(100vh - 260px)",
      }),
    },
  },
  plugins: [],
};
