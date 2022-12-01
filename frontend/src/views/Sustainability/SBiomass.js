import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Sustainability/Sustainability.css';
import portada from '../../../static/images/Biomass.png'

const SBiomass = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="SElectric-container">
            <Box className='SElectric-content'>
                <Box className="SElectric-text">
                    <Typography variant='h1' className="SElectric-title" marginBottom={'20px'}>Biomass</Typography>
                    <Typography variant='h3' className='SElectric-title' lineHeight='1.5'>Our biomass plant has a capacity of 5.000 tones of wood chips per year. It means that it can supply rewenable energy to our production plants avoiding 3.400.000 Kg ok CO2 each year.</Typography>
                </Box>
                <Box className='SElectric-image'><img src={portada} className='SElectric-img'/></Box>
                
            </Box>
        </Box>
    );
};

export default SBiomass;
