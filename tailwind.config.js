/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    fontFamily: {
      ff: "Commissioner, sans-serif",
    },
    extend: {
      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        darkGray: "hsl(0, 0%, 48%)",
        black: "hsl(0, 0%, 0%)",
        lightGray: "#f1f1f1",
        lightCyan: "rgb(245, 249, 250)",
      },
      fontSize: {
        txt1_7: "1.7rem",
        txt1_4: "1.4rem",
        txt1_2: "1.2rem",
        txt09: "0.9rem",
      },
      padding: {
        p03: "0.3rem",
        px_8: "8%",
        pl_16: "4.3rem",
        pxl4: "4.7rem",
      },
      width: {
        w28: "27%",
        w84: "87%",
        w30r: "30rem",
      },
      height: {
        h61: "72%",
        h105: "105%",
      },
      maxWidth: {
        mw_2xl: "46rem",
        mw_ct: "31rem",
        mw5_5: "5.5rem",
      },
      margin: {
        ml8: "8%",
      },
      divideWidth: {
        divide_x_1: "1px",
      },
      boxShadow: {
        boxCustom: "inset 0px 0px 0px 4px white",
        boxShadowham: "0 25px 70px 103px rgb(0 0 0 / 0.25)",
      },
      zIndex: {
        z999: "999",
      },
      screens: {
        sm: "768px",
        xs: { max: "350px" },
        375: { max: "375px" },
      },
    },
  },
  plugins: [],
};
