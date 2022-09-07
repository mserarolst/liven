import { IconButton, Grow } from '@mui/material';
import { Close } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
// import { getUser } from './api/API';
import routes from './routes';
import theme from './theme';
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@mui/styles';

function App() {
    const [user, setUser] = useState('');
    const [isMobile, setIsMobile] = useState(getIsMobile());
    const routing = useRoutes(routes(user, isMobile));
    const notistackRef = React.createRef();
    const onClickDismiss = (key) => () => {
        notistackRef.current.closeSnackbar(key);
    };

    function getIsMobile() {
        return window.innerWidth < 1024;
    }

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     const loggedInUser = localStorage.getItem('isLoggedIn');
    //     if (loggedInUser !== null) {
    //         const user = JSON.parse(localStorage.getItem('user'));
    //         const foundUser = JSON.parse(loggedInUser);
    //         setUser(foundUser);

    //         const get = async () => {
    //             const message = await getUser(user.token);
    //             if (message === 'error') {
    //                 localStorage.removeItem('user');
    //                 localStorage.setItem('isLoggedIn', false);
    //                 setUser('');
    //             } else {
    //                 const foundUser = JSON.parse(loggedInUser);
    //                 setUser(foundUser);
    //             }
    //         };
    //         get();
    //     } else {
    //         setUser('');
    //     }
    // }, [routing]);

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                TransitionComponent={Grow}
                ref={notistackRef}
                classes={{
                    variantSuccess: { backgroundColor: '#7FB555' },
                }}
                action={(key) => (
                    <IconButton onClick={onClickDismiss(key)}>
                        <Close style={{ color: 'white' }} />
                    </IconButton>
                )}
            >
                {routing}
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
