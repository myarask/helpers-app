import React from 'react';
import DeviceSwitch from 'components/DeviceSwitch';
import Request1Desktop from './Request1Desktop';
import Request1Mobile from './Request1Mobile';
import Request1Tablet from './Request1Tablet';

const Request1 = props => {
  const onBackClick = () => {
    props.setPageState({
      index: 0,
      clientIndex: null,
    });
  };

  return (
    <DeviceSwitch {...props} client={props.clients[props.clientIndex]} onBackClick={onBackClick}>
      <Request1Mobile />
      <Request1Tablet />
      <Request1Desktop />
    </DeviceSwitch>
  );
};

export default Request1;
