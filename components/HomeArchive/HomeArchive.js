
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

export default function HomeArchive() {

  return (
    <>

      <Container maxWidth={'xl'} >
        <Box pt={2} pb={5}>
          <Divider orientation="horizontal" flexItem>
            <Box display={"inline-block"} px={2}>
              <Typography component={"span"}  sx={{ mt: 3, fontSize: 24 , fontWeight: 'bold' , color:  teal[500] }} >Posts</Typography>
            </Box>
          </Divider>
        </Box>
        <Grid container>
          <Grid item xs={2} >
           1111
          </Grid>
          <Grid item xs={10} >
           22222
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
