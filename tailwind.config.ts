import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)"],
        heading: ["var(--font-bellefair)"],
        body: ["var(--font-barlow_condensed)"],
      },
      fontSize: {
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "3.5rem",
        "4xl": "6.25rem",
        "5xl": "9.38rem",
      },
      backgroundImage: {
        homeDesktop: 'url("/home/background-home-desktop.png")',
        homeMobile: 'url("/home/background-home-mobile.png")',
        homeTablet: 'url("/home/background-home-tablet.png")',
        destinationDesktop:
          'url("/destination/background-destination-desktop.png")',
        destinationMobile:
          'url("/destination/background-destination-mobile.png")',
        destinationTablet:
          'url("/destination/background-destination-tablet.png")',
        crewDesktop: 'url("/crew/background-crew-desktop.png")',
        crewMobile: 'url("/crew/background-crew-mobile.png")',
        crewTablet: 'url("/crew/background-crew-tablet.png")',
        technologyDesktop:
          'url("/technology/background-technology-desktop.png")',
        technologyMobile: 'url("/technology/background-technology-mobile.png")',
        technologyTablet: 'url("/technology/background-technology-tablet.png")',
      },
      screens: {
        xl: "1440px",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fade: "fade 500ms cubic-bezier(0.4, 0, 1, 1) both",
        "fade-left": "fade-left 500ms cubic-bezier(0.4, 0, 1, 1) both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
