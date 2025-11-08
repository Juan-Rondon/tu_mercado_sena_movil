/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'Opensans-bold': ['OpenSans-Bold', 'sans-serif'],
        'Opensans-light': ['OpenSans-Light', 'sans-serif'],
        'Opensans-medium': ['OpenSans-Medium', 'sans-serif'],
      },

      colors: {
        primary: {
          DEFAULT: '#16A1B6',
          50: "#E8FAFC",
          100: "#BFF0F7",
          200: "#97E6F2",
          300: "#6EDCED",
          400: "#45D2E8",
          500: "#1CC8E3",
          600: "#16A1B6",
          700: "#128091",
          800: "#0D5C68",
          900: "#083840",
          950: "#031417"
        },

        secondary: {
          DEFAULT: '#1651B6',
          50: "#E8F0FC",
          100: "#BFD4F7",
          200: "#97B8F2",
          300: "#6E9CED",
          400: "#4581E8",
          500: "#1C65E3",
          600: "#1651B6",
          700: "#124191",
          800: "#0D2E68",
          900: "#081C40",
          950: "#030A17"
        },

        tertiary: {
          DEFAULT: '#2B16B6',
          50: "#EBE8FC",
          100: "#C7BFF7",
          200: "#A397F2",
          300: "#7F6EED",
          400: "#5B45E8",
          500: "#371CE3",
          600: "#2B16B6",
          700: "#231291",
          800: "#190D68",
          900: "#0F0840",
          950: "#050317"
        }
      },
    },
  },
  plugins: [],
}
