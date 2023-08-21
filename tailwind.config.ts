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
        a404347: "#404347",
        a111827: "#111827",
        a7B7B7B: "#7B7B7B",
        a424A57: "#424A57",
        a454D58: "#454D58",
        aDDDEE0: "#DDDEE0",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter"), require("@tailwindcss/forms")],
} satisfies Config;
