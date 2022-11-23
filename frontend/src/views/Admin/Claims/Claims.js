import { CircularProgress, Fade, Tooltip, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { deleteElement, get } from '../../../api/API';
import MUIDataTable from 'mui-datatables';
import { options } from '../../../components/optionsTable';
import Title from '../../../components/Title';
import { Add, RemoveRedEye } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import Page from '../../../components/Page';
import { useSnackbar } from 'notistack';

const Claims = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

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
            name: 'title',
            label: 'Name',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'claims_id',
            label: 'Actions',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (claims_id) => {
                    return (
                        <>
                            <Tooltip title="Veure informació">
                                <IconButton
                                    onClick={() =>
                                        navigate(
                                            `/administracio/claims/${claims_id}`
                                        )
                                    }
                                >
                                    <RemoveRedEye />
                                </IconButton>
                            </Tooltip>
                        </>
                    );
                },
            },
        },
    ];

    useEffect(() => {
        const getClaims = async () => {
            const { data, message } = await get('get-claims-list');
            console.log(message);
            console.log(data);

            setData(data);
            setLoading(false);
        };
        getClaims();
    }, []);

    const optionsTable = {
        ...options,

        onRowsDelete: (rowsDeleted) => {
            rowsDeleted.data.forEach(async (item) => {
                let message = await deleteElement(
                    'delete-claims',
                    'claims_id',
                    data[item.dataIndex].claims_id
                );
                enqueueSnackbar(message, {
                    variant: message !== 'error' ? 'success' : 'error',
                });
                console.log(message);
            });
        },
    };

    return (
        <Page title="Liven - Claims">
            <Title
                title="Claims"
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

export default Claims;
