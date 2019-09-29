import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const RequestClientSelected = ({ style, theme, name, ...rest }) => (
  <Box
    p={1}
    square
    style={{
      background: theme.palette.secondary.main,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      ...style,
    }}
    {...rest}
  >
    <Typography style={{ color: 'white' }}>Helping {name}</Typography>
  </Box>
);

export default withTheme(RequestClientSelected);
