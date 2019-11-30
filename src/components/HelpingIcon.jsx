import React, { useContext } from 'react';
import { Typography, Fab } from '@material-ui/core';
import { AppContext } from 'contexts';
import Heart from 'assets/icons/heart-solid-teal.svg';
import HeartOutline from 'assets/icons/heart-outline-teal.svg';

const HelpingIcon = () => {
  const { onToggleHelping, isHelping } = useContext(AppContext);
  const src = isHelping ? Heart : HeartOutline;

  return (
    <span>
      <Fab size="small" onClick={onToggleHelping}>
        <img src={src} alt="tap to start helping" style={{ width: '20px', height: '20px', marginTop: '2px' }} />
      </Fab>

      <Typography align="center" style={{ color: 'white', fontSize: '0.5rem' }}>
        {isHelping ? 'Helping' : <>&nbsp;</>}
      </Typography>
    </span>
  );
};

export default HelpingIcon;
