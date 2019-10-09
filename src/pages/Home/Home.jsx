import React from 'react';
import { DeviceSwitch, Page, NavBar } from 'components';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';
import HomeTablet from './HomeTablet';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.funcs = {
      setPageState: this.setState.bind(this),
      onChange: this.onChange.bind(this),
      onSubmitClick: () => props.history.push('/requests/new'),
      onMonitorClick: () => props.history.push('/requests/mine'),
      onIncomingClick: () => props.history.push('/requests/incoming'),
      onReviewClick: () => props.history.push('/requests/active'),
    };
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <NavBar {...this.props} />
        <Page>
          <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
            <HomeMobile />
            <HomeTablet />
            <HomeDesktop />
          </DeviceSwitch>
        </Page>
      </>
    );
  }
}

export default Home;
