import React from 'react';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar } from '@mui/material';
import { grey , teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DescriptionIcon from '@mui/icons-material/Description';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';




export default function LayoutProfile(props) {
    return (
        <>
            <HeaderProfile />
            <ContentProfile content={props.children} />

        </>
    );
}


function HeaderProfile() {
    const classes = useStyls();
    return (
        <Box sx={{ bgcolor: grey[800], borderTop: 5 , borderColor: teal[500] , color: 'white' }} className={classes.header}  >
        </Box>
    );
}


function ContentProfile(props) {
    const classes = useStyls();
    return (
        <Grid container className={classes.content} >
            <Grid item xs={2} sx={{ bgcolor: grey[800], color: 'white' }}>
                <SidebarProfile />
            </Grid>
            <Grid item xs py={1} px={3}>
                {props.content}
            </Grid>
        </Grid>
    );
}

function SidebarProfile(props) {
    const classes = useStyls();
    return (
        <Box py={1}>

            <ListItemButton sx={{ py: 1, paddingX: '10px', minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
                <ListItemIcon sx={{ m:0 , color: 'inherit' , minWidth: '35px' }}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                    primary= "Dashboard"
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                />
            </ListItemButton>
            <Divider sx={{borderColor: '#ffffff8f'}} />

            <ListItemButton sx={{ py: 1, paddingX: '10px', minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
                <ListItemIcon sx={{ m:0 , color: 'inherit' , minWidth: '35px' }}>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText
                    primary= "Posts"
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                />
            </ListItemButton>
            <Divider sx={{borderColor: '#ffffff8f'}} />

            <ListItemButton sx={{ py: 1, paddingX: '10px', minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
                <ListItemIcon sx={{ m:0 , color: 'inherit' , minWidth: '35px' }}>
                    <PlusOneIcon />
                </ListItemIcon>
                <ListItemText
                    primary= "Send Post"
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                />
            </ListItemButton>
            <Divider sx={{borderColor: '#ffffff8f'}} />

            <ListItemButton sx={{ py: 1, paddingX: '10px', minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
                <ListItemIcon sx={{ m:0 , color: 'inherit' , minWidth: '35px' }}>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                    primary= "Setting"
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                />
            </ListItemButton>
            <Divider sx={{borderColor: '#ffffff8f'}} />

            <ListItemButton sx={{ py: 1, paddingX: '10px', minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
                <ListItemIcon sx={{ m:0 , color: 'inherit' , minWidth: '35px' }}>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText
                    primary= "Exit"
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                />
            </ListItemButton>

        </Box>
    );
}


const useStyls = makeStyles({
    header: {
        height: '40px'
    },
    content: {
        display: 'flex',
        minHeight: 'calc(100vh - 40px)',
    }
});

