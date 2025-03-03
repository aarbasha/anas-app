/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "custom-black": "rgb(14, 13, 19)", // Custom color
        "custom-blue": "rgb(58, 78, 94)", // Custom color
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(99deg, rgba(14, 13, 19, 1) 0%, rgba(58, 78, 94, 1) 100%)",
      },
    },
  },
  plugins: [],
};
