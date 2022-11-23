import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Page from '../../components/Page';
import '../../../static/css/Products/Products.css';
import { Link } from 'react-router-dom';
import { get } from '../../api/API';
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
    const [indexSelected, setIndexSelected] = useState(0);
    const [value, setValue] = useState({ title: 'Product1', image: product, index: 0 });
    const [inputValue, setInputValue] = useState('Product1');

    useEffect(() => {
        window.scrollTo(0, 0);
        const getProductFamilies = async () => {
            const { data, message } = await get('get-product-families-list');
            console.log(message);
            console.log(data);

            setProductFamilies(data);
            setFirstTitle(data[0]?.title);
            setLoading(false);
        };
        getProductFamilies();
        const getClaims = async () => {
            const { data, message } = await get('get-claims-list');
            console.log(message);
            console.log(data);

            setClaims(data);
            setSecondTitle(data[0]?.title);
            setLoading(false);
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
        }
        if (productFamilies.length > 0) getProducts();
    }, [productFamilies]);

    useEffect(() => {
        if (products.length > 0) {
            setValue(products[indexSelected]);
            setInputValue(products[indexSelected].name);
        }
    }, [products]);

    useEffect(() => {
        if (value != null) {
            setIndexSelected(value.index);
        }
    }, [value]);

    useEffect(() => {
        const getFilters = async () => {
            const { data, message } = await get('get-filters-by-product-families?productFamily=' + productFamilySelected?.id);

            setFilters(data);
        };
        if(productFamilySelected != null) getFilters();
    }, [productFamilySelected]);

    useEffect(() => {
        const getValues = async () => {
            const { data, message } = await get('get-values-by-filters?filter=' + filterSelected?.id);

            setValues(data);
        };
        if(filterSelected != null) getValues();
    }, [filterSelected]);

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
            products?.map((product, index) => {
                return (
                    <Grid item md={6}>
                        <Result item={product} index={index}/>
                    </Grid>
                )
            })
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
                    <Typography variant='h1' color='#555448' marginBottom='30px' fontFamily='Lato-Light' marginTop={'40%'}>Our Products</Typography>
                    <Typography variant='h3' color='#555448' marginBottom='30px'>Discover our range of products we can offer you. Deep in our range of snacks and tex-mex options, and find your best solution.</Typography>
                    <SearchProduct 
                        products={products} 
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
                    />
                    <Typography variant='h2' color='#555448' marginTop='38px' marginBottom='19px' fontFamily='Helvetica-bold'>{secondTitle}</Typography>
                    <TypeFilters 
                        alignItems='center'
                        width='100%'
                        items={claims}
                        f_setTypeFilter={setClaimSelected}
                    />
                    {renderFilterByProductFamily()}
                    {renderValuesByFilter()}
                    
                </div>
                <div className="Products-results">
                    <Grid container spacing={3}>
                        {renderResults()}
                    </Grid>
                </div>
            </Box>
        </Page>
    );
};

export default Products;
