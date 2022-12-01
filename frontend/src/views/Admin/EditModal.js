import React, { useEffect, useState } from 'react';
import { Typography, Box, Tooltip, IconButton, Grid, TextField, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { Formik } from 'formik';
import { makeStyles } from '@mui/styles';
import { create, get, update } from '../../api/API';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
    },
    container: {
        paddingTop: 47,
    },
    '@global': {
        html: {
            width: '100%',
            height: '100%',
        },
    },
    formControl: {
        marginTop: 16,
        marginBottom: 15,
    },
    wrap: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        boxShadow:
            '-1px 2px 4px -1px rgb(0 0 0 / 3%), 0px 4px 5px 0px rgb(0 0 0 / 3%), 0px 1px 10px 0px rgb(0 0 0 / 4%)',
    },
}));

const EditModal = (props) => {

    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#fff',
        boxShadow: 24,
        width: '90%',
        height: 'auto%',
        overflow: 'scroll'
    };

    const editar = async (values) => {
        
        const data = {
            name: props.name,
            content: values.content
        }
        
        const message = await update(data, props.endPoint);
        enqueueSnackbar(message, {
            variant: 'success',
        });
        props.setOpen(false);
    };

    function renderField(setFieldValue, handleBlur, handleChange) {
        if (props.type == 'image') {
            return (
                <input
                    id={'content'}
                    name={'content'}
                    type="file"
                    inputProps={{ accept: 'image/*' }}
                    required={true}
                    onChange={(event) => {
                        setFieldValue(
                            'content',
                            event.currentTarget.files[0]
                        );
                    }}
                />
            )
        } else {
            return (
                <TextField
                    id={'content'}
                    fullWidth
                    label={props.label}
                    margin="normal"
                    name={'content'}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    minRows={10}
                    multiline={true}
                    // value={props.value}
                />
            )
        }
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.open}
            onClose={props.handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <Box sx={styleModal} className="EditModal-modal">
                    <Formik
                        initialValues={{}}
                        onSubmit={(values) => {
                            editar(values);
                        }}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            touched,
                            values,
                            setFieldValue,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box className={classes.wrap}>
                                    <Grid container spacing={3}>
                                        <Grid item md={12}>
                                            {renderField(setFieldValue, handleBlur, handleChange)}
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box my={2}>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        {'Editar'}
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Fade>
        </Modal>
    );

    
};

EditModal.defaultProps = {
    type: 'text',
    id: '',
    label: ''

}

export default EditModal;







