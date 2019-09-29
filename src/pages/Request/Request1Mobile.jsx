import React from 'react';
import { Grid } from '@material-ui/core';
import RequestClientSelected from './_RequestClientSelected';
import RequestService from './_RequestService';

const Request1Mobile = props => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <Grid container style={{ flex: 0 }}>
      {props.services.map(service => (
        <Grid item xs={6}>
          <RequestService {...service} key={service.id} />
        </Grid>
      ))}
    </Grid>
    <RequestClientSelected {...props.client} style={{ flex: 1 }} />
  </div>
);

export default Request1Mobile;
