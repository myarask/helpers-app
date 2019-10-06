import React from 'react';
import axios from 'axios';
import Page from 'components/Page';
import DeviceSwitch from 'components/DeviceSwitch';
import { SESSIONS } from 'constants/apis';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';
import LoginTablet from './LoginTablet';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      hasIncorrectCredentials: false,
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      onChange: this.onChange.bind(this),
      onSubmit: this.onSubmit.bind(this),
    };
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      [name]: value,
      hasIncorrectCredentials: name === 'password' ? false : prevState.hasIncorrectCredentials,
    }));
  }

  onSubmit(e) {
    e.preventDefault();

    const options = {
      auth: {
        username: this.state.email,
        password: this.state.password,
      },
    };

    this.setState({ isLoading: true });

    axios
      .post(SESSIONS, {}, options)
      .then(resp => this.props.setAppState({ ...resp.data, isLoggedIn: true }, () => this.props.history.push('/')))
      .catch(() => this.setState({ password: '', hasIncorrectCredentials: true, isLoading: false }));
  }

  render() {
    return (
      <Page isFull>
        <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
          <LoginMobile />
          <LoginTablet />
          <LoginDesktop />
        </DeviceSwitch>
      </Page>
    );
  }
}

export default Login;
