import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#E15656',
      main: '#cc1010',
      dark: '#5C2323',
      contrastText: '#fff',
    },
    secondary: {
      light: '#E15656',
      main: '#cc1010',
      dark: '#5C2323',
      contrastText: '#000',
    },
    background: {
      default: '#cc1010',
    },
  },
  typography: {
    fontFamily: [
      "Inter","Noto Sans SC","Noto Sans JP","Noto Sans KR","Roboto","-apple-system","BlinkMacSystemFont","Segoe UI","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial","sans-serif"
    ].join(','),
    fontWeight: 400,
    color: 'white',
  },
});

export default theme;