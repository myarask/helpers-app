import React from 'react';
import DeviceSwitch from 'components/DeviceSwitch';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';
import LoginTablet from './LoginTablet';

class Login extends React.Component {
  constructor(props) {
    if (props.isLoggedIn) {
      props.history.push('/');
    }

    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      onChange: this.onChange.bind(this),
      onSubmit: this.onSubmit.bind(this),
    };
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.setAppState({ isLoggedIn: true }, this.props.history.push('/'));
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
