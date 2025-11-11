/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",       // Azul corporativo
        accent: "var(--color-accent)",         // Coral moderno
        accentHover: "var(--color-accent-hover)",
        foreground: "var(--color-foreground)", // Texto principal
        muted: "var(--color-muted)",           // Texto secundario
        bg: "var(--color-bg)",                 // Fondo principal
        bgsoft: "var(--color-bg-soft)",        // Fondo suave
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.8rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};