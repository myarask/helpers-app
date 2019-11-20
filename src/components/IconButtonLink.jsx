import React from 'react';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const IconButtonLink = ({ children, ...rest }) => (
  <IconButton {...rest} component={Link}>
    {children}
  </IconButton>
);

export default IconButtonLink;
