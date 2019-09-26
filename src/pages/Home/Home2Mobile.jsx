import React from 'react';
// import { Card, CardContent, Typography, TextField } from '@material-ui/core';
import HomeClientSelected from './_HomeClientSelected';

const Home2Mobile = props => (
  <div>
    <HomeClientSelected {...props.client} onClick={props.onBackClick} />
  </div>
);

export default Home2Mobile;
