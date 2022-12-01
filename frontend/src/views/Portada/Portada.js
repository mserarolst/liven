import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../static/css/Portada/Portada.css';
import { get } from '../../api/API';
import PauligIcon from '../../components/Icons/PauligIcon';
import PortadaForm from './PortadaForm';

const Portada = (props) => {
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const { data, message } = await get('get-text?page=1');

            setData(data);
        };
        getData();
        const getImages = async () => {
            const { data, message } = await get('get-image?page=1');

            setImages(data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        getImages();
    }, []);

    function getContent(name) {
        if (data?.length > 0) {
            let result = '';
            data.map((item) => {
                if (item.name == name) {
                    result = item.content;
                }
            })
            return result;
        }
    }

    function getImage(name) {
        if (data?.length > 0) {
            let result = '';
            images.map((item) => {
                if (item.name == name) {
                    result = item.content;
                }
            })
            return result;
        }
    }
    
    return (
        <Box className="Portada-container">
            <img src={getImage('image_primary')} className="Portada-img"/>
            <div className="Portada-background"></div>
            <Box className='Portada-content'>
                <div className="Portada-div" style={{}}>
                    <Typography variant='h3' color='#fff' marginTop='20px' maxWidth='82%' whiteSpace={'pre-wrap'}>{getContent('text_primary')}</Typography>
                    <Typography variant='h2' color='#fff' marginTop='30px' textTransform={'unset'} whiteSpace={'pre-wrap'}>{getContent('text_secondary')}</Typography>
                    {/* <div className="Portada-cookies">
                        <Typography variant='body1' fontFamily='Helvetica' color='#fff' padding='22px'>LIVEN, S.A. usa cookies para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios.</Typography>
                    </div> */}
                </div>
                <div className="Portada-div" style={{position: 'relative', top: '-20%'}}>
                    <Typography variant='h1' fontFamily='Lato-light' color='#fff'>{getContent('title')}</Typography>
                    <PortadaForm />
                </div>
                
            </Box>
            <Box className='Portada-footer'>
                <PauligIcon width={'200px'}/>
            </Box>
        </Box>
    );
};

export default Portada;
