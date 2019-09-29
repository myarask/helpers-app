import React from 'react';
import Belt from 'components/Belt';
import { Button, Box } from '@material-ui/core';

const HomeMobile = props => (
  <Belt style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-around' }}>
    <Box m={1}>
      <Button variant="contained" color="primary" onClick={props.onRequestClick} fullWidth>
        Request Help
      </Button>
    </Box>
  </Belt>
);

export default HomeMobile;
