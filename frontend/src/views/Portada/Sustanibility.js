import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/Sustanibility.css';
import image from '../../../static/images/Sustainability.jpg';
import { Link } from 'react-router-dom';

const Sustanibility = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="Sustanibility-container">
            <img src={image} className="Sustanibility-img"/>
            {/* <div className="Sustanibility-background"></div> */}
            <Box className="Sustanibility-content">
                <Typography variant='h1' className="Sustanibility-title" marginBottom={'20px'}>“The Future is in our hands, and we do mind it”</Typography>
                <Typography variant='h3' className='Sustanibility-title' maxWidth={'60%'} lineHeight='1.5'>We have aligned our strategy with the United Nations 2030 Agenda for sustainable development.</Typography>
            </Box>
            <Box className='Sustanibility-subcontent'>
                <Typography variant='h4' className='Sustanibility-footer'>Get to know more about our sustainable commitment</Typography>
                <Typography variant='body1' className='Sustanibility-footer'>Get the Sustainability report 2022</Typography>
            </Box>
        </Box>
    );
};

export default Sustanibility;