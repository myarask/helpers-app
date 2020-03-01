import React, { useContext, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { useParams, useHistory, generatePath } from 'react-router-dom';
import links from 'constants/links';
import { JobContext, AppContext } from 'contexts';
import { acceptJob } from 'services';
import { MobileJobServices, MobileJobProfile } from 'components';

const JobHelperOpen = () => {
  const job = useContext(JobContext);
  const history = useHistory();
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { helperId, setAppState } = useContext(AppContext);

  const onAccept = async () => {
    setIsSubmitting(true);
    await acceptJob(id, helperId);
    setAppState(prev => ({
      ...prev,
      activeJobId: id,
    }));

    const nextURL = generatePath(links.jobHelperReserved, { id });
    history.push(nextURL);
  };

  const onBackClick = () => history.push(links.home);

  return (
    <>
      <MobileJobServices services={job.services} />
      {job.notes && <MobileJobProfile notes={job.notes} />}

      <Box m={2}>
        <Button fullWidth onClick={onAccept} disabled={isSubmitting}>
          Accept
        </Button>

        <Button fullWidth variant="text" onClick={onBackClick}>
          Go Back
        </Button>
      </Box>
    </>
  );
};

export default JobHelperOpen;
