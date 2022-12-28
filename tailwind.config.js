module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e0cca6",

          secondary: "#7DAEA3",

          accent: "#d3869b",

          neutral: "#474544",

          "base-100": "#32302F",

          "base-200": "#292828",

          info: "#928374",

          success: "#79740e",

          warning: "#b57614",

          error: "#9d0006",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
