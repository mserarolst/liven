import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/Description.css';
import { Link } from 'react-router-dom';
import image from  '../../../static/images/home.png';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';

const Description = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="Description-container">
            <img src={image} className="Description-img"/>
            <div className="Description-background"></div>
            <div className="Description-content">
                <Typography variant='h4' fontFamily='Helvetica' marginBottom='94px' color='#000' textAlign='center' lineHeight='22px'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Typography>
                <div className="Description-icons">
                    <div className="Description-icon">
                        <GroupsIcon className="Description-svg"/>
                        <Typography variant='h1' marginTop='30px' marginBottom='30px' fontFamily='Josefin-sans' fontWeight='700' color='#2C6E3E'>+700</Typography>
                        <Typography variant='h4' fontFamily='Josefin-sans' color='#2C6E3E' maxWidth='50%' textAlign='center'>CUSTOMERS</Typography>
                    </div>
                    <div className="Description-icon">
                        <PublicIcon className="Description-svg"/>
                        <Typography variant='h1' marginTop='30px' marginBottom='30px' fontFamily='Josefin-sans' fontWeight='700' color='#2C6E3E'>+80</Typography>
                        <Typography variant='h4' fontFamily='Josefin-sans' color='#2C6E3E' maxWidth='50%' textAlign='center'>COUNTRIES</Typography>
                    </div>
                    <div className="Description-icon">
                        <SettingsIcon className="Description-svg"/>
                        <Typography variant='h1' marginTop='30px' marginBottom='30px' fontFamily='Josefin-sans' fontWeight='700' color='#2C6E3E'>9</Typography>
                        <Typography variant='h4' fontFamily='Josefin-sans' color='#2C6E3E' maxWidth='50%' textAlign='center'>PRODUCTION TECHNOLOGIES</Typography>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Description;
