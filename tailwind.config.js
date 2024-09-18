/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'Community' : "url('https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_bg1.jpg')",
        
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
