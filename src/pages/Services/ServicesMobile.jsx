import React from 'react';
import { Box, Button, Divider, FormControl, OutlinedInput, Select, TextField, Typography } from '@material-ui/core';
import { NavBar, IconButtonLink, ButtonLink } from 'components';
import { ChevronLeft } from '@material-ui/icons';
import links from 'constants/links';
import ServicesOption from './_ServicesOption';

const ServicesMobile = props => {
  return (
    <>
      <NavBar padRight>
        <IconButtonLink to={links.home}>
          <ChevronLeft style={{ color: 'white' }} />
        </IconButtonLink>
        <Typography variant="h1" style={{ color: 'white' }}>
          Select Services
        </Typography>
      </NavBar>
      <Box m={2}>
        <Typography gutterBottom variant="h2">
          Who&apos;s the Service for:
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <Select
            native
            value={props.clientId}
            onChange={e => props.setClientId(Number(e.target.value))}
            input={<OutlinedInput />}
          >
            <option disabled hidden value="" />
            {props.clients.map(client => (
              <option
                key={client.clientId}
                value={client.clientId}
                disabled={props.busyClientIds.includes(client.clientId)}
              >
                {[client.firstName, client.lastName].join(' ')}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>

      {props.clientId && (
        <>
          <Divider />
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

          {props.serviceIds.length && (
            <>
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
                  inputProps={{ maxLength: 255 }}
                  value={props.notes}
                  onChange={e => props.setNotes(e.target.value)}
                  helperText={`${props.notes.length}/255 characters`}
                />
              </Box>
              <Box m={2}>
                <Box mb={1}>
                  <Button
                    fullWidth
                    disabled={!props.serviceIds.length || !props.clientId || props.isSubmitting}
                    onClick={props.onSubmit}
                  >
                    Proceed
                  </Button>
                </Box>

                <ButtonLink variant="text" fullWidth to={links.home}>
                  Go Back
                </ButtonLink>
              </Box>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ServicesMobile;
