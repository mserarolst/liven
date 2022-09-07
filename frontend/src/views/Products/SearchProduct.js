import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const SearchProduct = (props) => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },

        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 }

    ];

    return (
        <Autocomplete
            id="size-small-standard"
            size="small"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={top100Films[13]}
            sx={{marginBottom: '63px'}}
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
