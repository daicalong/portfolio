// tailwind.config.js
module.exports = {
    corePlugins: {
        float: false,
        clear: false,
        // objectFit: false,
        objectPosition: false,
        // gridTemplateColumns: false,
        // gridColumn: false,
        // gridColumnStart: false,
        // gridColumnStartEnd: false,
        // gridTemplateRows: false,
        // gridRow: false,
        // gridRowStart: false,
        // gridRowEnd: false,
        // gap: false,
        // gridAutoFlow: false,
        placeholderColor: false,
        borderCollapse: false,
        tableLayout: false,
        verticalAlign: false,
    },
    variants: {
        opacity: ['responsive', 'hover'],
    },
    theme: {
        spacing: {
            '0': '0',
            'px': '1px',
            '1/4': '25%',
            '1/3': '33.333%',
            '1/2': '50%',
            '2/3': '66.666%',
            '3/4': '75%',
            '2': '.2rem',
            '4': '.4rem',
            '8': '.8rem',
            '10': '1rem',
            '18': '1.8rem',
            '20': '2rem',
            '24': '2.4rem',
            '30': '3rem',
            '36': '3.6rem',
            '40': '4rem',
            '48': '4.8rem',
            '60': '6rem',
            '72': '7.2rem',
            '80': '8rem',
            '96': '9.6rem',
            '100': '10rem',
            '120': '12rem',
            '128': '12.8rem',
            '160': '16rem',
            '200': '20rem',
            '256': '25.6rem',
            '320': '32rem',
            '600': '60rem',
            '640': '64rem',
            '720': '72rem',
            '768': '76.8rem',
            '960': '96rem',
            '1280': '128rem',
            '1440': '144rem',
            '1920': '192rem'
        },
        fontSize: {
            '2xs': '1rem',
            'xs': '1.2rem',
            'sm': '1.4rem',
            'base': '1.6rem',
            'lg': '2rem',
            'xl': '2.4rem',
            '2xl': '3.6rem',
            '3xl': '4.8rem'
        },
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
                darker: '#343434',
                darkest: '#171717',
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
                dark: '#0d23b5',
                darker: '#2b6cb0',
                darkest: '#2c5282',
            },
            pink: {
                lightest: '#FF9EC3',
                lighter: '#F2186C',
                light: '#ff3180',
                default: '#DE1663',
                dark: '#A6114A',
                darker: '#800D39',
                darkest: '#590928',
            },
            yellow: {
                default: '#e3df00'
            }
        },
        fill: {
            pink: '#DE1663',
            yellow: '#e3df00',
            blue: '#0d23b5',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1280px',
            xl: '1440px',
        },
        fontFamily: {
            display: ['Proza Libre', 'sans-serif'],
            body: ['Source Sans Pro', 'sans-serif'],
        },
        borderRadius: {
            sm: '0.25rem',
            default: '0.5rem',
            lg: '1.25rem',
            full: '9999px'
        },
        extend: {
            minHeight: {
                sm: '18rem',
                default: '36rem',
                lg: '48rem'
            },
            flex: {
                '1/5': '0 1 20%',
                '1/4': '0 1 25%',
                '1/3': '0 1 33.333%',
                '1/2': '0 1 50%',
                '3/4': '0 1 66.666%',
            },
            inset: {
                '-full': '-100%'
            },
            colors: {
                'black-1/2': 'rgba(0, 0, 0, .5)',
                'black-3/4': 'rgba(0, 0, 0, .75)'
            },
            translate: {
                'px': '1px',
                '.4': '.4rem'
            },
        }
    }
}