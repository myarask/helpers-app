import React from 'react';
import { DeviceSwitch } from 'components';
import Request1Desktop from './Request1Desktop';
import Request1Mobile from './Request1Mobile';
import Request1Tablet from './Request1Tablet';

const Request1 = props => (
  <DeviceSwitch {...props} client={props.clients[props.clientIndex]}>
    <Request1Mobile />
    <Request1Tablet />
    <Request1Desktop />
  </DeviceSwitch>
);

export default Request1;
