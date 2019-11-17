import { createMuiTheme } from '@material-ui/core/styles';

const grey = '#52505E';
const primary = {
  main: 'rgb(18, 179, 179)',
};

const theme = createMuiTheme({
  palette: {
    primary,
    secondary: {
      main: 'rgb(20, 126, 126)',
    },
    dark: {
      main: '#222',
    },
  },
  typography: {
    fontFamily: ['Quicksand'].join(','),
  },
  props: {
    MuiButton: {
      color: 'primary',
      variant: 'contained',
    },
    MuiInput: {
      disableUnderline: true,
    },
    MuiTextField: {
      InputLabelProps: {
        shrink: true,
      },
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 600,
        borderRadius: '500px',
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
    MuiFormLabel: {
      root: {
        color: primary.main,
        fontWeight: 'bold',
      },
    },
    MuiInputBase: {
      root: {
        background: '#F0F0F0',
      },
      input: {
        background: '#F0F0F0',
        padding: '0.5rem',
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '1.5rem',
        // fontFamily: 'Montserrat',
      },
      h2: {
        fontSize: '1.4rem',
      },
      h3: {
        fontSize: '1.3rem',
      },
      body1: {
        fontSize: '0.875rem',
        color: grey,
      },
    },
  },
});

export default theme;
