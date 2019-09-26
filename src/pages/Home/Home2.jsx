import React from 'react';
import DeviceSwitch from 'components/DeviceSwitch';
import Home2Desktop from './Home2Desktop';
import Home2Mobile from './Home2Mobile';
import Home2Tablet from './Home2Tablet';

const Home1 = props => {
  const onBackClick = () => {
    props.setPageState({
      index: 0,
      clientIndex: null,
    });
  };

  return (
    <DeviceSwitch {...props} client={props.clients[props.clientIndex]} onBackClick={onBackClick}>
      <Home2Mobile />
      <Home2Tablet />
      <Home2Desktop />
    </DeviceSwitch>
  );
};

export default Home1;
