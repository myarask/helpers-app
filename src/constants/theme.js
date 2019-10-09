import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(18, 179, 179)',
    },
    secondary: {
      main: 'rgb(20, 126, 126)',
    },
    dark: {
      main: '#222',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'Montserrat'].join(','),
  },
  props: {
    MuiButton: {
      color: 'primary',
      variant: 'contained',
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '1.5rem',
        fontFamily: 'Montserrat',
      },
      h2: {
        fontSize: '1.4rem',
        fontFamily: 'Montserrat',
      },
      h3: {
        fontSize: '1.3rem',
        fontFamily: 'Montserrat',
      },
      body1: {
        fontSize: '1rem',
        fontFamily: 'Open Sans',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: '1rem',
      },
      containedPrimary: {
        color: 'white',
      },
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: '16px',
        },
      },
    },
  },
});

export default theme;
