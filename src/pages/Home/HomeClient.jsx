import React from 'react';
import { Card, CardHeader, Avatar, Box, ButtonBase } from '@material-ui/core';

const HomeClient = props => (
  <Box m={2}>
    <Card>
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
  </Box>
);

export default HomeClient;
