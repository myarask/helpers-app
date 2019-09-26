import React from 'react';
import axios from 'axios';
import { SEARCH } from 'constants/apis';
import ContentSwitch from 'components/ContentSwitch';
import Home1 from './Home1';
import Home2 from './Home2';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      clientIndex: null,
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
        <Home1 {...this.props} {...state} {...this.funcs} />
        <Home2 {...this.props} {...state} {...this.funcs} />
      </ContentSwitch>
    );
  }
}

export default Home;
