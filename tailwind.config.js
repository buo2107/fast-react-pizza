/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Place the customize setting in 'theme', means to override the Tailwind default config
  theme: {
    fontFamily: {
      // Override the sans font that Tailwind automatically injects into our HTML.Therefore, if we change this here then this will automatically update for the entire page.
      sans: "Roboto Mono, monospace",
    },
    // Place in 'extend', means to keep the Tailwind default config, but adding or replacing the specific one to our customize setting.
    extend: {
      fontSize: {
        // Add new defined name that not exist in Tailwind default config --> 'font-huge'
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        // Replace the Tailwind default config : 100vh -> 100dvh
        screen: "100dvh",
        // 'vh' creates problems on mobile browsers since sometimes the viewport is not really 100%, so instead of using this unit, we should use more modren unit => 'dvh'
      },
    },
  },
  plugins: [],
};
