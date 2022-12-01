import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Sustainability/Sustainability.css';
import portada from '../../../static/images/plaques.png'

const SElectric = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="SElectric-container">
            <Box className='SElectric-content'>
                <Box className='SElectric-image'><img src={portada} className='SElectric-img'/></Box>
                <Box className="SElectric-text">
                    <Typography variant='h1' className="SElectric-title" marginBottom={'20px'}>The electric energy we use is 100% from renewable sources</Typography>
                    <Typography variant='h3' className='SElectric-title' lineHeight='1.5'>El 100% de l’energia elèctrica que utilitzem a les plantes de Liven SAU és amb garantia d’origen 100% renovable.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SElectric;
