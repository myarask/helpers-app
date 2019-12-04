import React, { useContext } from 'react';
import { Box, Typography, Fab } from '@material-ui/core';
import { AppContext } from 'contexts';
import Heart from 'assets/icons/heart-solid-teal.svg';
import HeartOutline from 'assets/icons/heart-outline-teal.svg';

const HelpingIcon = () => {
  const { onToggleHelping, isHelping } = useContext(AppContext);
  const src = isHelping ? Heart : HeartOutline;

  return (
    <Box p={1.5}>
      <Fab size="small" onClick={onToggleHelping}>
        <img src={src} alt="tap to start helping" style={{ width: '20px', height: '20px', marginTop: '2px' }} />
      </Fab>

      <Typography align="center" style={{ color: 'white', fontSize: '0.5rem' }}>
        {isHelping ? 'Helping' : <>&nbsp;</>}
      </Typography>
    </Box>
  );
};

export default HelpingIcon;
