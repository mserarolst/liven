import { CircularProgress, Fade, Tooltip, IconButton, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { deleteElement, get } from '../../../api/API';
import MUIDataTable from 'mui-datatables';
import { options } from '../../../components/optionsTable';
import Title from '../../../components/Title';
import { Add, RemoveRedEye } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import Page from '../../../components/Page';
import { useSnackbar } from 'notistack';

const ProductFamilies = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const columns = [
        {
            name: 'id',
            label: 'id',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'name',
            label: 'Name',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'title',
            label: 'Title',
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
                customBodyRender: (name) => {
                    return (
                        <>
                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant='body1'>Editar Product family</Typography>
                                <Tooltip title="Editar informació">
                                    <IconButton
                                        onClick={() =>
                                            navigate(
                                                `/administracio/product-families/${name}`
                                            )
                                        }
                                    >
                                        <RemoveRedEye />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant='body1'>Afegir filtre</Typography>
                                <Tooltip title="Crear filtre">
                                    <IconButton onClick={() => navigate(`/administracio/product-families/filter/${name}/nou`)}>
                                        <Add />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography variant='body1'>Veure filtres</Typography>
                                <Tooltip title="Veure filtres">
                                    <IconButton onClick={() => navigate(`/administracio/product-families/filter/${name}`)}>
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
        const getProductFamilies = async () => {
            const { data, message } = await get('get-product-families-list');
            console.log(message);
            console.log(data);

            setData(data);
            setLoading(false);
        };
        getProductFamilies();
    }, []);

    const optionsTable = {
        ...options,

        onRowsDelete: (rowsDeleted) => {
            rowsDeleted.data.forEach(async (item) => {
                let message = await deleteElement(
                    'delete-product-families',
                    'product_families_id',
                    data[item.dataIndex].product_families_id
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
                title="Product Families"
                subtitle="Gestiona els filtres principals que es mostren al buscador"
                button={
                    <Tooltip title="Crear filtre">
                        <IconButton onClick={() => navigate('nou')}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                }
            />
            {!loading ? (
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

export default ProductFamilies;
