import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/Fork.css';
import { Link } from 'react-router-dom';
import image from '../../../static/images/fork.png';

const Fork = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box className="Fork-container">
            <img src={image} className="Fork-img"/>
            <div className="Fork-background"></div>
            <div className="Fork-content">
                <Typography variant='h1' fontFamily='Lato' fontWeight='700' marginBottom='28px' marginTop='56px' color='#fff' width='100%' textAlign='left'>{'Form farm to fork'}</Typography>
                <Typography variant='h4' fontFamily='Helvetica-light' lineHeight='22px' color='#fff'>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'}</Typography>
                <Typography variant='h4' fontFamily='Helvetica-light' lineHeight='22px' color='#fff'>{'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'}</Typography>
                <Typography variant='h4' fontFamily='Helvetica' fontWeight='700' marginTop='50px' color='#fff' textAlign='left' sx={{cursor:'pointer'}}>{'ODS AGENDA 2030 >'}</Typography>
            </div>
        </Box>
    );
};

export default Fork;
