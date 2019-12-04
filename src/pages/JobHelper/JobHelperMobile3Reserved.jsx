import React from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import { MobileJobServices, MobileJobProfile } from 'components';

const JobHelperMobile3Reserved = props => (
  <>
    <Box p={2}>
      <Button fullWidth>Check-In to start Helping</Button>
    </Box>

    <Divider />
    <MobileJobServices services={props.services} />
    <MobileJobProfile notes={props.notes} client={props.client} />
  </>
);

export default JobHelperMobile3Reserved;
