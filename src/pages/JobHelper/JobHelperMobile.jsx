import React from 'react';
import { IconButton } from '@material-ui/core';
import { NavBar, NavLogo, HelpingIcon, ContentSwitch } from 'components';
import { ChevronLeft } from '@material-ui/icons';
import JobHelperMobile0Unauthorized from './JobHelperMobile0Unauthorized';
import JobHelperMobile1Cancelled from './JobHelperMobile1Cancelled';
import JobHelperMobile2Open from './JobHelperMobile2Open';
import JobHelperMobile3Reserved from './JobHelperMobile3Reserved';

const JobHelperMobile = props => (
  <>
    <NavBar>
      <IconButton onClick={props.onBackClick}>
        <ChevronLeft style={{ color: 'white' }} />
      </IconButton>
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
