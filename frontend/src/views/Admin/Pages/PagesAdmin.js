import { CircularProgress, Fade, Tooltip, IconButton, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { deleteElement, get } from '../../../api/API';
import MUIDataTable from 'mui-datatables';
import { options } from '../../../components/optionsTable';
import Title from '../../../components/Title';
import { Add, RemoveRedEye } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router';
import Page from '../../../components/Page';
import { useSnackbar } from 'notistack';
import PageItem from './PageItem';

const PagesAdmin = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();

    useEffect(() => {
        const getPages = async () => {
            const { data, message } = await get('get-page-list');

            setData(data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        getPages();
    }, []);

    const renderPages = () => {
        return (
            data.map((page, index) => {
                return (
                    <PageItem page={page} key={index}/>
                )
            })
        )
    }

    return (
        <Page title="Liven - Pages">
            <Title
                title={"Pages Admin"}
                subtitle="Gestiona els continguts de la web"
            />
            {!loading ? (
                <Fade in={!loading}>
                    <div>
                        {renderPages()}
                    </div>
                </Fade>
            ) : (
                <CircularProgress />
            )}
        </Page>
    );
};

export default PagesAdmin;
