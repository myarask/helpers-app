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
    MuiDrawer: {
      paperAnchorLeft: {
        right: '100px',
      },
    },
    MuiFab: {
      root: {
        minHeight: '28px',
        backgroundColor: 'white',
      },
      sizeSmall: {
        width: '28px',
        height: '28px',
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
    MuiOutlinedInput: {
      input: {
        padding: '0.5rem',
      },
      multiline: {
        padding: '0.5rem',
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: grey,
        lineHeight: undefined,
      },
      h2: {
        fontSize: '1.125rem',
        color: grey,
        fontWeight: 700,
        lineHeight: undefined,
      },
      h3: {
        fontSize: '1rem',
        color: grey,
        fontWeight: 600,
        lineHeight: undefined,
      },
      body1: {
        fontSize: '0.875rem',
        color: grey,
        lineHeight: undefined,
      },
      body2: {
        color: primary.main,
        fontWeight: 700,
        fontSize: '0.75rem',
        textTransform: 'uppercase',
      },
    },
  },
});

export default theme;
