import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Page from '../../../../components/Page';
import '../../../../../static/css/Home.css';
import { Link } from 'react-router-dom';
import { get } from '../../../../api/API';
import PortadaEdit from './PortadaEdit';
import OurProductsEdit from './OurProductsEdit';

const HomeEdit = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Page title="Liven">
            <div className="Home-container">
                <PortadaEdit
                    page_id={props.page_id}
                    openModal={props.openModal}
                    setOpenModal={props.setOpenModal}
                    handleOpenModal={props.handleOpenModal}
                    handleCloseModal={props.handleCloseModal}
                    type={props.type}
                    setType={props.setType}
                    id={props.id}
                    setId={props.setId}
                    label={props.label}
                    setLabel={props.setLabel}
                    setEndPoint={props.setEndPoint}
                />
                <OurProductsEdit
                    page_id={props.page_id}
                    openModal={props.openModal}
                    setOpenModal={props.setOpenModal}
                    handleOpenModal={props.handleOpenModal}
                    handleCloseModal={props.handleCloseModal}
                    type={props.type}
                    setType={props.setType}
                    id={props.id}
                    setId={props.setId}
                    label={props.label}
                    setLabel={props.setLabel}
                    setEndPoint={props.setEndPoint}
                />
            </div>
        </Page>
    );
};

export default HomeEdit;
