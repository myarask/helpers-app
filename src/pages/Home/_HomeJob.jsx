import React from 'react';
import { ButtonBase, Paper, Box, Typography, CircularProgress } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { Belt } from 'components';
import links from 'constants/links';

const HomeJob = props => {
  const history = useHistory();

  if (props.isLoading) return <CircularProgress />;

  const onClick = () => history.push(links.job.replace(':id', props.id));

  return (
    <Paper square>
      <ButtonBase style={{ width: '100%' }} onClick={onClick}>
        <Box p={2} style={{ width: '100%' }}>
          <Belt>
            <Box>Job {props.id}</Box>
            <Box display="flex" style={{ alignItems: 'center' }}>
              <Box>
                <Typography align="right">{props.feesAfterTaxes}</Typography>
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
