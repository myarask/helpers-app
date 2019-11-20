import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import links from 'constants/links';
import { ButtonLink, NavBar } from 'components';

const HomeMobile = props => {
  return (
    <>
      <NavBar {...props} />

      <Paper square>
        <Box p={2}>
          <ButtonLink fullWidth to={links.services}>
            Request Help
          </ButtonLink>
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
