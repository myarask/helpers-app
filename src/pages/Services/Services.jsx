import React from 'react';
import services from 'constants/services';
import { DeviceSwitch, ContentSwitch } from 'components';
import Services0 from './Services0';
import Services1 from './Services1';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
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
      serviceIds: [],
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
      <ContentSwitch {...this.props} {...this.state} {...this.funcs}>
        <Services0 />
        <Services1 />
      </ContentSwitch>
    );
  }
}

export default Services;
