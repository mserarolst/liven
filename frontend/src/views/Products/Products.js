import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import '../../../static/css/Products/Products.css';
import { Link } from 'react-router-dom';
import { get, search, searchName } from '../../api/API';
import Result from './Result';
import SearchProduct from './SearchProduct';
import TypeFilters from './TypeFilters';
import Grid from "@mui/material/Grid";
import product from '../../../static/images/product.png';


const Products = (props) => {
    const [productFamilies, setProductFamilies] = useState([]);
    const [claims, setClaims] = useState([]);
    const [filters, setFilters] = useState([]);
    const [values, setValues] = useState([]);
    const [firstTitle, setFirstTitle] = useState('');
    const [secondTitle, setSecondTitle] = useState('');
    const [productFamilySelected, setProductFamilySelected] = useState(null);
    const [claimSelected, setClaimSelected] = useState(null);
    const [filterSelected, setFilterSelected] = useState(null);
    const [valueSelected, setValueSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const [productList, setProductList] = useState([]);
    const [indexSelected, setIndexSelected] = useState(0);
    const [value, setValue] = useState({ title: 'Product1', image: product, index: 0 });
    const [inputValue, setInputValue] = useState(null);

    const searchProducts = async () => {
        setLoading(true);
        const params = {
            product_family: productFamilySelected != null ? productFamilySelected?.id : null,
            claim: claimSelected != null ? claimSelected?.id : null,
            filter: filterSelected != null ? filterSelected?.id : null,
            value: valueSelected != null ? valueSelected?.id : null
        }
        const { result, message } = await search(params);
        setProducts(result);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        console.log(message);
    }

    const searchProductsByName = async (values) => {
        setLoading(true);
        const { result, message } = await searchName(values);
        setProducts(result);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        console.log(message);
    }

    useEffect(() => {
        const getProductFamilies = async () => {
            const { data, message } = await get('get-product-families-list');
            console.log(message);
            console.log(data);

            setProductFamilies(data);
            setFirstTitle(data[0]?.title);
        };
        getProductFamilies();
        const getClaims = async () => {
            const { data, message } = await get('get-claims-list');
            console.log(message);
            console.log(data);

            setClaims(data);
            setSecondTitle(data[0]?.title);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        getClaims();
    }, []);

    useEffect(() => {
        const getProducts = async () => {
            const { data, message } = await get('get-products-list');
            let array = [];
            data.map((product, index) => {
                const product_family = getProductFamily(product.product_family);
                let item = {
                    name: product.name,
                    image: product.image,
                    description: product.description,
                    productFamily: product_family,
                    index: index
                }
                array.push(item);
            })
            setProducts(array);
            setProductList(array);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        if (productFamilies.length > 0) getProducts();
    }, [productFamilies]);

    useEffect(() => {
        const getFilters = async () => {
            const { data, message } = await get('get-filters-by-product-families?productFamily=' + productFamilySelected?.id);

            setFilterSelected(null);
            setFilters(data);
        };
        getFilters();
        searchProducts();
    }, [productFamilySelected]);

    useEffect(() => {
        const getValues = async () => {
            const { data, message } = await get('get-values-by-filters?filter=' + filterSelected?.id);

            setValueSelected(null);
            setValues(data);
        };
        getValues();
        searchProducts();
    }, [filterSelected]);

    useEffect(() => {
        searchProducts();
    }, [claimSelected, valueSelected]);

    useEffect(() => {
        if(inputValue != null) {
            const values = {
                name: inputValue
            };
            searchProductsByName(values);
        }
    }, [inputValue]);

    function getProductFamily(id) {
        let result;
        productFamilies.map((productFamily) => {
            if (productFamily.id == id) {
                result = productFamily.name;
            }
        })
        return result;
    }

    const renderResults = () => {
        return (
            !loading ? (
                (products?.length > 0 ? products?.map((product, index) => {
                    return (
                        <Grid item md={6}>
                            <Result item={product} index={index}/>
                        </Grid>
                    )
                }) : <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Typography variant='body1'>No hi ha productes amb aquestes característiques.</Typography></div>)
            ) : (
                <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CircularProgress sx={{width:'80px !important', height:'80px !important'}}/>
                </div>
            )
        )    
    }

    const renderFilterByProductFamily = () => {
        if (productFamilySelected != null) {
            return (
                <div>
                    <Typography variant='h2' color='#555448' marginTop='38px' marginBottom='19px' fontFamily='Helvetica-bold'>{'Filters'}</Typography>
                    <div>
                        <TypeFilters 
                            alignItems='center'
                            width='100%'
                            items={filters}
                            f_setTypeFilter={setFilterSelected}
                            objectSelected={filterSelected}
                        />
                    </div>
                </div>
            )
        }
        
    }

    const renderValuesByFilter = () => {
        if (filterSelected != null) {
            return (
                <div>
                    <Typography variant='h2' color='#555448' marginTop='38px' marginBottom='19px' fontFamily='Helvetica-bold'>{'Values'}</Typography>
                    <div>
                        <TypeFilters 
                            alignItems='center'
                            width='100%'
                            items={values}
                            f_setTypeFilter={setValueSelected}
                            objectSelected={valueSelected}
                        />
                    </div>
                </div>
            )
        }
        
    }

    return (
        <Page title="Liven - Products">
            <Box className="Products-container">
                <div className="Products-menu">
                    <Typography variant='h1' color='#555448' marginBottom='30px' fontFamily='Lato-Light' marginTop={'20vh'}>Our Products</Typography>
                    <Typography variant='h3' color='#555448' marginBottom='30px'>Discover our range of products we can offer you. Deep in our range of snacks and tex-mex options, and find your best solution.</Typography>
                    <SearchProduct 
                        products={productList} 
                        value={value} 
                        setValue={setValue} 
                        inputValue={inputValue} 
                        setInputValue={setInputValue} 
                        indexSelected={indexSelected} 
                        setIndexSelected={setIndexSelected}
                    />
                    <Typography variant='h2' color='#555448' marginTop='38px' marginBottom='19px' fontFamily='Helvetica-bold'>{firstTitle}</Typography>
                    <TypeFilters 
                        alignItems='center'
                        width='100%'
                        items={productFamilies}
                        f_setTypeFilter={setProductFamilySelected}
                        objectSelected={productFamilySelected}
                    />
                    <Typography variant='h2' color='#555448' marginTop='38px' marginBottom='19px' fontFamily='Helvetica-bold'>{secondTitle}</Typography>
                    <TypeFilters 
                        alignItems='center'
                        width='100%'
                        items={claims}
                        f_setTypeFilter={setClaimSelected}
                        objectSelected={claimSelected}
                    />
                    {renderFilterByProductFamily()}
                    {renderValuesByFilter()}
                    
                </div>
                <div className="Products-results">
                    <Grid container spacing={3} sx={{height: '100%'}}>
                        {renderResults()}
                    </Grid>
                </div>
            </Box>
        </Page>
    );
};

export default Products;
