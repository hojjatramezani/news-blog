import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar , Button } from '@mui/material';
import { teal } from '@mui/material/colors';


function Header() {
    return (
        <Container maxWidth={false} sx={{ py: 1 , borderBottom: 1 ,borderBottomColor: teal[500]}} >
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs="auto">
                    <img width={40} src='images/logo.png' />
                </Grid>
                <Grid item xs>
                    <Box sx={{display: 'flex' , justifyContent: 'start'}}>
                        <Typography sx={{px: 1}}>Home</Typography>
                        <Typography sx={{px: 1}}>About us</Typography>
                        <Typography sx={{px: 1}}>contact us</Typography>
                    </Box>
                </Grid>
                <Grid item xs="auto">
                    <Button variant="outlined" color='primary'>Login</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Header;