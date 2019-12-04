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

const JobHelper = () => {
  const { helperId } = useContext(AppContext);
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

  const onAccept = async () => {
    setIsSubmitting(true);
    const payload = { status: 'reserved', helperId };
    await axios.patch(JOBS_ID(id), payload);
    history.push(links.home);
  };

  return (
    <DeviceSwitch {...job} onBackClick={onBackClick} onAccept={onAccept} isSubmitting={isSubmitting}>
      <JobHelperMobile />
      <JobHelperTablet />
      <JobHelperDesktop />
    </DeviceSwitch>
  );
};

export default JobHelper;
