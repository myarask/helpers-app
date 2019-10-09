import React from 'react';
import { DeviceSwitch, Page, NavBar } from 'components';
import { SHIFTS } from 'constants/apis';
import axios from 'axios';
import IncomingDesktop from './IncomingDesktop';
import IncomingMobile from './IncomingMobile';
import IncomingTablet from './IncomingTablet';

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shifts: [],
      isLoading: true,
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      onChange: this.onChange.bind(this),
    };
  }

  componentDidMount() {
    axios
      .get(SHIFTS)
      .then(resp => this.setState({ shifts: resp.data }))
      .catch(() => {})
      .then(() => this.setState({ isLoading: false }));
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onBackClick = () => {
    return this.props.history.push('/');
  };

  render() {
    return (
      <>
        <NavBar {...this.props} onBackClick={this.onBackClick} />
        <Page>
          <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
            <IncomingMobile />
            <IncomingTablet />
            <IncomingDesktop />
          </DeviceSwitch>
        </Page>
      </>
    );
  }
}

export default Request;
