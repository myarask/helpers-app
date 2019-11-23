import React from 'react';
import { Box, Button, Divider, IconButton, Paper, Typography } from '@material-ui/core';
import { NavBar, Belt, ButtonLink, IconButtonLink } from 'components';
import { ChevronLeft } from '@material-ui/icons';
import links from 'constants/links';
import JobService from './_JobService';

const JobMobile = props => (
  <>
    <NavBar {...props}>
      <IconButtonLink to={links.services}>
        <ChevronLeft style={{ color: 'white' }} />
      </IconButtonLink>
      <Typography variant="h1" style={{ color: 'white' }}>
        Review Order Details
      </Typography>
      <IconButton style={{ visibility: 'hidden' }}>
        <ChevronLeft />
      </IconButton>
    </NavBar>
    <Box m={2}>
      <Typography gutterBottom variant="h2">
        Services required today:
      </Typography>
    </Box>
    <Box m={2}>
      {props.services.map(service => (
        <JobService key={service.id} {...service} />
      ))}
    </Box>
    <Box m={2}>
      <Paper>
        <Box p={2}>
          <Typography gutterBottom variant="h3">
            Patient
          </Typography>
          <Typography gutterBottom>{[props.client.firstName, props.client.lastName].join(' ')}</Typography>
          {props.notes && (
            <>
              <Typography gutterBottom variant="h3">
                Notes to Helpers
              </Typography>
              <Typography>{props.notes}</Typography>
            </>
          )}
        </Box>
      </Paper>
    </Box>

    <Box m={2}>
      <Divider />
      <Box py={2}>
        <Belt>
          <Typography>HST / Taxes</Typography>
          <Typography>
            <b>${props.taxes}</b>
          </Typography>
        </Belt>
        <Belt>
          <Typography>Total</Typography>
          <Typography>
            <b>CDN ${props.total}</b>
          </Typography>
        </Belt>
      </Box>
      <Divider />
    </Box>
    <Box my={1}>
      <Typography align="center">Confirm Order by selecting &quot;Find me a Helper&quot;</Typography>
    </Box>
    <Box m={2}>
      <Box mb={1}>
        <Button fullWidth onClick={() => props.setPageState({ index: 1 })}>
          Find me a Helper
        </Button>
      </Box>

      <ButtonLink variant="text" fullWidth to={links.services}>
        Go Back
      </ButtonLink>
    </Box>
  </>
);

export default JobMobile;
