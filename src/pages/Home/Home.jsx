import React from 'react';
import DeviceSwitch from 'components/DeviceSwitch';
import Page from 'components/Page';
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
      onRequestClick: () => this.props.history.push('/service-request'),
    };
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Page>
        <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
          <HomeMobile />
          <HomeTablet />
          <HomeDesktop />
        </DeviceSwitch>
      </Page>
    );
  }
}

export default Home;
