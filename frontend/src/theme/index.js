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
            main: '#FFFFFF',
            secondary: '#FFFFFF',
            light: '#DDDDDD',
            dark: '#505F5F',
        },
        primary: {
            main: '#555448',
            secondary: '#FFFFFF',
            light: 'white',
        },
        secondary: {
            main: '#FFFFFF',
            secondary: '#E5E3DB',
            light: 'white',
        },
        typography: {
            fontFamily: 'Noto Serif Gujarati',
        },
        text: {
            main: '#FFFFFF',
            secondary: '#FFFFFF',
            disabled: '#9d9d9d',
        },
    },
    color: {
		primary: "transparent",
		secondary: "#FBC371",
		third: "#1D1D1B",
		background: "#FFFFFF",
		background_dark: "#FFFFFF",
		gradient11: "transparent",
		gradient12: "#f6b2a7",
		gradient21: "#ae74c7",
		gradient22: "#d4a4e9",
		gradient31: "#FBC371",
		gradient32: "#eec993",
		gradient41: "#fbb48c",
		gradient42: "#ecb783",
		gradientI: "#E7EBF0",
		gradient: "linear-gradient(90deg, transparent,transparent);",
		gradient0: "linear-gradient(50deg, #d6d6d6,#d6d6d6,#f6b2a7);",
		gradient1: "linear-gradient(50deg, #F76C6D,#F76C6D,#f6b2a7);",
		gradient2: "linear-gradient(50deg, #ae74c7,#ae74c7,#d4a4e9);",
		gradient3: "linear-gradient(50deg, #FBC371,#FBC371,#eec993);",
		gradient4: "linear-gradient(50deg, #fbb48c,#fbb48c,#ecb783);",
		gradient5: "linear-gradient(50deg, #fbb48c,#fbb48c,#ecb783);",
		gradient6: "linear-gradient(50deg, #fbb48c,#fbb48c,#ecb783);",
		gradientinfo: "linear-gradient(50deg, #E7EBF0,#E7EBF0,#F2EBF0);",

		gradient_inv: "linear-gradient(260deg, #F76C6D,#FBC371);",
		gradient_ver: "linear-gradient( #F76C6D20,#FBC3714A);",
		mig: "#F9996F",
		boxShadow: "0px 0px 8px 0px #F76C6D",
		boxShadowGrey: "0px 0px 8px 0px #d6d6d6",
		divider: "rgba(0, 0, 0, 0.12)",
		// boxShadow: "12px 12px 37px #d6d6d6,-12px -12px 37px #ffffff;",
	},
    typography: {
        h1: {
            fontFamily: 'Noto Serif Gujarati-bold',
            fontSize: '4.5vw',
            [breakpoints.breakpoints.down('sm')]: {
                fontSize: '2rem',
            },
        },
        h2: {
            fontFamily: 'Noto Serif Gujarati-bold',
            fontSize: '2vwrem',
            textTransform: 'uppercase',
            [breakpoints.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
            },
        },
        h3: {
            fontFamily: 'Noto Serif Gujarati',
            fontSize: '1.5vw',
            fontWeight: 400,

            [breakpoints.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
        },
        h4: {
            fontFamily: 'Noto Serif Gujarati-Light',
            fontSize: '1.3vw',
            fontWeight: 400,

            [breakpoints.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
            },
        },
        body1: {
            fontFamily: 'Noto Serif Gujarati',
            fontSize: '0.8rem',
            fontWeight: 400,
        },
        menu: {
            fontSize: '3rem',
            fontFamily: 'Noto Serif Gujarati',
            color: '#FFFFFF',
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
                    backgroundColor: '#FFFFFF',
                },
            },
        },
    },
});

export default theme;
