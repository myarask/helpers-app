import React, { useContext, useState } from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import { useParams, useHistory, generatePath } from 'react-router-dom';
import links from 'constants/links';
import { JobContext } from 'contexts';
import { startJob } from 'services';
import { MobileJobServices, MobileJobProfile, MobileClientDetails } from 'components';

const JobHelperReserved = () => {
  const job = useContext(JobContext);
  const history = useHistory();
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapShown, setIsMapShown] = useState(false);

  const onStart = async () => {
    setIsSubmitting(true);
    await startJob(id);

    const nextURL = generatePath(links.jobHelperInProgress, { id });
    history.push(nextURL);
  };

  return (
    <>
      <Box p={2} style={{ background: '#F4F5FA' }}>
        <Button fullWidth onClick={onStart} disabled={isSubmitting}>
          Check-In to start Helping
        </Button>
      </Box>

      <MobileClientDetails {...job} isMapShown={isMapShown} setIsMapShown={setIsMapShown} />
      <Divider />
      <MobileJobServices services={job.services} />
      <MobileJobProfile notes={job.notes} client={job.client} />
    </>
  );
};

export default JobHelperReserved;
