import React from 'react';
import { Typography, Box } from '@material-ui/core';
import RequestClient from './_RequestClient';

const Request0Mobile = props => (
  <div>
    <Box p={2}>
      <Typography variant="h1">Who would you like to help?</Typography>
    </Box>

    {props.clients.map((client, i) => (
      <RequestClient key={client.name} {...client} onClick={() => props.onClientClick(i)} />
    ))}
  </div>
);

export default Request0Mobile;
