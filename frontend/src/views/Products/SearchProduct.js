import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const SearchProduct = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Autocomplete
            value={props.value}
            onChange={(event, newValue) => {
                props.setValue(newValue);
                props.setInputValue(newValue.name);
                props.setIndexSelected(newValue.index);
            }}
            inputValue={props.inputValue}
            onInputChange={(event, newInputValue, index) => {
                props.setInputValue(newInputValue);
            }}
            id="size-small-standard"
            size="small"
            options={props.products}
            getOptionLabel={(option) => option.name}
            defaultValue={props.products[props.indexSelected]?.name}
            sx={{marginBottom: '63px', width: '100%'}}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label={<div style={{fontFamily: 'Helvetica', color: '#fff'}}>Search product</div>}
                    placeholder="Enter Product"
                    sx={{fontFamily: 'Helvetica', borderBottom: '#fff'}}
                />
            )}
        />
    );
    
};

export default SearchProduct;
