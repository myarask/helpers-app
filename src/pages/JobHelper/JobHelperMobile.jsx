import React from 'react';
import { NavBar, NavLogo, ContentSwitch, NavBarMenu } from 'components';
import JobHelperMobile0Unauthorized from './JobHelperMobile0Unauthorized';
import JobHelperMobile1Cancelled from './JobHelperMobile1Cancelled';
import JobHelperMobile2Open from './JobHelperMobile2Open';
import JobHelperMobile3Reserved from './JobHelperMobile3Reserved';
import JobHelperMobile4InProgress from './JobHelperMobile4InProgress';
import JobHelperMobile5Reviewing from './JobHelperMobile5Reviewing';
import JobHelperMobile6Complete from './JobHelperMobile6Complete';

const JobHelperMobile = props => (
  <>
    <NavBar padRight>
      <NavBarMenu />
      <NavLogo />
    </NavBar>
    <ContentSwitch {...props}>
      <JobHelperMobile0Unauthorized />
      <JobHelperMobile1Cancelled />
      <JobHelperMobile2Open />
      <JobHelperMobile3Reserved />
      <JobHelperMobile4InProgress />
      <JobHelperMobile5Reviewing />
      <JobHelperMobile6Complete />
    </ContentSwitch>
  </>
);

export default JobHelperMobile;
