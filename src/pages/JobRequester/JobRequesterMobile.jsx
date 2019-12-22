import React from 'react';
import { Box, Button, Divider, IconButton, Typography } from '@material-ui/core';
import { NavBar, Belt, MobileJobServices, MobileJobProfile } from 'components';
import { ChevronLeft } from '@material-ui/icons';

const JobRequesterMobile = props => (
  <>
    <NavBar padRight>
      <IconButton onClick={props.onBackClick}>
        <ChevronLeft style={{ color: 'white' }} />
      </IconButton>
      <Typography variant="h1" style={{ color: 'white' }}>
        Order Details
      </Typography>
    </NavBar>
    <MobileJobServices services={props.services} />
    <MobileJobProfile notes={props.notes} client={props.client} />

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
    {props.status === 'draft' && (
      <Box my={1}>
        <Typography align="center">Confirm the order by pressing</Typography>
        <Typography align="center">&quot;Find me a Helper&quot;</Typography>
      </Box>
    )}
    <Box m={2}>
      {props.status === 'draft' && (
        <Button fullWidth onClick={props.onSubmit} disabled={props.isSubmitting}>
          Find me a Helper
        </Button>
      )}
      {props.status === 'open' && (
        <Button fullWidth variant="text" onClick={props.onCancel} disabled={props.isSubmitting}>
          Cancel this Job
        </Button>
      )}

      <Button fullWidth variant="text" onClick={props.onBackClick}>
        Go Back
      </Button>
    </Box>
  </>
);

export default JobRequesterMobile;
