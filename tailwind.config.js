module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#b83260', // Rosa oscuro elegante
          light: '#f8e1ec',   // Rosa claro
        },
        accent: {
          DEFAULT: '#fbbf24', // Amarillo dorado
        },
        base: {
          DEFAULT: '#18181b', // Gris oscuro casi negro
          light: '#f9fafb',   // Gris muy claro
        },
        contrast: {
          DEFAULT: '#fff',     // Blanco puro
        },
      },
    },
  },
  plugins: [],
};
