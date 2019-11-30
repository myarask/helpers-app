import React from 'react';
import { HelpingIcon, NavBar, NavBarMenu, NavLogo } from 'components';
import HomeHelperJob from './_HomeHelperJob';

const HomeHelperMobile = props => (
  <>
    <NavBar>
      <NavBarMenu />
      <NavLogo />
      <HelpingIcon />
    </NavBar>

    {props.jobs.map(job => (
      <HomeHelperJob key={job.id} {...job} />
    ))}
  </>
);

export default HomeHelperMobile;
