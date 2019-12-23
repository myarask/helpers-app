import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import Map from './Map';

const MobileClientDetails = props => (
  <>
    <Box m={2} display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h2">Client Details:</Typography>
      <Button size="small" variant="text" onClick={() => props.setIsMapShown(prev => !prev)}>
        {props.isMapShown ? 'hide map' : 'show map'}
      </Button>
    </Box>
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyABXU7Jbtc7fdSdMOMgJUvRdP2YXg0HSL4"
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '200px', display: !props.isMapShown && 'none' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      lng={props.lng}
      lat={props.lat}
    />
    <Box m={2}>
      <Typography variant="h3">Name:</Typography>
      <Typography gutterBottom>{[props.client.firstName, props.client.lastName].filter(Boolean).join(' ')}</Typography>
    </Box>
    <Box m={2}>
      <Typography variant="h3">Address:</Typography>
      <Typography>{props.line1}</Typography>
      <Typography>{props.line2}</Typography>
      <Typography>{[props.city, props.state, props.postal_code].filter(Boolean).join(', ')}</Typography>
    </Box>
    <Box m={2}>
      <Typography variant="h3">Contact:</Typography>
    </Box>
  </>
);

export default MobileClientDetails;
