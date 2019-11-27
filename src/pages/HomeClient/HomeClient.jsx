import React from 'react';
import { DeviceSwitch } from 'components';
import HomeClientDesktop from './HomeClientDesktop';
import HomeClientMobile from './HomeClientMobile';
import HomeClientTablet from './HomeClientTablet';

const HomeClient = () => {
  return (
    <DeviceSwitch>
      <HomeClientMobile />
      <HomeClientTablet />
      <HomeClientDesktop />
    </DeviceSwitch>
  );
};

export default HomeClient;
