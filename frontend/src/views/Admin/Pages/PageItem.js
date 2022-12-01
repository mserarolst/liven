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

const PageItem = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [animationHover, setAnimationHover] = useState('');


    useEffect(() => {
    }, []);

    const style = {
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '70px',
        background: '#ffffffba',
        height: '70px',
        borderRadius: '100%',
        boxShadow: 'rgb(0 0 0 / 26%) 0px 0px 5px 3px',
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }

    function onMouseEnter() {
        setAnimationHover(' item-enter');
    }

    function onMouseLeave() {
        setAnimationHover(' item-leave');
    }

    const renderItem = () => {
        if (props.page.name == 'Home') {
            return (
                <div className={'PageItem-container' + animationHover}>
                    <Portada />
                </div>
            )
        } else {
            return (
                <div className={'PageItem-container' + animationHover}>
                    <Products />
                </div>
            )
        }
    }

    function onClickEdit() {
        navigate(
            `/administracio/pages/${props.page.id}`
        )
    }

    return (
        <Box key={props.key} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} sx={{maxWidth: '100%', position: 'relative', maxHeight: '550px', overflow: 'hidden', marginBottom: '50px', boxShadow: 'rgb(182 177 177 / 65%) 0px 0px 5px 3px'}}>
            {renderItem()}
            <div style={style}><Typography variant='h3' textTransform={'uppercase'} onClick={onClickEdit}><EditIcon /></Typography></div>
        </Box>
    );
};

export default PageItem;
