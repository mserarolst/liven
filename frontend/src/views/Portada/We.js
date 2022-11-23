import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/We.css';
import image from '../../../static/images/TaulaHOME.png';
import { Link } from 'react-router-dom';

const We = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="We-container">
            <img src={image} className="We-img"/>
            <div className="We-background"></div>
            <Box className="We-content">
                <Typography variant='h2' className="We-title">We are part of the Paulig Group and our goal is to become the centre of snacks’ excellence in Europe. Always committed with people & planet.</Typography>
                
            </Box>
            <Box className='We-subcontent'>
                <Typography variant='h4' className='We-subtitle'>Our dna</Typography>
                <Typography variant='body1' className='We-footer'>{"People’s wellbeing | Social and environmental commitment | Customer focused | Work well done | Benefit is not everything"}</Typography>
            </Box>
        </Box>
    );
};

export default We;
