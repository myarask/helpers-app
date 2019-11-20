import React from 'react';
import { Paper, Button, Box, Typography } from '@material-ui/core';
import { NavBar } from 'components';

const HomeMobile = props => {
  return (
    <>
      <NavBar {...props} />

      <Paper>
        <Box p={2}>
          <Button fullWidth>Request Help</Button>
        </Box>
      </Paper>
      <Box pt={1}>
        <Paper>
          <Box p={2}>
            <Typography variant="h2">
              <b>Current Active Services</b>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default HomeMobile;
