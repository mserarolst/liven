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

const Filters = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [productFamily, setProductFamily] = useState(null);
    const { id } = useParams();

    const columns = [
        {
            name: 'name',
            label: 'Name',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'id',
            label: 'Actions',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (id) => {
                    return (
                        <>
                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant='body1'>Editar Filtre</Typography>
                                <Tooltip title="Editar informació">
                                    <IconButton
                                        onClick={() =>
                                            navigate(
                                                `/administracio/filters/${id}`
                                            )
                                        }
                                    >
                                        <RemoveRedEye />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant='body1'>Afegir Value</Typography>
                                <Tooltip title="Crear value">
                                    <IconButton onClick={() => navigate(`/administracio/filters/value/${id}/nou`)}>
                                        <Add />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant='body1'>Veure Values</Typography>
                                <Tooltip title="Veure values">
                                    <IconButton onClick={() => navigate(`/administracio/filters/value/${id}`)}>
                                        <RemoveRedEye />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </>
                    );
                },
            },
        },
    ];

    useEffect(() => {
        const getFilters = async () => {
            const { data, message } = await get('get-filters-by-product-families?productFamily=' + id);
            console.log(message);
            console.log(data);

            setData(data);
            setLoading(false);
        };
        getFilters();
        const getProductFamily = async () => {
            const { data, message } = await get('get-product-families?id=' + id);
            console.log(message);
            console.log(data);

            setProductFamily(data);
        };
        getProductFamily();
    }, []);

    const optionsTable = {
        ...options,

        onRowsDelete: (rowsDeleted) => {
            rowsDeleted.data.forEach(async (item) => {
                let message = await deleteElement(
                    'delete-filters',
                    'id',
                    data[item.dataIndex].id
                );
                enqueueSnackbar(message, {
                    variant: message !== 'error' ? 'success' : 'error',
                });
                console.log(message);
            });
        },
    };

    return (
        <Page title="Liven - Product Families">
            <Title
                title={"Filters of " + productFamily?.name}
                subtitle="Gestiona els filtres principals que es mostren al buscador"
                button={
                    <Tooltip title="Crear filtre">
                        <IconButton onClick={() => navigate('nou')}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                }
            />
            {!loading && data != "Filter not found" ? (
                <Fade in={!loading}>
                    <div>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={optionsTable}
                        />
                    </div>
                </Fade>
            ) : (
                <CircularProgress />
            )}
        </Page>
    );
};

export default Filters;
