/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-light': '#F6F1F1', // Add custom color here
        'custom-yellow':'#FCC215',
        'custom-blue':'#0E0524',
        'custom-white':'#D9D9D9',
      },
      backgroundImage: {
        'register-pattern': "url('assets/register_section/backlog.png')",
       }

    },
  },
  plugins: [],
}