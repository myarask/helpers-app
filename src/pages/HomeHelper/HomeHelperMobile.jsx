import React from 'react';
import { HelpingIcon, NavBar, NavBarMenu, NavLogo } from 'components';
import HomeHelperJob from './_HomeHelperJob';

const HomeHelperTablet = props => (
  <>
    <NavBar>
      <NavBarMenu />
      <NavLogo />
      <HelpingIcon />
    </NavBar>

    {props.jobs.map(job => (
      <HomeHelperJob {...job} />
    ))}
  </>
);

export default HomeHelperTablet;
