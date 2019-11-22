import React from 'react';
import AppContext from 'contexts/app';

const DeviceSwitch = ({ children, ...rest }) => {
  const arr = React.Children.toArray(children);

  return (
    <AppContext.Consumer>
      {({ deviceIndex }) => {
        if (deviceIndex >= 0 && deviceIndex <= arr.length) {
          return React.cloneElement(arr[deviceIndex], rest);
        }

        return null;
      }}
    </AppContext.Consumer>
  );
};

export default DeviceSwitch;
