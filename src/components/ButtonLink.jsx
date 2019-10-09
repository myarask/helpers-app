import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ButtonLink = ({ children, ...rest }) => (
  <Button {...rest} component={Link}>
    {children}
  </Button>
);

export default ButtonLink;
