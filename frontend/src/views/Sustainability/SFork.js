import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Sustainability/Sustainability.css';
import portada from '../../../static/images/fork.jpg'
import foto from '../../../static/images/we.png'

const SFork = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="SFork-container">
            <div className='SHome-image'><img src={portada} className='SHome-img'/></div>
            <div class="SHome-background"></div>
            <Box className='SFork-content'>
                <Box className="SFork-image">
                    <img src={foto} className='SFork-img'/>
                </Box>
                <Box className="SFork-text">
                    <Typography variant='h1' className="SEmissions-title" marginBottom={'10px'}>From farm to fork</Typography>
                    <Typography variant='h3' className='SEmissions-title' lineHeight='1.5' marginBottom={'20px'}>We are joining the European Green Deal “From farm to fork” strategy being sustainable in our the stages of our value chain.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SFork;
