import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Belt } from 'components';

const MobileJobService = props => (
  <Belt>
    <Typography gutterBottom>{props.name}</Typography>
    <Typography>
      <b>{props.flatFee}</b>
    </Typography>
  </Belt>
);

const MobileJobServices = props => (
  <>
    <Box m={2}>
      <Typography gutterBottom variant="h2">
        Services required today:
      </Typography>
    </Box>
    <Box m={2}>
      {props.services.map(service => (
        <MobileJobService key={service.id} {...service} />
      ))}
    </Box>
  </>
);

export default MobileJobServices;
