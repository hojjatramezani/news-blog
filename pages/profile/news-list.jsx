import Head from 'next/head';
import LayoutProfile from '../../Layout/LayoutProfile';
import { Typography, Box, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import Pagination from '@mui/material/Pagination';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function NewsList() {
  return (
    <>
      <Head>
        <title>news-list page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutProfile>

        <Box display="flex" justifyContent={"space-between"}>
          <Typography variant='h6'> News List </Typography>
          <FormControlLabel control={<Switch />} label="Just for me" />
        </Box>
        <Box pt={3} pb={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: grey[300] }}>
                  <TableCell >Title</TableCell>
                  <TableCell align="center" >Author</TableCell>
                  <TableCell align="center" >Release date</TableCell>
                  <TableCell align="center" >category</TableCell>
                  <TableCell align="center" >Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    A growing number of rewards programs are
                  </TableCell>
                  <TableCell align="center">Hojjat Ramezani</TableCell>
                  <TableCell align="center">1400-09-04 | 23:45</TableCell>
                  <TableCell align="center">Sport</TableCell>
                  <TableCell align="center">
                    <Button>Edit</Button>
                    <Button color="error" >Delete</Button>
                  </TableCell>
                </TableRow>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    A growing number of rewards programs are
                  </TableCell>
                  <TableCell align="center">Hojjat Ramezani</TableCell>
                  <TableCell align="center">1400-09-04 | 23:45</TableCell>
                  <TableCell align="center">Sport</TableCell>
                  <TableCell align="center">
                    <Button>Edit</Button>
                    <Button color="error" >Delete</Button>
                  </TableCell>
                </TableRow>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    A growing number of rewards programs are
                  </TableCell>
                  <TableCell align="center">Hojjat Ramezani</TableCell>
                  <TableCell align="center">1400-09-04 | 23:45</TableCell>
                  <TableCell align="center">Sport</TableCell>
                  <TableCell align="center">
                    <Button>Edit</Button>
                    <Button color="error" >Delete</Button>
                  </TableCell>
                </TableRow>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    A growing number of rewards programs are
                  </TableCell>
                  <TableCell align="center">Hojjat Ramezani</TableCell>
                  <TableCell align="center">1400-09-04 | 23:45</TableCell>
                  <TableCell align="center">Sport</TableCell>
                  <TableCell align="center">
                    <Button>Edit</Button>
                    <Button color="error" >Delete</Button>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </LayoutProfile>

    </>
  );
}

