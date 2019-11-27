import React, { useEffect, useState } from 'react';
import { AppContext } from 'contexts';
import axios from 'utils/axios';
import services from 'constants/services';
import { DeviceSwitch } from 'components';
import { JOBS, JOBS_ID } from 'constants/apis';
import { CircularProgress } from '@material-ui/core';
import HomeRequesterDesktop from './HomeRequesterDesktop';
import HomeRequesterMobile from './HomeRequesterMobile';
import HomeRequesterTablet from './HomeRequesterTablet';

const HomeRequester = props => {
  const { requesterId } = props.context;
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
          requesterId,
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
  }, [requesterId]);

  if (isLoading) return <CircularProgress />;

  return (
    <DeviceSwitch jobs={jobs}>
      <HomeRequesterMobile />
      <HomeRequesterTablet />
      <HomeRequesterDesktop />
    </DeviceSwitch>
  );
};

export default props => (
  <AppContext.Consumer>{context => <HomeRequester context={context} {...props} />}</AppContext.Consumer>
);
