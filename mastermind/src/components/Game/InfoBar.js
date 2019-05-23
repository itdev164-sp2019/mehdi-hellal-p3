import React from 'react';
import {Button} from '../Element'
import logo from '../../images/logo.svg';


const InfoBar = () => (
  <div className="info-bar">
    <img src={logo} className="info-bar__logo" alt="logo" />
    <div className="info-bar__text">
      <h1 className="info-bar__title">
        React Mastermind
      </h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div >
    
      <Button >Info</Button>
      <Button >New Game</Button>
      <Button>Exit</Button>
      </div>  
  </div>
);

export default InfoBar;