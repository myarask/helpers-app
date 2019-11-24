import React from 'react';
import { Paper, Box, IconButton, Typography, Grid } from '@material-ui/core';
import links from 'constants/links';
import { ButtonLink, NavBar, NavLogo } from 'components';
import { AccountCircle, Menu } from '@material-ui/icons';
import HomeJob from './_HomeJob';

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

      <Grid container direction="column" style={{ height: 'calc(100% - 56px)' }}>
        <Grid item style={{ flexGrow: 1 }}>
          <Paper square>
            <Box p={2}>
              <Typography variant="h2">Current Active Services</Typography>
            </Box>
          </Paper>
          {props.jobs.map(job => (
            <HomeJob key={job.id} {...job} />
          ))}
        </Grid>

        <Grid item>
          <Paper square>
            <Box p={2}>
              <ButtonLink fullWidth to={links.services}>
                Request Help
              </ButtonLink>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeMobile;
