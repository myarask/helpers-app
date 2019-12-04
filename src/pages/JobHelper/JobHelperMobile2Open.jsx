import React from 'react';
import { Box, Button } from '@material-ui/core';
import { MobileJobServices, MobileJobProfile } from 'components';

const JobHelperMobile2Open = props => (
  <>
    <MobileJobServices services={props.services} />
    {props.notes && <MobileJobProfile notes={props.notes} />}

    <Box m={2}>
      <Button fullWidth onClick={props.onAccept} disabled={props.isSubmitting}>
        Accept
      </Button>

      <Button fullWidth variant="text" onClick={props.onBackClick}>
        Go Back
      </Button>
    </Box>
  </>
);

export default JobHelperMobile2Open;
