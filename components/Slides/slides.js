
import { Box, Container, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';



export default function Slides() {

  const classes = useStyls();

  return (
    <>
          <Container maxWidth={'xl'} >
            <Grid container>

              <Grid className={classes.slideGrid} item xs={6} >
                <div className={classes.subGrid}>
                  <a href='#' className={classes.opa}>
                    <Box p={1} pb={2}>
                      <Typography variant='body2' sx={{ color: 'white' }}>Biden Issues Long-Awaited Executive Order on Crypto</Typography>
                    </Box>
                  </a>
                  <img className={classes.imgSlide} src='images/slide1.jpg' />
                </div>
              </Grid>
              <Grid className={classes.slideGrid} item xs={3} >
                <div className={classes.subGrid}>
                  <a href='#' className={classes.opa}>
                    <Box p={1} pb={2}>
                      <Typography variant='body2' sx={{ color: 'white' }}>Virtual Beers and Digital Orgasms: Welcome to the Age ... </Typography>
                    </Box>
                  </a>
                  <img className={classes.imgSlide} src='images/slide2.jpg' />
                </div>
              </Grid>
              <Grid className={classes.slideGrid} item xs={3} >
                <div className={classes.subGrid}>
                  <a href='#' className={classes.opa}>
                    <Box p={1} pb={2}>
                      <Typography variant='body2' sx={{ color: 'white' }}>US Claims Bitcoin Mining Crown Following China Crackdown</Typography>
                    </Box>
                  </a>
                  <img className={classes.imgSlide} src='images/slide3.jpg' />
                </div>
              </Grid>

              <Grid className={classes.slideGrid} item xs={4} >
                <div className={classes.subGrid}>
                  <a href='#' className={classes.opa}>
                    <Box p={1} pb={2}>
                      <Typography variant='body2' sx={{ color: 'white' }}>Building on the News: Introducing Layer 2 by CoinDesk</Typography>
                    </Box>
                  </a>
                  <img className={classes.imgSlide} src='images/slide4.jpg' />
                </div>
              </Grid>
              <Grid className={classes.slideGrid} item xs={4} >
                <div className={classes.subGrid}>
                  <a href='#' className={classes.opa}>
                    <Box p={1} pb={2}>
                      <Typography variant='body2' sx={{ color: 'white' }}>EU Says Russia, Belarus Sanctions Extend to Crypto</Typography>
                    </Box>
                  </a>
                  <img className={classes.imgSlide} src='images/slide5.jpg' />
                </div>
              </Grid>
              <Grid className={classes.slideGrid} item xs={4} >
                <div className={classes.subGrid}>
                  <a href='#' className={classes.opa}>
                    <Box p={1} pb={2}>
                      <Typography variant='body2' sx={{ color: 'white' }}>Pantera Leads $4M Seed Round for Streamlined Cross-Chain Bridge</Typography>
                    </Box>
                  </a>
                  <img className={classes.imgSlide} src='images/slide6.jpeg' />
                </div>
              </Grid>

            </Grid>
          </Container>
    </>
  );
}


const useStyls = makeStyles({
  slideGrid: {
    // marginBottom: '-4px',
    padding: '1px',
  },
  subGrid: {
    position: 'relative',
    height: '250px',
  },
  opa: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000099',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    transition: 'all .4s ease',
    '&:hover': { backgroundColor: '#000000b3', }
  },
  imgSlide: {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  },
});