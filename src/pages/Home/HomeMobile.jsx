import React from 'react';
import { Typography, Box } from '@material-ui/core';
import HomeClient from './HomeClient';

const HomeMobile = props => (
  <div>
    <Box p={2}>
      <Typography variant="h1">Who would you like to help?</Typography>
    </Box>

    <HomeClient
      src="https://picsum.photos/200"
      title="Grandma"
      subheader="Last Visit: September 14, 2016"
    />
    <HomeClient
      src="https://picsum.photos/200"
      title="Grandpa"
      subheader="Last Visit: October 10, 2016"
    />
  </div>
);

export default HomeMobile;
