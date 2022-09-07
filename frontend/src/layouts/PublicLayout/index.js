import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Container,
    Drawer,
    IconButton,
    List,
    Toolbar,
    useMediaQuery,
    Grid,
    MenuItem,
    Avatar,
    Divider,
    ListItemIcon,
    PersonAdd
} from '@mui/material';
import { Close, Dashboard, Input, Menu } from '@mui/icons-material';
import navBarStyle from './NavBarStyle';
import NavBarItem from './NavBarItem';
import logo from '../../../static/images/logo.png'
import MenuLiven from './MenuLiven';

const MainLayout = () => {
    const classes = navBarStyle();
    const [colorMenu, setColorMenu] = useState(null);
    const [menu, setMenu] = useState(null);
    const [isLogged, setIsLogged] = useState(
        localStorage.getItem('isLoggedIn') || ''
    );
    const [isMobile, setIsMobile] = useState(getIsMobile());
    let navigate = useNavigate();
    const matches = useMediaQuery('(min-width:960px)');

    useEffect(() => {
        isHomePage() ? setColorMenu('transparent') : setColorMenu('#C3D6A5');
        setIsLogged(localStorage.getItem('isLoggedIn'));
    }, [isLogged, window.location.pathname]);

    function getIsMobile() {
        return window.innerWidth < 1024;
    }

    const logOut = () => {
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn', false);
        setIsLogged(false);
        navigate('/');
    };

    useLayoutEffect(() => {
    
        const onScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 0) {
                setColorMenu('#C3D6A5')
            } else if (isHomePage()){
                setColorMenu('transparent')
            }
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const items = [
        {
            title: 'INICI',
            to: '',
        },
        {
            title: 'QUI SOM',
            to: 'qui-som',
        },
        {
            title: 'DONES',
            to: 'dones',
        },
        {
            title: 'BOTIGA',
            to: 'botiga',
        },
        {
            title: 'ACTUALITAT',
            to: 'actualitat',
        },
        {
            title: 'PREMSA',
            to: 'premsa',
        },
        {
            title: 'CONTACTE',
            to: 'contacte',
        },
    ];

    const openMenu = (event) => {
        setMenu(event.currentTarget);
    };

    const closeMenu = () => {
        setMenu(null);
    };

    const renderMenuMobile = () => {
        return (
            <AppBar elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Link to="/">
                        <div>
                            <img src={logo} width={202} />
                        </div>
                    </Link>
                    <Box flexGrow={1} />
                    <Box>
                        {isLogged === 'true' && (
                            <>
                                <IconButton
                                    color="inherit"
                                    onClick={() => navigate('/administracio')}
                                >
                                    <Dashboard />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    onClick={() => logOut()}
                                >
                                    <Input />
                                </IconButton>
                            </>
                        )}
                    </Box>
                    <IconButton
                        style={{ zIndex: 10 }}
                        color="primary"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={openMenu}
                    >
                        <Menu sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Drawer
                        open={menu}
                        onClose={closeMenu}
                        anchor="top"
                        className={classes.drawer}
                        transitionDuration={600}
                        MenuProps={{ disableScrollLock: true }}
                        disableScrollLock={true}
                    >
                        <Grid container>
                            <Grid item xs>
                                <div>
                                    <img src={logo} width={202} />
                                </div>
                            </Grid>
                            <Grid item xs textAlign="right">
                                <Box p={4}>
                                    <IconButton>
                                        <Close
                                            onClick={closeMenu}
                                            sx={{ fontSize: 40 }}
                                            color="primary"
                                        />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>

                        <List>
                            {items?.map((item) => (
                                <NavBarItem
                                    to={item.to}
                                    key={item.title}
                                    title={item.title}
                                    closeMenu={closeMenu}
                                />
                            ))}
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
            
        )
    };

    const isHomePage = () => {
        return window.location.pathname == '/' || window.location.pathname == '/botiga' || window.location.pathname == '/contacte';
    }

    return (
        <div>
            <MenuLiven isHome={isHomePage()}/>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
