import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = props => {
  const position = { lat: props.lat, lng: props.lng };

  return (
    <GoogleMap defaultZoom={14} defaultCenter={position}>
      <Marker position={position} />
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
