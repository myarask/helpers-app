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
      toggleIsAcceptingRequests: this.toggleIsAcceptingRequests.bind(this),
    };
  }

  onChange(e) {
    const { name, value, type } = e.target;
    this.setState(prevState => ({ [name]: type === 'checkbox' ? !prevState[name] : value }));
  }

  toggleIsAcceptingRequests() {
    this.props.setAppState(prevState => ({
      isAcceptingRequests: !prevState.isAcceptingRequests,
    }));
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
