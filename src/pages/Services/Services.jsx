import React, { useState, useEffect } from 'react';
import services from 'constants/services';
import axios from 'utils/axios';
import { REQUESTERS_ID_CLIENTS } from 'constants/apis';
import AppContext from 'contexts/app';
import { DeviceSwitch } from 'components';
import ServicesDesktop from './ServicesDesktop';
import ServicesMobile from './ServicesMobile';
import ServicesTablet from './ServicesTablet';

const Services = props => {
  const [clientId, setClientId] = useState('');
  const [clients, setClients] = useState([]);
  const [notes, setNotes] = useState('');
  const [serviceIds, setServiceIds] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(REQUESTERS_ID_CLIENTS(props.context.requesterId)).then(resp => resp.data);

      setClients(data);
    }

    fetchData();
  }, []);

  const toggleServiceId = id => {
    const newServiceIds = serviceIds.includes(id) ? serviceIds.filter(x => x !== id) : [...serviceIds, id];

    setServiceIds(newServiceIds);
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
