import React from 'react';
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
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
    };
  }

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
