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

const Values = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [filter, setFilter] = useState(null);
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
                                <Typography variant='body1'>Editar Value</Typography>
                                <Tooltip title="Veure informació">
                                    <IconButton
                                        onClick={() =>
                                            navigate(
                                                `/administracio/filters/value/${id}`
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
        const getValues = async () => {
            const { data, message } = await get('get-values-by-filters?filter=' + id);
            console.log(message);
            console.log(data);

            setData(data);
        };
        getValues();
        const getFilter = async () => {
            const { data, message } = await get('get-filters?id=' + id);
            console.log(message);
            console.log(data);

            setFilter(data);

            setLoading(false);
        };
        getFilter();
    }, []);

    const optionsTable = {
        ...options,

        onRowsDelete: (rowsDeleted) => {
            rowsDeleted.data.forEach(async (item) => {
                let message = await deleteElement(
                    'delete-values',
                    'values_id',
                    data[item.dataIndex].values_id
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
                title={"Values of " + filter?.name}
                subtitle="Gestiona els filtres principals que es mostren al buscador"
                button={
                    <Tooltip title="Crear filtre">
                        <IconButton onClick={() => navigate('nou')}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                }
            />
            {!loading && data != "Value not found" ? (
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

export default Values;
