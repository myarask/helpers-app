import React from 'react';
import { Grid } from '@material-ui/core';
import RequestClientSelected from './_RequestClientSelected';
import RequestService from './_RequestService';

const Request2Mobile = props => (
  <div>
    <RequestClientSelected {...props.client} onClick={props.onBackClick} />
    <Grid container>
      {props.services.map(service => (
        <Grid item xs={6}>
          <RequestService {...service} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Request2Mobile;
