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






function AuthorsStatistics() {
    
    const classes = useStyls();

    return (
        <Paper elevation={1} sx={{ pt: 2, pb: 8, position: 'relative', height: '100%' }}>
            <Typography textAlign={'center'} sx={{ mb: 3 }}>Authors</Typography>

            <Box py={1} px={2}>
                <Box py={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box display={"flex"} alignItems={"center"}>
                        <Typography sx={{ fontSize: '14px' }}>Name</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '14px' }}>Record</Typography>
                </Box>
            </Box>

            <div className={classes.scrolly}>
                <Box>
                    <Box py={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Avatar
                                sx={{ bgcolor: deepOrange[500] }}
                                alt="Remy Sharp"
                                src="/broken-image.jpg"
                            >
                                B
                            </Avatar>
                            <Typography sx={{ fontSize: '11px', pl: 1 }}>hojjat Ramezani</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px' }}>239</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box py={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Avatar
                                sx={{ bgcolor: deepOrange[500] }}
                                alt="Remy Sharp"
                                src="/broken-image.jpg"
                            >
                                B
                            </Avatar>
                            <Typography sx={{ fontSize: '11px', pl: 1 }}>hojjat Ramezani</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px' }}>239</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box py={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Avatar
                                sx={{ bgcolor: deepOrange[500] }}
                                alt="Remy Sharp"
                                src="/broken-image.jpg"
                            >
                                B
                            </Avatar>
                            <Typography sx={{ fontSize: '11px', pl: 1 }}>hojjat Ramezani</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px' }}>239</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box py={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Avatar
                                sx={{ bgcolor: deepOrange[500] }}
                                alt="Remy Sharp"
                                src="/broken-image.jpg"
                            >
                                B
                            </Avatar>
                            <Typography sx={{ fontSize: '11px', pl: 1 }}>hojjat Ramezani</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px' }}>239</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box py={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Avatar
                                sx={{ bgcolor: deepOrange[500] }}
                                alt="Remy Sharp"
                                src="/broken-image.jpg"
                            >
                                B
                            </Avatar>
                            <Typography sx={{ fontSize: '11px', pl: 1 }}>hojjat Ramezani</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px' }}>239</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box py={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Avatar
                                sx={{ bgcolor: deepOrange[500] }}
                                alt="Remy Sharp"
                                src="/broken-image.jpg"
                            >
                                B
                            </Avatar>
                            <Typography sx={{ fontSize: '11px', pl: 1 }}>hojjat Ramezani</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px' }}>239</Typography>
                    </Box>
                </Box>
            </div>


            <Box sx={{ p: 1, position: 'absolute', width: '100%', bottom: '0px', left: '0px', borderTop: '1px solid #80808033' }} display="flex" justifyContent={"space-between"}>
                <Typography sx={{ paddingX: '4px', fontSize: '15px' }}>count:</Typography>
                <Typography sx={{ paddingX: '4px', fontSize: '15px' }}>32</Typography>
            </Box>

        </Paper>
    );
}

export default AuthorsStatistics;



const useStyls = makeStyles({
    scrolly: {
     height: '190px',
     overflowY: 'scroll',
     padding: '0 10px'
    },
  
  });