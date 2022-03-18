import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar, Button, TextField } from '@mui/material';
import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import FaceIcon from '@mui/icons-material/Face';
import { deepOrange } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

function ChartCategorise() {
    return (
        <Paper elevation={1} sx={{ p: 2 , height: '100%'}}>
            <Typography textAlign={'center'} sx={{mb: 3}}>Categorise</Typography>
            <Pie 
                data={data}
             />
        </Paper>
    );
}

export default ChartCategorise;

