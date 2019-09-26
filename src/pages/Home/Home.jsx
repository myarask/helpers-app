import React from 'react';
import ContentSwitch from 'components/ContentSwitch';
import Home1 from './Home1';
import Home2 from './Home2';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
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
      services: [
        {
          id: 'service_1',
          name: 'Driver Companion',
        },
        {
          id: 'service_2',
          name: 'Hygiene',
        },
        {
          id: 'service_3',
          name: 'Helping & Mobility',
        },
        {
          id: 'service_4',
          name: 'Cleaning',
        },
        {
          id: 'service_5',
          name: 'Grooming',
        },
        {
          id: 'service_6',
          name: 'Companionship',
        },
        {
          id: 'service_7',
          name: 'Cooking',
        },
        {
          id: 'service_8',
          name: 'Activity',
        },
      ],
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

  render() {
    return (
      <ContentSwitch {...this.props} {...this.state} {...this.funcs}>
        <Home1 />
        <Home2 />
      </ContentSwitch>
    );
  }
}

export default Home;
