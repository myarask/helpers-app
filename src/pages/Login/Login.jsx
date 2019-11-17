import React from 'react';
import { DeviceSwitch } from 'components';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';
import LoginTablet from './LoginTablet';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.funcs = {
      setPageState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
        <LoginMobile />
        <LoginTablet />
        <LoginDesktop />
      </DeviceSwitch>
    );
  }
}

export default Login;
