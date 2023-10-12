/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        150: "150ms", // Додаємо новий параметр transitionDuration
      },
    },
    screens: {
      mobile: "480px",
      // => @media (min-width: 480px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
