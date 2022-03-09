import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar } from '@mui/material';
import Header from '../Header/header';
import Footer from '../Footer/footer';

function Layout(props) {
    return (
        <>
            <Header />
             {props.children}
            <Footer />
        </>
    );
}

export default Layout;