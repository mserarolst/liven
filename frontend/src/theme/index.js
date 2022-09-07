import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = {
    breakpoints: createBreakpoints({
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1150,
            xl: 1920,
        },
    }),
};

const theme = createTheme({
    palette: {
        background: {
            main: '#7FB555',
            secondary: '#C8EEAB',
            light: '#DDDDDD',
            dark: '#505F5F',
        },
        primary: {
            main: '#7FB555',
            secondary: '#C8EEAB',
            light: 'white',
        },
        secondary: {
            main: '#ffffff',
            secondary: '#E5E3DB',
            light: 'white',
        },
        typography: {
            fontFamily: 'Montserrat',
        },
        text: {
            main: '#7FB555',
            secondary: '#C8EEAB',
            disabled: '#9d9d9d',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat-bold',
            fontSize: '3rem',
            [breakpoints.breakpoints.down('sm')]: {
                fontSize: '2rem',
            },
        },
        h2: {
            fontFamily: 'Raleway',
            fontSize: '1.5rem',

            [breakpoints.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
            },
        },
        h3: {
            fontFamily: 'Raleway',
            fontSize: '1.2rem',

            [breakpoints.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
        },
        h4: {
            fontFamily: 'Raleway',
            fontSize: '1rem',

            [breakpoints.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
            },
        },
        body1: {
            fontFamily: 'Raleway',
            fontSize: '0.8rem',
        },
        menu: {
            fontSize: '3rem',
            fontFamily: 'Montserrat',
            color: '#7FB555',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1150,
            xl: 1920,
        },
    },
    overrides: {
        MuiSnackbarContent: {
            root: {
                '&[class*="variantSuccess"]': {
                    backgroundColor: '#7FB555',
                },
            },
        },
    },
});

export default theme;
