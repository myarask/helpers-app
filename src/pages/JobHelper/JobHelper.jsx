import React, { useState, useEffect, useContext } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import links from 'constants/links';
import { AppContext } from 'contexts';
import { startJob, finishTasks, reviewJob, finishJob, acceptJob, getJob } from 'services';
import JobHelperMobile from './JobHelperMobile';

const getIndex = status => {
  switch (status) {
    case 'draft':
      return 0;
    case 'cancelled':
      return 1;
    case 'open':
      return 2;
    case 'reserved':
      return 3;
    case 'in_progress':
      return 4;
    case 'reviewing':
      return 5;
    case 'complete':
      return 6;
    default:
      return 0; // Unauthorized
  }
};

const JobHelper = () => {
  const { helperId, setAppState } = useContext(AppContext);
  const history = useHistory();
  const { id } = useParams();
  const [index, setIndex] = useState();
  const [starRating, setStarRating] = useState(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapShown, setIsMapShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getJob(id);

        setIndex(getIndex(data.status));
        setJob(data);
      } catch {
        setIndex(0);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (isLoading || index === undefined) return <CircularProgress />;

  const onBackClick = () => history.push(links.home);

  const onAccept = async () => {
    setIsSubmitting(true);
    await acceptJob(id, helperId);
    setAppState(prev => ({
      ...prev,
      activeJobId: id,
    }));
    setIndex(getIndex('reserved'));
    setIsSubmitting(false);
  };

  const onStart = async () => {
    setIsSubmitting(true);
    await startJob(id);
    setIndex(getIndex('in_progress'));
    setIsSubmitting(false);
  };

  const onFinish = async () => {
    setIsSubmitting(true);
    await finishTasks(id);
    setIndex(getIndex('reviewing'));
    setIsSubmitting(false);
  };

  const onReview = async () => {
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
    setIndex(getIndex('complete'));
    setIsSubmitting(false);
  };

  return (
    <JobHelperMobile
      {...job}
      onBackClick={onBackClick}
      onAccept={onAccept}
      onStart={onStart}
      onFinish={onFinish}
      onReview={onReview}
      isSubmitting={isSubmitting}
      index={index}
      starRating={starRating}
      setStarRating={setStarRating}
      comment={comment}
      setComment={setComment}
      isMapShown={isMapShown}
      setIsMapShown={setIsMapShown}
    />
  );
};

export default JobHelper;
