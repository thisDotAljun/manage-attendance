/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-neutral" : "#FFFFFF",
        "light-neutral-10" : "#F0F2F2",
        "light-neutral-40" : "#C3CDC9",
        "light-neutral-50" : "#B4C0BC",
        "light-neutral-80" : "#879A94",
        "mid-neutral-200" : "#5A756B",
        "mid-neutral-90" : "#788E86",
        "mid-neutral-400" : "#3C5B51",
        "dark-neutral-500" : "#2D4F43",
        "dark-neutral-800" : "#00291B",
        "success-bg" : "#E6FFEE",
        "green" : "#17AD49", 
        "blue" : "#0F6EEB",
        "header-color" : "#333333",
        "nav-color" : "#DDDDDD",
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}

