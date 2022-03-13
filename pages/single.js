import Head from 'next/head';
import Layout from '../Layout/Layout';
import { Box, Container, Divider, Grid, Paper, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomePostItem from '../components/HomePostItem/HomePostItem';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { teal } from '@mui/material/colors';
import Pagination from '@mui/material/Pagination';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FaceIcon from '@mui/icons-material/Face';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentBankIcon from '@mui/icons-material/CommentBank';





export default function Single() {

  const classes = useStyls();

  return (
    <>
      <Head>
        <title>Single page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <Box className={classes.singleBanner} display={"flex"} justifyContent={"center"} alignItems="center">
          <Typography sx={{ px: 2, color: 'white' }} variant='h6' textAlign={"center"} fontWeight={"bold"}>A growing number of rewards programs are offering crypto instead of typical rewards points</Typography>
        </Box>

        <Box sx={{ py: 2 }}>
          <Container maxWidth={'xl'} >

            <Grid container>
              <Grid item xs="auto" sx={{ px: 1 }}>
                <Paper sx={{ p: 2, mb: 2 }}>
                  <img width="450" className={classes.imgAvatar} src='images/slide2.jpg' />
                </Paper>
                <Paper sx={{ p: 2, mb: 2 }}>
                  <Grid container>
                    <Grid item xs={6} sx={{mb:3}} display="flex" flexDirection={'column'} justifyContent="center" alignItems={"center"}>
                      <FaceIcon sx={{ fontSize: '72px' }} />
                      <Typography variant='body2'>author</Typography>
                      <Typography variant='body2'>hojjat Ramezani</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{mb:3}} display="flex" flexDirection={'column'} justifyContent="center" alignItems={"center"}>
                      <RemoveRedEyeIcon sx={{ fontSize: '72px' }} />
                      <Typography variant='body2'>view</Typography>
                      <Typography variant='body2'>4350</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" flexDirection={'column'} justifyContent="center" alignItems={"center"}>
                      <DateRangeIcon sx={{ fontSize: '72px' }} />
                      <Typography variant='body2'>published</Typography>
                      <Typography variant='body2'>1400-12-14 | 23:45</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" flexDirection={'column'} justifyContent="center" alignItems={"center"}>
                      <CommentBankIcon sx={{ fontSize: '72px' }} />
                      <Typography variant='body2'>category</Typography>
                      <Typography variant='body2'>sport</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs sx={{ px: 2 }} >
                <p>A growing number of rewards programs are offering crypto instead of typical rewards points. Is a credit card that lets you earn crypto right for you? We take a look at the pros and cons of the new options.</p>
                <p>The worlds of cryptocurrency and loyalty reward systems are merging at a rapid pace, with individuals adopting credit card rewards in the form of bitcoin (BTC), ether (ETH), stablecoins and other cryptocurrency tokens over airline miles or hotel points.</p>
                <p>In 2021 alone, major cryptocurrency exchanges BlockFi and Gemini announced they would launch credit cards offering bitcoin rewards. Major consumer brands are also getting into the cryptocurrency rewards world. Shake Shack (SHAK) is now offering rewards in bitcoin for those who use Cash App to buy food.</p>
                <p>Even airlines are experimenting with cryptocurrency as a loyalty reward. When Northern Pacific Airlines launches, the carrier will reward frequent flyers with its flyCoin token. The airline guarantees the value of the coin will never drop below 2 cents per coin. It is also exploring partnerships with major crypto exchanges to allow users to buy additional coins. FlyCoin can be used to purchase free flights and airline elite status, potentially with other partners in the future.</p>
                <p>With all the buzz around the future of cryptocurrency, will it eventually replace loyalty points as the rewards of choice for spending? More importantly, do cryptocurrency rewards offer more potential rewards than airline miles or hotel points? It depends on your financial perspective and what type of return you value the most.</p>
                <p>A growing number of rewards programs are offering crypto instead of typical rewards points. Is a credit card that lets you earn crypto right for you? We take a look at the pros and cons of the new options.</p>
                <p>The worlds of cryptocurrency and loyalty reward systems are merging at a rapid pace, with individuals adopting credit card rewards in the form of bitcoin (BTC), ether (ETH), stablecoins and other cryptocurrency tokens over airline miles or hotel points.</p>
                <p>In 2021 alone, major cryptocurrency exchanges BlockFi and Gemini announced they would launch credit cards offering bitcoin rewards. Major consumer brands are also getting into the cryptocurrency rewards world. Shake Shack (SHAK) is now offering rewards in bitcoin for those who use Cash App to buy food.</p>
                <p>Even airlines are experimenting with cryptocurrency as a loyalty reward. When Northern Pacific Airlines launches, the carrier will reward frequent flyers with its flyCoin token. The airline guarantees the value of the coin will never drop below 2 cents per coin. It is also exploring partnerships with major crypto exchanges to allow users to buy additional coins. FlyCoin can be used to purchase free flights and airline elite status, potentially with other partners in the future.</p>
                <p>With all the buzz around the future of cryptocurrency, will it eventually replace loyalty points as the rewards of choice for spending? More importantly, do cryptocurrency rewards offer more potential rewards than airline miles or hotel points? It depends on your financial perspective and what type of return you value the most.</p>
                <p></p>
              </Grid>
            </Grid>

          </Container>
        </Box>

      </Layout>

    </>
  );
}


const useStyls = makeStyles({
  singleBanner: {
    minHeight: '250px',
    backgroundImage: 'url(/images/single-banner.jpg)',
    backgroundSize: '100%'
  },

});
