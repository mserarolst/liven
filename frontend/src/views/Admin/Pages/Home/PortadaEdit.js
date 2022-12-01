import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../../../../static/css/Portada/Portada.css';
import { get } from '../../../../api/API';
import portada from '../../../../../static/images/shutterstock_1032103063.jpg';
import logo from  '../../../../../static/logos/liven/logo.svg';
import TextField from '@mui/material/TextField';
import PauligIcon from '../../../../components/Icons/PauligIcon';
import PortadaFormEdit from './PortadaFormEdit';
import Edit from '../../Edit';
import EditModal from '../../EditModal';
import Result from '../../../Products/Result';

const PortadaEdit = (props) => {
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const { data, message } = await get('get-text?page='+props.page_id);

            setData(data);
        };
        getData();
        const getImages = async () => {
            const { data, message } = await get('get-image?page='+props.page_id);

            setImages(data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        getImages();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const { data, message } = await get('get-text?page='+props.page_id);

            setData(data);
        };
        const getImages = async () => {
            const { data, message } = await get('get-image?page='+props.page_id);

            setImages(data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        if (props.openModal == false) {
            getData();
            getImages();
        }
        
    }, [props.openModal]);

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

        !loading ? (
            <Box className="Portada-container" style={{position: 'relative'}}>
                <div style={{position: 'absolute', top: '5%', left: '5%', zIndex: '20', background: '#fff', borderRadius: '100%'}}>
                    <Edit endPoint='update-image' setEndPoint={props.setEndPoint} color='#000' setOpenModal={props.setOpenModal} type={'image'} setType={props.setType} label='Image Background' setLabel={props.setLabel} id='image_primary' setId={props.setId}/>
                </div>
                <img src={getImage('image_primary')} className="Portada-img"/>
                <div className="Portada-background"></div>
                <Box className='Portada-content'>
                    <div className="Portada-div" style={{}}>
                        <Typography variant='h3' color='#fff' marginTop='20px' maxWidth='82%' whiteSpace={'pre-wrap'}>{getContent('text_primary')}<Edit endPoint='update-text' setEndPoint={props.setEndPoint} ccolor='#fff' setOpenModal={props.setOpenModal} type={'text'} setType={props.setType} label='Primary Text' setLabel={props.setLabel} id='text_primary' setId={props.setId}/></Typography>
                        <Typography variant='h2' color='#fff' marginTop='30px' textTransform={'unset'} whiteSpace={'pre-wrap'}>{getContent('text_secondary')}<Edit endPoint='update-text' setEndPoint={props.setEndPoint} color='#fff' setOpenModal={props.setOpenModal} type={'text'} setType={props.setType} label='Secondary Text' setLabel={props.setLabel} id='text_secondary' setId={props.setId}/></Typography>
                    </div>
                    <div className="Portada-div" style={{position: 'relative', top: '-20%'}}>
                        <Typography variant='h1' fontFamily='Lato-light' color='#fff'>{getContent('title')}<Edit endPoint='update-text' setEndPoint={props.setEndPoint} ccolor='#fff' setOpenModal={props.setOpenModal} type={'text'} setType={props.setType} label='Title Form' setLabel={props.setLabel} id='title' setId={props.setId}/></Typography>
                        <PortadaFormEdit />
                    </div>
                    
                </Box>
                <Box className='Portada-footer' style={{display: 'flex'}}>
                    <PauligIcon width={'200px'}/><Edit endPoint='update-page' setEndPoint={props.setEndPoint} ccolor='#fff' setOpenModal={props.setOpenModal} type={'image'} setType={props.setType} label='Icon' setLabel={props.setLabel} id='icon' setId={props.setId}/>
                </Box>
            </Box>
        ) : (
            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress sx={{width:'80px !important', height:'80px !important'}}/>
            </div>
        )
    );
};

export default PortadaEdit;
