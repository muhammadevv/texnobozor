/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "phone-min": "375px",
      'phone': "440px",
      "tabel-min": "640px",
      'tabel': "768px",
      "laptop-min": "900px",
      'laptop': "1024px",
    },
    extend: {},
  },
  plugins: [],
};
