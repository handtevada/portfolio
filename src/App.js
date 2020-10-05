import React, { Component } from 'react';
import { Terminal } from './component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: '',
    };
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='title'>Keerati's Profile</div>
          <div>
            <Terminal command={this.state.command} />
          </div>
          <div className='tags-section'>
            <div className='tags-title'>{'>'}_ COMMAND LIST</div>
            <ul className='tags'>
              <li>
                <a href='#intro'>Introduce Myself (intro)</a>
              </li>
              <li>
                <a href='#edu'>Education (edu)</a>
              </li>
              <li>
                <a href='#lang'>Language (lang)</a>
              </li>
              <li>
                <a href='#stskill'>Strong Skill (stskill)</a>
              </li>
              <li>
                <a href='#pskill'>Programming Skill (pskill)</a>
              </li>
              <li>
                <a href='#sskill'>Soft Skill (sskill)</a>
              </li>
              {/* <li><a>Awards (awards)</a></li> */}
              <li>
                <a href='#exp'>Experience (exp)</a>
              </li>
              <li>
                <a href='#contact'>Contact (contact)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-section'>
          © 2018 Keerati | <a href='https://github.com/handtevada/portfolio'>Github</a> |{' '}
          <a href='https://medium.com/@directorys/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-portfolio-web-app-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B9%8B%E0%B9%86-%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C-8c82175a71bb'>
            Blog
          </a>
        </div>
      </div>
    );
  }
}

export default App;
