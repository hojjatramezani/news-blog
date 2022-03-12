import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar , Button } from '@mui/material';
import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

function Footer() {
    const classes = useStyls();
    return (
        <Box className={classes.footerBack} sx={{ py: 15 }} display={'flex'} flexDirection={"column"} alignItems={"center"}>
                <Box p={2} sx={{borderRadius: 3 , backgroundColor: 'white' }}>
                    <img width={80} src='images/logo.png' />
                </Box>
                <Typography variant="h5" color="text.primary" sx={{mt:2 , fontWeight: 'bold' , color: 'white'}}> News Blog </Typography>
        </Box>
    );
}

export default Footer;


const useStyls = makeStyles({
    footerBack: {
      backgroundImage: 'url(/images/footer.png)',
    },
  
  });