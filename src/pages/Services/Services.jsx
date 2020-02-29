import React, { useState, useEffect, useContext } from 'react';
import services from 'constants/services';
import links from 'constants/links';
import axios from 'utils/axios';
import { JOBS, JOB_SERVICES, REQUESTERS_ID_CLIENTS } from 'constants/apis';
import { AppContext } from 'contexts';
import { useHistory, useLocation } from 'react-router-dom';
import ServicesMobile from './ServicesMobile';

const Services = () => {
  const query = new URLSearchParams(useLocation().search);
  const { requesterId } = useContext(AppContext);

  const rawClientId = query.get('clientId');
  const initialClientId = rawClientId ? Number(rawClientId) : '';
  const initialNotes = query.get('notes') || '';
  const rawServiceIds = query.get('serviceIds') || '';
  const initialServiceIds = rawServiceIds ? rawServiceIds.split(',').map(x => Number(x)) : [];

  const history = useHistory();
  const [clientId, setClientId] = useState(initialClientId);
  const [busyClientIds, setBusyClientIds] = useState([]);
  const [clients, setClients] = useState([]);
  const [notes, setNotes] = useState(initialNotes);
  const [serviceIds, setServiceIds] = useState(initialServiceIds);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const options = {
      params: {
        statuses: 'open,reserved,in_progress,reviewing',
        requesterId,
      },
    };

    axios.get(REQUESTERS_ID_CLIENTS(requesterId)).then(resp => setClients(resp.data));
    axios
      .get(JOBS, options)
      .then(resp => resp.data.data.map(x => x.clientId))
      .then(clientIds => setBusyClientIds(clientIds));
  }, [requesterId]);

  const toggleServiceId = id => {
    const newServiceIds = serviceIds.includes(id) ? serviceIds.filter(x => x !== id) : [...serviceIds, id];

    setServiceIds(newServiceIds);
  };

  const onSubmit = async () => {
    setIsSubmitting(true);

    const payload = {
      clientId,
      requesterId,
      notes,
    };

    const job = await axios.post(JOBS, payload).then(resp => resp.data);
    const jobId = job.id;

    await Promise.all(serviceIds.map(serviceId => axios.post(JOB_SERVICES, { jobId, serviceId })));

    history.push(links.job.replace(':id', jobId));
  };

  return (
    <ServicesMobile
      clientId={clientId}
      clients={clients}
      busyClientIds={busyClientIds}
      notes={notes}
      serviceIds={serviceIds}
      services={services}
      setClientId={setClientId}
      setNotes={setNotes}
      setServiceIds={setServiceIds}
      toggleServiceId={toggleServiceId}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    />
  );
};

export default Services;
