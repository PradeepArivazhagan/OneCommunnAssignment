/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        bed: "url('../src/assets/Images/LuxuryBedSet.png')",
        sofa: "url('../src/assets/Images/LuxurySofaSet.png')",
        dinning: "url('../src/assets/Images/LuxuryDiningSet.png')",
        bed1: "url('../src/assets/Images/LuxuryBedSet1.png')",
        candle: "url('../src/assets/Images/ElegantCandle.png')",
        elegant: "url('../src/assets/Images/ElegandSofaSet.png')",
        fruit: "url('../src/assets/Images/FruitPlatter.png')",
      },
    },
  },
  plugins: [],
};
