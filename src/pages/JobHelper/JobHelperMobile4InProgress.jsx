import React from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import { MobileJobServices, MobileJobProfile } from 'components';

const JobHelperMobile4InProgress = props => (
  <>
    <Box p={2}>
      <Button fullWidth onClick={props.onFinish} disabled={props.isSubmitting}>
        Check-Out to finish job
      </Button>
    </Box>

    <Divider />
    <MobileJobServices services={props.services} />
    <MobileJobProfile notes={props.notes} client={props.client} />
  </>
);

export default JobHelperMobile4InProgress;
