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
            <div className="tags-title">
              >_ COMMAND LIST
            </div>
            <ul className="tags">
              <li><a>Introduce Myself (intro)</a></li>
              <li><a>Education (edu)</a></li>
              <li><a>Language (lang)</a></li>
              <li><a>Strong Skill (stskill)</a></li>
              <li><a>Programmig Skill (pskill)</a></li>
              <li><a>Soft Skill (sskill)</a></li>
              {/* <li><a>Awards (awards)</a></li> */}
              <li><a>Experience (exp)</a></li>
              <li><a>Contact (contact)</a></li>
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
