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
        "gradient-02":
          "linear-gradient(90deg, #42E8E0 0%, #421ECF 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        landing:
          "radial-gradient(50% 50% at 50% 50%, #2E1968 7.32%, #C3AEFF 20.82%, rgba(152, 118, 248, 0.7) 34.32%, rgba(89, 63, 222, 0.5) 45.82%, rgba(45, 32, 109, 0.2) 64.32%, rgba(21, 13, 60, 0) 80.32%, rgba(16, 12, 35, 0) 100%)",
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
