import { CircularProgress, Fade, Tooltip, IconButton, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

const Edit = (props) => {
    const [data, setData] = useState([]);


    useEffect(() => {
    }, []);

    function renderItem() {
        if (props.extraText != null) {
            return (
                <div style={{display: 'flex'}}>
                    <Typography variant='h4'>{props.extraText}</Typography>
                    <IconButton
                        onClick={() =>{
                            props.setOpenModal(true);
                            props.setId(props.id);
                            props.setLabel(props.label);
                            props.setEndPoint(props.endPoint);
                            if (props.type == 'image') {
                                props.setType('image');
                            } else {
                                props.setType('text');
                            }
                        }}
                    >
                        <EditIcon htmlColor={props.color}/>
                    </IconButton>
                </div>
            )
        }
        else {
            return (
                <IconButton
                    onClick={() =>{
                        props.setOpenModal(true);
                        props.setId(props.id);
                        props.setLabel(props.label);
                        props.setEndPoint(props.endPoint);
                        if (props.type == 'image') {
                            props.setType('image');
                        } else {
                            props.setType('text');
                        }
                    }}
                >
                    <EditIcon htmlColor={props.color}/>
                </IconButton>
            )
        }
    }

    return (
        renderItem()
    );
};

Edit.defaultProps = {
    type: 'text',
    extraText: null,
    color: '#fff',
    endPoint: ''
}

export default Edit;


