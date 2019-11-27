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
            <Box>
              <Typography variant="h3" align="left" gutterBottom>
                Job {props.id}
              </Typography>
              <Box display="flex" alignItems="center">
                {props.services.map(service => (
                  <Box pr={1}>
                    <img
                      key={service.id}
                      src={service.src}
                      alt={service.name}
                      style={{ maxHeight: '20px', maxWidth: '20px' }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <Typography align="right">{props.feesAfterTaxes}</Typography>
                <Typography align="right" variant="body2">
                  {props.status === 'open' ? 'looking for helper' : props.status}
                </Typography>
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
