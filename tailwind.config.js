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
      padding: '1rem'
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        lightest: '#f5f5f5',
        lighter: '#d9d9d9',
        light: '#c1c1c1',
        default: '#919191',
        dark: '#7a7a7a',
        darker: '#474747',
        darkest: '#1E1E1E',
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
      green: {
        lightest: '#c6f6d5',
        lighter: '#9ae6b4',
        light: '#68d391',
        default: '#48bb78',
        dark: '#38a169',
        darker: '#2f855a',
        darkest: '#276749',
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
      pink: {
        lightest: '#FF9EC3',
        lighter: '#F2186C',
        light: '#DE1663',
        default: '#BF1355',
        dark: '#A6114A',
        darker: '#800D39',
        darkest: '#590928',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Proza Libre', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif'],
    },
    borderRadius: {
      sm: '0.25rem',
      default: '0.5rem',
      lg: '1.25rem'
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
      },
      minHeight: {
        sm: '18rem',
        default: '36rem',
        lg: '48rem'
      }
    }
  }
}