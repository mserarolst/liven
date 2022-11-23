import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/Sharing.css';
import image from '../../../static/images/Sustainability.jpg';
import { Link } from 'react-router-dom';

const Sharing = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="Sharing-container">
            <Box className="Sharing-left">
                <Typography variant='h1' color= '#555448' className="Sharing-title" marginBottom='31px'>Sharing voices</Typography>
                <Typography variant='h3' color= '#555448' className='Sharing-title' marginBottom='20px' maxWidth='60%' lineHeight='1.5'>Our aim is to have a 360º knowledge of the sector, that’s why different specialists voices of our team is sharing with you their concerns.</Typography>   
                <Typography variant='body1' color= '#555448' maxWidth='40%' className='Sharing-footer'>Get to know more about trends, innovation, sustainability and more.</Typography>
            </Box>
            <Box className='Sharing-right'>
                <div className='Sharing-image'>
                    <img src={image} className='Sharing-img'/>
                </div>
                <div className='Sharing-image-text'>
                    <Typography variant='h4' color= '#555448' className='Sharing-title' lineHeight='1.5'>PROBIOTICS & SNACKS</Typography>   
                    <Typography variant='body1' color= '#555448' className='Sharing-footer'>Discover how the food industry is working on probiotics and the new ways to ingest them, that are becoming trends</Typography>
                </div>
            </Box>
        </Box>
    );
};

export default Sharing;