import React from 'react';
import { Card, CardHeader, Avatar, ButtonBase } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

const RequestClientSelected = props => (
  <Card square>
    <ButtonBase onClick={props.onClick} style={{ width: '100%' }}>
      <ChevronLeft color="primary" />
      <CardHeader
        avatar={<Avatar src={props.src}>{props.name.charAt(0)}</Avatar>}
        title={`Helping ${props.name}`}
        style={{ width: '100%', textAlign: 'left' }}
      />
    </ButtonBase>
  </Card>
);

export default RequestClientSelected;
