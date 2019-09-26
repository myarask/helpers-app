import React from 'react';
import { Card, CardMedia, CardContent, ButtonBase, Typography } from '@material-ui/core';

const HomeService = props => (
  <Card square>
    <ButtonBase onClick={props.onClick} style={{ width: '100%', height: '100px' }}>
      <CardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
      </CardContent>
    </ButtonBase>
  </Card>
);

export default HomeService;
