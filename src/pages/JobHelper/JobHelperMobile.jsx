import React from 'react';
import { NavBar, NavLogo, HelpingIcon, ContentSwitch, NavBarMenu } from 'components';
import JobHelperMobile0Unauthorized from './JobHelperMobile0Unauthorized';
import JobHelperMobile1Cancelled from './JobHelperMobile1Cancelled';
import JobHelperMobile2Open from './JobHelperMobile2Open';
import JobHelperMobile3Reserved from './JobHelperMobile3Reserved';

const JobHelperMobile = props => (
  <>
    <NavBar>
      <NavBarMenu />
      <NavLogo />
      <HelpingIcon />
    </NavBar>
    <ContentSwitch {...props}>
      <JobHelperMobile0Unauthorized />
      <JobHelperMobile1Cancelled />
      <JobHelperMobile2Open />
      <JobHelperMobile3Reserved />
    </ContentSwitch>
  </>
);

export default JobHelperMobile;
