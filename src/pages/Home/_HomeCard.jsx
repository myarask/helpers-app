import React from 'react';
import { Card, CardContent, ButtonBase, Typography } from '@material-ui/core';

const HomeCard = props => (
  <Card square>
    <ButtonBase onClick={props.onClick} style={{ width: '100%' }}>
      <CardContent>
        <Typography>{props.title}</Typography>
      </CardContent>
    </ButtonBase>
  </Card>
);

export default HomeCard;
