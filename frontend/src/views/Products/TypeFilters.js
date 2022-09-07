import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import Grid from "@mui/material/Grid";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import '../../../static/css/Products/TypeFilters.css';


const TypeFilters = (props) => {
    const [alignment, setAlignment] = useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const renderItems = () => {
        return (
            <Grid container spacing={3}>
                {props.items.map((item, index) => {
                    return (
                        <Grid item md={4}>
                            <ToggleButton value={item} key={index} sx={{width: '100%', backgroundColor: '#80896D', borderLeft: '1px solid rgba(0, 0, 0, 0.12)' }}>
                                <div className='TypeFilters-filter'>{item}</div>
                            </ToggleButton>
                        </Grid>
                    );
                })}
            </Grid>
        )
    }

    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true
    };
                            

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: props.alignItems,
                // TODO Replace with Stack
                "& > :not(style) + :not(style)": { mt: 2 }
            }}
            >
            <ToggleButtonGroup size="medium" orientation={props.orientation} sx={{width: props.width, display: 'flex', justifyContent: props.justifyContent}} {...control} aria-label="Small sizes">
                {renderItems()}
            </ToggleButtonGroup>
        </Box>
    );
    
};

export default TypeFilters;
