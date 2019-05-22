import React, { Component } from 'react';
import './MyApp.css';

import TheGame from '../Game/TheGame';
import InfoBar from '../Game/InfoBar';

class MyApp extends Component {
  render() {
    return (
      <div className="App">
        
        <TheGame />
      </div>
    );
  }
}

export default MyApp;