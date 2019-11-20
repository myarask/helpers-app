import React from 'react';
import { Paper, Box, IconButton, Typography } from '@material-ui/core';
import links from 'constants/links';
import { ButtonLink, NavBar, NavLogo } from 'components';
import { AccountCircle, Menu } from '@material-ui/icons';

const HomeMobile = props => {
  return (
    <>
      <NavBar {...props}>
        <IconButton>
          <Menu style={{ color: 'white' }} />
        </IconButton>
        <NavLogo />
        <IconButton style={{ visibility: 'hidden' }}>
          <AccountCircle style={{ color: 'white' }} />
        </IconButton>
      </NavBar>

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
