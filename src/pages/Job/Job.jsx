import React, { useState, useEffect } from 'react';
import axios from 'utils/axios';
import { DeviceSwitch } from 'components';
import { CircularProgress } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { JOBS, JOBS_ID } from 'constants/apis';
import links from 'constants/links';
import JobDesktop from './JobDesktop';
import JobMobile from './JobMobile';
import JobTablet from './JobTablet';

const Job = () => {
  const history = useHistory();
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState({});

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(JOBS_ID(id));

      setJob(resp.data);
      setIsLoading(false);
    }

    fetchData();
  }, [id]);

  if (isLoading) return <CircularProgress />;

  const onBackClick = () => {
    if (job.status === 'open') {
      return history.push(links.home);
    }

    const settings = {
      notes: encodeURI(job.notes),
      serviceIds: encodeURI(job.services.map(service => service.serviceId).join(',')),
      clientId: encodeURI(job.client.id),
    };

    const searchParams = Object.keys(settings)
      .map(key => `${key}=${settings[key]}`)
      .join('&');

    const link = `${links.services}?${searchParams}`;

    return history.push(link);
  };

  const onCancel = () => {
    setIsSubmitting(true);
    const payload = { status: 'cancelled' };
    const options = { params: { id } };

    axios.patch(JOBS, payload, options).then(() => history.push(links.home));
  };

  const onSubmit = async () => {
    setIsSubmitting(true);

    const payload = { status: 'open' };
    const options = { params: { id } };

    await axios.patch(JOBS, payload, options);
    history.push(links.home);
  };

  return (
    <DeviceSwitch
      {...job}
      onBackClick={onBackClick}
      onSubmit={onSubmit}
      onCancel={onCancel}
      isSubmitting={isSubmitting}
    >
      <JobMobile />
      <JobTablet />
      <JobDesktop />
    </DeviceSwitch>
  );
};

export default Job;
