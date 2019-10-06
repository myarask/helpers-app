import React from 'react';
import logo from 'assets/padded_logo_teal.png';
import { Box } from '@material-ui/core';
import LoginForm from './_LoginForm';

const LoginDesktop = props => (
  <Box p={3}>
    <img src={logo} alt="Helpers" style={{ width: '100%' }} />
    <LoginForm {...props} />
  </Box>
);

export default LoginDesktop;
