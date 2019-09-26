import React from 'react';
import DeviceSwitch from 'components/DeviceSwitch';
import Home1Desktop from './Home1Desktop';
import Home1Mobile from './Home1Mobile';
import Home1Tablet from './Home1Tablet';

const Home1 = props => (
  <DeviceSwitch {...props}>
    <Home1Mobile />
    <Home1Tablet />
    <Home1Desktop />
  </DeviceSwitch>
);

export default Home1;
