import React from 'react';
import { Box, Button, Divider, IconButton, Paper, Typography } from '@material-ui/core';
import { NavBar, Belt } from 'components';
import { ChevronLeft } from '@material-ui/icons';
import JobService from './_JobHelperService';

const JobHelperMobile = props => (
  <>
    <NavBar padRight>
      <IconButton onClick={props.onBackClick}>
        <ChevronLeft style={{ color: 'white' }} />
      </IconButton>
      <Typography variant="h1" style={{ color: 'white' }}>
        Review Order Details
      </Typography>
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
            <b>{props.taxes}</b>
          </Typography>
        </Belt>
        <Belt>
          <Typography>Total</Typography>
          <Typography>
            <b>CDN {props.feesAfterTaxes}</b>
          </Typography>
        </Belt>
      </Box>
      <Divider />
    </Box>
    <Box my={1}>
      <Typography align="center">Confirm Order by selecting &quot;Find me a Helper&quot;</Typography>
    </Box>
    <Box m={2}>
      {props.status === 'draft' && (
        <Button fullWidth onClick={props.onSubmit} disabled={props.isSubmitting}>
          Find me a Helper
        </Button>
      )}
      {props.status === 'open' && (
        <Button fullWidth variant="text" onClick={props.onCancel} disabled={props.isSubmitting}>
          Cancel
        </Button>
      )}

      <Button fullWidth variant="text" onClick={props.onBackClick}>
        Go Back
      </Button>
    </Box>
  </>
);

export default JobHelperMobile;
