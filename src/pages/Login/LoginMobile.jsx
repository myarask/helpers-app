import React from 'react';
import logo from 'assets/logo_teal.png';
import { Box, Link, Typography } from '@material-ui/core';
import { Img, Belt } from 'components';
import LoginForm from './_LoginForm';

const LoginMobile = () => (
  <Belt isVertical>
    <Img src={logo} alt="Helpers" style={{ display: 'block', width: '100%', height: 'auto' }} timeout={2000} />

    <Box p={3}>
      <LoginForm />
    </Box>

    <Box p={3}>
      <Typography>
        <b>
          <>Don&apos;t have an account? </>
          <Link href="http://www.gethelpers.ca/">Sign up here.</Link>
        </b>
      </Typography>
    </Box>
  </Belt>
);

export default LoginMobile;
