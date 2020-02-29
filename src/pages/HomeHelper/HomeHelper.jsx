import React, { useState, useEffect } from 'react';
import axios from 'utils/axios';
import services from 'constants/services';
import { JOBS, JOBS_ID } from 'constants/apis';
import { CircularProgress } from '@material-ui/core';
import HomeHelperMobile from './HomeHelperMobile';

const HomeHelper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const usePosition = position => {
      setCoordinates(position.coords);
    };

    const errorHandler = err => {
      if (err.code === 1) {
        alert('Error: Access is denied!');
      } else if (err.code === 2) {
        alert('Error: Position is unavailable!');
      }
    };

    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      const options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(usePosition, errorHandler, options);
    } else {
      alert('Your browser does not support geolocation!');
    }
  }, []);

  useEffect(() => {
    if (!coordinates) return;

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
          statuses: 'open',
          lng: coordinates.longitude,
          lat: coordinates.latitude,
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
  }, [coordinates]);

  if (isLoading) return <CircularProgress />;

  return <HomeHelperMobile jobs={jobs} />;
};

export default HomeHelper;
