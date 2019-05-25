import React from 'react';
import {Button} from '../Element'
import logo from '../../images/logo.svg';
import Dialog from '../User/Dialog'





const InfoBar = (props) => (
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
    
      <Dialog/>
    </div> 
    <Button onClick={props.newGame}>Reset</Button>
    
  </div>
  
);


  

export default InfoBar;