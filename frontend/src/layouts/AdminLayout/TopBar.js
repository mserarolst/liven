import React, { useEffect, useState } from 'react';
import { AppBar, Box, Hidden, IconButton, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Dashboard, Input, Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from "../../theme/icons/logo.svg";
import logo from '../../../static/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        width: 60,
        height: 60,
    },
    icon: {
        fill: 'white',
        width: 200,
        height: 40,
    },
}));

const TopBar = (props) => {
    const { open, toggleDrawer } = props;
    const classes = useStyles();
    const [isLogged, setIsLogged] = useState(
        localStorage.getItem('isLoggedIn') || ''
    );
    let navigate = useNavigate();

    useEffect(() => {
        setIsLogged(localStorage.getItem('isLoggedIn'));
    }, []);

    const logOut = () => {
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn', false);
        setIsLogged(false);
        navigate('/');
    };

    return (
        <Toolbar
            sx={{
                pr: '24px', // keep right padding when drawer closed
            }}
        >
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon color="secondary" />
            </IconButton>
            <Link to="/">
                <div>
                    <img src={logo} width={100} />
                </div>
            </Link>
            <Box flexGrow={1} />
            <Hidden>
                <IconButton color="secondary" onClick={() => navigate('/')}>
                    <Dashboard />
                </IconButton>
                <IconButton color="secondary" onClick={() => logOut()}>
                    <Input />
                </IconButton>
            </Hidden>
            <Hidden lgUp>
                <IconButton color="inherit">
                    <Menu />
                </IconButton>
            </Hidden>
        </Toolbar>
    );
};

export default TopBar;
