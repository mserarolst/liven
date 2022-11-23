import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/Portada.css';
import { Link } from 'react-router-dom';
import portada from '../../../static/images/shutterstock_1032103063.jpg';
import logo from  '../../../static/logos/liven/logo.svg';
import TextField from '@mui/material/TextField';
import PauligIcon from '../../components/Icons/PauligIcon';
import PortadaForm from './PortadaForm';

const Portada = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <Box className="Portada-container">
            <img src={portada} className="Portada-img"/>
            <div className="Portada-background"></div>
            <Box className='Portada-content'>
                <Box className="Portada-divs">
                    <div className="Portada-div" style={{paddingLeft: '7%'}}>
                        <Typography variant='h3' color='#fff' marginTop='20px' maxWidth='82%'>We are a company with more than 30 years of history, a leader in the manufacture snacks in Europe. We try our best to make sure that our manufacturing processes are sustainable, always commiting ourselves to offer the highest quality to our customers.</Typography>
                        <Typography variant='h2' color='#fff' marginTop='30px' textTransform={'unset'}>Now, part of Paulig Group, to make things bigger.</Typography>
                        {/* <div className="Portada-cookies">
                            <Typography variant='body1' fontFamily='Helvetica' color='#fff' padding='22px'>LIVEN, S.A. usa cookies para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios.</Typography>
                        </div> */}
                    </div>
                    <div className="Portada-div" style={{paddingRight: '7%'}}>
                        <Typography variant='h1' fontFamily='Lato-light' color='#fff'>How can we help you?</Typography>
                        <PortadaForm />
                    </div>
                </Box>
                <Box className='Portada-footer'>
                    <PauligIcon width={'200px'}/>
                </Box>
            </Box>
            
        </Box>
    );
};

export default Portada;
