import React from 'react';
import { Box, Typography } from '@material-ui/core';

const MobileClientDetails = props => (
  <>
    <Box m={2}>
      <Typography variant="h2">Client Details:</Typography>
    </Box>
    <Box m={2}>
      <Typography variant="h3">Name:</Typography>
      <Typography gutterBottom>{[props.client.firstName, props.client.lastName].filter(Boolean).join(' ')}</Typography>
    </Box>
    <Box m={2}>
      <Typography variant="h3">Address:</Typography>
      <Typography>{props.line1}</Typography>
      <Typography>{props.line2}</Typography>
      <Typography>{[props.city, props.state, props.postal_code].filter(Boolean).join(', ')}</Typography>
    </Box>
    <Box m={2}>
      <Typography variant="h3">Contact:</Typography>
    </Box>
  </>
);

export default MobileClientDetails;
