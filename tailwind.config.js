/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#4F46E5",
          "primary-hover": "#4338CA",
          "background-light": "#F9FAFB",
          "surface-light": "#FFFFFF",
          "text-subtle": "#6B7280",
          "white": "#F3F1ED",
        },
        fontFamily: {
            anonymos: ["Anonymos Pro", "sans-serif"],
            mono: ["'Roboto Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
            serif: [
              "'Source Serif Pro'",
              "ui-serif",
              "Georgia",
              "serif",
            ],
          },
        boxShadow: {
          "soft-shadow": "0 8px 24px rgba(0, 0, 0, 0.05)",

        },
        borderRadius: {
          "3xl": "1.5rem",
          "2.5xl": "2.5rem",
        },
      },
    },
    plugins: [],
  }
  