import React from 'react';
import { Box } from '@material-ui/core';
import HomeButton from './_HomeButton';

const HomeMobile = props => (
  <Box style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-around' }}>
    <Box style={{ width: '100%' }}>
      {(props.isRequester || props.isClient) && <HomeButton onClick={props.onSubmitClick}>Get Help</HomeButton>}
      {(props.isRequester || props.isClient) && (
        <HomeButton onClick={props.onMonitorClick}>Check in on Help</HomeButton>
      )}
      {props.isHelper && <HomeButton onClick={props.onIncomingClick}>Incoming Requests</HomeButton>}
      {props.isHelper && <HomeButton onClick={props.onReviewClick}>Review Active Request</HomeButton>}
    </Box>
  </Box>
);

export default HomeMobile;
