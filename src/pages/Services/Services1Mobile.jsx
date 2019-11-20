import React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { NavBar, IconButtonLink, ButtonLink } from 'components';
import { ChevronLeft } from '@material-ui/icons';
import links from 'constants/links';
import ServicesOption from './_ServicesOption';

const Services1Mobile = props => {
  return (
    <>
      <NavBar {...props}>
        <IconButtonLink to={links.home}>
          <ChevronLeft style={{ color: 'white' }} />
        </IconButtonLink>
        <Typography variant="h1" style={{ color: 'white' }}>
          Review Order Details
        </Typography>
        <IconButton style={{ visibility: 'hidden' }}>
          <ChevronLeft style={{ color: 'white' }} />
        </IconButton>
      </NavBar>
      <Box m={2}>
        <Typography gutterBottom variant="h2">
          Services required today:
        </Typography>
      </Box>
    </>
  );
};

export default Services1Mobile;
