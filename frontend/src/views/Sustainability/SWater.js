import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Sustainability/Sustainability.css';
import portada from '../../../static/images/WATER.jpg'

const SWater = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="SWater-container">
            <div className='SHome-image'><img src={portada} className='SHome-img'/></div>
            <div class="SHome-background"></div>
            <Box className='SWater-content'>
                <Box className="SWater-text">
                    <Typography variant='h1' className="SEmissions-title" marginBottom={'10px'}>We have our waste water purification system.</Typography>
                    <Typography variant='h3' className='SEmissions-title' lineHeight='1.5' marginBottom={'20px'}>Explicació</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SWater;
