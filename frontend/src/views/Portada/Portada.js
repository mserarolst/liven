import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/Portada.css';
import { Link } from 'react-router-dom';
import portada from '../../../static/images/portada.jpeg';
import logo from  '../../../static/images/logo.png';

const Portada = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className="Portada-container">
            <img src={portada} className="Portada-img"/>
            <div className="Portada-background"></div>
            <div className="Portada-content">
                <div className="Portada-div">
                    <img src={logo} className="Portada-logo"/>
                    <Typography variant='h3' fontFamily='Helvetica' color='#fff' marginTop='20px' maxWidth='82%'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Typography>
                    <Typography variant='h3' fontFamily='Helvetica' color='#fff' marginTop='20px'>OUR HERITAGE</Typography>
                    <div className="Portada-cookies">
                        <Typography variant='body1' fontFamily='Helvetica' color='#fff' padding='22px'>LIVEN, S.A. usa cookies para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios.</Typography>
                    </div>
                </div>
                <div className="Portada-div" style={{paddingLeft: '6%'}}>
                    <Typography variant='h1' fontFamily='Lato-light' color='#fff'>How can we help you?</Typography>
                </div>
            </div>
            
        </Box>
    );
};

export default Portada;
