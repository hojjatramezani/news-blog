import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar, Button, TextField } from '@mui/material';
import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import AddTaskIcon from '@mui/icons-material/AddTask';


function AddCategory() {
    const classes = useStyls();
    return (
        <Paper elevation={1} sx={{ p: 2 , height: '100%' }}>
            <Box display={'flex'} justifyContent="center" sx={{ mb: 3 }}>
                <AddTaskIcon fontSize='large' />
            </Box>
            <Typography sx={{ mb: 3 }}>Add categories</Typography>
            <TextField
                type={"text"}
                size="small"
                id="outlined-basic"
                label="new category"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
            />
           
            <Button variant="contained">Add</Button>
        </Paper>
    );
}

export default AddCategory;


const useStyls = makeStyles({
    test: {
        display: 'block',
    },

});