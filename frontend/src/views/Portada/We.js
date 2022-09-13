import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/We.css';
import image from '../../../static/images/We.png';
import { Link } from 'react-router-dom';

const We = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="We-container">
            <img src={image} className="We-img"/>
            <div className="We-background"></div>
            <div className="We-content">
                <Typography variant='h1' className="We-title">We stand for</Typography>
                <Typography variant='h4' fontFamily='Helvetica-light' lineHeight='22px' color='#fff' textAlign='center'>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'}</Typography>
                <Typography variant='h4' fontFamily='Helvetica' fontWeight='700' marginTop='50px' color='#fff' textAlign='center' sx={{cursor:'pointer'}}>{'MEET US >'}</Typography>
            </div>
        </Box>
    );
};

export default We;
