import React, { useEffect, useState } from 'react';

const getDeviceIndex = () => {
  if (document.documentElement.clientWidth <= 425) return 0;
  if (document.documentElement.clientWidth <= 768) return 1; // Change to 2 to disable the tablet view
  return 2;
};

const DeviceSwitch = ({ children, ...rest }) => {
  const arr = React.Children.toArray(children);
  const [deviceIndex, setDeviceIndex] = useState(getDeviceIndex());

  useEffect(() => {
    const onResize = () => {
      const deviceIndexNow = getDeviceIndex();
      if (deviceIndexNow === deviceIndex) return;

      setDeviceIndex(deviceIndexNow);

      // if (deviceIndexNow === 0) {
      //   document.body.style.height = `${window.innerHeight}px`;
      //   document.getElementById('root').style.height = `${window.innerHeight}px`;
      // }
    };

    window.addEventListener('resize', onResize, true);

    return () => {
      window.removeEventListener('resize', onResize, true);
    };
  }, [deviceIndex]);

  if (deviceIndex >= 0 && deviceIndex <= arr.length) {
    return React.cloneElement(arr[deviceIndex], rest);
  }

  return null;
};

export default DeviceSwitch;
