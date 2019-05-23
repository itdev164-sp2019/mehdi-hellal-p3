import React from 'react';

import logo from '../../images/logo.svg';


const InfoBar = () => (
  <div className="info-bar">
    <img src={logo} className="info-bar__logo" alt="logo" />
    <div className="info-bar__text">
      <h1 className="info-bar__title">
        React Mastermind
      </h1>
      <h2 className="info-bar__subtitle">
        
      </h2>
    </div>
  </div>
);

export default InfoBar;