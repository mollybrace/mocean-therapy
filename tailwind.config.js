/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xlg: "1440px"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    
    extend: {
      colors: {
        darkPurple: "#7c99bb",
        lightPurple: "#c1c7df",
      }
    },
  },
  plugins: [],
}

//'teal': '#326e6e', nav bar colour
//"blue': '##326e6e',
//'babyblue': '#c6d9e8',
//'lavender': '#c1c7df', - backgroung
//'violet': '#7c99bb',