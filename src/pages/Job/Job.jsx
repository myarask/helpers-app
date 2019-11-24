import React, { useState, useEffect } from 'react';
import AppContext from 'contexts/app';
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
  const [services, setServices] = useState([]);
  const [client, setClient] = useState({});
  const [notes, setNotes] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const job = await axios.get(JOBS_ID(id)).then(resp => resp.data);

      setServices(job.services);
      setClient(job.client);
      setNotes(job.notes);
      setStatus(job.status);
      setIsLoading(false);
    }

    fetchData();
  }, [id]);

  if (isLoading) return <CircularProgress />;

  const fees = services.map(service => Number(service.flatFee)).reduce((acc, fee) => acc + fee, 0);
  const taxes = fees * 0.13;
  const total = fees + taxes;

  const onBackClick = () => {
    const settings = {
      notes: encodeURI(notes),
      serviceIds: encodeURI(services.map(service => service.serviceId).join(',')),
      clientId: encodeURI(client.id),
    };

    const searchParams = Object.keys(settings)
      .map(key => `${key}=${settings[key]}`)
      .join('&');

    const link = `${links.services}?${searchParams}`;

    history.push(link);
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
      services={services}
      client={client}
      notes={notes}
      status={status}
      taxes={taxes.toFixed(2)}
      total={total.toFixed(2)}
      onBackClick={onBackClick}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    >
      <JobMobile />
      <JobTablet />
      <JobDesktop />
    </DeviceSwitch>
  );
};

export default props => <AppContext.Consumer>{context => <Job context={context} {...props} />}</AppContext.Consumer>;
