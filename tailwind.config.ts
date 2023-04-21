import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0e152e",
        "gray-blue": "#252945",
      },
    },
  },
  plugins: [],
} satisfies Config;
