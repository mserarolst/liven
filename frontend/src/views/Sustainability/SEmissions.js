import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Sustainability/Sustainability.css';
import portada from '../../../static/images/truck.jpg'

const SEmissions = (props) => {
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
                    <Typography variant='h1' className="SEmissions-title" marginBottom={'10px'}>We are reducing emissions</Typography>
                    <Typography variant='h3' className='SEmissions-title' lineHeight='1.5' marginBottom={'20px'}>Our duo-truck it’s an Eco-Duo concept allows us to reduce the 50% of our road transport deliveries and a 30% of our CO2 emissions. Since 2022 our popcorn factory is carbon neutral certified.</Typography>
                    <Typography variant='h3' className='SEmissions-title' lineHeight='1.5'>Since 2022 our popcorn factory is carbon neutral certified.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SEmissions;
