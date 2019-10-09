import React from 'react';
import { Grid } from '@material-ui/core';
import RequestClientSelected from './_RequestClientSelected';
import RequestService from './_RequestService';

const Request1Mobile = props => (
  <>
    <RequestClientSelected {...props} />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 40px)',
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <Grid container style={{ flex: 0 }}>
        {props.services.map(service => (
          <Grid item xs={12}>
            <RequestService {...service} key={service.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  </>
);

export default Request1Mobile;
