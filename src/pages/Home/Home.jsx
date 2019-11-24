import React, { useEffect, useState } from 'react';
import AppContext from 'contexts/app';
import axios from 'utils/axios';
import { DeviceSwitch } from 'components';
import { JOBS } from 'constants/apis';
import { CircularProgress } from '@material-ui/core';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';
import HomeTablet from './HomeTablet';

const Home = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const options = {
        params: {
          status: 'open',
          requesterId: props.context.requesterId,
        },
      };

      const resp = await axios.get(JOBS, options);

      setJobs(resp.data.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

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
