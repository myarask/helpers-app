import React from 'react';
import logo from 'assets/logo_teal.png';
import { Box, Link, Typography } from '@material-ui/core';
import { Img, Belt } from 'components';
import LoginForm from './_LoginForm';

const LoginMobile = props => {
  return (
    <Belt isVertical>
      <Box p={3}>
        <Img src={logo} alt="Helpers" style={{ display: 'block', width: '100%', height: 'auto' }} />
      </Box>

      <Box px={3}>
        <LoginForm {...props} />
        <Box mt={2}>
          <Typography align="center">
            <b>Email us at </b>
          </Typography>
          <Typography align="center">
            <b>
              <Link href="http://www.gethelpers.ca/">reset@gethelpers.ca</Link>
            </b>
          </Typography>
          <Typography align="center">
            <b> to reset your login</b>
          </Typography>
        </Box>
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
};

export default LoginMobile;
