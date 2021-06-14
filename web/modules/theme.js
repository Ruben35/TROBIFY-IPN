import { createMuiTheme } from '@material-ui/core/styles';
import { amber, green, grey, red, orange } from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      main: amber[500],
      contrastText: "white"
    },
    secondary: {
      main: orange[800],
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 600, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: grey[100],
      placeholder: grey[200],
    },
  }
};

export default theme;