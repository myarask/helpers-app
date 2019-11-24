import React from 'react';
import services from 'constants/services';
import axios from 'utils/axios';
import { REQUESTERS_ID_CLIENTS } from 'constants/apis';
import AppContext from 'contexts/app';
import { DeviceSwitch } from 'components';
import ServicesDesktop from './ServicesDesktop';
import ServicesMobile from './ServicesMobile';
import ServicesTablet from './ServicesTablet';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      clientId: '',
      clients: [],
      notes: '',
      serviceIds: [],
      services,
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      toggleServiceId: this.toggleServiceId.bind(this),
    };
  }

  componentDidMount() {
    axios
      .get(REQUESTERS_ID_CLIENTS(this.props.context.requesterId))
      .then(resp => this.setState({ clients: resp.data }));
  }

  toggleServiceId = id => {
    this.setState(({ serviceIds }) => ({
      serviceIds: serviceIds.includes(id) ? serviceIds.filter(x => x !== id) : [...serviceIds, id],
    }));
  };

  render() {
    return (
      <DeviceSwitch {...this.props} {...this.state}>
        <ServicesMobile />
        <ServicesTablet />
        <ServicesDesktop />
      </DeviceSwitch>
    );
  }
}

export default props => (
  <AppContext.Consumer>{context => <Services context={context} {...props} />}</AppContext.Consumer>
);
