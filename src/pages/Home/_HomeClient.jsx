import React from 'react';
import { Card, CardHeader, Avatar, ButtonBase } from '@material-ui/core';

const HomeClient = props => (
  <Card square>
    <ButtonBase onClick={props.onClick} style={{ width: '100%' }}>
      <CardHeader
        avatar={<Avatar src={props.src}>R</Avatar>}
        title={props.title}
        subheader={props.subheader}
        fullWidth
        style={{ width: '100%', textAlign: 'left' }}
      />
    </ButtonBase>
  </Card>
);

export default HomeClient;
