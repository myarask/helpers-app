import React from 'react';
import { Typography } from '@material-ui/core';
import { Belt } from 'components';

const JobService = props => (
  <Belt>
    <Typography gutterBottom>{props.name}</Typography>
    <Typography>
      <b>${props.flatFee}</b>
    </Typography>
  </Belt>
);

export default JobService;
