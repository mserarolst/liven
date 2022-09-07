import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Title = (props) => {
    const { title, subtitle, button } = props;
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            display="flex"
            style={{ justifyContent: 'space-between' }}
        >
            <Box mb={4}>
                <Typography variant="h1" gutterBottom>
                    {title}
                </Typography>
                <Typography gutterBottom variant="body">
                    {subtitle}
                </Typography>
            </Box>
            <Box m={2}>{button}</Box>
        </Grid>
    );
};

export default Title;
