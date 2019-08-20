// tailwind.config.js
module.exports = {
  corePlugins: {
    float: false
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        lightest: '#edf2f7',
        lighter: '#e2e8f0',
        light: '#cbd5e0',
        default: '#a0aec0',
        dark: '#718096',
        darker: '#4a5568',
        darkest: '#2d3748',
      },
      red: {
        lightest: '#fed7d7',
        lighter: '#feb2b2',
        light: '#fc8181',
        default: '#f56565',
        dark: '#e53e3e',
        darker: '#c53030',
        darkest: '#9b2c2c',
      },
      orange: {
        lightest: '#feebc8',
        lighter: '#fbd38d',
        light: '#f6ad55',
        default: '#ed8936',
        dark: '#dd6b20',
        darker: '#c05621',
        darkest: '#9c4221',
      },
      yellow: {
        lightest: '#fefcbf',
        lighter: '#faf089',
        light: '#f6e05e',
        default: '#ecc94b',
        dark: '#d69e2e',
        darker: '#b7791f',
        darkest: '#975a16',
      },
      green: {
        lightest: '#c6f6d5',
        lighter: '#9ae6b4',
        light: '#68d391',
        default: '#48bb78',
        dark: '#38a169',
        darker: '#2f855a',
        darkest: '#276749',
      },
      teal: {
        lightest: '#b2f5ea',
        lighter: '#81e6d9',
        light: '#4fd1c5',
        default: '#38b2ac',
        dark: '#319795',
        darker: '#2c7a7b',
        darkest: '#285e61',
      },
      blue: {
        lightest: '#bee3f8',
        lighter: '#90cdf4',
        light: '#63b3ed',
        default: '#4299e1',
        dark: '#3182ce',
        darker: '#2b6cb0',
        darkest: '#2c5282',
      },
      indigo: {
        lightest: '#c3dafe',
        lighter: '#a3bffa',
        light: '#7f9cf5',
        default: '#667eea',
        dark: '#5a67d8',
        darker: '#4c51bf',
        darkest: '#434190',
      },
      purple: {
        lightest: '#e9d8fd',
        lighter: '#d6bcfa',
        light: '#b794f4',
        default: '#9f7aea',
        dark: '#805ad5',
        darker: '#6b46c1',
        darkest: '#553c9a',
      },
      pink: {
        lightest: '#fed7e2',
        lighter: '#fbb6ce',
        light: '#f687b3',
        default: '#ed64a6',
        dark: '#d53f8c',
        darker: '#b83280',
        darkest: '#97266d',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Patua One', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      spacing: {
        '1/4': '25%',
        '1/3': '33.333%',
        '1/2': '50%',
        '2/3': '66.666%',
        '3/4': '75%',
        '96': '24rem',
        '128': '32rem',
        '256': '64rem',
        '512': '128rem'
      }
    }
  }
}