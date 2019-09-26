import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(18, 179, 179)',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'Montserrat'].join(','),
  },
  props: {
    MuiButtonBase: {
      // disableRipple: true,
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '1.4rem',
        fontFamily: 'Montserrat',
      },
      h2: {
        fontSize: '1.3rem',
        fontFamily: 'Montserrat',
      },
      h3: {
        fontSize: '1.2rem',
        fontFamily: 'Montserrat',
      },
      h4: {
        fontSize: '1.1rem',
        fontFamily: 'Montserrat',
      },
      h5: {
        fontSize: '1.0rem',
        fontFamily: 'Montserrat',
      },
      h6: {
        fontSize: '0.9rem',
        fontFamily: 'Montserrat',
      },
      body1: {
        fontSize: '0.8rem',
        fontFamily: 'Open Sans',
      },
    },
  },
});

export default theme;
