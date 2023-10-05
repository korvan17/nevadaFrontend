/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlack: "#000A11",

        captionalWhite: "#ECECEC",
        mainWhite: "#FAFCF8",

        captionalGrey: "#62686F",
        faqGrey: "#C0C0C0",

        darkBlue: "#021827",
        captionBlue: "#1478CE",

        accentHoverYellow: "#C37E19",
        accentYellow: "#F8C951",
      },

      container: {
        center: true,
        // padding: {
        //   sm: "0 10px",
        //   md: "0 50px",
        //   lg: "[0 100px]",
        //   xl: "[0 120px]",
        // },
        // padding: "0 120px 0 120px",
      },

      screens: {
        sm: "480px", // mobile up to 480px
        md: "768px", // mobile
        lg: "1440px", // tablet
        // xl: "1440px", // desktop
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
  plugins: [],
};
