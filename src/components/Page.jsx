import React from 'react';

const Page = ({ children, style, isFull, ...rest }) => (
  <div
    style={{
      position: 'fixed',
      display: 'relative',
      top: isFull ? 0 : '56px',
      bottom: 0,
      left: 0,
      right: 0,
      // overflow: 'auto',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Page;
