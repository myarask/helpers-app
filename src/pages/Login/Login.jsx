import React from 'react';
import { DeviceSwitch } from 'components';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';
import LoginTablet from './LoginTablet';

const Login = () => (
  <DeviceSwitch>
    <LoginMobile />
    <LoginTablet />
    <LoginDesktop />
  </DeviceSwitch>
);

export default Login;
