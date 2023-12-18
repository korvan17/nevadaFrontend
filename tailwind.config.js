/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "480px", // mobile
      md: "768px", // tablet
      lg: "1440px", // desktop
    },
    extend: {
      colors: {
        "gradient-start": "#4042E2",
        "gradient-end": "#C0C0C0",

        mainBlack: "#000A11",
        bgBoard: "#DFE4E8",
        captionalWhite: "#ECECEC",
        mainWhite: "#FAFCF8",

        captionalGrey: "#62686F",
        captionalGreyLight: "#C0C0C0",
        background: "#0B0A0A40",
        userPanel: "#D9DFFF",

        darkBlue: "#021827",
        captionBlue: "#1478CE",
        captionBlueDB: "#1477CE",
        captionBlueHover: "#0D4475",

        accentHoverYellow: "#C37E19",
        accentYellow: "#F8C951",

        alertRed: "#F01010",
      },
      padding: {
        mobile: "80px",
        desktop: "120px",
      },
      boxShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "top-shadow":
          "0px -4px 4px 0px rgba(0, 0, 0, 0.25), 0px -4px 10px 0px rgba(0, 0, 0, 0.25), 0px -4px 10px 0px rgba(0, 0, 0, 0.25)",
        "custom-deep":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 10px 0px rgba(0, 0, 0, 0.25), 0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "40px",
          lg: "120px",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        150: "150ms", // Додаємо новий параметр transitionDuration
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
