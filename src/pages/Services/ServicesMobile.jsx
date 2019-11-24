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

const ServicesMobile = props => {
  return (
    <>
      <NavBar {...props}>
        <IconButtonLink to={links.home}>
          <ChevronLeft style={{ color: 'white' }} />
        </IconButtonLink>
        <Typography variant="h1" style={{ color: 'white' }}>
          Select Services
        </Typography>
        <IconButton style={{ visibility: 'hidden' }}>
          <ChevronLeft style={{ color: 'white' }} />
        </IconButton>
      </NavBar>
      <Box m={2}>
        <Typography gutterBottom variant="h2">
          Select required services:
        </Typography>
      </Box>
      {props.services.map(service => (
        <Box m={2} key={service.id}>
          <ServicesOption
            {...service}
            checked={props.serviceIds.includes(service.id)}
            onClick={() => props.toggleServiceId(service.id)}
          />
        </Box>
      ))}
      <Divider />
      <Box m={2}>
        <Typography gutterBottom variant="h3">
          Who&apos;s the service for
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <Select
            native
            value={props.clientId}
            onChange={e => props.setPageState({ clientId: Number(e.target.value) })}
            input={<OutlinedInput />}
          >
            <option disabled hidden value="" />
            {props.clients.map(client => (
              <option key={client.clientId} value={client.clientId}>
                {[client.firstName, client.lastName].join(' ')}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Divider />
      <Box m={2}>
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
      <Box m={2}>
        <Box mb={1}>
          <Button
            fullWidth
            disabled={!props.serviceIds.length || !props.clientId}
            onClick={() => props.setPageState({ index: 1 })}
          >
            Proceed
          </Button>
        </Box>

        <ButtonLink variant="text" fullWidth to={links.home}>
          Go Back
        </ButtonLink>
      </Box>
    </>
  );
};

export default ServicesMobile;
