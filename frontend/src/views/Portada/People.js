import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/People.css';
import { Link } from 'react-router-dom';

const People = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="People-container">
            <div className="People-content">
                <Typography variant='h1' fontFamily='Lato-bold' marginBottom='38px' color='#6A6A6A'>{'People & Planet'}</Typography>
                <Typography variant='h4' fontFamily='Helvetica' lineHeight='22px' color='#6A6A6A'>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'}</Typography>
                <Typography variant='h4' fontFamily='Helvetica' lineHeight='22px' color='#6A6A6A'>{'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'}</Typography>
            </div>
            <div className="People-content">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1P1DqSaaIqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Typography variant='h4' fontFamily='Helvetica' fontWeight='700' marginTop='50px' color='#6A6A6A' width='100%' textAlign='right' sx={{cursor:'pointer'}}>{'ODS AGENDA 2030 >'}</Typography>
            </div>
        </Box>
    );
};

export default People;
