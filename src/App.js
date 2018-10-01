import React, { Component } from 'react';
import { Terminal } from './component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: ""
    }
  }

  setCommand = () => {
    this.setState({ command: "introduce" });
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='title'>
            Keerati's Profile
        </div>
          <div>
            <Terminal command={this.state.command} />
          </div>
          <div className="tags-section">
            <ul className="tags">

              <li><a>Introduce Yourself</a></li>
              <li><a>Education</a></li>
              <li><a>Language</a></li>
              <li><a>Strong Skill</a></li>
              <li><a>Programmig Skill</a></li>
              <li><a>Soft Skill</a></li>
              <li><a onClick={this.setCommand}>Awards</a></li>
              <li><a onClick={this.setCommand}>Experience</a></li>
              <li><a onClick={this.setCommand}>Contract</a></li>
            </ul>
          </div>

        </div>
        <div className="footer-section">
          © 2018 Keerati
        </div>
      </div>
    );
  }
}

export default App;
