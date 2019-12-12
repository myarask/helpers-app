import React from 'react';
import { Button, Typography, Box, TextField, Avatar } from '@material-ui/core';

const JobHelperMobile5Reviewing = props => (
  <>
    <Box p={2}>
      <Typography variant="h1" align="center">
        How would you rate your visit today?
      </Typography>
    </Box>
    <Box display="flex" justifyContent="center" pb={1}>
      <Avatar style={{ height: 80, width: 80 }}>N</Avatar>
    </Box>
    <Typography variant="h2" align="center">
      {[props.client.firstName, props.client.lastName].join(' ')}
    </Typography>

    <Box p={2}>
      <TextField fullWidth rows={3} multiline label="Comments" />
    </Box>
    <Box p={2}>
      <Button fullWidth onClick={props.onReview} disabled={props.isSubmitting}>
        Submit Review
      </Button>
    </Box>
  </>
);

export default JobHelperMobile5Reviewing;
