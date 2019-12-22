import React from 'react';
import { Box, Typography } from '@material-ui/core';
import services from 'constants/services';
import Belt from './Belt';

const MobileJobService = props => {
  const service = services.find(x => x.id === props.serviceId);
  return (
    <Belt style={{ height: 30 }}>
      <Box display="flex" alignItems="center">
        <span style={{ background: '#4B4B4B', padding: 3, borderRadius: 2 }}>
          <img src={service.src} alt={service.name} style={{ width: '20px', height: '20px', display: 'block' }} />
        </span>
        <Box display="flex" alignItems="flex-end">
          <Typography style={{ marginLeft: 5, marginRight: 5 }}>{props.i}.</Typography>
          <Typography variant="h3">{props.name}</Typography>
        </Box>
      </Box>

      <Typography>
        <b>{props.flatFee}</b>
      </Typography>
    </Belt>
  );
};

const MobileJobServices = props => (
  <>
    <Box m={2}>
      <Typography gutterBottom variant="h2">
        Services required today:
      </Typography>
    </Box>
    <Box m={2}>
      {props.services.map((service, i) => (
        <MobileJobService key={service.id} {...service} i={i + 1} />
      ))}
    </Box>
  </>
);

export default MobileJobServices;
