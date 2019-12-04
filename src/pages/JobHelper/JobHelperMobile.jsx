import React from 'react';
import { Box, Button, IconButton, Paper, Typography } from '@material-ui/core';
import { NavBar, NavLogo, HelpingIcon } from 'components';
import { ChevronLeft } from '@material-ui/icons';
import JobService from './_JobHelperService';

const JobHelperMobile = props => (
  <>
    <NavBar>
      <IconButton onClick={props.onBackClick}>
        <ChevronLeft style={{ color: 'white' }} />
      </IconButton>
      <NavLogo />
      <HelpingIcon />
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
    {props.notes && (
      <Box m={2}>
        <Paper>
          <Box p={2}>
            <Typography gutterBottom variant="h3">
              Notes to Helpers
            </Typography>
            <Typography>{props.notes}</Typography>
          </Box>
        </Paper>
      </Box>
    )}

    <Box m={2}>
      {props.status === 'draft' && (
        <Button fullWidth onClick={props.onSubmit} disabled={props.isSubmitting}>
          Find me a Helper
        </Button>
      )}

      <Button fullWidth onClick={props.onAccept} disabled={props.isSubmitting}>
        Accept
      </Button>

      <Button fullWidth variant="text" onClick={props.onBackClick}>
        Go Back
      </Button>
    </Box>
  </>
);

export default JobHelperMobile;
