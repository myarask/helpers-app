import React, { useContext, useState } from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import { useParams, useHistory, generatePath } from 'react-router-dom';
import links from 'constants/links';
import { JobContext } from 'contexts';
import { finishTasks } from 'services';
import { MobileJobServices, MobileClientDetails, MobileJobProfile } from 'components';

const JobHelperInProgress = () => {
  const job = useContext(JobContext);
  const history = useHistory();
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapShown, setIsMapShown] = useState(false);

  const onFinish = async () => {
    setIsSubmitting(true);
    await finishTasks(id);

    const nextURL = generatePath(links.jobHelperReviewing, { id });
    history.push(nextURL);
  };

  return (
    <>
      <Box p={2} style={{ background: '#F4F5FA' }}>
        <Button fullWidth onClick={onFinish} disabled={isSubmitting}>
          Check Out
        </Button>
      </Box>

      <MobileClientDetails {...job} isMapShown={isMapShown} setIsMapShown={setIsMapShown} />
      <Divider />
      <MobileJobServices services={job.services} />
      <MobileJobProfile notes={job.notes} client={job.client} />
    </>
  );
};

export default JobHelperInProgress;
