import React from 'react';
import DeviceSwitch from 'components/DeviceSwitch';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';
import LoginTablet from './LoginTablet';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      onChange: this.onChange.bind(this),
    };
  }

  componentDidMount() {
    this.fetchResults();
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
