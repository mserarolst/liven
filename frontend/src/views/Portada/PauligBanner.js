import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/PauligBanner.css';
import { Link } from 'react-router-dom';
import PromiseIcon from '../../components/Icons/PromiseIcon';
import PauligIcon from '../../components/Icons/PauligIcon';

const PauligBanner = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box className="PauligBanner-container">
            <div className="PauligBanner-content">
                <PromiseIcon extraClass='PauligBanner-icon'/>
                <Typography variant='h3' textTransform='uppercase' fontFamily='Lato' textAlign='center'>part of paulig</Typography>
                <PauligIcon extraClass='PauligBanner-icon'/>
            </div>
        </Box>
    );
};

export default PauligBanner;
