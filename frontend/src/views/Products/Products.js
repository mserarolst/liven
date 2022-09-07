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

const Products = (props) => {
    const [products, setProducts] = useState(['CORN TORTILLA CHIP', 'SEEDS TORTILLA CHIP', 'BEETROOT TORTILLA CHIP', 'SPINACH TORTILLA CHIP']);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderResults = () => {
        return (
            products.map((product, index) => {
                return (
                    <Grid item md={6}>
                        <Result item={product} index={index}/>
                    </Grid>
                )
            })
        )    
    }

    return (
        <Page title="Liven - Products">
            <Box className="Products-container">
                <div className="Products-menu">
                    <Typography variant='h1' color='white' marginBottom='30px' fontFamily='Lato-Light'>Product Families</Typography>
                    <SearchProduct />
                    <TypeFilters 
                        alignItems='center'
                        justifyContent='space-between'
                        width='100%'
                        items={['PELLET', 'COOKED CORN', 'WRAP', 'POPCORN']}
                    />
                    <Typography variant='h2' color='white' marginTop='38px' marginBottom='19px' fontFamily='Helvetica-bold'>FORMULA</Typography>
                    <TypeFilters 
                        alignItems='center'
                        justifyContent='space-between'
                        width='100%'
                        items={['CORN', 'SPINACH', 'WHITE CORN', 'BEETROOT', 'CHICKPEA', 'XXX', 'SWEET POTATO', 'PEA', 'XXX']}
                    />
                    <Typography variant='h2' color='white' marginTop='19px' marginBottom='19px' fontFamily='Helvetica-bold'>SHAPE</Typography>
                    <TypeFilters 
                        alignItems='center'
                        justifyContent='space-between'
                        width='100%'
                        items={['XS', 'STANDARD', 'XL']}
                    />
                    <Typography variant='h2' color='white' marginTop='19px' marginBottom='11px' fontFamily='Helvetica-bold'>FLAVOUR</Typography>
                    <TypeFilters 
                        alignItems='center'
                        justifyContent='space-between'
                        width='100%'
                        items={['SALT', 'BARBAQUE', 'CHEESE', 'SWEET PEPPER', 'MEXICAN', 'XXX']}
                    />
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
