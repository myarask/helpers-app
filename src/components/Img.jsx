import React, { useState } from 'react';
import { Fade } from '@material-ui/core';

const Img = ({ timeout = 1000, style, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Fade in={isLoaded} timeout={timeout}>
      <img
        alt=""
        style={{ ...style, height: isLoaded ? style.height : 0 }}
        {...rest}
        onLoad={() => setIsLoaded(true)}
      />
    </Fade>
  );
};

export default Img;
