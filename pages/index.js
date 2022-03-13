import Head from 'next/head';
import Layout from '../Layout/layout';
import { Box, Container, Divider, Grid, Typography, Drawer, Avatar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slides from './../components/Slides/slides';
import Services from './../components/Services/services';
import HomeArchive from '../components/HomeArchive/HomeArchive';



export default function Home() {

  const classes = useStyls();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <Box sx={{ py: 2 }}>
          <Slides />
          <Box py={9}>
            <Services />
          </Box>

          <Box py={9}>
            <HomeArchive />
          </Box>
        </Box>

      </Layout>

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
