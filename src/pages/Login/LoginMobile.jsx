import React from 'react';
import logo from 'assets/padded_logo_teal.png';
import { Box } from '@material-ui/core';
import Img from 'components/Img';
import LoginForm from './LoginForm';

const LoginMobile = props => (
  <Box
    p={3}
    style={{
      height: 'calc(100% - 48px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'auto',
    }}
  >
    <div style={{ flex: 0 }}>
      <Img src={logo} alt="Helpers" style={{ display: 'block', width: '100%', height: 'auto' }} timeout={2000} />
    </div>

    <Box>
      <LoginForm {...props} />
    </Box>
  </Box>
);

export default LoginMobile;
