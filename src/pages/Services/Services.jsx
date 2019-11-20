import React from 'react';
import services from 'constants/services';
import { ContentSwitch } from 'components';
import axios from 'utils/axios';
import { REQUESTERS_ID_CLIENTS } from 'constants/apis';
import Services0 from './Services0';
import Services1 from './Services1';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      clientId: '',
      clients: [],
      notes: '',
      serviceIds: [1, 3],
      services,
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      toggleServiceId: this.toggleServiceId.bind(this),
    };
  }

  componentDidMount() {
    axios.get(REQUESTERS_ID_CLIENTS(this.props.requesterId)).then(resp => this.setState({ clients: resp.data }));
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
