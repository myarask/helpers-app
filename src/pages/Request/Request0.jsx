import React from 'react';
import { DeviceSwitch } from 'components';
import Request0Desktop from './Request0Desktop';
import Request0Mobile from './Request0Mobile';
import Request0Tablet from './Request0Tablet';

const Request0 = props => {
  const onClientClick = clientIndex => {
    props.setPageState({ clientIndex, index: 1 });
  };

  return (
    <DeviceSwitch {...props} onClientClick={onClientClick}>
      <Request0Mobile />
      <Request0Tablet />
      <Request0Desktop />
    </DeviceSwitch>
  );
};

export default Request0;
