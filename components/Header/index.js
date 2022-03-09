import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar } from '@mui/material';
import { teal } from '@mui/material/colors';


function Header() {
    return (
        <Container maxWidth={false} sx={{ py: 1 , bgcolor: teal[500] , color: 'white'  }}>
            <Grid container alignItems="center">
                <Grid item xs="auto">logo</Grid>
                <Grid item xs>menu</Grid>
                <Grid item xs="auto">login</Grid>
            </Grid>
        </Container>
    );
}

export default Header;