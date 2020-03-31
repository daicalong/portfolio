// tailwind.config.js
const colors = {
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
        lightest: '#FFA8A8',
        lighter: '#FF7373',
        light: '#F25A5A',
        default: '#DE4747',
        dark: '#BA3C3C',
        darker: '#c53030',
        darkest: '#9E2B2B',
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
        lightest: '#8AC4FF',
        lighter: '#458CFF',
        light: '#2060F5',
        default: '#1B35DE',
        dark: '#182CAD',
        darker: '#122080',
        darkest: '#0C1554',
    },
    pink: {
        lightest: '#FFBDD1',
        lighter: '#FF96B6',
        light: '#FF598B',
        default: '#F73B74',
        dark: '#C42756',
        darker: '#9E2046',
        darkest: '#801938',
    },
    yellow: {
        light: '#F5F256',
        default: '#E3E03D',
        dark: '#BAB822'
    }
};

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
            '5': '.5rem',
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
            padding: '2rem'
        },
        colors: {
            ...colors,
            primary: {
                light: colors.pink.light,
                default: colors.pink.default,
                dark: colors.pink.dark
            },
            accent: {
                light: colors.yellow.light,
                default: colors.yellow.default,
                dark: colors.yellow.dark
            },
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