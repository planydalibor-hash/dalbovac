import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { orange: "#FF6A00", black: "#0F0F10", gray: "#1E1F23" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.1)" },
      borderRadius: { "2xl": "1.25rem" }
    },
  },
  plugins: [],
};
export default config;
