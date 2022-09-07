import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import React, { useEffect, useState } from 'react';
import '../../../static/css/MenuLiven/MenuLiven.css';
import { Link } from 'react-router-dom';

const MenuLiven = (props) => {
    const navItems = [{title: 'HOME', link: '/home'}, {title: 'COMPANY', link: '/company'}, {title: 'COMMITMENT', link: '/commitent'}, {title: 'PRODUCTS', link: '/products'}, {title: 'PEOPLE', link: '/people'}, {title: 'SHARING VOICES', link: '/sharing-voices'}, {title: 'CONTACT', link: '/contact'}];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function HideOnScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
          target: window ? window() : undefined,
        });
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        );
    }

    if (props.isHome) {
        return (
            <HideOnScroll {...props}>
                <AppBar sx={{backgroundColor: 'rgb(255 255 255 / 16%)', height: '71px', alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Toolbar sx={{marginRight: '81px'}}>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff', font: 'normal normal normal 20px/24px Helvetica', padding: '0 25px' }}>
                                <Link to={item.link} className='link'>
                                    {item.title}
                                </Link>
                            </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        );
    }

    
};

export default MenuLiven;
