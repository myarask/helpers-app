import React from 'react';
import { NavBar, NavLogo, ContentSwitch, NavBarMenu } from 'components';
import JobHelperMobile0Unauthorized from '../JobHelperUnauthorized/JobHelperUnauthorized';
import JobHelperMobile1Cancelled from '../JobHelperCancelled/JobHelperCancelled';
import JobHelperMobile2Open from '../JobHelperOpen/JobHelperOpen';
import JobHelperMobile3Reserved from '../JobHelperReserved/JobHelperReserved';
import JobHelperMobile4InProgress from '../JobHelperInProgress/JobHelperInProgress';
import JobHelperMobile5Reviewing from '../JobHelperReviewing/JobHelperReviewing';
import JobHelperMobile6Complete from '../JobHelperComplete/JobHelperComplete';

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
