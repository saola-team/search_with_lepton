import type { Config } from "tailwindcss";

const config: Config = {
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
        "gradient-01": "linear-gradient(90deg, #42e8e0 0%, #421ecf 100%)",
      },
      colors: {
        blue: {
          500: "#2F80ED",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
