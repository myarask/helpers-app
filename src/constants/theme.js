import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(18, 179, 179)',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Open Sans'].join(','),
  },
  props: {
    MuiButtonBase: {
      // disableRipple: true,
    },
  },
  overrides: {},
});

export default theme;
