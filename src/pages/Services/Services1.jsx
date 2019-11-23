import React from 'react';
import { DeviceSwitch } from 'components';
import Services1Desktop from './Services1Desktop';
import Services1Mobile from './Services1Mobile';
import Services1Tablet from './Services1Tablet';

const Services1 = props => {
  const selectedServices = props.services.filter(service => props.serviceIds.includes(service.id));
  const fees = selectedServices.map(service => service.flatFee).reduce((acc, fee) => acc + fee, 0);
  const taxes = fees * 0.13;
  const total = fees + taxes;

  return (
    <DeviceSwitch
      {...props}
      client={props.clients.find(x => x.clientId === props.clientId)}
      selectedServices={selectedServices}
      fees={fees.toFixed(2)}
      taxes={taxes.toFixed(2)}
      total={total.toFixed(2)}
    >
      <Services1Mobile />
      <Services1Tablet />
      <Services1Desktop />
    </DeviceSwitch>
  );
};

export default Services1;
