import React from 'react';
import { Typography, Fab } from '@material-ui/core';
import Heart from 'assets/icons/heart-solid-teal.svg';

const HelpingIcon = () => (
  <span>
    <Fab size="small">
      <img src={Heart} alt="tap to start helping" style={{ width: '20px', height: '20px', marginTop: '2px' }} />
    </Fab>

    <Typography align="center" style={{ color: 'white', fontSize: '0.5rem' }}>
      Helping
    </Typography>
  </span>
);

export default HelpingIcon;
