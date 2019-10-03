import React from 'react';
import Belt from 'components/Belt';
import { Box, Card, CardContent, Typography, Button, Avatar, ButtonBase } from '@material-ui/core';

const RequestClient = props => (
  <Box m={1}>
    <Card square>
      {/* <ButtonBase onClick={props.onClick} style={{ width: '100%' }}>
      <CardHeader
        avatar={<Avatar src={props.src}>{props.name.charAt(0)}</Avatar>}
        title={props.name}
        subheader={`Last Visit: ${props.lastVisit}`}
        style={{ width: '100%', textAlign: 'left' }}
      />
    </ButtonBase> */}
      <CardContent>
        <Belt>
          <Typography>{props.name}</Typography>
          <Button variant="contained" color="primary" onClick={props.onClick}>
            Help
          </Button>
        </Belt>
      </CardContent>
    </Card>
  </Box>
);

export default RequestClient;
