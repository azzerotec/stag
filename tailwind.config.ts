import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      colors: {
        a374151: "#374151",
        a606875: "#606875",
        a8B919A: "#8B919A",
        a606771: "#606771",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter"), require("@tailwindcss/forms")],
} satisfies Config;
