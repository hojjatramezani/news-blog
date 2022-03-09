
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import ServicesMySql from '../Ui/Icons/ServicesMySql';
import ServicesNextjs from '../Ui/Icons/ServicesNextjs';
import ServicesPhp from './../Ui/Icons/ServicesPhp';
import { teal } from '@mui/material/colors';

export default function Services() {

  return (
    <>

      <Container maxWidth={'xl'} >
        <Box pt={2} pb={5}>
          <Divider orientation="horizontal" flexItem>
            <Box display={"inline-block"} px={2}>
              <Typography component={"span"}  sx={{ mt: 3, fontSize: 24 , fontWeight: 'bold' , color:  teal[500] }} >Services</Typography>
            </Box>
          </Divider>
        </Box>
        <Grid container>
          <Grid item xs={4} display="flex" flexDirection={"column"} justifyContent={"center"} alignContent="center" alignItems={"center"} >
            <ServicesPhp />
            <Typography sx={{ mt: 3, fontSize: 20 }} >PHP</Typography>
          </Grid>
          <Grid item xs={4} display="flex" flexDirection={"column"} justifyContent={"center"} alignContent="center" alignItems={"center"} >
            <ServicesNextjs />
            <Typography sx={{ mt: 3, fontSize: 20 }} >Nextjs</Typography>
          </Grid>
          <Grid item xs={4} display="flex" flexDirection={"column"} justifyContent={"center"} alignContent="center" alignItems={"center"}  >
            <ServicesMySql />
            <Typography sx={{ mt: 3, fontSize: 20 }} >MySql</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
