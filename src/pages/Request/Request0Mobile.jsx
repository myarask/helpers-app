import React from 'react';
import { Box } from '@material-ui/core';
import Belt from 'components/Belt';
import RequestClient from './_RequestClient';

const Request0Mobile = props => (
  <Belt style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-around' }}>
    <Box style={{ width: '100%' }}>
      {props.clients.map((client, i) => (
        <RequestClient key={client.name} {...client} onClick={() => props.onClientClick(i)} />
      ))}
    </Box>
  </Belt>
);

export default Request0Mobile;
