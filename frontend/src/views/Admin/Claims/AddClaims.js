import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    TextField,
    Button,
    InputLabel,
    Select,
    Typography,
} from '@mui/material';
import Page from '../../../components/Page';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Title from '../../../components/Title';
import { create, get } from '../../../api/API';
import { makeStyles } from '@mui/styles';
import { useSnackbar } from 'notistack';
import { FormControl } from '@mui/material';
import Thumb from '../../../components/Thumb';

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

const AddClaims = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
       // pass
    }, []);

    const crear = async (values) => {
        const message = await create(values, 'create-claims');
        enqueueSnackbar(message, {
            variant: 'success',
        });
        navigate(-1, { state: values });
    };

    return (
        <Page title="Add Claim">
            <Formik
                initialValues={{
                    name: ''
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('El nom és obligatòri')
                })}
                onSubmit={(values) => {
                    crear(values);
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
                        <Title
                            title={'Create claims'}
                            subtitle={
                                'Entra les dades per guardar una nova entrada'
                            }
                        />

                        <Box className={classes.wrap}>
                            <Grid container spacing={3}>
                                <Grid item md={6}>
                                    <TextField
                                        error={Boolean(
                                            touched.name &&
                                                errors.name
                                        )}
                                        fullWidth
                                        helperText={
                                            touched.name &&
                                            errors.name
                                        }
                                        label="Name"
                                        margin="normal"
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="text"
                                        value={values.name}
                                    />
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
                                {'Create'}
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Page>
    );
};

export default AddClaims;
