
import { Box, Container, Divider, Grid, Paper, Typography , Button } from '@mui/material';
import { teal } from '@mui/material/colors';
import HomePostItem from '../HomePostItem/HomePostItem';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export default function HomeArchive() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>

      <Container maxWidth={'xl'} >
        <Box pt={2} pb={5}>
          <Divider orientation="horizontal" flexItem>
            <Box display={"inline-block"} px={2}>
              <Typography component={"span"} sx={{ mt: 3, fontSize: 24, fontWeight: 'bold', color: teal[500] }} >Posts</Typography>
            </Box>
          </Divider>
        </Box>
        <Grid container>
          <Grid item xs={2} sx={{ position: 'relative', paddingTop: '5px' }} >
            <Box sx={{ position: 'sticky', width: '100%', top: '8px' }}>

              <Typography variant="h6" color="text.primary" sx={{mb:1}}> category </Typography>
              <Paper sx={{ width: 320, maxWidth: '95%' }}>
                <MenuList>
                  <MenuItem>
                    <ListItemIcon>
                      <SportsBaseballIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Sport</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <AttachMoneyIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Economical</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <SportsEsportsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Game</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <LocationCityIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Tourism</ListItemText>
                  </MenuItem>
                  
                </MenuList>
              </Paper>

              

            </Box>
          </Grid>
          <Grid item xs={10} sx={{ paddingTop: '5px' }} >
            <Box display={"flex"} justifyContent="flex-start" flexWrap={"wrap"}>
              {
                arr.map((item) => {
                  return (
                    <div key={item}>
                      <HomePostItem />
                    </div>
                  );
                })
              }
            </Box>
          </Grid>

        </Grid>

        <Box py={2} display="flex" justifyContent={"center"}>
            <Button variant="outlined">view All Posts</Button>
        </Box>
      </Container>
    </>
  );
}
