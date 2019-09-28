import React from 'react';
import ContentSwitch from 'components/ContentSwitch';
import Activity from 'assets/services/Activity.svg';
import Cleaning from 'assets/services/Cleaning.svg';
import Companionship from 'assets/services/Companionship.svg';
import Cooking from 'assets/services/Cooking.svg';
import DriverCompanion from 'assets/services/DriverCompanion.svg';
import Grooming from 'assets/services/Grooming.svg';
import HelpingAndMobility from 'assets/services/HelpingAndMobility.svg';
import Hygiene from 'assets/services/Hygiene.svg';
import Request1 from './Request1';
import Request2 from './Request2';

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
      services: [
        {
          id: 'service_1',
          name: 'Driver Companion',
          src: DriverCompanion,
        },
        {
          id: 'service_2',
          name: 'Hygiene',
          src: Hygiene,
        },
        {
          id: 'service_3',
          name: 'Helping & Mobility',
          src: HelpingAndMobility,
        },
        {
          id: 'service_4',
          name: 'Cleaning',
          src: Cleaning,
        },
        {
          id: 'service_5',
          name: 'Grooming',
          src: Grooming,
        },
        {
          id: 'service_6',
          name: 'Companionship',
          src: Companionship,
        },
        {
          id: 'service_7',
          name: 'Cooking',
          src: Cooking,
        },
        {
          id: 'service_8',
          name: 'Activity',
          src: Activity,
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
        <Request1 />
        <Request2 />
      </ContentSwitch>
    );
  }
}

export default Request;
