import React from 'react';
import { Box } from '@material-ui/core';
import LoginForm from './_LoginForm';

const LoginTablet = props => (
  <Box p={3}>
    <LoginForm {...props} />
  </Box>
);

export default LoginTablet;
