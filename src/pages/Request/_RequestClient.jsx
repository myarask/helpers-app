import React from 'react';
import { Card, CardHeader, Avatar, ButtonBase } from '@material-ui/core';

const RequestClient = props => (
  <Card square>
    <ButtonBase onClick={props.onClick} style={{ width: '100%' }}>
      <CardHeader
        avatar={<Avatar src={props.src}>{props.name.charAt(0)}</Avatar>}
        title={props.name}
        subheader={`Last Visit: ${props.lastVisit}`}
        style={{ width: '100%', textAlign: 'left' }}
      />
    </ButtonBase>
  </Card>
);

export default RequestClient;
