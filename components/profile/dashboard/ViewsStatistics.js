import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar, Button, TextField } from '@mui/material';
import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import FaceIcon from '@mui/icons-material/Face';
import { deepOrange } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';





function ViewsStatistics() {
    return (
        <Paper elevation={1} sx={{ p: 2 , pb: 8 , position: 'relative' , height: '100%'}}>
            <Typography textAlign={'center'} sx={{mb: 3}}>Views</Typography>
            <Typography sx={{ mb: 1 }}>Most visited</Typography>

            <Grid container alignItems={'center'}>
                <Grid item xs={8}>
                        <Typography sx={{fontSize: '11px' , textOverflow: 'ellipsis' , whiteSpace: 'nowrap' , width: '90%' , overflow: 'hidden'}}>Biden Issues Long-Awaited Executive Biden Issues Long-Awaited Executive  </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography sx={{paddingX: '4px' , fontSize: '12px' }}>11905</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="right">
                    <IconButton aria-label="Example">
                        <FileOpenIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid container alignItems={'center'}>
                <Grid item xs={8}>
                        <Typography sx={{fontSize: '11px' , textOverflow: 'ellipsis' , whiteSpace: 'nowrap' , width: '90%' , overflow: 'hidden'}}>Virtual Beers and Digital Orgasms: Welcome to the</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography sx={{paddingX: '4px' , fontSize: '12px' }}>1400</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="right">
                    <IconButton aria-label="Example">
                        <FileOpenIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid container alignItems={'center'}>
                <Grid item xs={8}>
                        <Typography sx={{fontSize: '11px' , textOverflow: 'ellipsis' , whiteSpace: 'nowrap' , width: '90%' , overflow: 'hidden'}}>Biden Issues Long-Awaited Executive Biden Issues Long-Awaited Executive  </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography sx={{paddingX: '4px' , fontSize: '12px' }}>987</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="right">
                    <IconButton aria-label="Example">
                        <FileOpenIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid container alignItems={'center'}>
                <Grid item xs={8}>
                        <Typography sx={{fontSize: '11px' , textOverflow: 'ellipsis' , whiteSpace: 'nowrap' , width: '90%' , overflow: 'hidden'}}>Virtual Beers and Digital Orgasms: Welcome to the</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography sx={{paddingX: '4px' , fontSize: '12px' }}>25</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="right">
                    <IconButton aria-label="Example">
                        <FileOpenIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Box sx={{p: 1 , position: 'absolute' , width: '100%' , bottom: '0px' , left: '0px' , borderTop: '1px solid #80808033'}} display="flex" justifyContent={"space-between"}>
                <Typography sx={{paddingX: '4px' , fontSize: '15px' }}>All views:</Typography>
                <Typography sx={{paddingX: '4px' , fontSize: '15px' }}>15430</Typography>
            </Box>
        </Paper>
    );
}

export default ViewsStatistics;

