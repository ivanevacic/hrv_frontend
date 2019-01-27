import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ConsumeApi from './ConsumeApi';
import LoginComponent from './LoginComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LoginComponent />
        <ConsumeApi />
      </div>
    );
  }
}

export default App;
