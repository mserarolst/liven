import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import '../../../static/css/Sustainability/Sustainability.css';
import portada from '../../../static/images/Sustainability.jpg'

const SHome = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="SHome-container">
            <div className='SHome-image'><img src={portada} className='SHome-img'/></div>
            <div class="SHome-background"></div>
            <Box className="SHome-content">
                <Typography variant='h1' className="SHome-title" marginBottom={'20px'}>“The Future is in our hands, and we do mind it”</Typography>
                <Typography variant='h3' className='SHome-title' maxWidth={'60%'} lineHeight='1.5'>We have aligned our strategy with the United Nations 2030 Agenda for sustainable development.</Typography>
            </Box>
            <Box className='SHome-subcontent'>
                <Typography variant='h3' className='SHome-footer'>Get to know more about our sustainable commitment</Typography>
                <Typography variant='h4' className='SHome-footer'>Get the Sustainability report 2022</Typography>
            </Box>
        </Box>
    );
};

export default SHome;
