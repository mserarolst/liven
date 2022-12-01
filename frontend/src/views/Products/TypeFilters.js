import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import Grid from "@mui/material/Grid";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import '../../../static/css/Products/TypeFilters.css';

const TypeFilters = (props) => {
    const [alignment, setAlignment] = React.useState(null);
    const [objectSelected, setObjectSelected] = React.useState(null);

    useEffect(() => {
        if (alignment == null) {
            props.f_setTypeFilter(null);
        }
        else {
            props.f_setTypeFilter(objectSelected);
        }
    }, [alignment]);
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    
    function onClickFilter(object) {
        setObjectSelected(object);
    }

    const renderItems = () => {
        return (
            props.items.map((obj, index) => {
                return (
                    <ToggleButton value={index} selected={props.objectSelected != null ? (props.objectSelected == obj ? true : false) : false} sx={{marginRight: '20px', marginBottom:'20px', backgroundColor: '#f2f2f3', borderLeft: '1px solid rgba(0, 0, 0, 0.12) !important' }}>
                        <div className='TypeFilters-filter' onClick={() => {onClickFilter(obj)}}>{obj.name}</div>
                    </ToggleButton>
                );
            })
        )
    }
  
    if (props.items?.length > 0) {
        return (
            <ToggleButtonGroup
                size="medium"
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                orientation={props.orientation} 
                sx={{width: props.width, display: 'flex', flexWrap: 'wrap'}}
            >
                {renderItems()}
            </ToggleButtonGroup>
        );
    }
    
  }

export default TypeFilters;
