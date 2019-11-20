import React from 'react';
import services from 'constants/services';
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
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
      <Divider />
      <Box p={2}>
        <Typography gutterBottom variant="h3">
          Who&apos;s the service for
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <Select
            native
            value={props.clientId}
            onChange={e => props.setPageState({ clientId: e.target.value })}
            input={<OutlinedInput />}
          >
            <option disabled hidden value="" />
            {props.clients.map(client => (
              <option value={client.clientId}>{[client.firstName, client.lastName].join(' ')}</option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Divider />
      <Box p={2}>
        <Typography gutterBottom variant="h3">
          Important Notes to Helper
        </Typography>
        <TextField
          multiline
          rows={3}
          fullWidth
          variant="outlined"
          value={props.notes}
          onChange={e => props.setPageState({ notes: e.target.value })}
        />
      </Box>
    </>
  );
};

export default ServicesMobile;
