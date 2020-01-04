import React from 'react';
import { ButtonBase, Paper, Box, Typography, CircularProgress } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { Belt } from 'components';
import links from 'constants/links';

const HomeHelperJob = props => {
  const history = useHistory();

  if (props.isLoading) return <CircularProgress />;

  const title = props.services.length > 1 ? 'Multiple Services' : props.services[0].name;

  const onClick = () => history.push(links.job.replace(':id', props.id));

  return (
    <Paper square>
      <ButtonBase style={{ width: '100%' }} onClick={onClick}>
        <Box p={2} style={{ width: '100%' }}>
          <Belt>
            <div style={{ flexGrow: 1 }}>
              <Belt>
                <Typography variant="h3" align="left" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="h3" align="left" gutterBottom>
                  {props.feesBeforeTaxes}
                </Typography>
              </Belt>
              <Typography align="left">{[props.duration, props.distance].join(' • ')}</Typography>

              <Box display="flex">
                {props.services.map(service => (
                  <img
                    src={service.src}
                    alt={service.name}
                    key={service.id}
                    style={{ maxHeight: '20px', maxWidth: '20px', paddingRight: '10px' }}
                  />
                ))}
                <Typography noWrap>{props.notes}</Typography>
              </Box>
            </div>

            <Box display="flex" alignItems="center">
              <ChevronRight />
            </Box>
          </Belt>
        </Box>
      </ButtonBase>
    </Paper>
  );
};

export default HomeHelperJob;
