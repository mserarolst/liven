import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import '../../static/css/Home.css';
import { Link } from 'react-router-dom';
import { get } from '../api/API';
import Portada from './Portada/Portada';
import Description from './Portada/Description';
import People from './Portada/People';
import Fork from './Portada/Fork';
import Footer from '../components/Footer';
import We from './Portada/We';
import OurProducts from './Portada/OurProducts';
import Clients from './Portada/Clients';
import SustanibilityHome from './Portada/SustanibilityHome';
import Sharing from './Portada/Sharing';
import SliderComponent from '../components/SliderComponent';
import PauligBanner from './Portada/PauligBanner';

const Home = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Page title="Liven">
            <div className="Home-container">
                <Portada />
                <OurProducts />
                <Clients />
                <We />
                <SustanibilityHome />
                <Sharing />
                <PauligBanner />
                <Footer />
            </div>
        </Page>
    );
};

export default Home;
