import React from 'react';

const Page = ({ children, style, ...rest }) => (
  <div
    style={{
      position: 'fixed',
      display: 'relative',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      overflow: 'auto',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Page;
