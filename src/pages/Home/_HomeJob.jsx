import React from 'react';
import { ButtonBase, Paper, Box, Typography, CircularProgress } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { Belt } from 'components';

const HomeJob = props => {
  if (props.isLoading) return <CircularProgress />;

  return (
    <Paper square>
      <ButtonBase style={{ width: '100%' }}>
        <Box p={2} style={{ width: '100%' }}>
          <Belt>
            <Box>Job {props.id}</Box>
            <Box display="flex" style={{ alignItems: 'center' }}>
              <Box>
                <Typography align="right">Fee</Typography>
                <Typography align="right">{props.status}</Typography>
              </Box>
              <ChevronRight />
            </Box>
          </Belt>
        </Box>
      </ButtonBase>
    </Paper>
  );
};

export default HomeJob;
