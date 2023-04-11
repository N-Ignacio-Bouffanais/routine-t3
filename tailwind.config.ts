import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0b1124",
        "gray-blue": "#252945",
      },
    },
  },
  plugins: [],
} satisfies Config;
