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

const ProductsAdmin = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
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
                                <Typography variant='body1'>Editar Product</Typography>
                                <Tooltip title="Veure informació">
                                    <IconButton
                                        onClick={() =>
                                            navigate(
                                                `/administracio/products/${id}`
                                            )
                                        }
                                    >
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
        const getProducts = async () => {
            const { data, message } = await get('get-products-list');
            console.log(message);
            console.log(data);

            setData(data);
            setLoading(false);
        };
        getProducts();
    }, []);

    const optionsTable = {
        ...options,

        onRowsDelete: (rowsDeleted) => {
            rowsDeleted.data.forEach(async (item) => {
                let message = await deleteElement(
                    'delete-product',
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
                title={"Products List"}
                subtitle="Gestiona els filtres principals que es mostren al buscador"
                button={
                    <Tooltip title="Crear product">
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

export default ProductsAdmin;
