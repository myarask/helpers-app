import React from 'react';
import logo from 'assets/padded_logo_teal.png';
import { Box } from '@material-ui/core';
import LoginForm from './LoginForm';

const LoginMobile = props => (
  <Box p={3}>
    <img src={logo} alt="Helpers" style={{ width: '100%' }} />
    <LoginForm {...props} />
  </Box>
);

export default LoginMobile;
