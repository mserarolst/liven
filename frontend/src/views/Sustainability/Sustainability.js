import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import '../../../static/css/Sustainability/Sustainability.css';
import SHome from './SHome';
import SElectric from './SElectric';
import SEmissions from './SEmissions';
import SFork from './SFork';
import SBiomass from './SBiomass';
import SWater from './SWater';
import SAliment from './SAliment';

const Sustainability = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Page title="Sustainability - Liven">
            <div className="Sustainability-container">
                <SHome />
                <SElectric />
                <SEmissions />
                <SFork />
                <SBiomass />
                <SWater />
                <SAliment />
            </div>
        </Page>
    );
};

export default Sustainability;
