import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        dark: "hsl(var(--dark))",
        accent: "hsl(var(--accent))",
        light: "hsl(var(--light))",
        primary: "hsl(var(--primary))",
      },
      fontFamily: {
        body: ["MartianMono", "sans-serif"],
      },
    },
  },
  content: {
    files: [
      "content/**/**.md",
      "pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "layout/**/*.{vue,js,jsx,mjs,ts,tsx}",
    ],
  },
  plugins: [typography()],
};
