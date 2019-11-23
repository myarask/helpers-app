import React, { useState, useEffect } from 'react';
import AppContext from 'contexts/app';
import axios from 'utils/axios';
import { DeviceSwitch } from 'components';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { JOBS_ID } from 'constants/apis';
import JobDesktop from './JobDesktop';
import JobMobile from './JobMobile';
import JobTablet from './JobTablet';

const Job = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [client, setClient] = useState({});
  const [notes, setNotes] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(async () => {
    const job = await axios.get(JOBS_ID(id)).then(resp => resp.data);

    setServices(job.services);
    setClient(job.client);
    setNotes(job.notes);
    setStatus(job.status);
    setIsLoading(false);
  }, []);

  if (isLoading) return <CircularProgress />;

  const fees = services.map(service => Number(service.flatFee)).reduce((acc, fee) => acc + fee, 0);
  const taxes = fees * 0.13;
  const total = fees + taxes;

  return (
    <DeviceSwitch
      services={services}
      client={client}
      notes={notes}
      status={status}
      taxes={taxes.toFixed(2)}
      total={total.toFixed(2)}
    >
      <JobMobile />
      <JobTablet />
      <JobDesktop />
    </DeviceSwitch>
  );
};

export default props => <AppContext.Consumer>{context => <Job context={context} {...props} />}</AppContext.Consumer>;
