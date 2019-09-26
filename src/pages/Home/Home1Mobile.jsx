import React from 'react';
import { Typography, Box } from '@material-ui/core';
import HomeClient from './_HomeClient';

const Home1Mobile = props => (
  <div>
    <Box p={2}>
      <Typography variant="h1">Who would you like to help?</Typography>
    </Box>

    {props.clients.map((client, i) => (
      <HomeClient {...client} onClick={() => props.onClientClick(i)} />
    ))}
  </div>
);

export default Home1Mobile;
