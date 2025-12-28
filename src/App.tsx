import Terminal from "./Terminal";

import "./App.css";

import { commands } from "./constants/commands";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Keerati's Profile</h1>
      </header>

      <Terminal />

      <div className="command-list">
        <div className="command-list-header">&gt; COMMAND_LIST</div>
        <div className="command-buttons">
          {commands.map((cmd) => (
            <button key={cmd.alias} className="command-btn">
              {cmd.name} ({cmd.alias})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
