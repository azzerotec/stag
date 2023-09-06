import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        montserrat: ["Montserrat"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        attjob: "0 4px 10px 0px rgba(0, 0, 0, 0.5)",
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
        aECECEC: "#ECECEC",
        aFAFAFA: "#FAFAFA",
        aB9B9B9: "#B9B9B9",
        a3F4349: "#3F4349",
      },
    },
  },

  plugins: [require("tailwindcss-font-inter"), require("@tailwindcss/forms")],
} satisfies Config;
