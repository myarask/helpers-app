import React from 'react';
import { DeviceSwitch } from 'components';
import Services0Desktop from './Services0Desktop';
import Services0Mobile from './Services0Mobile';
import Services0Tablet from './Services0Tablet';

const Services0 = props => (
  <DeviceSwitch {...props}>
    <Services0Mobile />
    <Services0Tablet />
    <Services0Desktop />
  </DeviceSwitch>
);

export default Services0;
