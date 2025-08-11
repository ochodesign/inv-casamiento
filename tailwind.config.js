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
          DEFAULT: '#5A0B0B', // Rojo pasión/bordó
          light: '#B22222',   // Rojo fuego
          dark: '#5A0B0B',    // Bordó profundo
        },
        accent: {
          DEFAULT: '#FFD700', // Dorado
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
