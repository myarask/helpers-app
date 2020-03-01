import React, { useContext, useState } from 'react';
import { Button, Typography, Box, TextField, Avatar } from '@material-ui/core';
import { useParams, useHistory, generatePath } from 'react-router-dom';
import links from 'constants/links';
import { JobContext, AppContext } from 'contexts';
import { finishJob, reviewJob } from 'services';
import { Rating } from 'components';

const JobHelperReviewing = () => {
  const job = useContext(JobContext);
  const history = useHistory();
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setAppState } = useContext(AppContext);
  const [starRating, setStarRating] = useState(null);
  const [comment, setComment] = useState('');

  const fullName = [job.client.firstName, job.client.lastName].join(' ');

  const onSubmit = async () => {
    setIsSubmitting(true);
    setAppState(prev => ({
      ...prev,
      activeJobId: null,
    }));

    const review = {
      comment: comment || null,
      starRating,
    };

    await Promise.all([finishJob(id), reviewJob(id, review)]);

    const nextURL = generatePath(links.jobHelperComplete, { id });
    history.push(nextURL);
  };

  return (
    <>
      <Box p={2}>
        <Typography variant="h1" align="center">
          How would you rate your visit today?
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" pb={1}>
        <Avatar style={{ height: 80, width: 80 }}>{fullName.charAt(0)}</Avatar>
      </Box>
      <Typography variant="h2" align="center">
        {fullName}
      </Typography>

      <Rating starRating={starRating} setStarRating={setStarRating} />

      <Box p={2}>
        <TextField
          fullWidth
          rows={3}
          multiline
          label="Comments"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </Box>
      <Box p={2}>
        <Button fullWidth onClick={onSubmit} disabled={isSubmitting}>
          Submit Review
        </Button>
      </Box>
    </>
  );
};

export default JobHelperReviewing;
