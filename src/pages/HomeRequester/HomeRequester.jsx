import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from 'contexts';
import axios from 'utils/axios';
import services from 'constants/services';
import { JOBS, JOBS_ID } from 'constants/apis';
import { CircularProgress } from '@material-ui/core';
import HomeRequesterMobile from './HomeRequesterMobile';

const HomeRequester = () => {
  const { requesterId } = useContext(AppContext);
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
          statuses: 'open,reserved,in_progress,reviewing',
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

  return <HomeRequesterMobile jobs={jobs} />;
};

export default HomeRequester;
