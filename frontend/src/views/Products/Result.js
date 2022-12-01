import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Products/Products.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Result = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    

    return (
        <Box key={props.index} className="Product-container">
            <div className='Product-image'>
                <img src={props.item.image} className="Product-img"/>
            </div>
            <div className="Product-info">
                <Typography variant='h3' textTransform='uppercase' color='#545448' textAlign='left' marginLeft={'14px'}>{props.item.name}</Typography>
                <Typography variant='h4' textTransform='uppercase' color='#555448' textAlign='left' marginLeft={'14px'} marginTop='2px'>{props.item.productFamily}</Typography>
                <Typography variant='body1' color='#555448' textAlign='left' paddingLeft='14px' marginTop='15px'>{props.item.description}</Typography>
                <div style={{display: 'flex', paddingLeft:'13px', marginTop: '2px'}}><MailOutlineIcon/><Typography variant='body1' color='#555448' textAlign='left' marginTop='2px' marginLeft={'3px'}>{'I would like to get more info'}</Typography></div>
            </div>
        </Box>
    );
};

export default Result;
