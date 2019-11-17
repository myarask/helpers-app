import React from 'react';

const Belt = ({ children, style, isVertical = false, ...rest }) => (
  <div
    style={{
      display: isVertical ? 'inline-flex' : 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: isVertical && '100%',
      flexDirection: isVertical && 'column',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Belt;
