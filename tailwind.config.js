/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          primaryColor : "#EAF0F9",
          secondaryColor: "skyblue"

        },
        fontFamily : {
          popin: "Poppins"
        }

      },
    },
    plugins: [],
  }