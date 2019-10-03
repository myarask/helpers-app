import React from 'react';
import { Button, Box } from '@material-ui/core';

const HomeButton = props => (
  <Box m={2}>
    <Button variant="contained" color="primary" onClick={props.onClick} fullWidth>
      {props.children}
    </Button>
  </Box>
);

export default HomeButton;
