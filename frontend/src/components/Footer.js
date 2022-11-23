import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../static/css/components/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../static/logos/liven/logo-green.svg';
import LivenIcon from './Icons/LivenIcon';

const Footer = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box className="Footer-container">
            <LivenIcon extraClass="Footer-logo"/>
        </Box>
    );
};

export default Footer;
