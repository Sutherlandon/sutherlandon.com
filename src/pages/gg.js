import React from 'react';


import logo_1_0 from '../images/Gg/Gg-1.0.svg';
import logo_1_1 from '../images/Gg/Gg-1.1.svg';

export default () => (
  <React.Fragment>
    <div className="logo-container" style={{ display: 'inline-block' }}>
      <img src={logo_1_0} alt='Gg-1.0'/>
    </div>
    <div className="logo-container" style={{ display: 'inline-block' }}>
      <img src={logo_1_1} alt='Gg-1.1'/>
    </div>
  </React.Fragment>
);
