import React from 'react';
import { Button, Divider, TextField } from '@material-ui/core';

const JobHelperMobile5Reviewing = props => (
  <>
    <Divider />
    <TextField />
    <Button fullWidth onClick={props.onReview} disabled={props.isSubmitting}>
      Submit Review
    </Button>
  </>
);

export default JobHelperMobile5Reviewing;
