import React from 'react';
import services from 'constants/services';
import { Paper, Button, Box, Typography } from '@material-ui/core';
import { NavBar } from 'components';
import ServicesOption from './_ServicesOption';

const ServicesMobile = props => {
  return (
    <>
      <NavBar {...props} />
      {services.map(service => (
        <Box m={2}>
          <ServicesOption {...service} />
        </Box>
      ))}
    </>
  );
};

export default ServicesMobile;
