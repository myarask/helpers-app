import React from 'react';
import { Paper, Box, Typography, Grid } from '@material-ui/core';
import links from 'constants/links';
import { ButtonLink, NavBar, NavBarMenu, NavLogo } from 'components';
import HomeRequesterJob from './_HomeRequesterJob';

const HomeRequesterMobile = props => (
  <>
    <NavBar padRight>
      <NavBarMenu />
      <NavLogo />
    </NavBar>

    <Grid container direction="column" style={{ height: 'calc(100% - 56px)' }}>
      <Grid item style={{ flexGrow: 1, overflowY: 'auto', height: 'calc(100% - 72px)' }}>
        {props.jobs.map(job => (
          <HomeRequesterJob key={job.id} {...job} />
        ))}

        {!props.jobs.length && (
          <Box pt={5}>
            <Typography align="center">You have no scheduled jobs.</Typography>
            <Typography align="center">Press &quot;Request Help&quot; to start one!</Typography>
          </Box>
        )}
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

export default HomeRequesterMobile;
