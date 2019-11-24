import React, { useEffect, useState } from 'react';
import AppContext from 'contexts/app';
import axios from 'utils/axios';
import { DeviceSwitch } from 'components';
import { JOBS, JOBS_ID } from 'constants/apis';
import { CircularProgress } from '@material-ui/core';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';
import HomeTablet from './HomeTablet';

const Home = props => {
  const { requesterId } = props.context;
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
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

      async function fetchJobDetails(jobId, i) {
        const job = await axios.get(JOBS_ID(jobId)).then(resp => resp.data);

        setJobs(j => [
          ...j.slice(0, i),
          {
            ...j[i],
            ...job,
            isLoading: false,
          },
          ...j.slice(i + 1),
        ]);
      }

      jobData.map(({ id }) => id).map(fetchJobDetails);
    }

    fetchData();
  }, [requesterId]);

  if (isLoading) return <CircularProgress />;

  return (
    <DeviceSwitch jobs={jobs}>
      <HomeMobile />
      <HomeTablet />
      <HomeDesktop />
    </DeviceSwitch>
  );
};

export default props => <AppContext.Consumer>{context => <Home context={context} {...props} />}</AppContext.Consumer>;
