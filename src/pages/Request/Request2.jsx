import React from 'react';
import DeviceSwitch from 'components/DeviceSwitch';
import Request2Desktop from './Request2Desktop';
import Request2Mobile from './Request2Mobile';
import Request2Tablet from './Request2Tablet';

const Request1 = props => {
  const onBackClick = () => {
    props.setPageState({
      index: 0,
      clientIndex: null,
    });
  };

  return (
    <DeviceSwitch {...props} client={props.clients[props.clientIndex]} onBackClick={onBackClick}>
      <Request2Mobile />
      <Request2Tablet />
      <Request2Desktop />
    </DeviceSwitch>
  );
};

export default Request1;
