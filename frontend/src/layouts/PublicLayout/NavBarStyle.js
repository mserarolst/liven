import { makeStyles } from '@mui/styles';

const navBarStyle = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flex: '1',
        overflow: 'hidden',
    },
    contentContainer: {
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
    },
    navBar: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        transition: '0.5s',
    },
    toolbar: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    },
    button: {
        color: theme.palette.text.primary,
        justifyContent: 'center',
        textAlign: 'center',
        letterSpacing: 0,
        textTransform: 'none',
        padding: 20,
        width: '100%',
        cursor: 'pointer',
        borderBottom: '1px solid ' + theme.palette.text.main,
    },

    buttonMobile: {
        color: theme.palette.text.primary,
        justifyContent: 'center',
        letterSpacing: 0,
        textTransform: 'none',
        width: '100%',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    title: {
        marginRight: 'auto',
        lineHeight: 1.3,
    },
    titleMobile: {
        fontSize: 25,
    },
    active: {
        color: theme.palette.primary.main,
        '& $title': {
            fontWeight: theme.typography.fontWeightMedium,
        },
        '& $icon': {
            color: theme.palette.primary.main,
        },
    },
    logo: {
        // transition: "0.5s",
        '-webkit-transition': 'transform 500ms',
        transition: 'all 500ms',
        opacity: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: 0,
        width: '65%',
        margin: 'auto',
    },
    hide: {
        transition: '0.5s ease-in-out',
        opacity: 0,
        transform: 'scale(0.8)',
    },
    itemMobile: {
        display: 'flex',
        padding: 15,
    },
    buttonDrawer: {
        backgroundColor: '#fffffff0',
    },
    margin: {
        margin: theme.spacing(1),
    },
    drawer: {
        '& .MuiDrawer-paper': {
            height: '100% !important',
        },
    },
}));

export default navBarStyle;
