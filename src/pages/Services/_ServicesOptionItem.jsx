import React from 'react';
import { Typography } from '@material-ui/core';
import { Belt } from 'components';

const ServicesOption = props => (
  <Belt>
    <Typography gutterBottom>{props.name}</Typography>
    <Typography>
      <b>${props.flatFee.toFixed(2)}</b>
    </Typography>
  </Belt>
);

export default ServicesOption;
