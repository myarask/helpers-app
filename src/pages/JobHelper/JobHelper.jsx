import React, { useState, useEffect, useContext } from 'react';
import axios from 'utils/axios';
import { DeviceSwitch } from 'components';
import { CircularProgress } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { JOBS_ID } from 'constants/apis';
import links from 'constants/links';
import { AppContext } from 'contexts';
import JobHelperDesktop from './JobHelperDesktop';
import JobHelperMobile from './JobHelperMobile';
import JobHelperTablet from './JobHelperTablet';
import { getIndex } from './utils';

const JobHelper = () => {
  const { helperId, setAppState } = useContext(AppContext);
  const history = useHistory();
  const { id } = useParams();
  const [index, setIndex] = useState();
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
    const payload = { status: 'reserved', helperId };
    await axios.patch(JOBS_ID(id), payload);
    setAppState(prev => ({
      ...prev,
      activeJobId: id,
    }));
    setIsSubmitting(false);
  };

  const onStart = async () => {
    setIsSubmitting(true);
    const payload = { status: 'in_progress' };
    await axios.patch(JOBS_ID(id), payload);
    setIsSubmitting(false);
  };

  return (
    <DeviceSwitch
      {...job}
      onBackClick={onBackClick}
      onAccept={onAccept}
      onStart={onStart}
      isSubmitting={isSubmitting}
      index={index}
    >
      <JobHelperMobile />
      <JobHelperTablet />
      <JobHelperDesktop />
    </DeviceSwitch>
  );
};

export default JobHelper;
