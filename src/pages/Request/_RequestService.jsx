import React from 'react';
import { withTheme } from '@material-ui/styles';
import { Card, ButtonBase, Typography } from '@material-ui/core';
import { Img, Belt } from 'components';

const RequestService = props => (
  <Card square>
    <ButtonBase onClick={props.onClick} style={{ width: '100%', height: '82px' }}>
      <Belt>
        <div style={{ width: 'calc(50px + 2rem)', height: 'calc(50px + 2rem)' }}>
          <Img src={props.src} alt={props.name} style={{ width: '50px', margin: '1rem' }} />
        </div>

        <Typography style={{ width: 'calc(100% - 50px - 1rem)', margin: '1rem' }}>{props.name}</Typography>
      </Belt>

      {/* <CardContent> */}
      {/* <Typography style={{ position: 'absolute', left: 0, bottom: '10px', width: '100%' }}>{props.name}</Typography> */}
      {/* </CardContent> */}
    </ButtonBase>
  </Card>
);

export default withTheme(RequestService);
