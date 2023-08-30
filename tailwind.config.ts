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
        aF9FAFB: "#F9FAFB",
        aEDEDED: "#EDEDED",
        a1E1E1E: "#1E1E1E",
        a6B7280: "#6B7280",
        a6A6A6A: "#6A6A6A",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter"), require("@tailwindcss/forms")],
} satisfies Config;
