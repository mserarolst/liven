import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../static/css/components/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo-green.png';

const Footer = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box className="Footer-container">
            <img src={logo} className="Footer-logo"/>
        </Box>
    );
};

export default Footer;
