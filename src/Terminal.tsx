import React from "react";
import { ReactTerminal, TerminalContext } from "react-terminal";

import { commands as commandList } from "./constants/commands";

const Terminal = () => {
  const terminalRef = React.useRef<HTMLDivElement>(null);
  const { setBufferedContent, setTemporaryContent } =
    React.useContext(TerminalContext);
  const prompt = "portfolio $ ";

  React.useEffect(() => {
    // Auto focus terminal input when component mounts
    const timer = setTimeout(() => {
      const terminalInput = document.querySelector(
        ".terminal-input"
      ) as HTMLInputElement;
      if (terminalInput) {
        terminalInput.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const commands = {
    help: (
      <span>
        {commandList.map((cmd) => (
          <div key={cmd.alias}>
            <strong>{cmd.alias}</strong> - {cmd.description}
          </div>
        ))}
        <strong>clear</strong> - clears the console. <br />
      </span>
    ),
    intro: commandList[0].result,
    Intro: commandList[0].result,
    edu: commandList[1].result,
    Edu: commandList[1].result,
    lang: commandList[2].result,
    Lang: commandList[2].result,
    strong: commandList[3].result,
    Strong: commandList[3].result,
    prog: commandList[4].result,
    Prog: commandList[4].result,
    hob: commandList[5].result,
    Hob: commandList[5].result,
    exp: commandList[6].result,
    Exp: commandList[6].result,
    contact: commandList[7].result,
    Contact: commandList[7].result,
    clear: () => {
      setBufferedContent([]);
      setTemporaryContent("");
    },
  };

  const welcomeMessage = (
    <span>
      Keerati's Portfolio Terminal. <br />
      Type "help" for all available commands. <br />
      <br />
    </span>
  );

  return (
    <div ref={terminalRef}>
      <ReactTerminal
        prompt={prompt}
        themes={{
          "custom-theme": {
            themeBGColor: "#272B36",
            themeToolbarColor: "#4c5063ff",
            themeColor: "#559efeff",
            themePromptColor: "#DBDBDB",
          },
        }}
        theme="custom-theme"
        welcomeMessage={welcomeMessage}
        commands={commands}
        defaultHandler={(command: string, commandArguments: string[]) => {
          return `${command} passed on to default handler with arguments ${commandArguments}`;
        }}
      />
    </div>
  );
};

Terminal.displayName = "Terminal";

export default Terminal;
