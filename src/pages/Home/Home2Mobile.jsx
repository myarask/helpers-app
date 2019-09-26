import React from 'react';
import { Grid } from '@material-ui/core';
import HomeClientSelected from './_HomeClientSelected';
import HomeService from './_HomeService';

const Home2Mobile = props => (
  <div>
    <HomeClientSelected {...props.client} onClick={props.onBackClick} />
    <Grid container>
      {props.services.map(service => (
        <Grid item xs={6}>
          <HomeService {...service} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Home2Mobile;
