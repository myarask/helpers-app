import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import links from 'constants/links';

const JobHelperMobile6Complete = props => {
  const history = useHistory();
  history.push(links.home);

  const onClick = () => history.push(links.home);

  return (
    <>
      <Typography>This job is done. Go Home.</Typography>
      <Button onClick={onClick}>Go Home</Button>
    </>
  );
};

export default JobHelperMobile6Complete;
