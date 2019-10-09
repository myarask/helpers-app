import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Box, Typography, NativeSelect } from '@material-ui/core';
import { Belt } from 'components';

const RequestClientSelected = ({ style, theme, name, clients, clientIndex, ...rest }) => (
  <Box
    p={1}
    square
    style={{
      background: theme.palette.secondary.main,
      ...style,
    }}
    {...rest}
  >
    <NativeSelect name="age" fullWidth>
      {clients.map(client => (
        <option value={clientIndex}>Help {client.name}</option>
      ))}
    </NativeSelect>
  </Box>
);

export default withTheme(RequestClientSelected);
