import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { MobileJobServices } from 'components';

const JobHelperMobile3Reserved = props => (
  <>
    <Box p={2}>
      <Button fullWidth>Check-In to start Helping</Button>
    </Box>
    <Typography>You have reserved this job</Typography>
    <MobileJobServices services={props.services} />
  </>
);

export default JobHelperMobile3Reserved;
