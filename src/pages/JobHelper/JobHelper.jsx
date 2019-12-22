import React, { useState, useEffect, useContext } from 'react';
import axios from 'utils/axios';
import { DeviceSwitch } from 'components';
import { CircularProgress } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { JOBS_ID, JOB_REVIEWS } from 'constants/apis';
import links from 'constants/links';
import { AppContext } from 'contexts';
import JobHelperDesktop from './JobHelperDesktop';
import JobHelperMobile from './JobHelperMobile';
import JobHelperTablet from './JobHelperTablet';

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
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(JOBS_ID(id));

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
    const status = 'reserved';
    const payload = { status, helperId };
    await axios.patch(JOBS_ID(id), payload);
    setAppState(prev => ({
      ...prev,
      activeJobId: id,
    }));
    setIndex(getIndex(status));
    setIsSubmitting(false);
  };

  const onStart = async () => {
    setIsSubmitting(true);
    const status = 'in_progress';
    const payload = { status };
    await axios.patch(JOBS_ID(id), payload);
    setIndex(getIndex(status));
    setIsSubmitting(false);
  };

  const onFinish = async () => {
    setIsSubmitting(true);
    const status = 'reviewing';
    const payload = { status: 'reviewing' };
    await axios.patch(JOBS_ID(id), payload);
    setIndex(getIndex(status));
    setIsSubmitting(false);
  };

  const onReview = async () => {
    setIsSubmitting(true);
    const status = 'complete';
    setAppState(prev => ({
      ...prev,
      activeJobId: null,
    }));
    const payload = { status };
    const review = {
      comments: comments || null,
      starRating,
      jobId: Number(id),
    };
    await Promise.all([axios.patch(JOBS_ID(id), payload), axios.post(JOB_REVIEWS, review)]);
    setIndex(getIndex(status));
    setIsSubmitting(false);
  };

  return (
    <DeviceSwitch
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
      comments={comments}
      setComments={setComments}
    >
      <JobHelperMobile />
      <JobHelperTablet />
      <JobHelperDesktop />
    </DeviceSwitch>
  );
};

export default JobHelper;
