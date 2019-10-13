import React from 'react';
import { DeviceSwitch, Page, NavBar } from 'components';
import axios from 'helpers/axios';
import { JOBS } from 'constants/apis';
import Desktop from './JobDesktop';
import Mobile from './JobMobile';
import Tablet from './JobTablet';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      job: {},
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      onChange: this.onChange.bind(this),
    };
  }

  componentDidMount() {
    axios
      .get(JOBS)
      .then(resp => this.setState({ job: resp.data }))
      .catch(() => {})
      .then(() => this.setState({ isLoading: false }));
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onBackClick = () => this.props.history.push('/');

  render() {
    return (
      <>
        <NavBar {...this.props} onBackClick={this.onBackClick} />
        <Page>
          <DeviceSwitch {...this.props} {...this.state} {...this.funcs}>
            <Mobile />
            <Tablet />
            <Desktop />
          </DeviceSwitch>
        </Page>
      </>
    );
  }
}

export default Job;
