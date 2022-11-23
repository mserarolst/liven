import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    TextField,
    Button,
    InputLabel,
    Select,
    Typography,
    MenuItem,
} from '@mui/material';
import Page from '../../../components/Page';
import { useNavigate, useParams } from 'react-router-dom';
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

const AddProduct = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();
    const [filter, setFilter] = useState(null);

    const [productFamilies, setProductFamilies] = useState([]);
    const [productFamilySelected, setProductFamilySelected] = useState(null);

    const [claims, setClaims] = useState([]);
    const [claimSelected, setClaimSelected] = useState(null);

    const [filters, setFilters] = useState([]);
    const [filterSelected, setFilterSelected] = useState(null);

    const [valuesFilter, setValuesFilter] = useState([]);
    const [valueSelected, setValueSelected] = useState(null);

    useEffect(() => {
        const getProductFamilies = async () => {
            const { data, message } = await get('get-product-families-list');

            setProductFamilies(data);
        };
        getProductFamilies();

        const getClaims = async () => {
            const { data, message } = await get('get-claims-list');

            setClaims(data);
        };
        getClaims();
    }, []);

    useEffect(() => {
        const getFilters = async () => {
            const { data, message } = await get('get-filters-by-product-families?productFamily=' + productFamilySelected);

            setFilters(data);
        };
        if (productFamilySelected != null) getFilters();
    }, [productFamilySelected]);

    useEffect(() => {
        const getValues = async () => {
            const { data, message } = await get('get-values-by-filters?filter=' + filterSelected);

            setValuesFilter(data);
        };
        if (filterSelected != null) getValues();
    }, [filterSelected]);

    const crear = async (values) => {
        const dades = {
            name: values.name,
            description: values.description,
            image: values.image,
            product_family: productFamilySelected,
            claim: claimSelected,
            filter: filterSelected,
            value: valueSelected
        }
        const message = await create(dades, 'create-product');
        enqueueSnackbar(message, {
            variant: 'success',
        });
        navigate(-1, { state: values });
    };

    return (
        <Page title="Add Value">
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    image: '',
                    productFamily: '',
                    claim: '',
                    filter: '',
                    value: ''
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
                            title={'Create values for ' + filter?.name}
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
                                <Grid item md={6} xs={12}>
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        inputProps={{ accept: 'image/*' }}
                                        required={true}
                                        onChange={(event) => {
                                            setFieldValue(
                                                'image',
                                                event.currentTarget.files[0]
                                            );
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item md={12}>
                                    <TextField
                                        error={Boolean(
                                            touched.description &&
                                                errors.description
                                        )}
                                        fullWidth
                                        helperText={
                                            touched.description &&
                                            errors.description
                                        }
                                        label="Description"
                                        margin="normal"
                                        name="description"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="text"
                                        multiline
                                        value={values.description}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} marginTop='15px'>
                                <Grid item md={3} xs={12}>
                                    <Typography variant='h3'>{"Product Family"}</Typography>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={productFamilySelected}
                                        label="Product family"
                                        onChange={(event) => {
                                            setProductFamilySelected(event.target.value);
                                        }}
                                    >
                                        {productFamilies?.map((productFamily, index) => {
                                            return (
                                                <MenuItem key={index} value={productFamily.id}>{productFamily.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Typography variant='h3'>{"Claim"}</Typography>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={claimSelected}
                                        label="Claim"
                                        onChange={(event) => {
                                            setClaimSelected(event.target.value);
                                        }}
                                    >
                                        {claims?.map((claim, index) => {
                                            return (
                                                <MenuItem key={index} value={claim.id}>{claim.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Typography variant='h3'>{"Filter"}</Typography>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={filterSelected}
                                        label="Filter"
                                        onChange={(event) => {
                                            setFilterSelected(event.target.value);
                                        }}
                                    >
                                        {filters?.map((filter, index) => {
                                            return (
                                                <MenuItem key={index} value={filter.id}>{filter.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Typography variant='h3'>{"Value"}</Typography>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={valueSelected}
                                        label="Claim"
                                        onChange={(event) => {
                                            setValueSelected(event.target.value);
                                        }}
                                    >
                                        {valuesFilter?.map((value, index) => {
                                            return (
                                                <MenuItem key={index} value={value.id}>{value.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
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

export default AddProduct;
