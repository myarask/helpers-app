import React, { useState, useEffect } from 'react';
import axios from 'utils/axios';
import services from 'constants/services';
import { JOBS, JOBS_ID } from 'constants/apis';
import { DeviceSwitch } from 'components';
import { CircularProgress } from '@material-ui/core';
import HomeHelperDesktop from './HomeHelperDesktop';
import HomeHelperMobile from './HomeHelperMobile';
import HomeHelperTablet from './HomeHelperTablet';

const HomeHelper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      async function fetchJobDetails(jobId, i) {
        const job = await axios.get(JOBS_ID(jobId)).then(resp => resp.data);

        setJobs(j => [
          ...j.slice(0, i),
          {
            ...j[i],
            ...job,
            services: job.services.map(service => ({
              ...service,
              src: services.find(x => x.id === service.serviceId).srcColor,
            })),
            isLoading: false,
          },
          ...j.slice(i + 1),
        ]);
      }

      const options = {
        params: {
          status: 'open',
        },
      };

      const jobData = await axios
        .get(JOBS, options)
        .then(resp => resp.data.data)
        .then(data => data.map(job => ({ ...job, isLoading: true })));

      setJobs(jobData);
      setIsLoading(false);

      jobData.map(({ id }) => id).map(fetchJobDetails);
    }

    fetchData();
  }, []);

  if (isLoading) return <CircularProgress />;

  return (
    <DeviceSwitch jobs={jobs}>
      <HomeHelperMobile />
      <HomeHelperTablet />
      <HomeHelperDesktop />
    </DeviceSwitch>
  );
};

export default HomeHelper;
