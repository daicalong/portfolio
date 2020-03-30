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
            '.2': '.2rem',
            '.4': '.4rem',
            '.8': '.8rem',
            '1': '1rem',
            '1.8': '1.8rem',
            '2': '2rem',
            '2.4': '2.4rem',
            '3': '3rem',
            '3.6': '3.6rem',
            '4': '4rem',
            '4.8': '4.8rem',
            '6': '6rem',
            '7.2': '7.2rem',
            '8': '8rem',
            '9.6': '9.6rem',
            '10': '10rem',
            '12': '12rem',
            '12.8': '12.8rem',
            '16': '16rem',
            '20': '20rem',
            '25.6': '25.6rem',
            '32': '32rem',
            '60': '60rem',
            '64': '64rem',
            '72': '72rem',
            '76.8': '76.8rem',
            '96': '96rem',
            '128': '128rem',
            '144': '144rem',
            '192': '192rem'
        },
        fontSize: {
            'xs': '1.4rem',
            'sm': '1.6rem',
            'base': '1.8rem',
            'lg': '2.4rem',
            'xl': '3.6rem',
            '2xl': '4.8rem',
            '3xl': '6.4rem'
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