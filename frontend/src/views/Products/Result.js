import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Products/Products.css';
import { Link } from 'react-router-dom';
import image from '../../../static/images/product.png';

const Result = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box key={props.index} className="Product-container">
            <img src={image} className="Product-img"/>
            <div className="Product-info">
                <Typography variant='h3' color='#2C6E3E' textAlign='center' fontFamily='Lato'>{props.item}</Typography>
                <div className="Product-line"></div>
                <Typography variant='body1' color='#2C6E3E' textAlign='left' paddingLeft='14px' paddingBottom='9px' fontFamily='Lato'>Description of the product</Typography>
            </div>
        </Box>
    );
};

export default Result;
