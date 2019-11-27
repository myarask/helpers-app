import React, { useState, useEffect } from 'react';
import services from 'constants/services';
import links from 'constants/links';
import axios from 'utils/axios';
import { JOBS, JOB_SERVICES, REQUESTERS_ID_CLIENTS } from 'constants/apis';
import { AppContext } from 'contexts';
import { useHistory, useLocation } from 'react-router-dom';
import { DeviceSwitch } from 'components';
import ServicesDesktop from './ServicesDesktop';
import ServicesMobile from './ServicesMobile';
import ServicesTablet from './ServicesTablet';

const Services = props => {
  const query = new URLSearchParams(useLocation().search);
  const { requesterId } = props.context;

  const rawClientId = query.get('clientId');
  const initialClientId = rawClientId ? Number(rawClientId) : '';
  const initialNotes = query.get('notes') || '';
  const rawServiceIds = query.get('serviceIds') || '';
  const initialServiceIds = rawServiceIds ? rawServiceIds.split(',').map(x => Number(x)) : [];

  const history = useHistory();
  const [clientId, setClientId] = useState(initialClientId);
  const [clients, setClients] = useState([]);
  const [notes, setNotes] = useState(initialNotes);
  const [serviceIds, setServiceIds] = useState(initialServiceIds);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(REQUESTERS_ID_CLIENTS(requesterId)).then(resp => resp.data);

      setClients(data);
    }

    fetchData();
  }, [requesterId]);

  const toggleServiceId = id => {
    const newServiceIds = serviceIds.includes(id) ? serviceIds.filter(x => x !== id) : [...serviceIds, id];

    setServiceIds(newServiceIds);
  };

  const onSubmit = async () => {
    setIsSubmitting(true);

    const payload = {
      clientId,
      requesterId: props.context.requesterId,
      notes,
    };

    const job = await axios.post(JOBS, payload).then(resp => resp.data);
    const jobId = job.id;

    await Promise.all(serviceIds.map(serviceId => axios.post(JOB_SERVICES, { jobId, serviceId })));

    history.push(links.job.replace(':id', jobId));
  };

  return (
    <DeviceSwitch
      clientId={clientId}
      clients={clients}
      notes={notes}
      serviceIds={serviceIds}
      services={services}
      setClientId={setClientId}
      setNotes={setNotes}
      setServiceIds={setServiceIds}
      toggleServiceId={toggleServiceId}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    >
      <ServicesMobile />
      <ServicesTablet />
      <ServicesDesktop />
    </DeviceSwitch>
  );
};

export default props => (
  <AppContext.Consumer>{context => <Services context={context} {...props} />}</AppContext.Consumer>
);
