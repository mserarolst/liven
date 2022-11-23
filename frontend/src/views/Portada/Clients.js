import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/Clients.css';
import { Link } from 'react-router-dom';
import image from '../../../static/images/client.png';

const ClientItem = (props) => {
    return (
        <div className='ClientItem-container'>
            <img src={image} className='ClientItem-image'/>
            <Typography variant='h4' textAlign='center' marginTop='20px'>{props.text}</Typography>
        </div>
    )
}

const Clients = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box className="Clients-container">
            <Typography variant='h1' paddingTop='50px' paddingBottom='80px' maxWidth='50%' margin='0 auto' textAlign='center'>What kind of client are you?</Typography>
            <Box className="Clients-clients">
                <ClientItem text='Contract Manufacturer'/>
                <ClientItem text='Private Label'/>
                <ClientItem text='Retailer'/>
                <ClientItem text='Cinemas'/>
                <ClientItem text='Raw Corn'/>
            </Box>
        </Box>
    );
};

export default Clients;
