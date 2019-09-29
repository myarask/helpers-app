import React from 'react';
import HomeCard from './_HomeCard';

const HomeMobile = props => (
  <div>
    <HomeCard title="Request Help" onClick={props.onRequestClick} />
    <HomeCard title="Placeholder" />
    <HomeCard title="Placeholder" />
  </div>
);

export default HomeMobile;
