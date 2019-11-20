import React from 'react';
import services from 'constants/services';
import { DeviceSwitch } from 'components';
import ServicesDesktop from './ServicesDesktop';
import ServicesMobile from './ServicesMobile';
import ServicesTablet from './ServicesTablet';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '',
      clients: [
        {
          clientId: 1,
          firstName: 'Bobby',
          lastName: 'Joe',
        },
        {
          clientId: 2,
          firstName: 'Joey',
          lastName: 'Bob',
        },
      ],
      notes: '',
      serviceIds: [2],
      services,
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      toggleServiceId: this.toggleServiceId.bind(this),
    };
  }

  toggleServiceId = id => {
    this.setState(({ serviceIds }) => ({
      serviceIds: serviceIds.includes(id) ? serviceIds.filter(x => x !== id) : [...serviceIds, id],
    }));
  };

  render() {
    return (
      <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
        <ServicesMobile />
        <ServicesTablet />
        <ServicesDesktop />
      </DeviceSwitch>
    );
  }
}

export default Services;
