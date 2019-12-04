import React from 'react';
import { Box, Typography, Paper } from '@material-ui/core';

const MobileJobProfile = props => (
  <Box m={2}>
    <Paper>
      <Box p={2}>
        {props.client && (
          <>
            <Typography gutterBottom variant="h3">
              Patient
            </Typography>
            <Typography gutterBottom>{[props.client.firstName, props.client.lastName].join(' ')}</Typography>
          </>
        )}
        {props.notes && (
          <>
            <Typography gutterBottom variant="h3">
              Notes to Helpers
            </Typography>
            <Typography>{props.notes}</Typography>
          </>
        )}
      </Box>
    </Paper>
  </Box>
);

export default MobileJobProfile;
