import React from 'react';
import DeviceSwitch from 'components/DeviceSwitch';
import Home2Desktop from './Home2Desktop';
import Home2Mobile from './Home2Mobile';
import Home2Tablet from './Home2Tablet';

const Home1 = props => (
  <DeviceSwitch {...props}>
    <Home2Mobile />
    <Home2Tablet />
    <Home2Desktop />
  </DeviceSwitch>
);

export default Home1;
