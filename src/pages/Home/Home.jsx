import React from 'react';
import axios from 'axios';
import { SEARCH } from 'constants/apis';
import DeviceSwitch from 'components/DeviceSwitch';
import ContentSwitch from 'components/ContentSwitch';
import HomeDesktop1 from './HomeDesktop1';
import HomeMobile1 from './HomeMobile1';
import HomeTablet1 from './HomeTablet1';
import HomeDesktop2 from './HomeDesktop2';
import HomeMobile2 from './HomeMobile2';
import HomeTablet2 from './HomeTablet2';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      search: '',
      results: [],
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

  fetchResults() {
    const body = {
      Text: '',
      From: 0,
    };
    axios
      .post(SEARCH, body)
      .then(resp =>
        this.setState(prevState => ({ results: [...prevState.results, resp.data.results] }))
      );
  }

  render() {
    const { index, ...state } = this.state;

    return (
      <ContentSwitch index={index}>
        <DeviceSwitch {...this.props} {...state} {...this.funcs}>
          <HomeMobile1 />
          <HomeTablet1 />
          <HomeDesktop1 />
        </DeviceSwitch>
        <DeviceSwitch {...this.props} {...state} {...this.funcs}>
          <HomeMobile2 />
          <HomeTablet2 />
          <HomeDesktop2 />
        </DeviceSwitch>
      </ContentSwitch>
    );
  }
}

export default Home;
