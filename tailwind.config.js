module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        ink: "#0A0F1E",
        electric: "#00D4FF",
        violetx: "#7C3AED",
        profit: "#00FF88"
      },
      boxShadow: {
        glow: "0 0 34px rgba(0, 212, 255, 0.32)",
        violet: "0 0 38px rgba(124, 58, 237, 0.35)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)", opacity: "0.7" },
          "50%": { transform: "translateY(-24px) rotate(8deg)", opacity: "1" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0,212,255,0)" },
          "50%": { boxShadow: "0 0 32px rgba(0,212,255,0.55)" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        slideUp: "slideUp .55s ease-out both"
      }
    }
  },
  plugins: []
};
