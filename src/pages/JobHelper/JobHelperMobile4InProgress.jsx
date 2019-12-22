import React from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import { MobileJobServices, MobileClientDetails, MobileJobProfile } from 'components';

const JobHelperMobile4InProgress = props => (
  <>
    <Box p={2} style={{ background: '#F4F5FA' }}>
      <Button fullWidth onClick={props.onFinish} disabled={props.isSubmitting}>
        Check Out
      </Button>
    </Box>

    <MobileClientDetails {...props} />
    <Divider />
    <MobileJobServices services={props.services} />
    <MobileJobProfile notes={props.notes} client={props.client} />
  </>
);

export default JobHelperMobile4InProgress;
