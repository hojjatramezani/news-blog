import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
const colorPrimary = teal[500]


export const theme = createTheme({
    palette: {
      primary: {
          main: colorPrimary
      },
    },
  });