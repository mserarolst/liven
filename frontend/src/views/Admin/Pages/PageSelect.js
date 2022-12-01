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
import Portada from '../../Portada/Portada';
import Products from '../../Products/Products';
import EditIcon from '@mui/icons-material/Edit';
import '../../../../static/css/Admin/PageItem.css';
import Home from '../../Home';
import HomeEdit from './Home/HomeEdit';
import EditModal from '../EditModal';

const PageSelect = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const [type, setType] = useState('text');
    const [name, setName] = useState('');
    const [label, setLabel] = useState('');
    const [endPoint, setEndPoint] = useState('');


    useEffect(() => {
        const getPages = async () => {
            const { data, message } = await get('get-page?id='+id);

            setData(data[0]);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        getPages();
    }, []);

    if (data != null) {
        if (data.name == 'Home') {
            return (
                <div>
                    <HomeEdit 
                        page_id={id}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
                        type={type}
                        setType={setType}
                        id={name}
                        setId={setName}
                        label={label}
                        setLabel={setLabel}
                        setEndPoint={setEndPoint}
                    />
                    <EditModal 
                        open={openModal}
                        setOpen={setOpenModal}
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
                        type={type}
                        name={name}
                        label={label}
                        endPoint={endPoint}
                    />
                </div>
            )
        }
        else {
            return (
                <Products />
            )
        }
    }
    else {
        return <></>
    }
};

export default PageSelect;
