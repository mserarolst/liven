import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import '../../static/css/Home.css';
import { Link } from 'react-router-dom';
import { get } from '../api/API';
import Portada from './Portada/Portada';

const Home = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Page title="Liven">
            <div className="Home-container">
                <Portada />
            </div>
        </Page>
    );
};

export default Home;
