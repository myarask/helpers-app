import React from 'react';
import services from 'constants/services';
import { Box, IconButton } from '@material-ui/core';
import { NavBar, NavLogo, IconButtonLink } from 'components';
import { ChevronLeft } from '@material-ui/icons';
import links from 'constants/links';
import ServicesOption from './_ServicesOption';

const ServicesMobile = props => {
  return (
    <>
      <NavBar {...props}>
        <IconButtonLink to={links.home}>
          <ChevronLeft style={{ color: 'white' }} />
        </IconButtonLink>
        <NavLogo />
        <IconButton style={{ visibility: 'hidden' }}>
          <ChevronLeft style={{ color: 'white' }} />
        </IconButton>
      </NavBar>
      {services.map(service => (
        <Box m={2}>
          <ServicesOption {...service} />
        </Box>
      ))}
    </>
  );
};

export default ServicesMobile;
