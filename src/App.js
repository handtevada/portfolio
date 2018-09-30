import React, { Component } from 'react';
import { Terminal } from './component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>
          Keerati's Profile
        </div>
        <div>
          <Terminal />
        </div>
      </div>
    );
  }
}

export default App;
