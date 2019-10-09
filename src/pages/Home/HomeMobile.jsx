import React from 'react';
import { Box, FormControlLabel, Checkbox } from '@material-ui/core';
import links from 'constants/links';
import { ButtonLink } from 'components';

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
        <ButtonLink to={links.incomingRequests} disabled={!props.isAcceptingRequests} fullWidth>
          Incoming Requests
        </ButtonLink>
      </Box>
      <Box m={m} hidden={!props.isHelper}>
        <ButtonLink to={links.reviewRequests} disabled={!props.isAcceptingRequests} fullWidth>
          Review Active Request
        </ButtonLink>
      </Box>
      <Box m={m} mt={4} hidden={!props.isHelper}>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.isAcceptingRequests}
              onChange={props.toggleIsAcceptingRequests}
              name="isAcceptingRequests"
              color="primary"
            />
          }
          label="Accepting Requests"
        />
      </Box>
    </Box>
  </Box>
);

export default HomeMobile;
