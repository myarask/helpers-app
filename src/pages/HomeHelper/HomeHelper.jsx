import React from 'react';
import { DeviceSwitch } from 'components';
import HomeHelperDesktop from './HomeHelperDesktop';
import HomeHelperMobile from './HomeHelperMobile';
import HomeHelperTablet from './HomeHelperTablet';

const HomeHelper = () => {
  return (
    <DeviceSwitch>
      <HomeHelperMobile />
      <HomeHelperTablet />
      <HomeHelperDesktop />
    </DeviceSwitch>
  );
};

export default HomeHelper;
