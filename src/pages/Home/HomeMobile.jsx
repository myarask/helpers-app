import React from 'react';
import { Box } from '@material-ui/core';
import links from 'constants/links';
import ButtonLink from 'components/ButtonLink';

const m = 2;

const HomeMobile = props => (
  <Box style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-around' }}>
    <Box style={{ width: '100%' }}>
      <Box m={m} hidden={!(props.isRequester || props.isClient)}>
        <ButtonLink to={links.newRequest} fullWidth>
          Get Help
        </ButtonLink>
      </Box>
      <Box m={m} hidden={!(props.isRequester || props.isClient)}>
        <ButtonLink to={links.myRequests} fullWidth>
          Check in on Help
        </ButtonLink>
      </Box>
      <Box m={m} hidden={!props.isHelper}>
        <ButtonLink to={links.incomingRequests} fullWidth>
          Incoming Requests
        </ButtonLink>
      </Box>
      <Box m={m} hidden={!props.isHelper}>
        <ButtonLink to={links.reviewRequests} fullWidth>
          Review Active Request
        </ButtonLink>
      </Box>
    </Box>
  </Box>
);

export default HomeMobile;
