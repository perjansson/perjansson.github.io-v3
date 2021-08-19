module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // false, 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',
        '14xl': '12rem',
        '15xl': '13rem',
        '16xl': '14rem',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      keyframes: {
        'color-change': {
          '0%, 100%': {
            color: 'var(--primary-text-color)',
          },
          '50%': {
            color: 'var(--secondary-text-color)',
          },
        },
        wave: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        'color-change': 'color-change 4s ease-in 5s infinite',
        wave: 'wave 2s infinite',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
