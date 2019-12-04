import React from 'react';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import { MobileJobServices } from 'components';

const JobHelperMobile2Open = props => (
  <>
    <MobileJobServices services={props.services} />
    {props.notes && (
      <Box m={2}>
        <Paper>
          <Box p={2}>
            <Typography gutterBottom variant="h3">
              Notes to Helpers
            </Typography>
            <Typography>{props.notes}</Typography>
          </Box>
        </Paper>
      </Box>
    )}

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
