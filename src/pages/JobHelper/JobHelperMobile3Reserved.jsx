import React from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import { MobileJobServices, MobileJobProfile, MobileClientDetails } from 'components';

const JobHelperMobile3Reserved = props => (
  <>
    <Box p={2} style={{ background: '#F4F5FA' }}>
      <Button fullWidth onClick={props.onStart} disabled={props.isSubmitting}>
        Check-In to start Helping
      </Button>
    </Box>

    <MobileClientDetails {...props} />
    <Divider />
    <MobileJobServices services={props.services} />
    <MobileJobProfile notes={props.notes} client={props.client} />
  </>
);

export default JobHelperMobile3Reserved;
