import React from 'react';
import { ContentSwitch, Page, NavBar } from 'components';
import Request0 from './Request0';
import Request1 from './Request1';

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      clientIndex: 0,
      clients: [
        {
          name: 'Grandma',
          lastVisit: 'September 14, 2019',
          src: 'https://picsum.photos/200',
        },
        {
          name: 'Grandpa',
          lastVisit: 'October 24, 2019',
          src: 'https://picsum.photos/200',
        },
      ],
      serviceIndex: null,
    };

    this.funcs = {
      setPageState: this.setState.bind(this),
      onChange: this.onChange.bind(this),
    };
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onBackClick = () => {
    switch (this.state.index) {
      case 0:
        return this.props.history.push('/');
      default:
        return this.setState({ index: 0 });
    }
  };

  render() {
    return (
      <>
        <NavBar {...this.props} onBackClick={this.onBackClick} />
        <Page>
          <ContentSwitch {...this.props} {...this.state} {...this.funcs}>
            <Request0 />
            <Request1 />
          </ContentSwitch>
        </Page>
      </>
    );
  }
}

export default Request;
