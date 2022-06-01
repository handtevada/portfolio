import React from 'react';

// Style
import './App.css';

// Components
import Terminal from 'components/Terminal';
import Footer from 'components/Footer';

// Constants
import { commandList } from 'constants/command';

function App() {
  return (
    <>
      <div className='container'>
        <div className='title'>Keerati's Profile</div>
        <Terminal />
        <div className='tags-section'>
          <div className='tags-title'>{'>'}_ COMMAND LIST</div>
          <ul className='tags'>
            {commandList.map((command) => {
              return (
                <li key={command.href}>
                  <a href={command.href}>{command.desc}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
