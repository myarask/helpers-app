import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const RequestClientSelected = props => (
  <Box p={1} square style={{ background: props.theme.palette.dark.main }}>
    <Typography style={{ color: 'white' }}>Helping {props.name}</Typography>
  </Box>
);

export default withTheme(RequestClientSelected);
