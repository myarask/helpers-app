import React from 'react';
import { Card, CardContent, ButtonBase, Typography } from '@material-ui/core';

const RequestService = props => (
  <Card square>
    <ButtonBase onClick={props.onClick} style={{ width: '100%', height: '95px' }}>
      <img src={props.src} alt="" style={{ position: 'absolute', width: '50px', top: '10px' }} />
      <CardContent>
        <Typography variant="h5" component="h2" style={{ position: 'absolute', left: 0, bottom: '10px', width: '100%' }}>
          {props.name}
        </Typography>
      </CardContent>
    </ButtonBase>
  </Card>
);

export default RequestService;
