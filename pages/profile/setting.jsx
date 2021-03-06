import React, { useState } from 'react';
import Head from 'next/head';
import LayoutProfile from '../../Layout/LayoutProfile';
import { Typography, Box, Button, Container, Grid, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import Pagination from '@mui/material/Pagination';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/material/Modal';
import ResetPasswordSetting from '../../components/profile/setting/ResetPasswordSetting';
import AddCategory from './../../components/profile/setting/AddCategory';
import Account from './../../components/profile/setting/Account';


export default function Setting() {

  const classes = useStyls();

  return (
    <>
      <Head>
        <title>setting page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutProfile>

        <Box display="flex" justifyContent={"space-between"}>
          <Typography variant='h6'> setting </Typography>
        </Box>
        <Box pt={3} pb={2}>

          <Container maxWidth={'lg'}>
            <Grid container>
              <Grid item xs={4} p={2}>
                <Account />
              </Grid>
              <Grid item xs={4} p={2}>
                <AddCategory />
              </Grid>
              <Grid item xs={4} p={2}>
                <ResetPasswordSetting />
              </Grid>
            </Grid>

          </Container>
        </Box>
      </LayoutProfile>

    </>
  );
}


const useStyls = makeStyles({
  textarea: {
    display: 'block',
  }
});

