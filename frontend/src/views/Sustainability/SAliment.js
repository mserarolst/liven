import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Sustainability/Sustainability.css';
import portada from '../../../static/images/Malbaratament1.jpg'

const SAliment = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="SEmissions-container">
            <div className='SHome-image'><img src={portada} className='SHome-img'/></div>
            <div class="SHome-background"></div>
            <Box className='SEmissions-content'>
                <Box className="SEmissions-text">
                    <Typography variant='h1' className="SEmissions-title" marginBottom={'10px'}>Malbaratament alimentari</Typography>
                    <Typography variant='h3' className='SEmissions-title' lineHeight='1.5' marginBottom={'20px'}>3.821 tones of food waste were used as a animal feeding last year. It represented the 100% of our by-product.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SAliment;
