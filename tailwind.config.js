/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const flowbit = require("flowbite/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#494a4f",
        "dark-grey": "#2b2f2b",
        "dark-blue": "#475182",
        "light-green": "#49fd7b",
        "dark-green": "#066548",
        "cold-steel": "#242030",
      },

      padding: {
        "5px": "5px",
        "31px": "31px",
        "44px": "44px",
        "73px": "73px",
        "90px": "90px",
        "137px": "137px",
        "134px": "134px",
        "199px": "199px",
      },
      gap: {
        "50px": "50px",
      },
      fontSize: {
        "38px": "38px",
        "32px": "32px",
        "24px": "24px",
      },
      lineHeight: {
        "21px": "21px",
      },
    },
  },
  plugins: [
    flowbit,
    plugin(function ({ addComponents }) {
      addComponents({
        ".wrapper": {
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "#000000",
        },
        ".container-header": {
          maxWidth: "1470px",
          margin: "0px auto",
          padding: "0px 15px",
        },
        ".container": {
          maxWidth: "870px",
          margin: "0px auto",
          padding: "0px 15px",
          flex: "1 1 auto",
        },
        ".btn-nav": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "140px",
          height: "28px",
          border: "1px solid #201F1F",
          lineHeight: "21px",
          "&:hover": {
            borderRadius: "5px",
            backgroundColor: "#333448",
            border: "1px solid #333448",
          },
        },
        ".btn-next": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "320px",
          height: "41px",
          backgroundColor: "#066548",
          borderRadius: "5px",
          color: "#FAF5F5",
          fontFamily: "Coda",
          fontSize: "20px",
        },
        ".input-form": {
          width: "320px",
          height: "24px",
          padding: "4px",
          margin: "5px 0 28px 0",
          display: "inline-block",
          border: "none",
          background: "#D9D9D9",
          borderRadius: "5px",
          color: "#000000",
        },
        ".label-form": {
          fontSize: "18px",
        },
      });
    }),
  ],
};
