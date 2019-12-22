import React from 'react';
import { Button, Typography, Box, TextField, Avatar } from '@material-ui/core';
import { Rating } from 'components';

const JobHelperMobile5Reviewing = props => {
  const fullName = [props.client.firstName, props.client.lastName].join(' ');

  return (
    <>
      <Box p={2}>
        <Typography variant="h1" align="center">
          How would you rate your visit today?
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" pb={1}>
        <Avatar style={{ height: 80, width: 80 }}>{fullName.charAt(0)}</Avatar>
      </Box>
      <Typography variant="h2" align="center">
        {fullName}
      </Typography>

      <Rating starRating={props.starRating} setStarRating={props.setStarRating} />

      <Box p={2}>
        <TextField
          fullWidth
          rows={3}
          multiline
          label="Comments"
          value={props.comments}
          onChange={e => props.setComments(e.target.value)}
        />
      </Box>
      <Box p={2}>
        <Button fullWidth onClick={props.onReview} disabled={props.isSubmitting}>
          Submit Review
        </Button>
      </Box>
    </>
  );
};

export default JobHelperMobile5Reviewing;
