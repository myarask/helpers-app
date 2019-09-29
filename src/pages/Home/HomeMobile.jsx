import React from 'react';
import Belt from 'components/Belt';
import HomeCard from './_HomeCard';

const HomeMobile = props => (
  <Belt style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-around' }}>
    <div>
      <HomeCard title="Request Help" onClick={props.onRequestClick} />
      {/* <HomeCard title="Placeholder" />
      <HomeCard title="Placeholder" /> */}
    </div>
  </Belt>
);

export default HomeMobile;
