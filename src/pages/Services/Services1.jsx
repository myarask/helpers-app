import React from 'react';
import { DeviceSwitch } from 'components';
import Services1Desktop from './Services1Desktop';
import Services1Mobile from './Services1Mobile';
import Services1Tablet from './Services1Tablet';

const Services0 = props => (
  <DeviceSwitch {...props}>
    <Services1Mobile />
    <Services1Tablet />
    <Services1Desktop />
  </DeviceSwitch>
);

export default Services0;
