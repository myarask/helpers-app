import React from 'react';
import { HelpingIcon, NavBar, NavBarMenu, NavLogo } from 'components';
import { Typography, Box } from '@material-ui/core';
import HomeHelperJob from './_HomeHelperJob';

const HomeHelperMobile = props => (
  <>
    <NavBar padRight>
      <NavBarMenu />
      <NavLogo />
      {/* <HelpingIcon /> */}
    </NavBar>

    {props.jobs.map(job => (
      <HomeHelperJob key={job.id} {...job} />
    ))}

    {!props.jobs.length && (
      <Box pt={5}>
        <Typography align="center">There are no available jobs.</Typography>
        <Typography align="center">Please check again later!</Typography>
      </Box>
    )}
  </>
);

export default HomeHelperMobile;
