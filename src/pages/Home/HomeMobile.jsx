import React from 'react';
import Belt from 'components/Belt';
import { Box } from '@material-ui/core';
import HomeButton from './_HomeButton';

const HomeMobile = props => (
  <Belt style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-around' }}>
    <Box style={{ width: '100%' }}>
      <HomeButton onClick={props.onSubmitClick}>Get Help</HomeButton>
      <HomeButton onClick={props.onMonitorClick}>Check in on Help</HomeButton>
      <HomeButton onClick={props.onIncomingClick}>Incoming Requests</HomeButton>
      <HomeButton onClick={props.onReviewClick}>Review Active Request</HomeButton>
    </Box>
  </Belt>
);

export default HomeMobile;
