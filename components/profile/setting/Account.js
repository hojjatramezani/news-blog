import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar, Button, TextField } from '@mui/material';
import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import FaceIcon from '@mui/icons-material/Face';
import { deepOrange } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import AddCircleIcon from '@mui/icons-material/AddCircle';



function Account() {
    return (
        <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
            <Box display={'flex'} justifyContent="center" sx={{ mb: 3 }}>
                <FaceIcon fontSize='large' />
            </Box>
            <Typography sx={{ mb: 3 }}>Edit Account</Typography>
            <TextField
                type={"email"}
                size="small"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                type={"text"}
                size="small"
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            <Box sx={{ mb: 2 }} display={"flex"} justifyContent={"center"}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <AddCircleIcon sx={{ bgcolor: 'white' , borderRadius: '100px' , cursor: 'pointer' }} />
                    }
                >
                    <Avatar
                        sx={{ bgcolor: deepOrange[500] , width: 56, height: 56 }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                    >
                        B
                    </Avatar>
                </Badge>
            </Box>
            <Button variant="contained">Edit</Button>
        </Paper>
    );
}

export default Account;

