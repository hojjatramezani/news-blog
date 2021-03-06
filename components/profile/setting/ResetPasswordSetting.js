import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar, Button, TextField } from '@mui/material';
import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import LockIcon from '@mui/icons-material/Lock';


function ResetPasswordSetting() {
    return (
        <Paper elevation={1} sx={{  p: 2, pb: 8 ,position: 'relative' , height: '100%'}}>
            <Box display={'flex'} justifyContent="center" sx={{ mb: 3 }}>
                <LockIcon fontSize='large' />
            </Box>
            <Typography sx={{ mb: 3 }}>Do you want to change your password?</Typography>
            <TextField
                type={"password"}
                size="small"
                id="outlined-basic"
                label="old password"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                type={"password"}
                size="small"
                id="outlined-basic"
                label="new password"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                type={"password"}
                size="small"
                id="outlined-basic"
                label="re-NewPassword"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />

            <Box sx={{p: 1 , position: 'absolute' , width: '100%' , bottom: '0px' , left: '0px'}}>
                 <Button variant="contained">confirm</Button>
            </Box>
        </Paper>
    );
}

export default ResetPasswordSetting;

