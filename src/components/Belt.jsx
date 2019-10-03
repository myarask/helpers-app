import React from 'react';

const Belt = ({ children, style, ...rest }) => (
  <div
    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...style }}
    {...rest}
  >
    {children}
  </div>
);

export default Belt;
